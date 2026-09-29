"use client";

import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 32, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, lead }: { eyebrow: string; title: React.ReactNode; lead?: string }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
      <p className="mb-4 font-mono text-xs tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
      <h2 className="text-gradient text-4xl font-semibold tracking-tight text-balance md:text-6xl">{title}</h2>
      {lead && <p className="mx-auto mt-5 max-w-2xl text-lg text-pretty text-muted md:text-xl">{lead}</p>}
    </Reveal>
  );
}
