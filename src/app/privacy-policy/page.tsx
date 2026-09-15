import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContentNotice from "@/components/ContentNotice";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <ContentNotice>
          Placeholder page — please supply the association&apos;s official privacy
          policy text to replace this content.
        </ContentNotice>
        <p className="text-sm leading-relaxed text-slate-600">
          This website does not knowingly collect personal information beyond what is
          voluntarily submitted through the contact form. Details submitted are used
          solely to respond to enquiries and are not shared with third parties.
        </p>
      </section>
    </>
  );
}
