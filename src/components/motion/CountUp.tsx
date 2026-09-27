"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Anime la partie numérique d'une valeur (« ~90 % », « +40 % », « 2× »)
 * quand elle entre à l'écran. Le texte final est rendu côté serveur.
 */
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const match = value.match(/^(\D*)(\d+)(.*)$/);

  useEffect(() => {
    if (!inView || !match || !ref.current) return;
    const [, prefix, number, suffix] = match;
    const el = ref.current;
    const controls = animate(0, Number(number), {
      duration: 1.6,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => (el.textContent = `${prefix}${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
