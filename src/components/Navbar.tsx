"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
          ? "bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3.5">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white font-display"
          >
            <div className="w-8 h-8 rounded-lg bg-[#121212] border border-white/10 flex items-center justify-center group-hover:border-[#CCFF00]/60 transition-all duration-300">
              <span className="text-[#CCFF00] font-mono text-sm font-semibold">O</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-neutral-100 group-hover:text-[#CCFF00] transition-colors duration-300">
              {profileData.name}
            </span>
          </Link>

          {/* Availability Status Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-white/[0.08] text-[11px] font-mono text-neutral-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#CCFF00]"></span>
            </span>
            <span>{profileData.status.text}</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-0.5 bg-[#141414]/60 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/[0.08]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-[13px] font-medium text-neutral-400 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-black bg-[#CCFF00] hover:bg-[#b3e600] rounded-full transition-all duration-300 shadow-lg shadow-[#CCFF00]/20 hover:shadow-[#CCFF00]/35 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#121212] border border-white/10 text-neutral-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-5">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212] border border-white/10 text-[11px] font-mono text-neutral-400 w-fit">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#CCFF00]"></span>
            </span>
            <span>{profileData.status.text}</span>
          </div>

          <div className="flex flex-col space-y-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-200 hover:text-[#CCFF00] py-2.5 border-b border-white/[0.04] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 w-full py-3 text-[11px] font-bold uppercase tracking-wider text-black bg-[#CCFF00] rounded-xl transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
