/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Quick statistics ribbon component.  │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

interface StatItem {
  readonly number: string;
  readonly label: string;
}

const stats: StatItem[] = [
  { number: "৩৫০+", label: "নিবন্ধিত শিক্ষার্থী" },
  { number: "১৭", label: "অভিজ্ঞ শিক্ষক" },
  { number: "১০+", label: "সহায়ক কর্মী" },
  { number: "১০০ ডেসিমেল", label: "বিদ্যালয় ক্যাম্পাস" },
];

export default function QuickStats(): JSX.Element {
  return (
    <section className="bg-[#005A9C] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold md:text-4xl">{stat.number}</p>
              <p className="text-sm font-medium text-white/90 md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
