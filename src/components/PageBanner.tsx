import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-20 sm:py-24">
      <div className="pattern-grid absolute inset-0 opacity-60" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-navy-500/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {breadcrumbs && (
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-slate-300">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-slate-500">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-600/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-400">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
