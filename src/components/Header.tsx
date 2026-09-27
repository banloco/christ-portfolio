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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section en cours de lecture : celle qui traverse le milieu de l'écran.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          setActive(id === "top" ? null : (id as SectionId));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["top", ...sections].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-page/85 backdrop-blur-lg" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-night font-display text-sm font-bold text-white">CB</span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-bold tracking-tight">Christ Banidje</span>
            <span className="hidden text-xs text-muted sm:block">Fullstack · Data / IA</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${active === id ? "text-fg" : "text-muted hover:text-fg"}`}
            >
              {t[id]}
              {active === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={homePath[other]}
            hrefLang={other}
            lang={other}
            aria-label={t.switchLangLabel}
            className="grid h-9 place-items-center rounded-lg px-2.5 text-sm font-semibold uppercase text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            {other}
          </a>
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-lg bg-night px-4 text-sm font-semibold text-white transition-colors hover:bg-accent sm:inline-flex"
          >
            {t.contact}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.close : t.menu}
            className="grid size-9 place-items-center rounded-lg border border-line-strong lg:hidden"
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <div className="px-5 py-3">
              {sections.map((id, i) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-4 font-display text-lg font-semibold last:border-0"
                >
                  {t[id]}
                  <span className="text-xs font-normal text-muted">0{i + 1}</span>
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
