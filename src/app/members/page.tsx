import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PromoBanner from "@/components/PromoBanner";
import MemberDirectory from "@/components/MemberDirectory";
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
        <MemberDirectory members={members} />
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
