import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PromoBanner from "@/components/PromoBanner";
import ContentNotice from "@/components/ContentNotice";
import { members } from "@/lib/data";

export const metadata: Metadata = { title: "Members" };

export default function MembersPage() {
  return (
    <>
      <PageBanner
        eyebrow="Members"
        title="RBI-Registered Asset Reconstruction Companies"
        subtitle="A directory of the member companies represented by the Association of ARCs in India."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Members" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <ContentNotice>
          This directory lists {members.length} publicly known ARCs as a working
          example — please share the confirmed list of all 27 member companies and
          their logos to complete this page.
        </ContentNotice>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-sm font-bold text-white">
                {member.name.slice(0, 2).toUpperCase()}
              </span>
              <p className="text-sm font-medium leading-snug text-navy-900">{member.name}</p>
            </div>
          ))}
        </div>
      </section>

      <PromoBanner
        eyebrow="Membership Enquiries"
        title="Is your ARC registered with the RBI?"
        description="Get in touch to learn more about joining the Association of ARCs in India."
        cta={{ label: "Contact Us", href: "/contact" }}
        variant="red"
      />
    </>
  );
}
