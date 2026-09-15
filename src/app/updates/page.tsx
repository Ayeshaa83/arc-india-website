import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { updates, type DocLink } from "@/lib/data";

export const metadata: Metadata = { title: "Updates" };

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const categoryStyles: Record<DocLink["category"], string> = {
  Newsletter: "bg-navy-900/10 text-navy-900",
  Report: "bg-gold-500/15 text-gold-500",
  Guideline: "bg-red-600/10 text-red-600",
  Performance: "bg-slate-600/10 text-slate-600",
};

export default function UpdatesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Updates"
        title="Newsletters, performance highlights & annual reports"
        subtitle="Stay current with quarterly industry data and association activity."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Updates" }]}
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-3">
          {updates.map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              className="group flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-navy-300 hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M6 2h6l4 4v12H6V2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    <path d="M12 2v4h4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{doc.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{formatDate(doc.date)}</p>
                </div>
              </div>
              <span
                className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[doc.category]}`}
              >
                {doc.category}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
