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

interface FacilityCard {
  readonly icon: JSX.Element;
  readonly title: string;
  readonly details: string;
}

const facilities: FacilityCard[] = [
  {
    icon: <Building2 className="h-8 w-8 text-[#005A9C]" />,
    title: "অবকাঠামো ও শ্রেণিকক্ষ",
    details: "৯টি শ্রেণিকক্ষ নিয়ে ৪,১০০ বর্গফুটের একতলা ভবন শিক্ষার্থীদের জন্য নিরাপদ ও আলোকিত শেখার পরিবেশ নিশ্চিত করে।",
  },
  {
    icon: <Trees className="h-8 w-8 text-[#28A745]" />,
    title: "খেলার মাঠ ও ক্যাম্পাস",
    details: "মোট ১০০ ডেসিমেল জমির মধ্যে ৪৯ ডেসিমেল খোলা খেলার মাঠ বার্ষিক ক্রীড়া প্রতিযোগিতা ও আউটডোর কার্যক্রমের কেন্দ্র।",
  },
  {
    icon: <BookOpenCheck className="h-8 w-8 text-[#FFC107]" />,
    title: "সহ-পাঠ্য কার্যক্রম",
    details: "স্কাউট, সাংস্কৃতিক অনুষ্ঠান, বিতর্ক ও স্বাস্থ্য সচেতনতা কর্মশালার মাধ্যমে শিক্ষার্থীদের সার্বিক বিকাশে গুরুত্ব দেয়া হয়।",
  },
];

export default function CampusFacilities(): JSX.Element {
  return (
    <section className="bg-[#F8F9FA] py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#333333] md:text-4xl">ক্যাম্পাস ও সুবিধাসমূহ</h2>
          <p className="mt-4 text-base text-[#495057] md:text-lg">
            পরিপাটি ক্যাম্পাস, প্রশস্ত মাঠ ও সহ-পাঠ্য কার্যক্রমের সমৃদ্ধি Chalishia High School-কে এলাকায় আলাদা স্বাতন্ত্র্য দেয়।
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {facilities.map((facility) => (
            <article key={facility.title} className="rounded-xl border border-[#DEE2E6] bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-inner">
                {facility.icon}
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
