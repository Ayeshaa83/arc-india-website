import Link from "next/link";
import MemberCard from "./MemberCard";
import { members } from "@/lib/data";

export default function MembersShowcase() {
  const featured = members.find((m) => m.featured) ?? members[0];
  const rest = members.filter((m) => m !== featured).slice(0, 8);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <div className="pattern-dots absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
              Our Members
            </span>
            <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
              Trusted by India&apos;s leading Asset Reconstruction Companies
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Every RBI-registered ARC represented under one association, working
              together on stressed asset resolution.
            </p>
          </div>
          <Link
            href="/members"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-sm transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-white"
          >
            View Full Directory
            <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:grid-rows-2">
          <MemberCard member={featured} spotlight />
          {rest.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
