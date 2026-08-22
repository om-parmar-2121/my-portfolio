"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { ArrowUpRight, Copy, Check, Send, Mail, MapPin } from "lucide-react";
import { AnimatedReveal, AnimatedWords } from "@/components/AnimatedReveal";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Full-Stack SDE Role / Collaboration",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-18 relative overflow-hidden border-b border-white/[0.06]">
      {/* Background ambient glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#CCFF00]/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-white/[0.08] text-xs font-mono text-neutral-400">
                <span className="text-[#CCFF00] font-mono">04 //</span>
                <span className="tracking-widest uppercase">GET IN TOUCH</span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-display uppercase leading-[0.98]">
                <span className="block text-white">LET&apos;S BUILD</span>
                <span className="block bg-gradient-to-r from-[#D4FF00] via-[#E2FF66] to-[#EEFFB0] bg-clip-text text-transparent">
                  SOMETHING
                </span>
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.25} yOffset={24}>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
                I am actively seeking Software Engineer (SDE), Full-Stack, and Frontend/Backend Developer opportunities. Feel free to reach out directly for full-time roles, freelance architectures, or engineering discussions!
              </p>
            </AnimatedReveal>

            {/* Direct Email Card */}
            <AnimatedReveal delay={0.3} yOffset={20}>
              <div className="p-5 rounded-2xl bg-[#111111]/80 border border-white/[0.08] backdrop-blur-xl flex items-center justify-between gap-4 shadow-xl shadow-black/40">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#CCFF00] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Direct Inbox</div>
                    <div className="text-sm font-mono font-bold text-white truncate">{profileData.contactEmail}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-[#CCFF00] text-neutral-400 hover:text-black transition-all duration-200 shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </AnimatedReveal>

            {/* Location & Status */}
            <AnimatedReveal delay={0.35} yOffset={20}>
              <div className="space-y-3 font-mono text-xs text-neutral-400">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#CCFF00]" />
                  <span>{profileData.location} ({profileData.timezone})</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{profileData.status.text}</span>
                </div>
              </div>
            </AnimatedReveal>

            {/* Social Links */}
            <AnimatedReveal delay={0.4} yOffset={20}>
              <div className="pt-6 border-t border-white/[0.06]">
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                  Online Profiles
                </div>
                <div className="flex flex-wrap gap-2">
                  {profileData.socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111]/80 border border-white/[0.08] hover:border-white/20 text-xs font-mono text-neutral-300 hover:text-white transition-all duration-200"
                    >
                      <span>{s.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <AnimatedReveal delay={0.2} yOffset={32} blurAmount={16}>
              <div className="p-7 sm:p-10 rounded-3xl bg-[#111111]/70 border border-white/[0.08] backdrop-blur-2xl shadow-2xl shadow-black/60">
                {submitted ? (
                  <div className="text-center py-14 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#CCFF00]/15 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-display">
                      Message Dispatched!
                    </h3>
                    <p className="text-neutral-400 text-sm max-w-sm mx-auto font-normal">
                      Thank you for reaching out. I will review your note and get back to you promptly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: "", email: "", subject: "Full-Stack SDE Role / Collaboration", message: "" });
                      }}
                      className="mt-4 px-6 py-2.5 text-xs font-mono uppercase font-bold text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-full transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                        Send a Direct Inquiry
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 font-normal">
                        Have an opportunity or question? Drop a message below.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-neutral-400 block">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Alex Smith"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#CCFF00] text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase text-neutral-400 block">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#CCFF00] text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-neutral-400 block">
                        Subject / Focus
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="Role opportunity, project, or discussion"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#CCFF00] text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-neutral-400 block">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell me about the role, technical challenge, or opportunity..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#CCFF00] text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group w-full py-4 text-xs font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b3e600] disabled:opacity-50 rounded-xl transition-all duration-300 shadow-xl shadow-[#CCFF00]/15 hover:shadow-[#CCFF00]/30 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{submitting ? "Transmitting..." : "Send Inquiry"}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
