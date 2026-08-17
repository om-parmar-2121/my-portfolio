import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft, Github, CheckCircle2, ArrowUpRight, Cpu } from "lucide-react";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#CCFF00]" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="space-y-5 mb-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#121212] border border-white/[0.08] text-xs font-mono text-[#CCFF00]">
            {project.category}
          </span>
          <span className="text-neutral-600 font-mono text-xs">•</span>
          <span className="text-xs font-mono text-neutral-500">Year: {project.year}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display uppercase tracking-tight leading-[0.95]">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Project Meta Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-white/[0.06] my-8">
          <div>
            <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider">Architecture</div>
            <div className="text-sm font-bold text-white mt-1">Client–Server / REST</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider">Developer</div>
            <div className="text-sm font-bold text-white mt-1">Om Parmar</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider">Database</div>
            <div className="text-sm font-bold text-white mt-1">MongoDB Atlas</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider">Repository</div>
            <div className="text-sm font-bold text-[#CCFF00] mt-1">Open Source (GitHub)</div>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CCFF00] text-black font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#b3e600] transition-colors shadow-lg shadow-[#CCFF00]/15"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View GitHub Repository</span>
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden border border-white/[0.08] mb-16 shadow-2xl shadow-black/40">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </div>

      {/* Architecture Highlights */}
      <div className="mb-16">
        <h2 className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-5 flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-[#CCFF00]" />
          <span>Core Architecture &amp; Engineering Decisions</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.architectureHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#121212] border border-white/[0.06] flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
              <span className="text-sm text-neutral-300 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge & Solution Detailed Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="p-6 sm:p-7 rounded-2xl bg-[#121212] border border-white/[0.06] space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>The Engineering Challenge</span>
          </div>
          <h3 className="text-lg font-bold text-white font-display">
            Domain Complexity &amp; Workflows
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed font-normal">
            {project.challenge}
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl bg-[#121212] border border-white/[0.06] space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
            <span>The Technical Solution</span>
          </div>
          <h3 className="text-lg font-bold text-white font-display">
            Full-Stack MERN Architecture
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed font-normal">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Tech Stack Matrix */}
      <div className="mb-16 p-6 sm:p-7 rounded-2xl bg-[#121212] border border-white/[0.06]">
        <h3 className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
          Technologies Implemented
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-[#181818] border border-white/[0.08] text-xs font-mono text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#CCFF00]" />
          <span>Back to Projects</span>
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CCFF00] text-black font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#b3e600] transition-colors"
        >
          <span>Contact Om Parmar</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
