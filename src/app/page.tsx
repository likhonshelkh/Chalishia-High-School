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

import Footer from "@/components/footer";
import Header from "@/components/header";
import CampusFacilities from "@/components/campus-facilities";
import MainContent from "@/components/main-content";
import Navigation from "@/components/navigation";
import NewsTicker from "@/components/news-ticker";
import QuickStats from "@/components/quick-stats";
import SchoolOverview from "@/components/school-overview";

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
