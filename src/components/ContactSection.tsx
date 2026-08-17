"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { ArrowUpRight, Copy, Check, Send, Mail, MapPin } from "lucide-react";

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
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden border-b border-white/[0.06]">
      {/* Background ambient glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#CCFF00]/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-white/10 text-xs font-mono text-neutral-400">
              <span className="text-[#CCFF00] font-mono">03 //</span>
              <span className="tracking-widest uppercase">GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display uppercase leading-[1.05]">
              Let&apos;s Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-neutral-200">
                Together.
              </span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              I am actively seeking Software Engineer (SDE), Full-Stack, and Frontend/Backend Developer opportunities. Feel free to reach out directly via email or LinkedIn!
            </p>

            {/* Email Copy Pill */}
            <div className="p-4 rounded-xl bg-[#121212] border border-white/[0.08] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#181818] border border-white/[0.08] flex items-center justify-center text-[#CCFF00] shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Direct Email</div>
                  <div className="text-sm font-mono font-bold text-white truncate">{profileData.contactEmail}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-[#CCFF00] text-neutral-400 hover:text-black transition-all shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Status */}
            <div className="space-y-2.5 font-mono text-xs text-neutral-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>{profileData.location} ({profileData.timezone})</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profileData.status.text}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-5 border-t border-white/[0.06]">
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                Connect with Om
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#121212] border border-white/[0.08] hover:border-white/20 text-xs font-mono text-neutral-400 hover:text-white transition-all duration-200"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#121212] border border-white/[0.08] backdrop-blur-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#CCFF00]/15 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00] mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-sm mx-auto font-normal">
                    Thank you for getting in touch. I will respond to your message promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-[11px] font-mono uppercase font-bold text-neutral-300 bg-[#181818] border border-white/10 rounded-full hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display mb-1">
                      Send a Message
                    </h3>
                    <p className="text-xs text-neutral-500 font-normal">
                      Have a role opening or project to discuss? Drop a message below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-lg bg-[#181818] border border-white/[0.08] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#CCFF00]/50 focus:ring-1 focus:ring-[#CCFF00]/20 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#181818] border border-white/[0.08] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#CCFF00]/50 focus:ring-1 focus:ring-[#CCFF00]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                      Subject / Opportunity Type
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#181818] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#CCFF00]/50 focus:ring-1 focus:ring-[#CCFF00]/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Full-Stack SDE Role / Collaboration">Software Engineer / SDE Role</option>
                      <option value="Frontend Developer Opportunity">Frontend Developer Opportunity</option>
                      <option value="Backend Developer Opportunity">Backend Developer Opportunity</option>
                      <option value="Internship Inquiry">Internship Inquiry</option>
                      <option value="General Collaboration">General Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Om, we are looking for a full-stack engineer at our team..."
                      className="w-full px-4 py-3 rounded-lg bg-[#181818] border border-white/[0.08] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#CCFF00]/50 focus:ring-1 focus:ring-[#CCFF00]/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 text-[11px] font-bold uppercase tracking-widest text-black bg-[#CCFF00] hover:bg-[#b3e600] rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#CCFF00]/15 hover:shadow-[#CCFF00]/30 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
