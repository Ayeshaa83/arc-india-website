"use client";

import PersonPhoto from "./PersonPhoto";
import useFinePointer from "@/lib/useFinePointer";
import type { OfficeBearer } from "@/lib/data";

/**
 * Compact by default — photo, name and designation only — so many cards
 * are visible at once in the scrolling list.
 *
 * On a fine pointer (mouse/trackpad), hovering scales the card up and
 * reveals the organisation and a bio excerpt in place, via a CSS
 * grid-rows trick (0fr -> 1fr) that animates open smoothly without a
 * fixed height guess; a "View full profile" button opens the complete
 * bio in a modal for the rest.
 *
 * On touch, there's no hover to trigger that reveal, so the whole card
 * is tappable and opens the same modal directly instead.
 */
export default function OfficeBearerCard({
  bearer,
  onViewMore,
}: {
  bearer: OfficeBearer;
  onViewMore: (bearer: OfficeBearer) => void;
}) {
  const isFinePointer = useFinePointer();
  const bioExcerpt = bearer.bio.replace(/\s+/g, " ").trim();

  if (!isFinePointer) {
    return (
      <button
        type="button"
        onClick={() => onViewMore(bearer)}
        className="flex w-full items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-shadow active:shadow-none"
      >
        <PersonPhoto
          src={bearer.photo}
          name={bearer.name}
          className="h-20 w-16 shrink-0 rounded-lg bg-slate-100"
        />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-navy-900">{bearer.name}</h3>
          <p className="truncate text-xs font-semibold uppercase tracking-wide text-red-600">
            {bearer.designation}
          </p>
          <p className="mt-1 text-xs font-medium text-red-600/80">Tap for full profile</p>
        </div>
      </button>
    );
  }

  return (
    <div className="group relative z-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:z-20 hover:scale-[1.03] hover:border-red-200 hover:shadow-xl hover:shadow-navy-900/10">
      <div className="flex items-start gap-5">
        <PersonPhoto
          src={bearer.photo}
          name={bearer.name}
          className="h-28 w-24 shrink-0 rounded-lg bg-slate-100 transition-all duration-300 ease-out group-hover:h-36 group-hover:w-32"
        />
        <div className="min-w-0 flex-1 pt-1">
          <h3 className="truncate text-base font-semibold text-navy-900 transition-all duration-300 group-hover:text-lg">
            {bearer.name}
          </h3>
          <p className="truncate text-xs font-semibold uppercase tracking-wide text-red-600">
            {bearer.designation}
          </p>

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-2 text-xs font-medium text-slate-500">{bearer.organisation}</p>
              <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-slate-600">
                {bioExcerpt}
              </p>
              <button
                type="button"
                onClick={() => onViewMore(bearer)}
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-red-600 transition-colors hover:text-red-700"
              >
                View full profile
                <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
