"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

/** Ligne verticale qui se remplit au fil du défilement de la frise. */
export default function TimelineRail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <div ref={ref} className="relative pl-8 sm:pl-12">
      <div aria-hidden className="absolute bottom-0 left-[7px] top-0 w-px bg-line sm:left-[11px]" />
      <motion.div
        aria-hidden
        style={{ scaleY }}
        className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-accent sm:left-[11px]"
      />
      {children}
    </div>
  );
}
