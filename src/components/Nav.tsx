"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/profile";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#journey", label: "Journey" },
  { href: "#engage", label: "Engage" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`transition-colors duration-500 ${scrolled || open ? "glass border-b border-line" : "border-b border-transparent"}`}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
          <a href="#top" className="font-mono text-sm tracking-tight text-ink">
            <span className="text-signal">~$</span> whoami
          </a>
          <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}?subject=Project%20inquiry`}
              className="hidden rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-black transition-transform hover:scale-[1.03] sm:inline-block"
            >
              Hire me
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative h-8 w-8 md:hidden"
            >
              <span
                className={`absolute left-1.5 right-1.5 h-px bg-ink transition-all duration-300 ${open ? "top-4 rotate-45" : "top-3"}`}
              />
              <span
                className={`absolute left-1.5 right-1.5 h-px bg-ink transition-all duration-300 ${open ? "top-4 -rotate-45" : "top-5"}`}
              />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden px-4 md:hidden"
            >
              {[...links, { href: "#contact", label: "Contact" }].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-t border-line first:border-t-0"
                >
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-4 text-2xl font-semibold">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
