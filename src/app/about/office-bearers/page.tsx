import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import OfficeBearersShowcase from "@/components/OfficeBearersShowcase";
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

      <OfficeBearersShowcase officeBearers={officeBearers} />
    </>
  );
}
