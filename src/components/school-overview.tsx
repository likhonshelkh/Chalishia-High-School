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

interface OverviewHighlight {
  readonly title: string;
  readonly description: string;
}

const highlights: OverviewHighlight[] = [
  {
    title: "অবস্থান ও ভৌগোলিক প্রেক্ষাপট",
    description:
      "চলিশিয়া ইউনিয়নের শান্ত গ্রামীণ পরিবেশে অবস্থিত বিদ্যালয়টি নওয়াপাড়া ডাকঘর ও শিল্প এলাকায় নিকটবর্তী হওয়ায় শিক্ষার্থীরা সহজেই আসা-যাওয়া করতে পারে।",
  },
  {
    title: "প্রতিষ্ঠানের স্বীকৃতি",
    description:
      "বিদ্যালয়টি মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোরের অধিভুক্ত এবং এমপিও তালিকাভুক্ত হওয়ায় শিক্ষক-কর্মচারীদের সরকারি বেতন সুবিধা নিশ্চিত।",
  },
  {
    title: "শিক্ষার্থী ও শিক্ষক",
    description:
      "প্রায় ৩০০-৩৫০ শিক্ষার্থী এবং ১৭ জন অভিজ্ঞ শিক্ষক নিয়ে বিদ্যালয়টি পরিচালিত হয়, যা সহনীয় শিক্ষক-শিক্ষার্থী অনুপাত বজায় রাখে।",
  },
];

export default function SchoolOverview(): JSX.Element {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFC107]/20 px-4 py-1 text-sm font-semibold text-[#005A9C]">
            <MapPin className="h-4 w-4" /> চলিশিয়া উচ্চ বিদ্যালয়
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#333333] md:text-4xl">বিদ্যালয়ের পরিচিতি</h2>
          <p className="mt-4 text-base text-[#495057] md:text-lg">
            চলিশিয়া উচ্চ বিদ্যালয় (EIIN 115498) গ্রামীণ Jessore জেলার শিক্ষার্থীদের জন্য প্রতিষ্ঠিত একটি স্বনামধন্য মাধ্যমিক বিদ্যালয়।
            সামাজিক উন্নয়ন, সুশিক্ষা এবং কমিউনিটির অগ্রগতিতে বিদ্যালয়টির অবদান উল্লেখযোগ্য।
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="h-full rounded-xl border border-[#DEE2E6] bg-[#F8F9FA] p-6 text-left shadow-sm">
              <h3 className="text-xl font-semibold text-[#005A9C]">{highlight.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#495057]">{highlight.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-[#005A9C] px-6 py-8 text-left text-white md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">কেন আমাদের বেছে নেবেন</h3>
              <p className="mt-2 text-sm md:text-base">
                অভিজ্ঞ শিক্ষক মণ্ডলী, সরকার অনুমোদিত পাঠক্রম এবং নৈতিক শিক্ষার সমন্বয়ে আমরা শিক্ষার্থীদের সঠিক দিক নির্দেশনা প্রদান করি।
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              <UsersRound className="h-5 w-5" /> সম্প্রদায় ও অভিভাবকদের সক্রিয় অংশগ্রহণ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
