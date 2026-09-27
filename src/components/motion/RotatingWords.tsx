"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

/** Fait défiler une liste de mots surlignés en citron, un toutes les 2,6 s. */
export default function RotatingWords({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);

  const word = "col-start-1 row-start-1 whitespace-nowrap rounded-lg px-2";

  return (
    <span className="relative inline-grid align-baseline">
      {/* Réserve la largeur du mot le plus long pour éviter que la ligne saute. */}
      {words.map((w) => (
        <span key={w} aria-hidden className={`invisible ${word}`}>
          {w}
        </span>
      ))}
      <span className="sr-only">{words.join(", ")}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          aria-hidden
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          exit={{ clipPath: "inset(0 0 0 100%)" }}
          transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
          className={`${word} justify-self-start bg-lime`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
