/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Horizontal news ticker component.   │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

const newsItems: string[] = [
  "২০২৫ শিক্ষাবর্ষের ভর্তি প্রক্রিয়া শুরু হয়েছে। আগ্রহী শিক্ষার্থীরা অফিসে যোগাযোগ করুন।",
  "এইচএসসি পরীক্ষার রুটিন প্রকাশিত হয়েছে।",
  "বিদ্যালয়ের বার্ষিক ক্রীড়া প্রতিযোগিতা ১৫-১৭ জুলাই অনুষ্ঠিত হবে।",
];

export default function NewsTicker(): JSX.Element {
  return (
    <section className="bg-slate-100 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <span className="rounded bg-accent px-4 py-1 text-sm font-bold text-accent-foreground" aria-label="Notice tag">
            নোটিশ
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-sm text-slate-700">
              {newsItems.map((news) => (
                <span key={news} className="mx-8">
                  {news}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
