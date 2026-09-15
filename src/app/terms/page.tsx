import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContentNotice from "@/components/ContentNotice";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <>
      <PageBanner
        title="Terms & Conditions"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <ContentNotice>
          Placeholder page — please supply the association&apos;s official terms and
          conditions text to replace this content.
        </ContentNotice>
        <p className="text-sm leading-relaxed text-slate-600">
          The content published on this website is for general informational purposes
          only. While every effort is made to keep information current, the Association
          of ARCs in India makes no representations as to its completeness or accuracy.
        </p>
      </section>
    </>
  );
}
