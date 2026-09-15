"use client";

import { useEffect } from "react";
import PersonPhoto from "./PersonPhoto";
import type { OfficeBearer } from "@/lib/data";

export default function OfficeBearerModal({
  bearer,
  onClose,
}: {
  bearer: OfficeBearer | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!bearer) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [bearer, onClose]);

  if (!bearer) return null;

  const paragraphs = bearer.bio
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${bearer.name} — full profile`}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-navy-900"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex flex-col gap-6 sm:flex-row">
          <PersonPhoto
            src={bearer.photo}
            name={bearer.name}
            className="h-56 w-44 shrink-0 self-center rounded-xl bg-slate-100 sm:self-start"
          />
          <div className="min-w-0">
            <span className="inline-flex rounded-full bg-red-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
              {bearer.designation}
            </span>
            <h2 className="mt-3 text-xl font-bold text-navy-900 sm:text-2xl">{bearer.name}</h2>
            <p className="mt-1 text-sm font-medium text-slate-500">{bearer.organisation}</p>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
