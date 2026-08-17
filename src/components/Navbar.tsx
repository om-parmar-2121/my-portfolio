"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#work" },
    { name: "Tech Stack", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/85 backdrop-blur-2xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/60"
          : "bg-[#080808]/60 backdrop-blur-xl border-b border-white/[0.04] py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-[#CCFF00] group-hover:border-[#CCFF00] transition-all duration-300">
            <span className="text-[#CCFF00] group-hover:text-black font-mono text-xs font-bold transition-colors">O</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-[#CCFF00] transition-colors">
              {profileData.name}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#CCFF00]"></span>
              </span>
              <span>{profileData.status.text}</span>
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions: Resume & Connect */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profileData.resumeUrl || "/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200 flex items-center gap-1"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
          </a>

          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b3e600] rounded-full transition-all duration-300 shadow-lg shadow-[#CCFF00]/15 hover:shadow-[#CCFF00]/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/[0.06] border border-white/10 text-neutral-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#080808]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="text-xs font-mono text-neutral-400">Navigation</span>
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#CCFF00]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
                {profileData.status.text}
              </span>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-neutral-200 hover:text-[#CCFF00] py-2.5 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2.5">
              <a
                href={profileData.resumeUrl || "/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-neutral-300 bg-white/[0.04] border border-white/[0.08] rounded-xl transition-colors"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#CCFF00] rounded-xl transition-colors shadow-lg shadow-[#CCFF00]/15"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
