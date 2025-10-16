/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Home page assembling site sections. │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Navigation from "@/components/layout/navigation";
import NewsTicker from "@/components/layout/news-ticker";
import CampusFacilities from "@/components/sections/campus-facilities";
import MainContent from "@/components/sections/main-content";
import QuickStats from "@/components/sections/quick-stats";
import SchoolOverview from "@/components/sections/school-overview";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <NewsTicker />
      <MainContent />
      <QuickStats />
      <SchoolOverview />
      <CampusFacilities />
      <Footer />
    </div>
  );
}
