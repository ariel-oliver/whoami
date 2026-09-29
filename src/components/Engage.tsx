"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { engagements, profile } from "@/data/profile";
import { Reveal, SectionHeader } from "./Reveal";

export function Engage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <>
      <section id="engage" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-6 md:py-36">
        <SectionHeader
          eyebrow="How we can work together"
          title="Simple engagements. Clear outcomes."
          lead="Freelance or B2B contract, remote-first from Portugal, overlapping with EU and US hours."
        />
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {engagements.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.08} className="h-full">
              <div className="card relative flex h-full flex-col rounded-3xl p-8">
                <span className="font-mono text-xs text-dim">0{i + 1}</span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{e.name}</h3>
                <p className="mt-1 font-mono text-xs text-signal">{e.duration}</p>
                <p className="mt-4 text-muted">{e.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="relative scroll-mt-20 overflow-hidden px-4 py-28 md:py-44">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full [mask-image:radial-gradient(closest-side,black,transparent)] bg-[conic-gradient(from_0deg,rgba(125,211,252,0.25),rgba(129,140,248,0.3),rgba(232,121,249,0.25),rgba(125,211,252,0.25))] blur-3xl md:h-[720px] md:w-[720px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 font-mono text-xs tracking-[0.2em] text-accent uppercase">Let&apos;s build</p>
          <h2 className="text-gradient text-5xl leading-[1.02] font-semibold tracking-tight text-balance md:text-8xl">
            Have a platform to ship?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted md:text-xl">
            Tell me what you&apos;re building and where it hurts. We&apos;ll scope the fastest path to production together.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}?subject=Project%20inquiry`}
              className="group w-full rounded-full bg-ink px-8 py-4 font-medium text-black transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Email me <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full border border-white/15 px-8 py-4 font-medium transition-colors hover:bg-white/5 sm:w-auto"
            >
              Connect on LinkedIn
            </a>
          </div>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-6 font-mono text-sm text-dim transition-colors hover:text-ink"
          >
            {copied ? "✓ copied to clipboard" : profile.email}
          </button>
        </Reveal>
      </section>
    </>
  );
}
