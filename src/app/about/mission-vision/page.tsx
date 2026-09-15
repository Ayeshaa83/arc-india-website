import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = { title: "Mission & Vision" };

export default function MissionVisionPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="Mission & Vision"
        subtitle="The guiding purpose behind the Association of ARCs in India."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Mission & Vision" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
            Our Mission
          </span>
          <p className="mt-4 text-lg leading-relaxed text-navy-900">
            To represent, strengthen and advance the interests of Asset Reconstruction
            Companies registered with the Reserve Bank of India, while reforming the
            business of securitisation and asset reconstruction and creating value for
            all stakeholders.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
            Our Vision
          </span>
          <p className="mt-4 text-lg leading-relaxed text-navy-900">
            To be the trusted, unified voice of India&apos;s ARC industry — driving
            regulatory clarity, operational best practices and sustainable resolution of
            stressed assets across the financial system.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            {
              title: "Advocacy",
              body: "Engaging with RBI and policymakers on matters affecting the ARC industry.",
            },
            {
              title: "Transparency",
              body: "Publishing regular industry performance data and newsletters.",
            },
            {
              title: "Collaboration",
              body: "Fostering knowledge-sharing among member companies and stakeholders.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-base font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
