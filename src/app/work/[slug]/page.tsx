import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ArrowLeft, Github, CheckCircle2, ArrowUpRight, Cpu, ExternalLink } from "lucide-react";

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

  const liveLink =
    project.liveUrl ||
    (project.slug === "fintrack"
      ? "https://fintrack-money-os.vercel.app/"
      : project.slug === "staffsphere"
      ? "https://staff-sphere-six.vercel.app/"
      : "https://college-management-pro.vercel.app/");

  return (
    <article className="pt-32 pb-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#CCFF00]" />
          <span>Back to Systems</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="space-y-6 mb-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#111111] border border-white/[0.08] text-xs font-mono text-[#CCFF00]">
            {project.category}
          </span>
          <span className="text-neutral-600 font-mono text-xs">•</span>
          <span className="text-xs font-mono text-neutral-400">Year: {project.year}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display uppercase tracking-tight leading-[0.95]">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Project Meta Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/[0.06] my-8">
          <div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Architecture</div>
            <div className="text-sm font-bold text-white mt-1">Client–Server / REST</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Developer</div>
            <div className="text-sm font-bold text-white mt-1">Om Parmar</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Database</div>
            <div className="text-sm font-bold text-white mt-1">MongoDB Atlas</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Deployment</div>
            <div className="text-sm font-bold text-[#CCFF00] mt-1">Vercel (Production)</div>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#CCFF00] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#b3e600] transition-all shadow-lg shadow-[#CCFF00]/15 hover:scale-[1.02]"
          >
            <span>Launch Live System</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] border border-white/[0.08] hover:border-white/20 text-neutral-200 hover:text-white font-mono text-xs font-medium uppercase tracking-wider transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="rounded-3xl overflow-hidden border border-white/[0.08] mb-16 shadow-2xl shadow-black/50">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </div>

      {/* Architecture Highlights */}
      <div className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#CCFF00]" />
          <span>Core Architecture &amp; Engineering Decisions</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.architectureHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#111111]/80 border border-white/[0.06] flex items-start gap-3.5"
            >
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
              <span className="text-sm text-neutral-300 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge & Solution Detailed Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="p-7 sm:p-8 rounded-3xl bg-[#111111]/70 border border-white/[0.06] space-y-3.5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>The Engineering Challenge</span>
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Domain Complexity &amp; Workflows
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed font-normal">
            {project.challenge}
          </p>
        </div>

        <div className="p-7 sm:p-8 rounded-3xl bg-[#111111]/70 border border-white/[0.06] space-y-3.5">
          <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
            <span>The Technical Solution</span>
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            Full-Stack MERN Architecture
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed font-normal">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Tech Stack Matrix */}
      <div className="mb-16 p-7 sm:p-8 rounded-3xl bg-[#111111]/70 border border-white/[0.06]">
        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-5">
          Technologies Implemented
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#CCFF00]" />
          <span>Back to All Systems</span>
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#CCFF00] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#b3e600] transition-colors shadow-lg shadow-[#CCFF00]/15"
        >
          <span>Contact Om Parmar</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
