"use client";

import React, { useState } from "react";
import Link from "next/link";
import { postsData } from "@/data/posts";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Search, Tag } from "lucide-react";

export default function BlogArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Architecture", "Design Systems", "Product Strategy"];

  const filtered = postsData.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-accent" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-neutral-400">
          <span className="text-accent font-mono">WRITINGS //</span>
          <span className="tracking-widest uppercase">TECHNICAL ARTICLES & THOUGHTS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display uppercase tracking-tight">
          Engineering Journal.
        </h1>
        <p className="text-neutral-400 text-base max-w-2xl font-normal">
          Essays and practical deep-dives on full-stack architecture, Next.js performance, micro-animations, and building sustainable software.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-accent text-black font-bold shadow-md shadow-accent/20"
                  : "bg-surface border border-white/10 text-neutral-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-surface border border-white/10 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Post Cards */}
      <div className="space-y-6">
        {filtered.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block p-8 rounded-3xl bg-surface border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:bg-surface-subtle"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
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

                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm sm:text-base text-neutral-400 line-clamp-2 leading-relaxed font-normal">
                  {post.excerpt}
                </p>
              </div>

              <div className="shrink-0 pt-2">
                <div className="w-12 h-12 rounded-full bg-white/[0.04] group-hover:bg-accent flex items-center justify-center text-neutral-400 group-hover:text-black transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
