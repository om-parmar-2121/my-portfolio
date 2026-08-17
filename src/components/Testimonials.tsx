"use client";

import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative border-b border-white/[0.06] bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-neutral-400 mb-4">
              <span className="text-accent font-mono">04 //</span>
              <span className="tracking-widest uppercase">ENDORSEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display uppercase">
              What Founders Say.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-normal">
            Trusted by venture-backed founders, agency owners, and engineering leaders across the globe.
          </p>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-10 rounded-3xl bg-surface/80 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Project Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                    {item.projectTag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-neutral-200 text-base sm:text-lg leading-relaxed mb-8 italic font-light">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-mono">
                    {item.role} • <span className="text-accent">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
