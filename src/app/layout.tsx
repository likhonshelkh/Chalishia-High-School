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
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "Chalishia High School",
  description: "Management System for Chalishia High School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="//jessoreboard.gov.bd/jb_logo_new.png" />
        <link href="https://cdn.msar.me/fonts/kalpurush/font.css" rel="stylesheet" />
        <link href="https://cdn.msar.me/fonts/mukti/font.css" rel="stylesheet" />
        <link href="https://cdn.msar.me/fonts/siyam-rupali/font.css" rel="stylesheet" />
        <link href="https://cdn.msar.me/fonts/solaiman-lipi/font.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" media="all" />
      </head>
      <body>{children}</body>
    </html>
  );
}