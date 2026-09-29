"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { services, type Service } from "@/data/profile";
import { Icon } from "./Icon";
import { Reveal, SectionHeader } from "./Reveal";

// Card with a cursor-following spotlight, like Apple's product tiles.
function ServiceCard({ s, featured }: { s: Service; featured: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const bg = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(124,140,255,0.16), transparent 60%)`;

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      onPointerLeave={() => {
        mx.set(-200);
        my.set(-200);
      }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`card group relative h-full overflow-hidden rounded-3xl p-7 md:p-8`}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: bg }} />
      {featured && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.25),transparent_65%)] blur-2xl"
        />
      )}
      <div className="relative">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white/5 text-accent">
          <Icon name={s.icon} />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
        <p className="mt-2 max-w-md text-muted">{s.pitch}</p>
        <ul className="mt-6 space-y-2 text-sm text-ink/80">
          {s.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-signal" />
              {o}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-6 md:py-36">
      <SectionHeader
        eyebrow="What I do for clients"
        title="Senior platform engineering, on demand."
        lead="Bring me in for a focused project or as your fractional platform team. Every engagement ships working infrastructure, documentation and a team that can run it."
      />
      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08} className={i === 0 ? "md:col-span-2" : i === services.length - 1 ? "md:col-span-3" : ""}>
            <ServiceCard s={s} featured={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
