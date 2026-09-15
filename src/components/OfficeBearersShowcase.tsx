"use client";

import { useState } from "react";
import OfficeBearerCard from "./OfficeBearerCard";
import OfficeBearerModal from "./OfficeBearerModal";
import VerticalAutoCarousel from "./VerticalAutoCarousel";
import type { OfficeBearer } from "@/lib/data";

export default function OfficeBearersShowcase({
  officeBearers,
}: {
  officeBearers: OfficeBearer[];
}) {
  const [selected, setSelected] = useState<OfficeBearer | null>(null);

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
          Leadership Team
        </span>
        <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">
          Office Bearers &amp; Managing Committee
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          Hover over a profile for a preview, or view the full profile · drag to browse
        </p>
      </div>

      <VerticalAutoCarousel
        items={officeBearers}
        itemKey={(bearer) => bearer.name}
        renderItem={(bearer) => <OfficeBearerCard bearer={bearer} onViewMore={setSelected} />}
        height={560}
        gap={20}
        columns={2}
      />

      <OfficeBearerModal bearer={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
