"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const text =
  "The next generation of infrastructure is written by engineers and agents working side by side. I build the platforms, pipelines and guardrails that let them ship safely — at any scale.";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

// Apple-style paragraph that lights up word by word as it scrolls through the viewport.
export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");

  return (
    <section className="mx-auto max-w-5xl px-4 py-24 md:px-6 md:py-40">
      <p ref={ref} className="text-3xl leading-tight font-semibold tracking-tight md:text-5xl lg:text-6xl">
        {words.map((w, i) => (
          <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
        ))}
      </p>
    </section>
  );
}
