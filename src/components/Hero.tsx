"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowUpRight, ArrowDown, Sparkles, MapPin, Terminal } from "lucide-react";
import { AnimatedReveal, AnimatedWords } from "@/components/AnimatedReveal";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Ambient editorial subtle background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-[#CCFF00]/[0.04] rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-12 w-[450px] h-[320px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Subtle fine grid texture */}
      <div className="absolute inset-0 bg-noise opacity-30 -z-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Editorial Eyebrow Tag */}
        <AnimatedReveal delay={0.1} yOffset={20} blurAmount={10}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111]/80 border border-white/[0.08] backdrop-blur-xl mb-6 shadow-xl shadow-black/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase">
              /FULL-STACK MERN DEVELOPER
            </span>
            <span className="text-neutral-600">/</span>
            <span className="text-[11px] sm:text-xs font-mono text-[#CCFF00]">
              REACT • TYPESCRIPT • NODE • MONGO
            </span>
          </div>
        </AnimatedReveal>

        {/* Massive Centered Editorial Headline matching reference design */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] font-black tracking-[-0.04em] font-display uppercase leading-[0.92] max-w-4xl mb-6 text-center flex flex-col items-center">
          <AnimatedReveal delay={0.15} yOffset={20}>
            <span className="block text-white">FULL-STACK</span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.22} yOffset={20}>
            <span className="block text-white">DEVELOPER</span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.29} yOffset={20}>
            <span className="block bg-gradient-to-b from-[#FFFFFF] via-[#D4D4D4] to-[#8E8E8E] bg-clip-text text-transparent">
              &amp; SOFTWARE
            </span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.36} yOffset={20}>
            <span className="block bg-gradient-to-b from-[#8E8E8E] via-[#5A5A5A] to-[#2E2E2E] bg-clip-text text-transparent">
              ENGINEER
            </span>
          </AnimatedReveal>
        </h1>

        {/* Value Proposition Description */}
        <AnimatedReveal delay={0.3} yOffset={20} blurAmount={10}>
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed mb-6 text-balance">
            {profileData.tagline}
          </p>
        </AnimatedReveal>

        {/* Key Quick Highlight Pills */}
        <AnimatedReveal delay={0.4} yOffset={20} blurAmount={10}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 text-xs font-mono text-neutral-400">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <Terminal className="w-3 h-3 text-[#CCFF00]" />
              <span>400+ DSA Solutions</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <Sparkles className="w-3 h-3 text-[#CCFF00]" />
              <span>3 Production MERN Systems</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <MapPin className="w-3 h-3 text-neutral-400" />
              <span>Ahmedabad, India</span>
            </div>
          </div>
        </AnimatedReveal>

        {/* Action Button Group */}
        <AnimatedReveal delay={0.5} yOffset={20} blurAmount={10}>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b3e600] rounded-full transition-all duration-300 shadow-xl shadow-[#CCFF00]/15 hover:shadow-[#CCFF00]/30 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/#work"
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-[13px] font-medium uppercase tracking-wider text-neutral-200 hover:text-white bg-[#111111]/80 hover:bg-[#161616] border border-white/[0.08] hover:border-white/20 rounded-full backdrop-blur-xl transition-all duration-300 shadow-xl shadow-black/40"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-neutral-500 group-hover:text-[#CCFF00]" />
            </Link>

            <a
              href={profileData.resumeUrl || "/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-[13px] font-medium uppercase tracking-wider text-neutral-200 hover:text-white bg-[#111111]/80 hover:bg-[#161616] border border-white/[0.08] hover:border-white/20 rounded-full backdrop-blur-xl transition-all duration-300 shadow-xl shadow-black/40"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-neutral-500 group-hover:text-[#CCFF00]" />
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};
