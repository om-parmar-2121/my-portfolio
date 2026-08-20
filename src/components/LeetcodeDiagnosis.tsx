"use client";

import React, { useState, useEffect } from "react";
import { STATS_CONFIG, FALLBACK_LEETCODE, LeetCodeStatsData } from "@/data/stats";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const LeetcodeDiagnosis: React.FC = () => {
  const [stats, setStats] = useState<LeetCodeStatsData>(FALLBACK_LEETCODE);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/leetcode?username=${STATS_CONFIG.leetcode.username}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            setStats({
              totalSolved: data.totalSolved,
              totalQuestions: data.totalQuestions,
              easySolved: data.easySolved,
              totalEasy: data.totalEasy,
              mediumSolved: data.mediumSolved,
              totalMedium: data.totalMedium,
              hardSolved: data.hardSolved,
              totalHard: data.totalHard,
              attempting: FALLBACK_LEETCODE.attempting,
              acceptanceRate: FALLBACK_LEETCODE.acceptanceRate,
              ranking: data.ranking ? `#${Number(data.ranking).toLocaleString()}` : FALLBACK_LEETCODE.ranking,
              streakDays: FALLBACK_LEETCODE.streakDays,
            });
          }
        }
      } catch { /* Uses fallback */ }
      finally { setLoading(false); }
    };
    fetchData();
  }, []);

  // Full circle gauge
  const size = 140;
  const strokeWidth = 10;
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const solvedPct = stats.totalSolved / stats.totalQuestions;
  const strokeDash = solvedPct * circumference;

  const diffRows = [
    { label: "Easy",   solved: stats.easySolved,   total: stats.totalEasy,   pct: stats.totalEasy   > 0 ? (stats.easySolved   / stats.totalEasy)   * 100 : 0 },
    { label: "Medium", solved: stats.mediumSolved,  total: stats.totalMedium, pct: stats.totalMedium > 0 ? (stats.mediumSolved  / stats.totalMedium) * 100 : 0 },
    { label: "Hard",   solved: stats.hardSolved,    total: stats.totalHard,   pct: stats.totalHard   > 0 ? (stats.hardSolved    / stats.totalHard)   * 100 : 0 },
  ];

  return (
    <div className="rounded-2xl bg-[#0D0D0D] border border-white/[0.08] hover:border-[#CCFF00]/25 p-6 transition-all duration-300 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-white font-display tracking-tight leading-none">LeetCode</p>
            <p className="text-[10px] font-mono text-neutral-500 mt-0.5">Problem Solving</p>
          </div>
        </div>
        <a
          href={STATS_CONFIG.leetcode.profileUrl}
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
            {/* Track */}
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1C1C1C" strokeWidth={strokeWidth} />
            {/* Progress */}
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
            <span className="text-2xl font-black text-white font-display leading-none">{stats.totalSolved}</span>
            <span className="text-[10px] font-mono text-neutral-500 mt-0.5">/ {stats.totalQuestions.toLocaleString()}</span>
            <div className="flex items-center gap-1 mt-1.5 text-[#CCFF00]">
              <CheckCircle2 className="w-3 h-3" />
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider">Solved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Difficulty Rows */}
      <div className="space-y-3 flex-1">
        {diffRows.map((row) => (
          <div key={row.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono text-neutral-400">{row.label}</span>
              <div className="flex items-baseline gap-1 font-mono">
                <span className="text-xs font-bold text-white">{row.solved}</span>
                <span className="text-[10px] text-neutral-600">/ {row.total}</span>
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
          Acceptance: <span className="text-white font-bold">{stats.acceptanceRate}</span>
        </span>
        <span className="text-neutral-500">
          Rank: <span className="text-white font-bold">{stats.ranking}</span>
        </span>
      </div>
    </div>
  );
};
