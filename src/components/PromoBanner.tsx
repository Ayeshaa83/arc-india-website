import Link from "next/link";

export default function PromoBanner({
  eyebrow,
  title,
  description,
  cta,
  variant = "red",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  cta: { label: string; href: string };
  variant?: "red" | "navy";
}) {
  const bg =
    variant === "red"
      ? "bg-gradient-to-r from-red-700 via-red-600 to-red-700"
      : "bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900";

  return (
    <section className={`relative overflow-hidden ${bg} py-14`}>
      <div className="pattern-dots absolute inset-0 opacity-20" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <div>
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 text-balance text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          {description && (
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              {description}
            </p>
          )}
        </div>
        <Link
          href={cta.href}
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy-950 shadow-lg transition-transform hover:scale-[1.03]"
        >
          {cta.label}
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
