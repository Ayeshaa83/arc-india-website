import MemberLogo from "./MemberLogo";
import type { Member } from "@/lib/data";

export default function MemberCard({
  member,
  spotlight = false,
}: {
  member: Member;
  spotlight?: boolean;
}) {
  if (spotlight) {
    return (
      <div className="group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 p-8 text-center shadow-lg shadow-navy-900/20 lg:col-span-2 lg:row-span-2">
        <div className="pattern-dots absolute inset-0 opacity-20" />
        <span className="relative rounded-full bg-red-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
          Flagship Member
        </span>
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/10 p-3 backdrop-blur lg:h-28 lg:w-28">
          <MemberLogo
            src={member.logo}
            name={member.name}
            imgClassName="object-contain"
            fallbackClassName="bg-white/15 text-white text-lg"
          />
        </div>
        <p className="relative text-sm font-semibold leading-snug text-white lg:text-base">
          {member.name}
        </p>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-red-300/60 hover:shadow-lg hover:shadow-navy-900/10">
      {member.featured && (
        <span className="absolute right-3 top-3 rounded-full bg-red-600/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-red-600">
          Flagship
        </span>
      )}
      <div className="flex h-12 w-12 items-center justify-center">
        <MemberLogo
          src={member.logo}
          name={member.name}
          imgClassName="object-contain grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
          fallbackClassName="bg-navy-900 text-white text-xs"
        />
      </div>
      <p className="text-xs font-medium leading-snug text-slate-600">{member.name}</p>
    </div>
  );
}
