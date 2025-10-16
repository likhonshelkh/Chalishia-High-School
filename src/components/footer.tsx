/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Site footer with quick links.       │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  readonly href: string;
  readonly label: string;
}

interface FooterSection {
  readonly title: string;
  readonly links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "প্রশাসন",
    links: [
      { href: "#", label: "কমিটি" },
      { href: "#", label: "জনবল" },
      { href: "#", label: "সম্পদ" },
      { href: "#", label: "ভর্তি তথ্যাদি" },
      { href: "#", label: "ভর্তি ফরম" },
      { href: "#", label: "ক্লাস রুটিন" },
      { href: "#", label: "হাজিরা" },
    ],
  },
  {
    title: "পরীক্ষা",
    links: [
      { href: "#", label: "সাময়িক পরীক্ষা" },
      { href: "#", label: "টিউটরিয়াল পরীক্ষা" },
      { href: "#", label: "পাবলিক পরীক্ষা" },
      { href: "#", label: "ভর্তি পরীক্ষা" },
      { href: "#", label: "ক্লাব" },
      { href: "#", label: "ছুটি" },
      { href: "#", label: "শিক্ষা পঞ্জিকা" },
    ],
  },
  {
    title: "শিক্ষার্থী",
    links: [
      { href: "#", label: "ছাত্র-ছাত্রী" },
      { href: "#", label: "ছাত্র-ছাত্রীর পরীক্ষার রেকর্ড" },
      { href: "#", label: "একাডেমিক পারফরম্যান্স" },
      { href: "#", label: "বৃত্তি" },
      { href: "#", label: "ছাত্রাবাস" },
      { href: "#", label: "অন্যান্য" },
      { href: "#", label: "নোটিশ বোর্ড" },
    ],
  },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-center text-2xl font-bold text-slate-100">এক নজরে গুরুত্বপূর্ণ মেন্যু</h3>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="border-b-2 border-primary pb-2 text-lg font-semibold text-blue-300">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} prefetch={false} className="block py-1 text-slate-300 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="text-center md:text-left">
            <div className="mb-4 inline-block rounded-lg bg-white p-4">
              <Image
                src="https://jessoreboard.gov.bd/jb_logo_new.png"
                alt="Jessore Board Logo"
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold text-blue-300">মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোর</h4>
            <p className="text-slate-300">প্রকল্প, অর্থায়ন, বাস্তবায়ন</p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-6 text-center text-slate-400">
          <p>Copyright &copy; ২০২৫ চলিশিয়া উচ্চ বিদ্যালয়। সকল স্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
