"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTimeString(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-12 sm:pt-14 pb-0 border-t border-white/[0.06] bg-[#080808] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between mb-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-2.5">
            <Link
              href="/"
              className="text-2xl font-black text-white font-display tracking-tight hover:text-[#CCFF00] transition-colors"
            >
              {profileData.fullName}
            </Link>
            <p className="text-xs text-neutral-400 font-normal leading-relaxed max-w-sm">
              Full-Stack Software Engineer building scalable MERN web applications, robust REST APIs, and modern user interfaces.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
              Navigation
            </span>
            <div className="flex flex-col space-y-1.5 text-xs font-mono text-neutral-400">
              <Link href="/#about" className="hover:text-[#CCFF00] transition-colors">
                /about
              </Link>
              <Link href="/#work" className="hover:text-[#CCFF00] transition-colors">
                /projects
              </Link>
              <Link href="/#skills" className="hover:text-[#CCFF00] transition-colors">
                /tech-stack
              </Link>
              <Link href="/#stats" className="hover:text-[#CCFF00] transition-colors">
                /activity
              </Link>
              <Link href="/#contact" className="hover:text-[#CCFF00] transition-colors">
                /contact
              </Link>
            </div>
          </div>

          {/* Socials & Timezone */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
              Location &amp; Local Time
            </span>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1 font-mono text-xs text-neutral-400">
              <div className="flex items-center justify-between">
                <span>Ahmedabad, India</span>
                <span className="text-neutral-500">UTC+5:30</span>
              </div>
              <div className="text-sm font-bold text-white">
                {timeString || "07:00:00 PM"} IST
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-neutral-400 hover:text-white transition-all cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#CCFF00] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and status */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} {profileData.fullName}. Designed &amp; Engineered with Precision.
          </div>
          <div className="flex items-center gap-4">
            {profileData.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Giant Subdued Watermark (Showing only top 75%) */}
        <div className="mt-6 sm:mt-8 select-none overflow-hidden flex items-start justify-center pointer-events-none h-[11.5vw] -mb-2">
          <span className="text-[17vw] font-black font-display tracking-tighter text-white/[0.04] uppercase leading-none whitespace-nowrap block">
            OM-DEV
          </span>
        </div>
      </div>
    </footer>
  );
};
