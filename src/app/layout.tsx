import type { Metadata } from "next";
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "Chalishiya High School",
  description: "Management System for Chalishiya High School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.msar.me/fonts/kalpurush/font.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}