"use client";

import type { PointerEvent, ReactNode } from "react";

/** Éclaire les cartes .spotlight qu'il contient à l'endroit où passe la souris. */
export default function Spotlight({ children, className }: { children: ReactNode; className?: string }) {
  function onMove(e: PointerEvent<HTMLDivElement>) {
    const card = (e.target as HTMLElement).closest<HTMLElement>(".spotlight");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - r.left}px`);
    card.style.setProperty("--y", `${e.clientY - r.top}px`);
  }
  return (
    <div onPointerMove={onMove} className={className}>
      {children}
    </div>
  );
}
