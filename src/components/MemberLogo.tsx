"use client";

import { useEffect, useState } from "react";

function getBadgeLabel(name: string) {
  // Prefer an existing short-form acronym in parentheses, e.g. "National
  // Asset Reconstruction Company Ltd (NARCL)" -> "NARCL" — more
  // recognisable than initials derived from the full name.
  const acronym = name.match(/\(([A-Z]{2,6})\)/);
  if (acronym) return acronym[1];

  return (
    name
      .replace(/\(.*?\)/g, "")
      .trim()
      .split(/\s+/)
      .map((word) => word[0])
      .filter(Boolean)
      .slice(0, 3)
      .join("")
      .toUpperCase() || "?"
  );
}

/**
 * Renders a member's logo image, falling back to a lettermark badge if the
 * logo file hasn't been added yet (or fails to load).
 *
 * The load is verified with a detached Image() in an effect, rather than an
 * <img onError>, because for local files that 404 almost instantly, the
 * browser can fire the native error event before React finishes hydrating
 * and attaches its listener — the error is missed and a broken-image icon
 * is left on screen. Checking in an effect guarantees the check runs after
 * mount, so the fallback is reliable regardless of load speed. This also
 * means logo files can be dropped into public/images/members/ at any time
 * with no code changes — the UI upgrades itself automatically.
 */
export default function MemberLogo({
  src,
  name,
  imgClassName = "",
  fallbackClassName = "",
}: {
  src?: string;
  name: string;
  imgClassName?: string;
  fallbackClassName?: string;
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
        className={`flex h-full w-full items-center justify-center rounded-md font-bold ${fallbackClassName}`}
        role="img"
        aria-label={name}
      >
        {getBadgeLabel(name)}
      </div>
    );
  }

  return (
    // Plain <img>, not next/image: logos are small, arbitrary-sized brand
    // assets where a simple verified-load swap is simpler than fixed
    // width/height or remote-pattern config.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={name} className={`h-full w-full ${imgClassName}`} />
  );
}
