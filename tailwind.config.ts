/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Tailwind CSS configuration.         │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "school-blue": "#005A9C",
        "success-green": "#28A745",
        "notice-yellow": "#FFC107",
        "dark-charcoal": "#333333",
        "light-gray": "#F8F9FA",
        "subtle-gray": "#DEE2E6",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Kalpurush",
          "Noto Sans Bengali",
          "Mukti",
          "SiyamRupali",
          "SolaimanLipi",
          "Arial",
          "sans-serif",
        ],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1.5rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
