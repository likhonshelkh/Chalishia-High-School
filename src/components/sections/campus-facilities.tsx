/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Campus facilities highlight section. │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import { BookOpenCheck, Building2, Trees } from "lucide-react";

import {
  CAMPUS_FACILITIES,
  CAMPUS_SECTION_INTRO,
  CAMPUS_SECTION_TITLE,
} from "@/data/campus-facilities";
import type { FacilityIconKey } from "@/types/content";

const iconMap: Record<FacilityIconKey, JSX.Element> = {
  infrastructure: <Building2 className="h-8 w-8 text-[#005A9C]" />,
  playground: <Trees className="h-8 w-8 text-[#28A745]" />,
  activities: <BookOpenCheck className="h-8 w-8 text-[#FFC107]" />,
};

export default function CampusFacilities(): JSX.Element {
  return (
    <section className="bg-[#F8F9FA] py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#333333] md:text-4xl">{CAMPUS_SECTION_TITLE}</h2>
          <p className="mt-4 text-base text-[#495057] md:text-lg">{CAMPUS_SECTION_INTRO}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CAMPUS_FACILITIES.map((facility) => (
            <article key={facility.title} className="rounded-xl border border-[#DEE2E6] bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-inner">
                {iconMap[facility.icon]}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#005A9C]">{facility.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#495057]">{facility.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
