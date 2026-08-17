"use client";

import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, Github, ArrowRight } from "lucide-react";

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="py-24 sm:py-32 relative border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-white/10 text-xs font-mono text-neutral-400 mb-4">
              <span className="text-[#CCFF00] font-mono">02 //</span>
              <span className="tracking-widest uppercase">FULL-STACK PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display uppercase">
              Featured Systems.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-normal leading-relaxed">
            Three production-oriented MERN architectures showcasing authentication, state management, RBAC, and multi-role database models.
          </p>
        </div>

        {/* Projects 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#121212] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Project Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-200 tracking-wide">
                    {project.category.split(" ")[0]}
                  </span>
                </div>

                {/* GitHub Link Button */}
                <div className="absolute top-3.5 right-3.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-neutral-300 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-all flex items-center justify-center"
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-black text-white font-display tracking-tight group-hover:text-[#CCFF00] transition-colors">
                      {project.title}
                    </h3>
                    <Link
                      href={`/work/${project.slug}`}
                      className="p-1.5 rounded-full bg-white/[0.04] group-hover:bg-[#CCFF00] text-neutral-500 group-hover:text-black transition-all shrink-0 ml-3"
                      aria-label={`View ${project.title} case study`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-5 font-normal">
                    {project.tagline}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case study & GitHub footer */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    href={`/work/${project.slug}`}
                    className="text-[11px] font-mono uppercase font-bold text-neutral-400 group-hover:text-[#CCFF00] tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <span>Deep Dive</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-neutral-500 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
