"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, org } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-navy-950/95 backdrop-blur supports-[backdrop-filter]:bg-navy-950/90 border-b border-white/10">
      {/* Top utility strip */}
      <div className="hidden md:block border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs text-slate-200/80">
          <span>{org.address}</span>
          <div className="flex items-center gap-4">
            <a href={`mailto:${org.email}`} className="hover:text-white transition-colors">
              {org.email}
            </a>
            <span className="h-3 w-px bg-white/20" />
            <a href={`tel:${org.phone}`} className="hover:text-white transition-colors">
              {org.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br from-red-600 to-red-700 text-xl font-bold text-white shadow-lg shadow-red-900/30">
            A
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-white">
              Association of ARCs
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
              in India
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
                {item.children && (
                  <svg
                    className="h-3 w-3 opacity-70"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>

              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full pt-2 min-w-[220px] animate-fade-in">
                  <div className="overflow-hidden rounded-lg border border-white/10 bg-navy-900 shadow-xl shadow-black/40">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-red-900/30 transition-colors hover:bg-red-700"
        >
          Get in Touch
        </Link>

        <button
          type="button"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-navy-950 px-4 pb-4">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-white/5 py-1">
              <Link
                href={item.href}
                className="block py-2.5 text-sm font-medium text-slate-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pb-2 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-1.5 text-sm text-slate-300"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
