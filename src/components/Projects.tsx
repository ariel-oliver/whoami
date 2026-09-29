"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { projects, type Project } from "@/data/profile";
import { Reveal, SectionHeader } from "./Reveal";

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <Reveal>
      <article
        ref={ref}
        className="card group relative grid overflow-hidden rounded-[2rem] md:grid-cols-5"
      >
        {/* Metric panel */}
        <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden p-8 md:col-span-2 md:min-h-[360px] md:p-10">
          <motion.div
            aria-hidden
            style={{ y: glowY }}
            className={`absolute -inset-10 bg-gradient-to-br ${p.accent} opacity-25 blur-3xl transition-opacity duration-700 group-hover:opacity-40`}
          />
          <div className="relative flex items-center justify-between font-mono text-xs text-muted">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{p.year}</span>
          </div>
          <div className="relative">
            <div
              className={`bg-gradient-to-br ${p.accent} bg-clip-text text-7xl font-semibold tracking-tighter text-transparent md:text-8xl`}
            >
              {p.metric}
            </div>
            <div className="mt-1 text-ink/80">{p.metricLabel}</div>
          </div>
        </div>

        {/* Story panel */}
        <div className="relative border-t border-line p-8 md:col-span-3 md:border-t-0 md:border-l md:p-10">
          <p className="font-mono text-xs tracking-wider text-accent uppercase">{p.client}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-balance md:text-3xl">{p.title}</h3>
          <p className="mt-2 text-muted">{p.headline}</p>
          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="mb-1 text-dim">Challenge</dt>
              <dd className="text-ink/85">{p.problem}</dd>
            </div>
            <div>
              <dt className="mb-1 text-dim">Solution</dt>
              <dd className="text-ink/85">{p.solution}</dd>
            </div>
          </dl>
          <ul className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <li key={t} className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Selected work"
          title="Outcomes, not tickets."
          lead="A few platforms I've designed and delivered. Numbers come from production, not slides."
        />
        <div className="space-y-6 md:space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
