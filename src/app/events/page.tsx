import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContentNotice from "@/components/ContentNotice";
import PromoBanner from "@/components/PromoBanner";
import { events } from "@/lib/data";

export const metadata: Metadata = { title: "Events" };

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EventsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Events"
        title="Conferences, seminars & association gatherings"
        subtitle="Where member ARCs, regulators and industry stakeholders come together."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <ContentNotice>
          Event details below are illustrative — please share the actual events
          calendar and descriptions to finalise this page.
        </ContentNotice>

        <div className="space-y-5">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="flex shrink-0 flex-col items-center justify-center rounded-lg bg-navy-900 px-5 py-3 text-white sm:w-28">
                <span className="text-2xl font-bold leading-none">
                  {new Date(event.date).getDate()}
                </span>
                <span className="mt-1 text-xs uppercase tracking-wide text-slate-300">
                  {new Date(event.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-900">{event.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-red-600">
                  {event.location} · {formatDate(event.date)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PromoBanner
        eyebrow="Stay Informed"
        title="Never miss an association event"
        description="Subscribe to our newsletters for the latest event announcements and industry updates."
        cta={{ label: "View Updates", href: "/updates" }}
        variant="navy"
      />
    </>
  );
}
