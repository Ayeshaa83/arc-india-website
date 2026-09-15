import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import PromoBanner from "@/components/PromoBanner";
import { org } from "@/lib/data";

export const metadata: Metadata = { title: "About Us" };

const links = [
  {
    title: "Mission & Vision",
    description: "The principles and long-term goals guiding the association.",
    href: "/about/mission-vision",
  },
  {
    title: "Office Bearers",
    description: "Meet the leadership team representing member ARCs.",
    href: "/about/office-bearers",
  },
  {
    title: "Committees",
    description: "Specialised working groups driving policy and governance.",
    href: "/about/committees",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="The representative voice of India's Asset Reconstruction Companies"
        subtitle={org.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
              Who We Are
            </span>
            <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
              Reforming the business of securitisation and asset reconstruction
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              The Association of ARCs in India brings together every Asset Reconstruction
              Company registered with the Reserve Bank of India under a single representative
              body. We work with regulators, banks and financial institutions to strengthen
              India&apos;s framework for resolving stressed and non-performing assets, while
              creating measurable value for stakeholders across the ecosystem.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our work spans policy advocacy, regulatory liaison, industry data and performance
              reporting, and knowledge-sharing among member companies through newsletters,
              events and committees.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl lg:h-96">
            <Image
              src="/images/about.jpg"
              alt="Financial district skyline representing India's banking sector"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
              Learn More
            </span>
            <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
              Governance &amp; Leadership
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <h3 className="text-lg font-semibold text-navy-900">{link.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{link.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600">
                  Read more
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PromoBanner
        eyebrow="Membership"
        title="Explore the association's member companies"
        description="View the full directory of RBI-registered Asset Reconstruction Companies."
        cta={{ label: "View Members", href: "/members" }}
        variant="navy"
      />
    </>
  );
}
