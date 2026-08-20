"use client";

import React, { useState, useEffect } from "react";
import { STATS_CONFIG, FALLBACK_CODEFORCES, CodeforcesStatsData } from "@/data/stats";
import { ArrowUpRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

export const CodeforcesDiagnosis: React.FC = () => {
  const [stats, setStats] = useState<CodeforcesStatsData>(FALLBACK_CODEFORCES);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/codeforces?handle=${STATS_CONFIG.codeforces.handle}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            setStats({
              handle: data.handle,
              currentRating: data.currentRating,
              maxRating: data.maxRating,
              rank: data.rank,
              maxRank: data.maxRank,
              rankColor: "#CCFF00",
              totalSolved: data.totalSolved,
              contestsCount: data.contestsCount,
              div2Solved: data.div2Solved,
              div3Solved: data.div3Solved,
              div4Solved: data.div4Solved,
            });
          }
        }
      } catch { /* Uses fallback */ }
      finally { setLoading(false); }
    };
    fetchData();
  }, []);

  // Full circle gauge — max meaningful rating ~2000
  const size = 140;
  const strokeWidth = 10;
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const ratingMax = 2000;
  const ratingPct = Math.min(stats.currentRating / ratingMax, 1);
  const strokeDash = ratingPct * circumference;

  const totalDivSolved = stats.div2Solved + stats.div3Solved + stats.div4Solved || 1;
  const divRows = [
    { label: "Div. 2", count: stats.div2Solved, pct: (stats.div2Solved / totalDivSolved) * 100 },
    { label: "Div. 3", count: stats.div3Solved, pct: (stats.div3Solved / totalDivSolved) * 100 },
    { label: "Div. 4", count: stats.div4Solved, pct: (stats.div4Solved / totalDivSolved) * 100 },
  ];

  return (
    <div className="rounded-2xl bg-[#0D0D0D] border border-white/[0.08] hover:border-[#CCFF00]/25 p-6 transition-all duration-300 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-3 0v-12a1.5 1.5 0 0 1 1.5-1.5zM12 3a1.5 1.5 0 0 1 1.5 1.5v16.5a1.5 1.5 0 0 1-3 0V4.5A1.5 1.5 0 0 1 12 3zm7.5 7.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-white font-display tracking-tight leading-none">Codeforces</p>
            <p className="text-[10px] font-mono text-neutral-500 mt-0.5">Competitive Programming</p>
          </div>
        </div>
        <a
          href={STATS_CONFIG.codeforces.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full bg-white/[0.04] hover:bg-[#CCFF00]/10 border border-white/[0.07] hover:border-[#CCFF00]/30 text-neutral-500 hover:text-[#CCFF00] transition-all group"
        >
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Centered Donut Gauge */}
      <div className="flex justify-center mb-6">
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="-rotate-90">
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1C1C1C" strokeWidth={strokeWidth} />
            <motion.circle
              cx={size / 2} cy={size / 2} r={r}
              fill="none" stroke="#CCFF00" strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: mounted ? circumference - strokeDash : circumference }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            />
          </svg>
          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-black text-white font-display leading-none">{stats.currentRating}</span>
            <span className="text-[10px] font-mono text-neutral-500 mt-0.5">rating</span>
            <div className="flex items-center gap-1 mt-1.5 text-[#CCFF00]">
              <Shield className="w-3 h-3" />
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider capitalize">{stats.rank}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Division Rows */}
      <div className="space-y-3 flex-1">
        {divRows.map((row) => (
          <div key={row.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono text-neutral-400">{row.label}</span>
              <div className="flex items-baseline gap-1 font-mono">
                <span className="text-xs font-bold text-white">{row.count}</span>
                <span className="text-[10px] text-neutral-600">solved</span>
              </div>
            </div>
            <div className="h-[3px] rounded-full bg-[#1C1C1C] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[#CCFF00]"
                initial={{ width: 0 }}
                animate={{ width: mounted ? `${row.pct}%` : 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono">
        <span className="text-neutral-500">
          Contests: <span className="text-white font-bold">{stats.contestsCount}</span>
        </span>
        <span className="text-neutral-500">
          Max Rating: <span className="text-white font-bold">{stats.maxRating}</span>
        </span>
      </div>
    </div>
  );
};
