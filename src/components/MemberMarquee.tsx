import { members } from "@/lib/data";

export default function MemberMarquee() {
  const track = [...members, ...members];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
            Our Members
          </span>
          <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl">
            Trusted by India&apos;s leading Asset Reconstruction Companies
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {track.map((member, i) => (
            <div
              key={`${member.name}-${i}`}
              className="flex h-16 w-64 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-center text-xs font-medium text-slate-600 shadow-sm"
            >
              {member.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
