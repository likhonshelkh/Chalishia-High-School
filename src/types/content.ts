/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Shared content type definitions.    │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

export interface QuickStat {
  readonly number: string;
  readonly label: string;
}

export interface OverviewHighlight {
  readonly title: string;
  readonly description: string;
}

export type FacilityIconKey = "infrastructure" | "playground" | "activities";

export interface CampusFacility {
  readonly icon: FacilityIconKey;
  readonly title: string;
  readonly details: string;
}

export interface ServiceLink {
  readonly href: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface HomeMenuLink {
  readonly href: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}
