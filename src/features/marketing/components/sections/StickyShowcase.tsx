"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { PanelWipe } from "../motion/PanelWipe";

// S5 — SPEC §4.7: section tối, pin bằng position sticky + scale 1→1.08
// TUYẾN TÍNH theo scroll progress (ease none). Mobile: spec khuyên bỏ pin —
// wrapper chỉ cao 130vh trên mobile nên hiệu ứng gần như tĩnh.
export function StickyShowcase() {
  const wrap = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <PanelWipe className="bg-slate-mid">
      <div
        ref={wrap}
        className="relative h-[130vh] md:h-[280vh]"
      >
        <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
          <motion.div
            style={reduced ? undefined : { scale }}
            className="flex h-full w-full items-center justify-center bg-slate-mid will-change-transform"
          >
            <blockquote className="max-w-4xl px-[6vw] text-center">
              <p className="font-display text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.1] text-surface-hi">
                &ldquo;Bộ ảnh không kết thúc khi buổi chụp kết thúc — nó bắt
                đầu một kỷ niệm bạn có thể mở lại bất cứ lúc nào.&rdquo;
              </p>
              <footer className="mt-10 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-surface/60">
                Kho ảnh cá nhân — tính năng trung tâm của studio
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </PanelWipe>
  );
}
