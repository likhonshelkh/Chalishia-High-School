/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Quick stats dataset for landing page│
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import type { QuickStat } from "@/types/content";

export const QUICK_STATS: readonly QuickStat[] = [
  { number: "৩৫০+", label: "নিবন্ধিত শিক্ষার্থী" },
  { number: "১৭", label: "অভিজ্ঞ শিক্ষক" },
  { number: "১০+", label: "সহায়ক কর্মী" },
  { number: "১০০ ডেসিমেল", label: "বিদ্যালয় ক্যাম্পাস" },
] as const;
