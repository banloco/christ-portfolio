"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Fine barre dégradée en haut de l'écran qui suit la lecture de la page. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="bg-gradient-brand fixed inset-x-0 top-0 z-[70] h-0.5 origin-left"
    />
  );
}
