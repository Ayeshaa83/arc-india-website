import Link from "next/link";
import { quickLinks } from "@/lib/data";

export default function QuickLinksGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
          Explore the Association
        </span>
        <h2 className="mt-3 text-balance text-2xl font-bold text-navy-900 sm:text-3xl">
          Everything stakeholders need in one place
        </h2>
        <p className="mt-3 text-slate-600">
          From regulatory guidance to member directories and industry updates — a complete
          resource hub for the ARC ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/10"
          >
            <div className="absolute right-0 top-0 h-20 w-20 -translate-y-8 translate-x-8 rounded-full bg-red-500/10 transition-transform group-hover:scale-150" />
            <h3 className="relative text-lg font-semibold text-navy-900">{link.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
              {link.description}
            </p>
            <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600">
              Learn more
              <svg
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
