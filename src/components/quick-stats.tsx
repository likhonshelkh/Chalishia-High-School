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
  { number: "1500+", label: "শিক্ষার্থী" },
  { number: "45+", label: "শিক্ষক" },
  { number: "25+", label: "কর্মচারী" },
  { number: "95%", label: "পাসের হার" },
];

export default function QuickStats(): JSX.Element {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-800 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold md:text-4xl">{stat.number}</p>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
