"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

// SPEC §4.5 — cú wipe dứt khoát dùng lặp lại ở S2 và S5 để tạo nhịp.
// clip-path mở từ dưới lên, đồng bộ theo scroll (không fade).
export function PanelWipe({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 25%"],
  });

  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
  );

  return (
    <div ref={ref} className="relative">
      <motion.div
        style={reduced ? undefined : { clipPath: clip }}
        className={`will-change-[clip-path] ${className ?? ""}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
