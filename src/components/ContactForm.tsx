"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: This form is UI-only. Wire it to an email/API service
    // (e.g. Resend, Formspree, or a Next.js API route) before go-live.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600/10 text-red-600">
          <svg className="h-6 w-6" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-navy-900">Thank you</h3>
        <p className="mt-1 text-sm text-slate-600">
          Your enquiry has been noted. The association team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-900">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-navy-900">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors focus:border-navy-600 focus:ring-2 focus:ring-navy-600/20"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-red-900/20 transition-colors hover:bg-red-700"
      >
        Send Message
      </button>
    </form>
  );
}
