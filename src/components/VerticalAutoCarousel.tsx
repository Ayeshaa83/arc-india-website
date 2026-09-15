"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import useFinePointer from "@/lib/useFinePointer";

/**
 * A vertically auto-scrolling list that loops seamlessly and can be
 * dragged with the mouse to browse manually (pauses on hover, resumes
 * on mouse leave). On touch/coarse-pointer devices — where drag physics
 * would fight the user's own scroll gesture — it falls back to a plain,
 * natively-scrollable list with no auto-play.
 */
export default function VerticalAutoCarousel<T>({
  items,
  renderItem,
  itemKey,
  height = 620,
  speed = 26,
  gap = 20,
  columns = 1,
}: {
  items: T[];
  renderItem: (item: T) => ReactNode;
  itemKey: (item: T) => string;
  /** Container height in pixels. */
  height?: number;
  /** Auto-scroll speed in pixels per second. */
  speed?: number;
  /** Gap between items in pixels (applies to both rows and columns). */
  gap?: number;
  /** 1 = single column list, 2 = two-column grid on sm+ screens. */
  columns?: 1 | 2;
}) {
  // Literal strings (not built dynamically) so Tailwind's scanner picks
  // them up regardless of which value is passed.
  const trackLayoutClassName =
    columns === 2 ? "grid grid-cols-1 sm:grid-cols-2" : "flex flex-col";
  const isFinePointer = useFinePointer();
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const pausedRef = useRef(false);
  const lastYRef = useRef(0);
  const startYRef = useRef(0);
  const hasMovedRef = useRef(false);
  const halfHeightRef = useRef(0);
  // A real state (not just a ref) so its two transitions per drag gesture
  // (start/end) can disable hover styles via pointer-events — hover would
  // otherwise fire on whatever card the cursor passes over mid-drag.
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isFinePointer) return;
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      halfHeightRef.current = track.scrollHeight / 2;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    let raf = 0;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;
      if (!draggingRef.current && !pausedRef.current && halfHeightRef.current > 0) {
        offsetRef.current += (speed * dt) / 1000;
        if (offsetRef.current >= halfHeightRef.current) {
          offsetRef.current -= halfHeightRef.current;
        }
      }
      track.style.transform = `translateY(${-offsetRef.current}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [isFinePointer, speed]);

  function normalize() {
    const half = halfHeightRef.current;
    if (half > 0) {
      offsetRef.current = ((offsetRef.current % half) + half) % half;
    }
  }

  function onWindowMouseMove(e: MouseEvent) {
    if (!draggingRef.current) return;
    const dy = e.clientY - lastYRef.current;
    lastYRef.current = e.clientY;
    offsetRef.current -= dy;
    normalize();

    // Only now — once the pointer has actually travelled, not on the mere
    // mousedown of a click — do we disable hover/pointer-events on the
    // track. Flipping that on every mousedown broke plain clicks: a click
    // is mousedown+mouseup with no movement between them, and disabling
    // pointer-events on an ancestor between those two events stops the
    // browser from ever firing "click" on the button, since the element
    // under the cursor at mouseup no longer matches the mousedown target.
    if (!hasMovedRef.current && Math.abs(e.clientY - startYRef.current) > 4) {
      hasMovedRef.current = true;
      setIsDragging(true);
    }
  }
  function onWindowMouseUp() {
    draggingRef.current = false;
    hasMovedRef.current = false;
    setIsDragging(false);
    window.removeEventListener("mousemove", onWindowMouseMove);
    window.removeEventListener("mouseup", onWindowMouseUp);
  }
  function onMouseDown(e: React.MouseEvent) {
    draggingRef.current = true;
    lastYRef.current = e.clientY;
    startYRef.current = e.clientY;
    window.addEventListener("mousemove", onWindowMouseMove);
    window.addEventListener("mouseup", onWindowMouseUp);
  }

  if (!isFinePointer) {
    return (
      <div className="overflow-y-auto overscroll-contain" style={{ height }}>
        <div className={trackLayoutClassName} style={{ gap }}>
          {items.map((item) => (
            <div key={itemKey(item)}>{renderItem(item)}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative cursor-grab select-none overflow-x-visible overflow-y-hidden active:cursor-grabbing"
      style={{ height }}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onMouseDown={onMouseDown}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-14 bg-gradient-to-b from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-14 bg-gradient-to-t from-slate-50 to-transparent" />
      <div
        ref={trackRef}
        className={`${trackLayoutClassName} will-change-transform ${isDragging ? "pointer-events-none" : ""}`}
        style={{ gap }}
      >
        {items.map((item) => (
          <div key={`a-${itemKey(item)}`}>{renderItem(item)}</div>
        ))}
        {items.map((item) => (
          <div key={`b-${itemKey(item)}`}>{renderItem(item)}</div>
        ))}
      </div>
    </div>
  );
}
