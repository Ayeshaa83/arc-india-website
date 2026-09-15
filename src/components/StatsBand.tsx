"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

/**
 * Starts already showing the real `target` (so SSR output and any no-JS
 * or pre-hydration render are correct, never stuck at 0), then — once
 * only, the first time `active` becomes true — replays a 0 -> target
 * count-up over `duration`ms with an ease-out curve.
 */
function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(target);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!active || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    let raf = 0;
    const start = performance.now();
    setValue(0);

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatValue({ value, active }: { value: string; active: boolean }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const count = useCountUp(target, active);

  if (!match) {
    return <div className="text-3xl font-bold text-navy-900 sm:text-4xl">{value}</div>;
  }

  return (
    <div className="text-3xl font-bold text-navy-900 sm:text-4xl">
      {count}
      {match[2]}
    </div>
  );
}

export default function StatsBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <StatValue value={String(stat.compute())} active={active} />
            <div className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-600 sm:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
