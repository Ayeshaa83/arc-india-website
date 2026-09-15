import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import StatsBand from "@/components/StatsBand";
import QuickLinksGrid from "@/components/QuickLinksGrid";
import MemberMarquee from "@/components/MemberMarquee";
import PromoBanner from "@/components/PromoBanner";
import { updates, newsArticles, stampDutyNote } from "@/lib/data";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <StatsBand />
      <QuickLinksGrid />

      {/* RBI / regulatory banner */}
      <PromoBanner
        eyebrow="Regulatory Guidance"
        title="RBI instructions for resolution of stressed assets"
        description={stampDutyNote}
        cta={{ label: "Explore Knowledge Center", href: "/knowledge-center" }}
        variant="navy"
      />

      {/* Updates + News two-column section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                  Latest Updates
                </span>
                <h2 className="mt-2 text-2xl font-bold text-navy-900">
                  Newsletters &amp; Reports
                </h2>
              </div>
              <Link href="/updates" className="text-sm font-semibold text-navy-700 hover:text-red-600 transition-colors">
                View all →
              </Link>
            </div>
            <ul className="space-y-3">
              {updates.slice(0, 5).map((doc) => (
                <li key={doc.title}>
                  <a
                    href={doc.href}
                    className="group flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-navy-300 hover:bg-slate-50"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-navy-900">{doc.title}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {doc.category} · {formatDate(doc.date)}
                      </p>
                    </div>
                    <svg
                      className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-red-600"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                  Media Coverage
                </span>
                <h2 className="mt-2 text-2xl font-bold text-navy-900">ARC in News</h2>
              </div>
              <Link href="/arc-in-news" className="text-sm font-semibold text-navy-700 hover:text-red-600 transition-colors">
                View all →
              </Link>
            </div>
            <ul className="space-y-3">
              {newsArticles.map((article) => (
                <li key={article.title}>
                  <a
                    href={article.href}
                    className="group block rounded-lg border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-navy-300 hover:bg-slate-50"
                  >
                    <p className="text-sm font-medium text-navy-900 group-hover:text-red-600 transition-colors">
                      {article.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {article.source} · {formatDate(article.date)}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <MemberMarquee />

      {/* Closing CTA banner */}
      <PromoBanner
        eyebrow="Get Involved"
        title="Have a question for the Association?"
        description="Reach our Mumbai office for membership, regulatory or media enquiries."
        cta={{ label: "Contact Us", href: "/contact" }}
        variant="red"
      />
    </>
  );
}
