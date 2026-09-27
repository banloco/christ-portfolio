"use client";

import { useEffect } from "react";

/** Ajoute .is-visible aux éléments [data-reveal] quand ils entrent à l'écran. */
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.revealReady = "";
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
