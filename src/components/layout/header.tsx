/**
 * ┌────────────────────────────────────────────────────┐
 * │ Author      : Likhon Sheikh (@likhonsheikh)       │
 * │ Description : Hero header with branding and meta. │
 * │ Version     : 1.0.0                               │
 * │ Date        : 2025-10-16                          │
 * │ License     : MIT                                 │
 * │ Website     : https://likhonsheikh.com            │
 * │ GitHub      : https://github.com/likhonsheikh/Chalishia-High-School │
 * └────────────────────────────────────────────────────┘
 */

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Calendar, Clock, User } from "lucide-react";

interface DateTimeState {
  readonly date: string;
  readonly time: string;
}

function formatDateTime(): DateTimeState {
  const now = new Date();
  return {
    date: now.toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    }),
    time: now.toLocaleTimeString("bn-BD", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }),
  };
}

export default function Header(): JSX.Element {
  const [dateTime, setDateTime] = useState<DateTimeState>(formatDateTime);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDateTime(formatDateTime());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="bg-primary/90 py-2">
        <div className="container mx-auto flex items-center justify-between px-4 text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" aria-hidden />
              <span id="show_date" className="font-medium">
                {dateTime.date}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" aria-hidden />
              <span id="show_time" className="font-medium">
                {dateTime.time}
              </span>
            </div>
          </div>
          <a
            href="//institute.jessoreboard.gov.bd"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 transition-colors hover:text-blue-200"
          >
            <User className="h-4 w-4" aria-hidden />
            <span className="font-semibold">Admin Login</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center md:flex-row md:space-x-8 md:space-y-0 md:text-left">
          <div className="rounded-full bg-white p-5 shadow-xl">
            <Image
              src="https://jessoreboard.gov.bd/jb_logo_new.png"
              alt="Jessore Education Board Logo"
              width={96}
              height={96}
              className="h-24 w-24 object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">চলিশিয়া উচ্চ বিদ্যালয়</h1>
            <p className="mt-2 text-xl font-semibold md:text-2xl">EIIN - 115498</p>
          </div>
        </div>
      </div>
    </header>
  );
}
