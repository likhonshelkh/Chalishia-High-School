/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Primary navigation bar component.   │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import Link from "next/link";

interface MenuItem {
  readonly href: string;
  readonly label: string;
}

const menuItems: MenuItem[] = [
  { href: "//chalishiahighschool.jessoreboard.gov.bd/", label: "প্রথম পাতা" },
  { href: "#", label: "আমাদের বিষয়" },
  { href: "#", label: "কার্যাবলী" },
  { href: "#", label: "একাডেমিক রেকর্ড" },
  { href: "#", label: "ফলাফল" },
  { href: "#", label: "ফটো" },
  { href: "#", label: "যোগাযোগ" },
];

function isExternalLink(href: string): boolean {
  return href.startsWith("http") || href.startsWith("//");
}

export default function Navigation(): JSX.Element {
  return (
    <nav className="bg-slate-800 shadow-lg">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center">
          {menuItems.map((item) => (
            <li key={item.label} className="group">
              {isExternalLink(item.href) ? (
                <a
                  href={item.href}
                  className="block border-b-2 border-transparent px-6 py-4 font-medium text-white transition-colors group-hover:border-accent group-hover:bg-slate-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="block border-b-2 border-transparent px-6 py-4 font-medium text-white transition-colors hover:border-accent hover:bg-slate-700"
                  prefetch={false}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
