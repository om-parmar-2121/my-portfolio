"use client";

import React, { useState } from "react";
import { profileData, SkillItem } from "@/data/profile";
import { TechIcon } from "@/components/TechIcons";
import { Terminal, Award } from "lucide-react";
import { AnimatedReveal, AnimatedWords } from "@/components/AnimatedReveal";

export const About: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="about" className="py-14 sm:py-18 relative overflow-hidden border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top: Bio & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Eyebrow & Headline */}
          <div className="lg:col-span-5 space-y-5">
            <AnimatedReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/[0.08] text-xs font-mono text-neutral-400">
                <span className="text-[#CCFF00] font-mono">01 //</span>
                <span className="tracking-widest uppercase">ABOUT &amp; BACKGROUND</span>
              </div>
            </AnimatedReveal>

            {/* Editorial Headline with Exact Lime Gradient Shade matching reference */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black tracking-[-0.035em] font-display uppercase leading-[0.98]">
              <AnimatedReveal delay={0.15} yOffset={16}>
                <span className="block text-white">FULL-STACK</span>
              </AnimatedReveal>
              <AnimatedReveal delay={0.2} yOffset={16}>
                <span className="block text-white">CRAFT WITH</span>
              </AnimatedReveal>
              <AnimatedReveal delay={0.25} yOffset={16}>
                <span className="block bg-gradient-to-r from-[#D4FF00] via-[#E2FF66] to-[#EEFFB0] bg-clip-text text-transparent">
                  ENGINEERING
                </span>
              </AnimatedReveal>
              <AnimatedReveal delay={0.3} yOffset={16}>
                <span className="block bg-gradient-to-r from-[#D0F58A] via-[#E0F5C8] to-[#E6EFE6] bg-clip-text text-transparent">
                  DISCIPLINE.
                </span>
              </AnimatedReveal>
            </h2>

            {/* Developer Snapshot Widget matching Image 4 */}
            <AnimatedReveal delay={0.35} yOffset={20}>
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0D0D0D]/90 border border-white/[0.08] backdrop-blur-xl font-mono text-xs text-neutral-300 space-y-3 shadow-xl shadow-black/50">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-neutral-400">
                  <span className="flex items-center gap-2">
                    <span className="text-[#CCFF00] font-bold">&gt;_</span>
                    <span className="text-neutral-300">om_parmar.json</span>
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="space-y-2 text-neutral-300 text-xs sm:text-[13px] leading-relaxed">
                  <p><span className="text-[#CCFF00]">name:</span> &quot;{profileData.fullName}&quot;</p>
                  <p><span className="text-[#CCFF00]">focus:</span> &quot;Full-Stack MERN &amp; REST Architectures&quot;</p>
                  <p><span className="text-[#CCFF00]">dsa:</span> &quot;400+ LeetCode &amp; Codeforces&quot;</p>
                  <p><span className="text-[#CCFF00]">coreStack:</span> [&quot;React&quot;, &quot;TypeScript&quot;, &quot;Node.js&quot;, &quot;Express.js&quot;, &quot;MongoDB&quot;]</p>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedReveal delay={0.2} yOffset={20}>
              <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
                {profileData.bioParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-balance text-neutral-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>

        {/* Bottom: Technical Stack Section */}
        <div id="skills" className="pt-8 border-t border-white/[0.06] space-y-8">
          <AnimatedReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/[0.08] text-xs font-mono text-neutral-400 mb-3">
                  <Award className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span className="tracking-widest uppercase">TECHNICAL EXPERTISE</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display uppercase tracking-tight">
                  <span className="text-white">TECH </span>
                  <span className="bg-gradient-to-r from-[#D4FF00] via-[#E2FF66] to-[#EEFFB0] bg-clip-text text-transparent">
                    STACK.
                  </span>
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-mono text-neutral-500">
                Core technologies &amp; modern engineering frameworks
              </p>
            </div>
          </AnimatedReveal>

          {/* Stepped Funnel Card Structure (5 -> 4 -> 3 -> 2) */}
          <div className="relative py-6 flex flex-col items-center justify-center">
            {/* Ambient Dark Neutral Radial Glow in Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <div className="w-[600px] h-[300px] bg-[#CCFF00]/[0.02] rounded-full blur-3xl" />
            </div>

            {/* Stepped Rows: Row 1 (5 cards), Row 2 (4 cards), Row 3 (3 cards), Row 4 (2 cards) */}
            <div className="space-y-3 sm:space-y-3.5 relative z-10 w-full flex flex-col items-center">
              {profileData.skillRows.map((row: SkillItem[], rowIndex: number) => (
                <AnimatedReveal key={rowIndex} delay={0.1 + rowIndex * 0.08} yOffset={20}>
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
                    {row.map((skill: SkillItem) => {
                      const isActive = activeSkill === skill.name;
                      return (
                        <button
                          key={skill.name}
                          onClick={() => setActiveSkill(isActive ? null : skill.name)}
                          style={{
                            ['--brand-color' as string]: skill.color,
                            ['--brand-glow' as string]: skill.glow,
                          }}
                          className={`group relative w-[96px] h-[94px] sm:w-[110px] sm:h-[106px] rounded-2xl flex flex-col items-center justify-center p-2.5 sm:p-3 transition-all duration-300 cursor-pointer backdrop-blur-xl ${
                            isActive
                              ? "bg-[#1f1f1f] border-2 border-white/40 shadow-[0_0_24px_rgba(255,255,255,0.18),0_8px_24px_rgba(0,0,0,0.7)] -translate-y-1.5 scale-[1.02]"
                              : "bg-[#111111]/85 hover:bg-[#181818] border border-white/[0.08] hover:border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_24px_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 hover:scale-[1.02]"
                          }`}
                        >
                          {/* Centered SVG Logo */}
                          <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center mb-1.5 transition-transform duration-300 group-hover:scale-110">
                            <div
                              className={`transition-all duration-300 ${
                                isActive
                                  ? "grayscale-0 opacity-100"
                                  : "grayscale opacity-60 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100"
                              }`}
                            >
                              <TechIcon name={skill.name} className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                          </div>

                          {/* Skill Name */}
                          <span
                            className={`text-[11px] sm:text-xs font-semibold tracking-tight transition-colors duration-300 truncate max-w-full ${
                              isActive ? "text-white" : "text-neutral-400 group-hover:text-white"
                            }`}
                          >
                            {skill.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
