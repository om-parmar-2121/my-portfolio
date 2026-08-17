"use client";

import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, Github, ArrowRight, Layers, Sparkles } from "lucide-react";
import { AnimatedReveal, AnimatedWords } from "@/components/AnimatedReveal";

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="py-14 sm:py-18 relative border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/[0.06]">
          <div>
            <AnimatedReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/[0.08] text-xs font-mono text-neutral-400 mb-3">
                <span className="text-[#CCFF00] font-mono">02 //</span>
                <span className="tracking-widest uppercase">FULL-STACK PROJECTS</span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-display uppercase">
                <span className="text-white">FEATURED </span>
                <span className="bg-gradient-to-r from-[#D4FF00] via-[#E2FF66] to-[#EEFFB0] bg-clip-text text-transparent">
                  SYSTEMS.
                </span>
              </h2>
            </AnimatedReveal>
          </div>

          <AnimatedReveal delay={0.2}>
            <p className="text-sm text-neutral-400 max-w-md font-normal leading-relaxed">
              Three production-oriented MERN architectures showcasing authentication, state management, RBAC, and multi-role database models.
            </p>
          </AnimatedReveal>
        </div>

        {/* Editorial Project Cards Showcase */}
        <div className="space-y-6 sm:space-y-8">
          {projectsData.map((project, index) => {
            const liveLink =
              project.liveUrl ||
              (project.slug === "fintrack"
                ? "https://fintrack-money-os.vercel.app/"
                : project.slug === "staffsphere"
                ? "https://staff-sphere-six.vercel.app/"
                : "https://college-management-pro.vercel.app/");

            return (
              <AnimatedReveal key={project.id} delay={0.1 * index} yOffset={24} blurAmount={12}>
                <div className="group relative rounded-3xl bg-[#111111]/70 border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-2xl shadow-black/60">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 sm:p-7 lg:p-8 items-center">
                    {/* Left Column: Project Overview & Deep Specs */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                      <div>
                        {/* Numeral index & category */}
                        <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 mb-3">
                          <span className="text-[#CCFF00] font-bold">0{index + 1}</span>
                          <span>/</span>
                          <span className="uppercase tracking-wider">{project.category}</span>
                        </div>

                        {/* Title & Live Link Button */}
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight group-hover:text-[#CCFF00] transition-colors">
                            {project.title}
                          </h3>

                          <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#CCFF00] hover:bg-[#b3e600] text-black flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-[#CCFF00]/20 shrink-0 cursor-pointer"
                            title={`Open live site: ${project.title}`}
                            aria-label={`Open ${project.title} live system`}
                          >
                            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                          </a>
                        </div>

                        {/* Tagline & Summary */}
                        <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed mb-6">
                          {project.tagline}
                        </p>

                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-neutral-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-neutral-300 group-hover:text-[#CCFF00] tracking-wider transition-colors"
                        >
                          <span>Architecture Breakdown</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/[0.04] hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                          aria-label={`View ${project.title} GitHub repository`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Immersive Project Preview Image */}
                    <div className="lg:col-span-7">
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 border border-white/[0.06] group-hover:border-white/15 transition-all">
                        <img
                          src={project.heroImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 brightness-[0.9] group-hover:brightness-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
