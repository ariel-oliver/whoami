"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { metrics } from "@/data/profile";
import { Reveal } from "./Reveal";

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section aria-label="Impact in numbers" className="border-y border-line bg-panel/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal
            key={m.label}
            delay={i * 0.08}
            className={`border-line px-4 py-10 md:px-8 md:py-14 ${i % 2 === 1 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
          >
            <div className="text-gradient text-5xl font-semibold tracking-tight md:text-6xl">
              <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
            </div>
            <div className="mt-2 font-medium text-ink">{m.label}</div>
            <div className="mt-1 text-sm text-dim">{m.detail}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
