import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PromoBanner from "@/components/PromoBanner";
import ContentNotice from "@/components/ContentNotice";
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
        <ContentNotice>
          This directory currently includes {members.length} of the association&apos;s
          27 registered members. Add any remaining members to the list in
          src/lib/data.ts and drop their logos into public/images/members/ to
          complete this page.
        </ContentNotice>

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
