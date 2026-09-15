"use client";

import { useEffect, useState } from "react";

function getInitials(name: string) {
  return (
    name
      .replace(/^(Mr\.?|Mrs\.?|Ms\.?|Shri|Smt\.?|Dr\.?)\s+/i, "")
      .trim()
      .split(/\s+/)
      .map((word) => word[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase() || "?"
  );
}

/**
 * A person's photo, shown in full (object-contain, not cropped) inside
 * whatever box shape `className` describes. Falls back to a lettermark
 * avatar if no photo file exists yet or it fails to load — verified via a
 * detached Image() in an effect rather than <img onError>, since a fast
 * local 404 can fire the native error before React finishes hydrating and
 * attaches its listener. This means photos can be dropped into
 * public/images/office-bearers/ at any time with no code changes.
 */
export default function PersonPhoto({
  src,
  name,
  className = "",
}: {
  src?: string;
  name: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;
    let cancelled = false;
    const img = new window.Image();
    img.onload = () => {
      if (!cancelled) setLoaded(true);
    };
    img.onerror = () => {
      if (!cancelled) setLoaded(false);
    };
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  if (!src || !loaded) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950 font-bold text-white ${className}`}
        role="img"
        aria-label={name}
      >
        <span className="text-2xl sm:text-3xl">{getInitials(name)}</span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        className="h-full w-full object-contain transition-all duration-500 ease-out"
      />
    </div>
  );
}
