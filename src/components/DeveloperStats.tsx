"use client";

import React from "react";
import { GithubCalendar } from "@/components/GithubCalendar";
import { LeetcodeDiagnosis } from "@/components/LeetcodeDiagnosis";
import { CodeforcesDiagnosis } from "@/components/CodeforcesDiagnosis";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Activity } from "lucide-react";

export const DeveloperStats: React.FC = () => {
  return (
    <section id="stats" className="py-14 sm:py-18 relative border-b border-white/[0.06] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#CCFF00]/[0.02] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/[0.06]">
          <div>
            <AnimatedReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/[0.08] text-xs font-mono text-neutral-400 mb-3">
                <Activity className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span className="text-[#CCFF00] font-mono">03 //</span>
                <span className="tracking-widest uppercase">ACTIVITY &amp; DIAGNOSIS</span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-display uppercase">
                <span className="text-white">ACTIVITY &amp; </span>
                <span className="bg-gradient-to-r from-[#D4FF00] via-[#E2FF66] to-[#EEFFB0] bg-clip-text text-transparent">
                  DIAGNOSIS.
                </span>
              </h2>
            </AnimatedReveal>
          </div>

          <AnimatedReveal delay={0.2}>
            <p className="text-sm text-neutral-400 max-w-md font-normal leading-relaxed">
              Real-time engineering telemetry, algorithmic problem-solving distribution, and continuous repository commit velocity.
            </p>
          </AnimatedReveal>
        </div>

        {/* 1. Full-Width GitHub Activity Calendar */}
        <AnimatedReveal delay={0.25} yOffset={24}>
          <GithubCalendar />
        </AnimatedReveal>

        {/* 2. Side-by-Side Competitive Programming Diagnosis (LeetCode + Codeforces) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <AnimatedReveal delay={0.3} yOffset={24} className="h-full">
            <LeetcodeDiagnosis />
          </AnimatedReveal>

          <AnimatedReveal delay={0.35} yOffset={24} className="h-full">
            <CodeforcesDiagnosis />
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
};
