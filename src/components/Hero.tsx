"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "@/data/profile";
import { AgentConsole } from "./AgentConsole";

const ease = [0.16, 1, 0.3, 1] as const;
const headline = ["Platforms", "that", "ship", "themselves."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32">
      {/* Ambient layers */}
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,140,255,0.35),transparent_65%)] blur-3xl md:h-[760px] md:w-[760px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[30%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.22),transparent_65%)] blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ y, opacity, scale }} className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.a
          href="#engage"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="glass mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-ink md:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          {profile.availability}
          <span aria-hidden>→</span>
        </motion.a>

        <h1 className="mx-auto max-w-5xl text-center text-[13vw] leading-[0.95] font-semibold tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          {headline.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.1 + i * 0.09, ease }}
              className={`inline-block pr-[0.22em] last:pr-0 ${i === headline.length - 1 ? "text-aurora" : "text-gradient"}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-pretty text-muted md:mt-8 md:text-xl"
        >
          I&apos;m <span className="text-ink">{profile.name}</span>, a {profile.role.toLowerCase()} with{" "}
          {profile.yearsExperience}+ years building cloud platforms on AWS, Azure and GCP — now with AI agents in the
          loop.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group w-full rounded-full bg-ink px-7 py-3.5 text-center font-medium text-black transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Start a project <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#work"
            className="w-full rounded-full border border-white/15 px-7 py-3.5 text-center font-medium text-ink transition-colors hover:bg-white/5 sm:w-auto"
          >
            See the work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 18 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.4, delay: 0.85, ease }}
          style={{ transformPerspective: 1200 }}
          className="mx-auto mt-16 max-w-3xl md:mt-20"
        >
          <AgentConsole />
        </motion.div>
      </motion.div>
    </section>
  );
}
