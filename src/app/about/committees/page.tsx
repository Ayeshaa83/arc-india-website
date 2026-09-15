import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContentNotice from "@/components/ContentNotice";
import { committees } from "@/lib/data";

export const metadata: Metadata = { title: "Committees" };

export default function CommitteesPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="Committees"
        subtitle="Specialised working groups driving policy, governance and communication."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Committees" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <ContentNotice>
          Committee names and mandates shown below are representative placeholders —
          please share the official committee structure to finalise this page.
        </ContentNotice>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {committees.map((committee, i) => (
            <div
              key={committee.name}
              className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-lg font-bold text-red-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-semibold text-navy-900">{committee.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {committee.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
