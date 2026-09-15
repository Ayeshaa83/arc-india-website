import Link from "next/link";
import MemberLogo from "./MemberLogo";
import { members } from "@/lib/data";

export default function MembersShowcase() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <div className="pattern-dots absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
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

        {/* Plain logo wall — full colour, no per-logo names or borders (the
            Members page carries the names) so the wall itself stays clean
            and the logos read as large and prominent. */}
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14">
            {members.map((member) => (
              <div
                key={member.name}
                title={member.name}
                className={`flex items-center justify-center transition-transform duration-300 ease-out hover:scale-110 ${
                  member.featured
                    ? "h-16 w-32 rounded-xl p-1.5 ring-2 ring-red-500/40 ring-offset-4 ring-offset-white sm:h-20 sm:w-40"
                    : "h-14 w-28 sm:h-16 sm:w-32"
                }`}
              >
                <MemberLogo
                  src={member.logo}
                  name={member.name}
                  imgClassName="object-contain"
                  fallbackClassName="bg-navy-900 text-white text-xs"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
