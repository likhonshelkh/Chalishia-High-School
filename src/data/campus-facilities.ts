/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Campus facilities dataset.          │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import type { CampusFacility } from "@/types/content";

export const CAMPUS_FACILITIES: readonly CampusFacility[] = [
  {
    icon: "infrastructure",
    title: "অবকাঠামো ও শ্রেণিকক্ষ",
    details: "৯টি শ্রেণিকক্ষ নিয়ে ৪,১০০ বর্গফুটের একতলা ভবন শিক্ষার্থীদের জন্য নিরাপদ ও আলোকিত শেখার পরিবেশ নিশ্চিত করে।",
  },
  {
    icon: "playground",
    title: "খেলার মাঠ ও ক্যাম্পাস",
    details: "মোট ১০০ ডেসিমেল জমির মধ্যে ৪৯ ডেসিমেল খোলা খেলার মাঠ বার্ষিক ক্রীড়া প্রতিযোগিতা ও আউটডোর কার্যক্রমের কেন্দ্র।",
  },
  {
    icon: "activities",
    title: "সহ-পাঠ্য কার্যক্রম",
    details: "স্কাউট, সাংস্কৃতিক অনুষ্ঠান, বিতর্ক ও স্বাস্থ্য সচেতনতা কর্মশালার মাধ্যমে শিক্ষার্থীদের সার্বিক বিকাশে গুরুত্ব দেয়া হয়।",
  },
] as const;

export const CAMPUS_SECTION_TITLE = "ক্যাম্পাস ও সুবিধাসমূহ" as const;

export const CAMPUS_SECTION_INTRO =
  "পরিপাটি ক্যাম্পাস, প্রশস্ত মাঠ ও সহ-পাঠ্য কার্যক্রমের সমৃদ্ধি Chalishia High School-কে এলাকায় আলাদা স্বাতন্ত্র্য দেয়।" as const;
