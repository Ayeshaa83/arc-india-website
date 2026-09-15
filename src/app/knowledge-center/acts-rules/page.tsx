import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContentNotice from "@/components/ContentNotice";

export const metadata: Metadata = { title: "Acts & Rules" };

const acts = [
  "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act)",
  "The Insolvency and Bankruptcy Code, 2016 (IBC)",
  "The Recovery of Debts and Bankruptcy Act, 1993 (RDB Act)",
  "The Indian Stamp Act, 1899",
];

const states = [
  "Maharashtra",
  "Delhi",
  "Karnataka",
  "Tamil Nadu",
  "Gujarat",
  "Uttar Pradesh",
  "West Bengal",
  "Telangana",
  "Rajasthan",
  "Madhya Pradesh",
  "Haryana",
  "Kerala",
];

export default function ActsRulesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Knowledge Center"
        title="Acts & Rules"
        subtitle="Governing legislation and state-wise stamp duty and registration charges applicable to ARC transactions."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Knowledge Center", href: "/knowledge-center" },
          { label: "Acts & Rules" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-xl font-semibold text-navy-900">Key Legislation</h2>
        <ul className="mt-5 space-y-3">
          {acts.map((act) => (
            <li
              key={act}
              className="rounded-lg border border-slate-200 bg-white px-6 py-4 text-sm text-navy-900"
            >
              {act}
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-xl font-semibold text-navy-900">
          Stamp Duty &amp; Registration Charges (State-Wise)
        </h2>
        <ContentNotice>
          The full state-wise stamp duty schedule is maintained as a downloadable
          reference on the current site — please supply the source document so the
          exact rates can be published here.
        </ContentNotice>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {states.map((state) => (
            <div
              key={state}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
            >
              <span className="text-navy-900">{state}</span>
              <span className="text-xs font-medium text-slate-400">View →</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
