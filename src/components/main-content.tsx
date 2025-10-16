/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Main landing page sections layout.  │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import HomeMenuCard, { type HomeMenuCardProps } from "@/components/home-menu-card";
import ServiceCard, { type ServiceCardProps } from "@/components/service-card";

const services: ServiceCardProps[] = [
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
];

const homeMenus: HomeMenuCardProps[] = [
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
];

export default function MainContent(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <section className="space-y-4 lg:col-span-1">
          <h2 className="text-2xl font-bold text-slate-800">সেবাসমূহ</h2>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </section>

        <section className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-slate-800">দ্রুত মেন্যু</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            {homeMenus.map((menu) => (
              <HomeMenuCard key={menu.title} {...menu} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
