"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";

// Page-wide background layer: a soft glow and a dot grid that follow the cursor.
// Springs smooth the motion; touch devices and reduced-motion users get nothing.
export function CursorGlow() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const x = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 });
  const y = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 });

  const glow = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(124,140,255,0.14), rgba(232,121,249,0.06) 40%, transparent 70%)`;
  const mask = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, black, transparent)`;

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled || reduce) return;
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, reduce, mx, my]);

  if (!enabled || reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="absolute inset-0" style={{ background: glow }} />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:24px_24px]"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      />
    </motion.div>
  );
}
