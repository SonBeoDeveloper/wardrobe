"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

// S1 — SPEC §4.4: mask reveal từ dưới lên + scale 1.06→1, stagger 80ms/dòng,
// sau đó HOLD tuyệt đối — không thêm animation nào cho tới khi user scroll.
export function Hero() {
  const reduced = useReducedMotion();
  const lines = ["Lưu giữ khoảnh khắc", "theo cách", "của riêng bạn"];

  return (
    <section className="flex min-h-svh flex-col justify-end bg-sage px-[6vw] pb-[10vh]">
      <motion.p
        className="mb-8 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
      >
        Studio chụp ảnh &amp; thuê trang phục
      </motion.p>

      <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.02em] text-ink">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={reduced ? false : { y: "110%", scale: 1.06, opacity: 0 }}
              animate={{ y: "0%", scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: i * 0.08, ease: EASE }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        className="mt-12 flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-soft"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3, ease: EASE }}
      >
        <span className="h-px w-10 bg-ink/30" aria-hidden />
        Cuộn để khám phá
      </motion.div>
    </section>
  );
}
