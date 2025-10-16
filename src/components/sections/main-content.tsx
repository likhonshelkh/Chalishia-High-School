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

import { HOME_MENU_LINKS, CORE_SERVICES } from "@/data/services";
import HomeMenuCard from "@/components/shared/home-menu-card";
import ServiceCard from "@/components/shared/service-card";

export default function MainContent(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <section className="space-y-4 lg:col-span-1">
          <h2 className="text-2xl font-bold text-slate-800">সেবাসমূহ</h2>
          {CORE_SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </section>

        <section className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-slate-800">দ্রুত মেন্যু</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            {HOME_MENU_LINKS.map((menu) => (
              <HomeMenuCard key={menu.title} {...menu} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
