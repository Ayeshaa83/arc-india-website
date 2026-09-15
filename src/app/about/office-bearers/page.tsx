import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContentNotice from "@/components/ContentNotice";
import { officeBearers } from "@/lib/data";

export const metadata: Metadata = { title: "Office Bearers" };

export default function OfficeBearersPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="Office Bearers"
        subtitle="The leadership team representing member Asset Reconstruction Companies."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Office Bearers" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <ContentNotice>
          Office bearer names and organisations shown below are placeholders — please
          share the current leadership roster to finalise this page.
        </ContentNotice>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {officeBearers.map((bearer) => (
            <div
              key={bearer.designation}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-lg font-semibold text-white">
                {bearer.designation
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-navy-900">{bearer.name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-red-600">
                {bearer.designation}
              </p>
              <p className="mt-1 text-xs text-slate-500">{bearer.organisation}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
