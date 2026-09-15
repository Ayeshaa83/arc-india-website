"use client";

import { useMemo, useState } from "react";
import MemberCard from "./MemberCard";
import type { Member } from "@/lib/data";

export default function MemberDirectory({ members }: { members: Member[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return members;
    return members.filter((member) => member.name.toLowerCase().includes(q));
  }, [members, query]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <svg
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search member companies…"
            aria-label="Search member companies"
            className="w-full rounded-md border border-slate-300 py-2.5 pl-10 pr-4 text-sm text-navy-900 outline-none transition-colors focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
          />
        </div>
        <p className="text-sm text-slate-500">
          Showing {filtered.length} of {members.length} members
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-sm text-slate-500">
          No members match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      )}
    </div>
  );
}
