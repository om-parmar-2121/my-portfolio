"use client";

import React from "react";

export const Marquee: React.FC = () => {
  const techStack = [
    "REACT.JS",
    "TYPESCRIPT",
    "NODE.JS",
    "EXPRESS.JS",
    "MONGODB",
    "JAVASCRIPT",
    "TAILWIND CSS",
    "RECOIL",
    "REST APIS",
  ];

  return (
    <div className="relative w-full py-7 sm:py-8 bg-[#0A0A0A] border-y border-white/[0.06] overflow-hidden flex items-center">
      {/* Subtle side fade masks — color matched to bg-[#0A0A0A] */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      <div className="flex select-none whitespace-nowrap overflow-hidden items-center">
        <div className="animate-marquee flex items-center">
          {techStack.concat(techStack).map((text, index) => (
            <div key={index} className="inline-flex items-center mx-5 sm:mx-7 gap-5 sm:gap-7">
              <span className="text-lg sm:text-2xl md:text-3xl font-black font-display tracking-tight text-neutral-400 uppercase hover:text-[#CCFF00] transition-colors duration-200 leading-none flex items-center h-[1em]">
                {text}
              </span>
              {/* 4-point star — centered via matching h-[1em] flex container */}
              <span className="inline-flex items-center justify-center text-[#CCFF00]/70 select-none h-[1em] text-lg sm:text-2xl md:text-3xl">
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
