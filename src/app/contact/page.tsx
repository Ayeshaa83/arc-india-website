import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import ContentNotice from "@/components/ContentNotice";
import { org } from "@/lib/data";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact Us"
        title="Get in touch with the Association"
        subtitle="For membership, regulatory or media enquiries, reach our Mumbai office."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-navy-900">Office Address</h2>
            <div className="mt-5 space-y-5">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 18s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10Z" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="10" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
                <p className="text-sm leading-relaxed text-slate-600">{org.address}</p>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M3 5h14v10H3V5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    <path d="M3 5l7 6 7-6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                </span>
                <a href={`mailto:${org.email}`} className="text-sm text-slate-600 hover:text-red-600 transition-colors">
                  {org.email}
                </a>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 3h3l1.5 4-2 1.5a11 11 0 005.5 5.5l1.5-2 4 1.5v3a1 1 0 01-1 1A14 14 0 013 4a1 1 0 011-1Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                </span>
                <a href={`tel:${org.phone}`} className="text-sm text-slate-600 hover:text-red-600 transition-colors">
                  {org.phone}
                </a>
              </div>
            </div>

            <ContentNotice>
              Email, phone and the form below are placeholders — please confirm the
              official contact details and connect the form to an email service before
              go-live.
            </ContentNotice>

            <div className="mt-6 h-64 overflow-hidden rounded-xl border border-slate-200">
              <iframe
                title="Office location map"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Sahar+Plaza+Complex+Andheri+East+Mumbai&output=embed"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold text-navy-900">Send an Enquiry</h2>
            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
