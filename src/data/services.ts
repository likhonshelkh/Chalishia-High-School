/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Service and quick menu datasets.    │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import type { HomeMenuLink, ServiceLink } from "@/types/content";

export const CORE_SERVICES: readonly ServiceLink[] = [
  {
    href: "//www.jessoreboard.gov.bd/resultjbh25/index.php",
    icon: "📊",
    title: "HSC Result-2025",
    description: "এইচএসসি রেজাল্ট ২০২৫",
  },
  {
    href: "//student.jessoreboard.gov.bd",
    icon: "👨‍🎓",
    title: "Student Management",
    description: "শিক্ষার্থী ব্যবস্থাপনা",
  },
  {
    href: "//jessoreboard.gov.bd/epd_online",
    icon: "👨‍🏫",
    title: "Head/Examiner",
    description: "প্রধান/পরীক্ষক",
  },
  {
    href: "//otp.jessoreboard.gov.bd",
    icon: "🔐",
    title: "OTP",
    description: "ওটিপি সার্ভিস",
  },
] as const;

export const HOME_MENU_LINKS: readonly HomeMenuLink[] = [
  {
    href: "//chalishiahighschool.jessoreboard.gov.bd/index.php/website/attendance",
    icon: "📈",
    title: "উপস্থিতি",
    description: "শিক্ষার্থীদের উপস্থিতি রেকর্ড",
  },
  {
    href: "#",
    icon: "📅",
    title: "একাডেমিক ক্যালেন্ডার",
    description: "বিদ্যালয়ের একাডেমিক ক্যালেন্ডার",
  },
  {
    href: "#",
    icon: "📚",
    title: "পাঠ পরিকল্পনা",
    description: "ক্লাস পাঠ পরিকল্পনা",
  },
  {
    href: "#",
    icon: "📝",
    title: "ফলাফল",
    description: "পরীক্ষার ফলাফল",
  },
] as const;
