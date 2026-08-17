"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 sm:py-14 border-t border-white/[0.06] bg-[#0A0A0A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          {/* Brand Info */}
          <div>
            <Link
              href="/"
              className="text-xl font-black text-white font-display tracking-tight hover:text-[#CCFF00] transition-colors"
            >
              {profileData.fullName}
            </Link>
            <p className="text-[11px] text-neutral-500 font-mono mt-1">
              Full-Stack MERN Developer &amp; Software Engineer
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-neutral-500">
            <Link href="/#about" className="hover:text-[#CCFF00] transition-colors">
              About
            </Link>
            <Link href="/#work" className="hover:text-[#CCFF00] transition-colors">
              Projects
            </Link>
            <Link href="/#skills" className="hover:text-[#CCFF00] transition-colors">
              Tech Stack
            </Link>
            <Link href="/#contact" className="hover:text-[#CCFF00] transition-colors">
              Contact
            </Link>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#121212] border border-white/[0.08] hover:border-white/20 text-xs font-mono text-neutral-500 hover:text-white transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#CCFF00] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright and status */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-neutral-600">
          <div>
            © {new Date().getFullYear()} {profileData.fullName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
