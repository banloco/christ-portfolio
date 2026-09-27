"use client";

import { useEffect, useState } from "react";
import { homePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/fr";
import { CloseIcon, MenuIcon } from "@/components/icons";

const sections = ["about", "expertise", "experience", "projects", "skills", "contact"] as const;

export default function Header({ lang, t }: { lang: Locale; t: Dictionary["nav"] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const other: Locale = lang === "fr" ? "en" : "fr";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-display font-semibold tracking-tight">
          <span className="bg-gradient-brand grid size-8 place-items-center rounded-lg text-sm font-bold text-ink">CB</span>
          <span>Christ Banidje</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation">
          {sections.map((id) => (
            <a key={id} href={`#${id}`} className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg">
              {t[id]}
            </a>
          ))}
          <a
            href={homePath[other]}
            hrefLang={other}
            lang={other}
            aria-label={t.switchLangLabel}
            className="ml-2 rounded-full border border-line-strong px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-fg transition-colors hover:border-cyan hover:text-cyan"
          >
            {other}
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={homePath[other]}
            hrefLang={other}
            lang={other}
            aria-label={t.switchLangLabel}
            className="rounded-full border border-line-strong px-3 py-1.5 font-mono text-xs uppercase tracking-wider"
          >
            {other}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.close : t.menu}
            className="grid size-10 place-items-center rounded-full border border-line-strong"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line px-5 pb-6 pt-2 lg:hidden" aria-label="Navigation">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-4 font-display text-lg"
            >
              {t[id]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
