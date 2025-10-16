/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Root layout for the application.    │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "চলিশিয়া উচ্চ বিদ্যালয় | Chalishia High School - EIIN: 115498",
  description: "Chalishia High School Official Website",
};

export default function RootLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <html lang="bn" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="//jessoreboard.gov.bd/jb_logo_new.png" />
        <link href="https://cdn.msar.me/fonts/kalpurush/font.css" rel="stylesheet" />
        <link href="https://cdn.msar.me/fonts/mukti/font.css" rel="stylesheet" />
        <link href="https://cdn.msar.me/fonts/siyam-rupali/font.css" rel="stylesheet" />
        <link href="https://cdn.msar.me/fonts/solaiman-lipi/font.css" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background text-foreground antialiased", "font-sans") }>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
