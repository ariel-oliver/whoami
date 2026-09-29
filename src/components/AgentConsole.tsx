"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type Line = { kind: "cmd" | "agent" | "ok" | "info"; text: string };

// A short scripted agent session. Each step mirrors real work from the CV.
const script: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "info", text: "arielson · platform engineer · cloud, devops & ai" },
  { kind: "cmd", text: 'agent run "provision platform for new client"' },
  { kind: "agent", text: "planning with terragrunt across 16 aws accounts…" },
  { kind: "ok", text: "landing zone ready · deploy time −90%" },
  { kind: "agent", text: "reconciling clusters via argo cd + flux…" },
  { kind: "ok", text: "eks migrated · zero downtime" },
  { kind: "agent", text: "tuning ci with buildkit cache + parallel stages…" },
  { kind: "ok", text: "builds 70% faster · $10k/yr saved" },
  { kind: "cmd", text: "mcp connect --ops --review --docs" },
  { kind: "ok", text: "agents online. ready for your project." },
];

const prefix: Record<Line["kind"], React.ReactNode> = {
  cmd: <span className="text-signal">❯</span>,
  agent: <span className="text-accent">◆</span>,
  ok: <span className="text-signal">✓</span>,
  info: <span className="text-dim">·</span>,
};

const color: Record<Line["kind"], string> = {
  cmd: "text-ink",
  agent: "text-muted",
  ok: "text-ink",
  info: "text-muted",
};

export function AgentConsole() {
  const reduce = useReducedMotion();
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Keep the newest line in view, like a real terminal.
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lineIdx, charIdx]);

  useEffect(() => {
    if (reduce) {
      setLineIdx(script.length);
      return;
    }
    if (lineIdx >= script.length) {
      const restart = setTimeout(() => {
        setLineIdx(0);
        setCharIdx(0);
      }, 5000);
      return () => clearTimeout(restart);
    }
    const line = script[lineIdx];
    // Commands are "typed"; agent output streams in faster, like tokens.
    if (charIdx < line.text.length) {
      const step = line.kind === "cmd" ? 1 : 3;
      const t = setTimeout(() => setCharIdx((c) => c + step), line.kind === "cmd" ? 45 : 18);
      return () => clearTimeout(t);
    }
    const pause = line.kind === "cmd" ? 350 : line.kind === "agent" ? 700 : 450;
    const t = setTimeout(() => {
      setLineIdx((i) => i + 1);
      setCharIdx(0);
    }, pause);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx, reduce]);

  const visible = script.slice(0, lineIdx);
  const current = lineIdx < script.length ? script[lineIdx] : null;

  return (
    <div className="relative w-full">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
      <div className="relative overflow-hidden rounded-2xl bg-panel/90 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-dim">agent@platform — zsh</span>
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-signal">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            LIVE
          </span>
        </div>
        <div
          ref={bodyRef}
          className="h-[300px] space-y-1.5 overflow-hidden p-4 font-mono text-[12px] leading-relaxed sm:h-[330px] sm:p-5 sm:text-[13px]"
          aria-label="Animated terminal showing an AI agent provisioning a cloud platform"
          role="img"
        >
          {visible.map((l, i) => (
            <motion.div
              key={`${i}-${l.text}`}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              className={`flex gap-2 ${color[l.kind]}`}
            >
              <span className="shrink-0">{prefix[l.kind]}</span>
              <span className="break-words">{l.text}</span>
            </motion.div>
          ))}
          {current && (
            <div className={`flex gap-2 ${color[current.kind]}`}>
              <span className="shrink-0">{prefix[current.kind]}</span>
              <span className="caret break-words">{current.text.slice(0, charIdx)}</span>
            </div>
          )}
          {!current && (
            <div className="flex gap-2">
              <span className="text-signal">❯</span>
              <span className="caret" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
