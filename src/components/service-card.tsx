/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : External service link card.         │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

export interface ServiceCardProps {
  readonly href: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export default function ServiceCard({ href, icon, title, description }: ServiceCardProps): JSX.Element {
  return (
    <Link href={href} target="_blank" rel="noreferrer" prefetch={false} className="block">
      <Card className="h-full border-2 border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
        <CardContent className="flex items-center space-x-4 p-4">
          <span aria-hidden className="text-2xl">{icon}</span>
          <div>
            <h3 className="font-semibold text-slate-800">{title}</h3>
            <p className="text-sm text-slate-600">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
