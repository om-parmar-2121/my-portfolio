"use client";

import React from "react";
import Link from "next/link";
import { postsData } from "@/data/posts";
import { ArrowUpRight, ArrowRight, Calendar, Clock } from "lucide-react";

export const BlogPreview: React.FC = () => {
  return (
    <section id="blog" className="py-24 sm:py-32 relative border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-neutral-400 mb-4">
              <span className="text-accent font-mono">05 //</span>
              <span className="tracking-widest uppercase">THOUGHTS & WRITINGS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display uppercase">
              Engineering Notes.
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-neutral-300 hover:text-accent tracking-wider transition-colors"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Post List */}
        <div className="space-y-4">
          {postsData.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block p-6 sm:p-8 rounded-2xl bg-surface border border-white/[0.06] hover:border-white/20 transition-all duration-300 hover:bg-surface-subtle"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  {/* Meta Tags */}
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                    <span className="text-accent">{post.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-neutral-500" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-500" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-neutral-400 line-clamp-1 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] group-hover:bg-accent flex items-center justify-center text-neutral-400 group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
