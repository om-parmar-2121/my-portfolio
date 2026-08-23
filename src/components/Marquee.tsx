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
    "REST APIS",
    "DATA STRUCTURES & ALGORITHMS",
  ];

  return (
    <div className="relative w-full py-4 sm:py-5 bg-[#080808] border-y border-white/[0.06] overflow-hidden flex items-center">
      {/* Subtle side fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <div className="flex select-none whitespace-nowrap overflow-hidden items-center">
        <div className="animate-marquee flex items-center">
          {techStack.concat(techStack).map((text, index) => (
            <div key={index} className="inline-flex items-center mx-6 sm:mx-8 gap-6 sm:gap-8">
              <span className="text-sm sm:text-lg md:text-xl font-bold font-mono tracking-wider text-neutral-500 uppercase hover:text-[#CCFF00] transition-colors duration-200 leading-none">
                {text}
              </span>
              <span className="inline-flex items-center justify-center text-[#CCFF00]/50 select-none">
                <svg
                  className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current"
                  viewBox="0 0 24 24"
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
