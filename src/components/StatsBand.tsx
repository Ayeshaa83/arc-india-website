import { stats, members } from "@/lib/data";

export default function StatsBand() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
        {stats.map((stat) => {
          // Always reflect the real member count rather than a number that
          // can silently go stale as members are added or removed.
          const value = stat.label === "Member ARCs" ? String(members.length) : stat.value;
          return (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-navy-900 sm:text-4xl">{value}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-600 sm:text-sm">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
