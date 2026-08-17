"use client";

import React, { useState } from "react";
import { profileData, SkillItem } from "@/data/profile";
import { TechIcon } from "@/components/TechIcons";
import { Terminal, Award, CheckCircle2 } from "lucide-react";

export const About: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top: Bio & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Eyebrow & Headline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-white/10 text-xs font-mono text-neutral-400">
              <span className="text-[#CCFF00] font-mono">01 //</span>
              <span className="tracking-widest uppercase">ABOUT &amp; BACKGROUND</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display uppercase leading-[1.05]">
              Full-Stack Craft with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-neutral-200">
                Engineering Discipline.
              </span>
            </h2>

            {/* Developer Snapshot Widget */}
            <div className="p-5 rounded-2xl bg-[#121212] border border-white/[0.08] font-mono text-xs text-neutral-300 space-y-2.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06] text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>om_parmar.json</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="space-y-1.5 text-neutral-400">
                <p><span className="text-[#CCFF00]">name:</span> &quot;{profileData.fullName}&quot;</p>
                <p><span className="text-[#CCFF00]">focus:</span> &quot;Full-Stack MERN &amp; REST Architectures&quot;</p>
                <p><span className="text-[#CCFF00]">dsa:</span> &quot;400+ LeetCode &amp; Codeforces&quot;</p>
                <p><span className="text-[#CCFF00]">coreStack:</span> [&quot;React&quot;, &quot;TypeScript&quot;, &quot;Node.js&quot;, &quot;Express.js&quot;, &quot;MongoDB&quot;]</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              {profileData.bioParagraphs.map((paragraph, index) => (
                <p key={index} className="text-balance">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Strengths */}
            <div className="pt-6 border-t border-white/[0.06] space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
                Core Strengths &amp; Engineering Focus
              </h3>
              <div className="space-y-2.5">
                {profileData.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Stepped Funnel Structure matching Portfolio Palette */}
        <div id="skills" className="pt-12 border-t border-white/[0.06] space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-white/10 text-xs font-mono text-neutral-400 mb-3">
                <Award className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span className="tracking-widest uppercase">TECHNICAL EXPERTISE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
                Tech Stack.
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-mono text-neutral-500">
              Core technologies &amp; frameworks
            </p>
          </div>

          {/* Stepped Funnel Card Structure (5 -> 4 -> 3 -> 2) */}
          <div className="relative py-8 flex flex-col items-center justify-center">
            {/* Perspective Tunnel / Ambient Dark Neutral Radial Glow in Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <div className="w-[600px] h-[320px] bg-gradient-to-b from-white/[0.04] via-[#CCFF00]/[0.02] to-transparent rounded-full blur-3xl" />
              <svg className="absolute w-[560px] h-[360px] text-white/[0.04] pointer-events-none" viewBox="0 0 600 400" fill="none">
                <ellipse cx="300" cy="200" rx="280" ry="170" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <ellipse cx="300" cy="200" rx="210" ry="125" stroke="currentColor" strokeWidth="1" />
                <ellipse cx="300" cy="200" rx="140" ry="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <ellipse cx="300" cy="200" rx="70" ry="40" stroke="currentColor" strokeWidth="1" />
                <line x1="20" y1="30" x2="300" y2="200" stroke="currentColor" strokeWidth="0.8" />
                <line x1="580" y1="30" x2="300" y2="200" stroke="currentColor" strokeWidth="0.8" />
                <line x1="20" y1="370" x2="300" y2="200" stroke="currentColor" strokeWidth="0.8" />
                <line x1="580" y1="370" x2="300" y2="200" stroke="currentColor" strokeWidth="0.8" />
              </svg>
            </div>

            {/* Stepped Rows: Row 1 (5 cards), Row 2 (4 cards), Row 3 (3 cards), Row 4 (2 cards) */}
            <div className="space-y-3 sm:space-y-3.5 relative z-10 w-full flex flex-col items-center">
              {profileData.skillRows.map((row: SkillItem[], rowIndex: number) => (
                <div
                  key={rowIndex}
                  className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5"
                >
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
                        className={`group relative w-[94px] h-[92px] sm:w-[108px] sm:h-[104px] rounded-2xl flex flex-col items-center justify-center p-2.5 sm:p-3 transition-all duration-300 cursor-pointer backdrop-blur-md ${
                          isActive
                            ? "bg-[#1f1f1f] border-2 border-white/40 shadow-[0_0_24px_rgba(255,255,255,0.18),0_8px_24px_rgba(0,0,0,0.7)] -translate-y-1.5 scale-[1.02]"
                            : "bg-[#141414]/90 hover:bg-[#1a1a1a] border border-white/[0.08] hover:border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_24px_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 hover:scale-[1.02]"
                        }`}
                      >
                        {/* Centered SVG Logo: Grey by default, authentic color on hover / active */}
                        <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center mb-1.5 transition-transform duration-300 group-hover:scale-110">
                          <div
                            className={`transition-all duration-300 ${
                              isActive
                                ? "grayscale-0 opacity-100"
                                : "grayscale opacity-60 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100"
                            }`}
                          >
                            <TechIcon
                              name={skill.name}
                              className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 drop-shadow-sm"
                            />
                          </div>
                        </div>

                        {/* Technology Name */}
                        <span
                          className={`text-[11px] sm:text-xs font-medium tracking-tight transition-colors duration-300 truncate max-w-full ${
                            isActive
                              ? "text-white font-semibold"
                              : "text-neutral-400 group-hover:text-white"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
