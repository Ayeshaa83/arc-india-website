import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { stampDutyNote } from "@/lib/data";

export const metadata: Metadata = { title: "Knowledge Center" };

const sections = [
  {
    title: "RBI Guideline",
    description:
      "Reserve Bank of India circulars and instructions governing Asset Reconstruction Companies and stressed asset resolution.",
    href: "/knowledge-center/rbi-guideline",
  },
  {
    title: "Acts & Rules",
    description:
      "Relevant legal acts, rules and state-wise stamp duty and registration charges applicable to ARC transactions.",
    href: "/knowledge-center/acts-rules",
  },
];

export default function KnowledgeCenterPage() {
  return (
    <>
      <PageBanner
        eyebrow="Knowledge Center"
        title="Regulatory guidance for the ARC industry"
        subtitle={stampDutyNote}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Knowledge Center" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-10 translate-x-10 rounded-full bg-red-500/10 transition-transform group-hover:scale-150" />
              <h2 className="relative text-xl font-semibold text-navy-900">{section.title}</h2>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
                {section.description}
              </p>
              <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600">
                Explore
                <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
