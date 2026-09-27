"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { homePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/fr";
import { CloseIcon, MenuIcon } from "@/components/icons";

const sections = ["about", "expertise", "projects", "experience", "skills", "contact"] as const;
type SectionId = (typeof sections)[number];

export default function Header({ lang, t }: { lang: Locale; t: Dictionary["nav"] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);
  const other: Locale = lang === "fr" ? "en" : "fr";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section en cours de lecture : celle qui traverse le milieu de l'écran.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id as SectionId);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const top = document.getElementById("top");
    const topObserver = new IntersectionObserver(([e]) => e.isIntersecting && setActive(null), { rootMargin: "-45% 0px -50% 0px" });
    if (top) topObserver.observe(top);
    return () => {
      observer.disconnect();
      topObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const langLink = (
    <a
      href={homePath[other]}
      hrefLang={other}
      lang={other}
      aria-label={t.switchLangLabel}
      className="grid h-9 place-items-center rounded-full border border-line-strong px-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-cyan hover:text-cyan"
    >
      {other}
    </a>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-2.5 pl-3 transition-all duration-500 ${
          scrolled || open ? "border-line-strong bg-ink/70 shadow-2xl shadow-black/40 backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 font-display font-semibold tracking-tight">
          <span className="bg-gradient-brand grid size-8 place-items-center rounded-full text-[13px] font-bold text-ink">CB</span>
          <span className="hidden sm:inline">Christ Banidje</span>
        </a>

        <nav className="hidden items-center lg:flex" aria-label="Navigation">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${active === id ? "text-fg" : "text-muted hover:text-fg"}`}
            >
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {t[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {langLink}
          <a
            href="#contact"
            className="bg-gradient-brand hidden h-9 items-center rounded-full px-4 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {t.contact}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.close : t.menu}
            className="grid size-9 place-items-center rounded-full border border-line-strong lg:hidden"
          >
            {open ? <CloseIcon width={18} height={18} /> : <MenuIcon width={18} height={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Navigation"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line-strong bg-ink/90 p-3 backdrop-blur-xl lg:hidden"
          >
            {sections.map((id, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg hover:bg-white/5"
              >
                {t[id]}
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
