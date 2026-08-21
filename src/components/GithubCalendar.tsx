"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ContributionDay, STATS_CONFIG } from "@/data/stats";
import { Github, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CalendarData {
  totalContributions: number;
  days: ContributionDay[];
}

interface MonthLabel {
  name: string;
  colIndex: number;
}

export const GithubCalendar: React.FC = () => {
  const [calendarData, setCalendarData] = useState<CalendarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{
    day: ContributionDay;
    x: number;
    y: number;
    align: "left" | "center" | "right";
  } | null>(null);

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/github?username=${STATS_CONFIG.github.username}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success) setCalendarData(data);
        }
      } catch { /* silent fallback */ }
      finally { setLoading(false); }
    };
    fetchData();
  }, []);

  // Build calendar weeks and calculate dynamic month header positions from actual date sequence
  const buildCalendar = useCallback((days: ContributionDay[]) => {
    if (!days || days.length === 0) return { weeks: [], monthLabels: [] };

    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    // Pad the first week based on starting weekday of the first record (0 = Sun, 1 = Mon...)
    const firstDate = new Date(days[0].date);
    const firstDayOfWeek = firstDate.getDay();

    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push({ date: "", count: 0, level: 0 });
    }

    days.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: "", count: 0, level: 0 });
      }
      weeks.push(currentWeek);
    }

    // Dynamic month labels derived from actual dates in each week column
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthLabels: MonthLabel[] = [];
    let lastMonth = -1;

    weeks.forEach((week, wIdx) => {
      const validDay = week.find((d) => d.date);
      if (validDay) {
        const d = new Date(validDay.date);
        const m = d.getMonth();
        if (m !== lastMonth) {
          if (monthLabels.length === 0 || wIdx - monthLabels[monthLabels.length - 1].colIndex >= 3) {
            monthLabels.push({ name: monthNames[m], colIndex: wIdx });
            lastMonth = m;
          }
        }
      }
    });

    return { weeks, monthLabels };
  }, []);

  const daysLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:  return "bg-[#1A2A00] border-[#253D00]";
      case 2:  return "bg-[#3D6600] border-[#4A7A00]";
      case 3:  return "bg-[#80B300] border-[#99CC00]";
      case 4:  return "bg-[#CCFF00] border-[#DAFF40] shadow-[0_0_8px_rgba(204,255,0,0.35)]";
      default: return "bg-[#141414] border-[#1C1C1C]";
    }
  };

  const { weeks, monthLabels } = calendarData
    ? buildCalendar(calendarData.days)
    : { weeks: [], monthLabels: [] };

  const longestStreak = calendarData
    ? (() => {
        let max = 0, cur = 0;
        calendarData.days.forEach((d) => {
          if (d.count > 0) {
            cur++;
            max = Math.max(max, cur);
          } else {
            cur = 0;
          }
        });
        return max;
      })()
    : 0;

  return (
    <div className="rounded-2xl bg-[#0D0D0D] border border-white/[0.08] p-5 sm:p-6 lg:p-7 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00]">
            <Github className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-bold text-white font-display tracking-tight leading-none">
              GitHub Contributions
            </p>
            <p className="text-[10px] font-mono text-neutral-500 mt-0.5">
              @{STATS_CONFIG.github.username}
            </p>
          </div>
        </div>

        <a
          href={STATS_CONFIG.github.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-[#CCFF00]/10 border border-white/[0.07] hover:border-[#CCFF00]/30 text-[11px] font-mono text-neutral-400 hover:text-white transition-all group"
        >
          <span>Profile</span>
          <ArrowUpRight className="w-3 h-3 group-hover:text-[#CCFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>

      {/* Grid area */}
      {loading ? (
        <div className="flex items-center justify-center h-32">
          <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-500">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-[#CCFF00]/20 border-t-[#CCFF00]/70 rounded-full"
            />
            Loading contributions...
          </div>
        </div>
      ) : calendarData ? (
        <>
          {/* Stats row above calendar */}
          <div className="flex items-center gap-6 mb-4">
            <div className="text-xs font-mono">
              <span className="text-neutral-500">Total</span>
              {" "}
              <span className="text-white font-bold">{calendarData.totalContributions.toLocaleString()}</span>
            </div>
            <div className="text-xs font-mono">
              <span className="text-neutral-500">Longest streak</span>
              {" "}
              <span className="text-[#CCFF00] font-bold">{longestStreak} days</span>
            </div>
          </div>

          {/* Fully responsive Grid container — NO scrollbars */}
          <div ref={gridRef} className="w-full relative pt-1">
            {/* Dynamic Month Header Labels matching actual week columns */}
            <div className="relative h-4 mb-1 pl-5 sm:pl-6 pr-1 w-full text-[9px] font-mono text-neutral-500 select-none">
              {monthLabels.map((m, i) => (
                <span
                  key={`${m.name}-${i}`}
                  className="absolute top-0"
                  style={{
                    left: `calc(${(m.colIndex / (weeks.length || 53)) * 100}% + 22px)`,
                  }}
                >
                  {m.name}
                </span>
              ))}
            </div>

            {/* Matrix with Day Labels */}
            <div className="flex gap-1.5 items-center w-full">
              {/* Day labels column */}
              <div className="flex flex-col justify-between h-full py-[1px] w-4 sm:w-5 shrink-0 select-none">
                {daysLabels.map((d, i) => (
                  <span
                    key={i}
                    className="text-[8px] font-mono text-neutral-600 leading-none h-[11px] sm:h-[13px] flex items-center"
                  >
                    {d}
                  </span>
                ))}
              </div>

              {/* 53 Columns Grid — Every box is a guaranteed 1:1 perfect square */}
              <div className="grid grid-flow-col grid-rows-7 gap-[2px] sm:gap-[3px] w-full flex-1">
                {weeks.flatMap((week, wIdx) =>
                  week.map((day, dIdx) => {
                    if (!day.date) {
                      return (
                        <div
                          key={`empty-${wIdx}-${dIdx}`}
                          className="w-full aspect-square opacity-0 pointer-events-none"
                        />
                      );
                    }

                    return (
                      <motion.div
                        key={day.date}
                        whileHover={{ scale: 1.5 }}
                        onMouseEnter={(e) => {
                          if (!gridRef.current) return;
                          const gridRect = gridRef.current.getBoundingClientRect();
                          const cellRect = e.currentTarget.getBoundingClientRect();
                          const xPos = cellRect.left - gridRect.left + cellRect.width / 2;
                          const gridWidth = gridRect.width;

                          let align: "left" | "center" | "right" = "center";
                          if (xPos < 90) align = "left";
                          else if (xPos > gridWidth - 90) align = "right";

                          setHoveredDay({
                            day,
                            x: xPos,
                            y: cellRect.top - gridRect.top,
                            align,
                          });
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-full aspect-square rounded-[2px] sm:rounded-[2.5px] border cursor-pointer transition-colors ${getCellColor(
                          day.level
                        )}`}
                      />
                    );
                  })
                )}
              </div>
            </div>

            {/* Floating Tooltip anchored right on the square */}
            <AnimatePresence>
              {hoveredDay && (
                <motion.div
                  initial={{ opacity: 0, y: 2, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  className={`absolute z-50 pointer-events-none -translate-y-full px-2.5 py-1.5 rounded-lg bg-[#141414] border border-white/[0.15] text-[10px] font-mono shadow-2xl whitespace-nowrap mb-1.5 ${
                    hoveredDay.align === "left"
                      ? "translate-x-0"
                      : hoveredDay.align === "right"
                      ? "-translate-x-full"
                      : "-translate-x-1/2"
                  }`}
                  style={{ left: hoveredDay.x, top: hoveredDay.y - 4 }}
                >
                  <span className="text-[#CCFF00] font-bold">{hoveredDay.day.count}</span>
                  <span className="text-neutral-400"> contribution{hoveredDay.day.count !== 1 ? "s" : ""} on </span>
                  <span className="text-white">{hoveredDay.day.date}</span>

                  {/* Pointer arrow */}
                  <div
                    className={`absolute top-full -mt-[1px] border-4 border-transparent border-t-[#141414] ${
                      hoveredDay.align === "left"
                        ? "left-3"
                        : hoveredDay.align === "right"
                        ? "right-3"
                        : "left-1/2 -translate-x-1/2"
                    }`}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-1.5 mt-4 pt-4 border-t border-white/[0.06]">
            <span className="text-[9px] font-mono text-neutral-600">Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <span key={l} className={`w-[10px] h-[10px] rounded-[2px] border ${getCellColor(l)}`} />
            ))}
            <span className="text-[9px] font-mono text-neutral-600">More</span>
          </div>
        </>
      ) : (
        <div className="text-center py-12 text-xs font-mono text-neutral-500">
          Unable to load contribution data
        </div>
      )}
    </div>
  );
};
