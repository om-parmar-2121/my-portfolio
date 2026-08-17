"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, ArrowLeft, Github, Search } from "lucide-react";
import { AnimatedReveal, AnimatedWords } from "@/components/AnimatedReveal";

export default function WorkArchivePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesSearch;
  });

  return (
    <div className="pt-32 pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#CCFF00]" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="space-y-4 mb-14">
        <AnimatedReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/[0.08] text-xs font-mono text-neutral-400">
            <span className="text-[#CCFF00] font-mono">ARCHIVE //</span>
            <span className="tracking-widest uppercase">FULL-STACK SYSTEMS</span>
          </div>
        </AnimatedReveal>

        <AnimatedWords
          text="Software Systems & Architecture."
          as="h1"
          delay={0.15}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display uppercase tracking-tight leading-[0.95]"
        />

        <AnimatedReveal delay={0.2}>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Architectural overviews, component boundaries, and security models for full-stack MERN applications built by Om Parmar.
          </p>
        </AnimatedReveal>
      </div>

      {/* Search Bar */}
      <AnimatedReveal delay={0.25}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-white/[0.06]">
          <div className="text-xs font-mono text-neutral-400">
            Showing <span className="text-[#CCFF00] font-bold">{filtered.length}</span> Production Architectures
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search systems & tech..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#111111] border border-white/[0.08] text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-[#CCFF00]/50 transition-colors"
            />
          </div>
        </div>
      </AnimatedReveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, index) => {
          const liveLink =
            project.liveUrl ||
            (project.slug === "fintrack"
              ? "https://fintrack-money-os.vercel.app/"
              : project.slug === "staffsphere"
              ? "https://staff-sphere-six.vercel.app/"
              : "https://college-management-pro.vercel.app/");

          return (
            <AnimatedReveal key={project.id} delay={0.1 * index} yOffset={24} blurAmount={12}>
              <div className="group rounded-3xl bg-[#111111]/70 border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col backdrop-blur-xl shadow-xl shadow-black/40">
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-black text-white font-display tracking-tight group-hover:text-[#CCFF00] transition-colors">
                        {project.title}
                      </h2>
                      <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#CCFF00] hover:bg-[#b3e600] text-black flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-md shadow-[#CCFF00]/25 shrink-0 ml-3 cursor-pointer relative z-20"
                        title={`Open live site: ${project.title}`}
                        aria-label={`Open ${project.title} live system`}
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </a>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-5 font-normal">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-xs font-mono uppercase font-bold text-neutral-300 group-hover:text-[#CCFF00] tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <span>Architecture Breakdown</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          );
        })}
      </div>
    </div>
  );
}
