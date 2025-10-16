/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : School overview content section.    │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import { MapPin, UsersRound } from "lucide-react";

import {
  SCHOOL_BADGE_LABEL,
  SCHOOL_CALLOUT_BADGE,
  SCHOOL_CALLOUT_DESCRIPTION,
  SCHOOL_CALLOUT_TITLE,
  SCHOOL_OVERVIEW_DESCRIPTION,
  SCHOOL_OVERVIEW_HIGHLIGHTS,
  SCHOOL_OVERVIEW_TITLE,
} from "@/data/school-overview";

export default function SchoolOverview(): JSX.Element {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFC107]/20 px-4 py-1 text-sm font-semibold text-[#005A9C]">
            <MapPin className="h-4 w-4" /> {SCHOOL_BADGE_LABEL}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#333333] md:text-4xl">{SCHOOL_OVERVIEW_TITLE}</h2>
          <p className="mt-4 text-base text-[#495057] md:text-lg">{SCHOOL_OVERVIEW_DESCRIPTION}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SCHOOL_OVERVIEW_HIGHLIGHTS.map((highlight) => (
            <article
              key={highlight.title}
              className="h-full rounded-xl border border-[#DEE2E6] bg-[#F8F9FA] p-6 text-left shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#005A9C]">{highlight.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#495057]">{highlight.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-[#005A9C] px-6 py-8 text-left text-white md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">{SCHOOL_CALLOUT_TITLE}</h3>
              <p className="mt-2 text-sm md:text-base">{SCHOOL_CALLOUT_DESCRIPTION}</p>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              <UsersRound className="h-5 w-5" /> {SCHOOL_CALLOUT_BADGE}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
