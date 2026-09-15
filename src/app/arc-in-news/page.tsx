import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContentNotice from "@/components/ContentNotice";
import { newsArticles } from "@/lib/data";

export const metadata: Metadata = { title: "ARC in News" };

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArcInNewsPage() {
  return (
    <>
      <PageBanner
        eyebrow="ARC in News"
        title="Media coverage & press mentions"
        subtitle="Following the association and the ARC industry across leading publications."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "ARC in News" }]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <ContentNotice>
          Articles listed below are representative placeholders — please share the
          verified press links to finalise this page.
        </ContentNotice>

        <div className="space-y-5">
          {newsArticles.map((article) => (
            <a
              key={article.title}
              href={article.href}
              className="group block rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-navy-300 hover:bg-slate-50"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                {article.source} · {formatDate(article.date)}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-navy-900 group-hover:text-red-600 transition-colors">
                {article.title}
              </h3>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
