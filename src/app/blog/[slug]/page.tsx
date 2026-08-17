import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { postsData } from "@/data/posts";
import { profileData } from "@/data/profile";
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const post = postsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-accent" />
          <span>Back to Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-6 mb-12">
        <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
          <span className="px-3 py-1 rounded-full bg-surface border border-white/10 text-accent">
            {post.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-neutral-500" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-neutral-500" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display leading-tight tracking-tight">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author Bio Banner */}
        <div className="flex items-center gap-4 py-4 border-y border-white/[0.08] my-6">
          <div className="w-10 h-10 rounded-full bg-surface-subtle border border-white/10 flex items-center justify-center font-bold text-accent font-display text-sm">
            M
          </div>
          <div>
            <div className="text-sm font-bold text-white font-display">{profileData.name}</div>
            <div className="text-xs text-neutral-400 font-mono">Software Engineer & Product Architect</div>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="rounded-3xl overflow-hidden border border-white/10 mb-12 shadow-2xl">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full aspect-[16/9] object-cover"
        />
      </div>

      {/* Article Body */}
      <div className="space-y-8 text-neutral-200 text-base sm:text-lg leading-relaxed font-normal mb-16">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="text-balance">
            {paragraph}
          </p>
        ))}

        {/* Highlight Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface border-l-4 border-accent space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            Key Architecture Takeaway
          </div>
          <p className="text-sm sm:text-base text-neutral-200 italic font-light">
            "Performance is not an afterthought or a final sprint optimization — it is a structural architecture decision made in the earliest wireframing and data-fetching models."
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 text-accent" />
          <span>All Articles</span>
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors"
        >
          <span>Work With Me</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
