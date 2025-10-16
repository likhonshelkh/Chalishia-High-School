/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Quick access menu card component.   │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import type { HomeMenuLink } from "@/types/content";

type HomeMenuCardProps = HomeMenuLink;

export default function HomeMenuCard({ href, icon, title, description }: HomeMenuCardProps): JSX.Element {
  return (
    <Link href={href} prefetch={false} className="block">
      <Card className="h-full border border-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="flex flex-col gap-3 p-6">
          <div className="text-3xl" aria-hidden>
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
            <p className="text-sm text-slate-600">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
