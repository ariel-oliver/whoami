"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experience, profile } from "@/data/profile";
import { Reveal, SectionHeader } from "./Reveal";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <section id="journey" className="relative scroll-mt-20 border-t border-line bg-panel/40 py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Career journey"
          title={
            <>
              From help desk to <span className="text-aurora">AI-native</span> platforms.
            </>
          }
          lead={`${profile.yearsExperience}+ years, two countries, one direction: automate everything that can be automated.`}
        />

        <div ref={ref} className="relative ml-2 md:ml-0">
          {/* Rail + scroll-linked progress */}
          <div aria-hidden className="absolute top-2 bottom-2 left-0 w-px bg-line md:left-1/2" />
          <motion.div
            aria-hidden
            style={{ scaleY }}
            className="absolute top-2 bottom-2 left-0 w-px origin-top bg-gradient-to-b from-sky-400 via-indigo-400 to-fuchsia-400 md:left-1/2"
          />

          <ol>

          {experience.map((r, i) => {
            const right = i % 2 === 0;
            return (
              <li key={`${r.company}-${r.start}`} className="relative pb-14 pl-8 last:pb-0 md:grid md:grid-cols-2 md:pl-0">
                <span
                  aria-hidden
                  className={`absolute top-1.5 left-0 h-3 w-3 -translate-x-1/2 rounded-full border-2 md:left-1/2 ${i === 0 ? "border-signal bg-signal shadow-[0_0_20px_4px_rgba(52,211,153,0.5)]" : "border-accent bg-canvas"}`}
                />
                <Reveal
                  y={24}
                  className={right ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:row-start-1 md:pr-12 md:text-right"}
                >
                  <p className="font-mono text-xs text-dim">
                    {r.start} — {r.end}
                    {r.end === "Present" && <span className="ml-2 rounded-full bg-signal/15 px-2 py-0.5 text-signal">now</span>}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{r.company}</h3>
                  <p className="text-muted">
                    {r.title} · {r.location}
                  </p>
                  <ul className={`mt-4 space-y-1.5 text-sm text-ink/75 ${right ? "" : "md:ml-auto"}`}>
                    {r.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
          </ol>
        </div>
      </div>
    </section>
  );
}
