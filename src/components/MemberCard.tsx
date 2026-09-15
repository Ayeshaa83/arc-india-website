import MemberLogo from "./MemberLogo";
import type { Member } from "@/lib/data";

/** Used on the Members directory page, where each logo is paired with its
 * company name. The homepage uses MembersShowcase's plain logo wall instead. */
export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="group relative flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-red-300/60 hover:shadow-lg hover:shadow-navy-900/10">
      {member.featured && (
        <span className="absolute right-3 top-3 rounded-full bg-red-600/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-red-600">
          Flagship
        </span>
      )}
      <div className="flex h-16 w-full items-center justify-center sm:h-20">
        <MemberLogo
          src={member.logo}
          name={member.name}
          imgClassName="object-contain"
          fallbackClassName="bg-navy-900 text-white text-sm"
        />
      </div>
      <p className="text-xs font-medium leading-snug text-slate-600">{member.name}</p>
    </div>
  );
}
