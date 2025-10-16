/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : School overview copy collections.   │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import type { OverviewHighlight } from "@/types/content";

export const SCHOOL_BADGE_LABEL = "চলিশিয়া উচ্চ বিদ্যালয়" as const;

export const SCHOOL_OVERVIEW_TITLE = "বিদ্যালয়ের পরিচিতি" as const;

export const SCHOOL_OVERVIEW_DESCRIPTION =
  "চলিশিয়া উচ্চ বিদ্যালয় (EIIN 115498) গ্রামীণ Jessore জেলার শিক্ষার্থীদের জন্য প্রতিষ্ঠিত একটি স্বনামধন্য মাধ্যমিক বিদ্যালয়। সামাজিক উন্নয়ন, সুশিক্ষা এবং কমিউনিটির অগ্রগতিতে বিদ্যালয়টির অবদান উল্লেখযোগ্য।" as const;

export const SCHOOL_OVERVIEW_HIGHLIGHTS: readonly OverviewHighlight[] = [
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
] as const;

export const SCHOOL_CALLOUT_TITLE = "কেন আমাদের বেছে নেবেন" as const;

export const SCHOOL_CALLOUT_DESCRIPTION =
  "অভিজ্ঞ শিক্ষক মণ্ডলী, সরকার অনুমোদিত পাঠক্রম এবং নৈতিক শিক্ষার সমন্বয়ে আমরা শিক্ষার্থীদের সঠিক দিক নির্দেশনা প্রদান করি।" as const;

export const SCHOOL_CALLOUT_BADGE = "সম্প্রদায় ও অভিভাবকদের সক্রিয় অংশগ্রহণ" as const;
