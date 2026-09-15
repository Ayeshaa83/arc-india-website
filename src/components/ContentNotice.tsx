export default function ContentNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-10 flex max-w-7xl items-start gap-3 rounded-lg border border-gold-500/40 bg-gold-500/5 px-5 py-4 text-sm text-slate-600">
      <svg
        className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 6.5V10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="10" cy="13.2" r="0.9" fill="currentColor" />
      </svg>
      <p>{children}</p>
    </div>
  );
}
