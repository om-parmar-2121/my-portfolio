"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, ArrowLeft, Github, Search } from "lucide-react";

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
    <div className="pt-28 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#CCFF00]" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-white/[0.08] text-xs font-mono text-neutral-400">
          <span className="text-[#CCFF00] font-mono">ARCHIVE //</span>
          <span className="tracking-widest uppercase">FULL-STACK SYSTEMS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display uppercase tracking-tight leading-[0.95]">
          Software Systems.
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
          Architectural overviews, component boundaries, and security models for full-stack MERN applications built by Om Parmar.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-white/[0.06]">
        <div className="text-xs font-mono text-neutral-500">
          Showing <span className="text-[#CCFF00] font-bold">{filtered.length}</span> Production Architectures
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-neutral-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search systems & tech..."
            className="w-full pl-9 pr-4 py-2 rounded-full bg-[#121212] border border-white/[0.08] text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#CCFF00]/50 transition-colors"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-[#121212] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

              <div className="absolute top-3.5 left-3.5">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-200 tracking-wide">
                  {project.category.split(" ")[0]}
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg sm:text-xl font-black text-white font-display tracking-tight group-hover:text-[#CCFF00] transition-colors">
                    {project.title}
                  </h2>
                  <Link
                    href={`/work/${project.slug}`}
                    className="p-1.5 rounded-full bg-white/[0.04] group-hover:bg-[#CCFF00] text-neutral-500 group-hover:text-black transition-all shrink-0 ml-3"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-5 font-normal">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <Link
                  href={`/work/${project.slug}`}
                  className="text-[11px] font-mono uppercase font-bold text-neutral-400 group-hover:text-[#CCFF00] tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>Architecture Specs</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-neutral-500 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <Github className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
