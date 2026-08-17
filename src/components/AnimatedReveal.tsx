"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  blurAmount?: number;
  yOffset?: number;
  once?: boolean;
}

export const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  delay = 0,
  duration = 0.85,
  className = "",
  direction = "up",
  blurAmount = 14,
  yOffset = 36,
  once = true,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: yOffset, x: 0 };
      case "down":
        return { y: -yOffset, x: 0 };
      case "left":
        return { x: yOffset, y: 0 };
      case "right":
        return { x: -yOffset, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const initial = {
    opacity: 0,
    filter: `blur(${blurAmount}px)`,
    ...getInitialPosition(),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: "0px 0px -40px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export const AnimatedWords: React.FC<AnimatedWordsProps> = ({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.045,
  as: Component = "h2",
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        className="inline-flex flex-wrap justify-center items-center gap-x-[0.28em] gap-y-[0.1em] w-full text-center"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className={`inline-block ${wordClassName}`}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
};
