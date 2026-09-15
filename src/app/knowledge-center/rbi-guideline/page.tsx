import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContentNotice from "@/components/ContentNotice";
import { updates } from "@/lib/data";

export const metadata: Metadata = { title: "RBI Guideline" };

const guidelines = updates.filter((u) => u.category === "Guideline");

export default function RbiGuidelinePage() {
  return (
    <>
      <PageBanner
        eyebrow="Knowledge Center"
        title="RBI Guideline"
        subtitle="Reserve Bank of India instructions aimed at resolution of stressed assets in the economy."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Knowledge Center", href: "/knowledge-center" },
          { label: "RBI Guideline" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <ContentNotice>
          The list below reflects the guideline documents referenced on the current
          site — please supply the complete, up-to-date set of RBI circulars and PDF
          links to finalise this page.
        </ContentNotice>

        <ul className="space-y-3">
          {guidelines.map((doc) => (
            <li key={doc.title}>
              <a
                href={doc.href}
                className="group flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white px-6 py-5 transition-colors hover:border-navy-300 hover:bg-slate-50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M6 2h6l4 4v12H6V2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                      <path d="M12 2v4h4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-navy-900">{doc.title}</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">PDF</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
