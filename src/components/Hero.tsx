"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#CCFF00]/8 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-sky-500/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-20 mask-radial-fade" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121212]/80 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase">
            {profileData.eyebrow}
          </span>
          <span className="text-neutral-600">/</span>
          <span className="text-[11px] sm:text-xs font-mono text-[#CCFF00]">REACT • TYPESCRIPT • NODE • MONGO</span>
        </div>

        {/* Main Kinetic Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white font-display uppercase leading-[0.92] max-w-5xl mb-6">
          Full-Stack Developer <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500">
            &amp; Software Engineer
          </span>
        </h1>

        {/* Value Proposition Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed mb-10 text-balance">
          {profileData.tagline}
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b3e600] rounded-full transition-all duration-300 shadow-xl shadow-[#CCFF00]/20 hover:shadow-[#CCFF00]/35 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/#work"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] font-medium uppercase tracking-wider text-neutral-200 hover:text-white bg-[#141414]/80 hover:bg-[#181818] border border-white/10 hover:border-white/20 rounded-full backdrop-blur-md transition-all duration-300"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-neutral-500 group-hover:text-[#CCFF00]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
