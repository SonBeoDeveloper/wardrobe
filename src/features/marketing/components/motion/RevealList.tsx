"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

// SPEC §4.6 — stagger reveal khi vào viewport (S3): y 24→0, lệch 75ms.
export function RevealList({
  items,
  className,
}: {
  items: React.ReactNode[];
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.075 } } }}
    >
      {items.map((node, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: EASE },
            },
          }}
        >
          {node}
        </motion.div>
      ))}
    </motion.div>
  );
}
