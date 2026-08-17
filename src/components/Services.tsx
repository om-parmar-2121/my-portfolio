"use client";

import React, { useState } from "react";
import { servicesData, ServiceItem } from "@/data/services";
import { Code2, Layout, Zap, Rocket, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-accent" />,
  Layout: <Layout className="w-6 h-6 text-accent" />,
  Zap: <Zap className="w-6 h-6 text-accent" />,
  Rocket: <Rocket className="w-6 h-6 text-accent" />,
};

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 sm:py-32 relative border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-neutral-400 mb-4">
              <span className="text-accent font-mono">02 //</span>
              <span className="tracking-widest uppercase">CAPABILITIES & SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display uppercase">
              How I Can Help Your Product.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-normal">
            Specialized engineering and design services tailored for founders, high-growth startups, and visionary teams looking to ship best-in-class digital experiences.
          </p>
        </div>

        {/* Services 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 sm:p-10 rounded-3xl bg-surface/70 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Card top */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-surface-subtle border border-white/10 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                    {iconMap[service.icon] || <Code2 className="w-6 h-6 text-accent" />}
                  </div>
                  <span className="font-mono text-sm font-bold text-neutral-500 group-hover:text-accent transition-colors">
                    /{service.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Sub-tag pills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables List */}
              <div className="pt-6 border-t border-white/[0.06] space-y-2.5">
                <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
                  Key Deliverables:
                </p>
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}

                <div className="pt-6 mt-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-neutral-300 group-hover:text-accent tracking-wider transition-colors"
                  >
                    <span>Inquire about {service.title.split(" ")[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
