"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { LOADER_DURATION } from "../motion/FlowerLoader";
import { marketingImages } from "../../images";

const EASE = [0.16, 1, 0.3, 1] as const;
// Hero chỉ bắt đầu reveal sau khi màn loader hoa lift lên.
const BASE = LOADER_DURATION + 0.5;

// S1 — SPEC §4.4: mask reveal từ dưới lên + scale 1.06→1, stagger 80ms/dòng,
// ảnh hero reveal cùng nhịp; sau đó HOLD — không animation cho tới khi scroll.
export function Hero() {
  const reduced = useReducedMotion();
  const lines = ["Lưu giữ khoảnh khắc", "theo cách", "của riêng bạn"];

  return (
    <section className="grid min-h-svh bg-sage md:grid-cols-[1.05fr_0.95fr]">
      <div className="flex flex-col justify-end px-[6vw] pb-[10vh] pt-24">
        <motion.p
          className="mb-8 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: BASE + 0.9, ease: EASE }}
        >
          Studio chụp ảnh &amp; thuê trang phục
        </motion.p>

        <h1 className="font-display text-[clamp(2.75rem,6vw,6rem)] leading-[0.95] tracking-[-0.02em] text-ink">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={
                  reduced ? false : { y: "110%", scale: 1.06, opacity: 0 }
                }
                animate={{ y: "0%", scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: BASE + i * 0.08, ease: EASE }}
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
          transition={{ duration: 0.8, delay: BASE + 1.3, ease: EASE }}
        >
          <span className="h-px w-10 bg-ink/30" aria-hidden />
          Cuộn để khám phá
        </motion.div>
      </div>

      {/* Ảnh hero — mask mở từ dưới lên cùng nhịp headline, ảnh scale lắng nhẹ */}
      <div className="relative order-first h-[46svh] md:order-0 md:h-auto">
        <motion.div
          className="absolute inset-0 overflow-hidden md:inset-y-0 md:left-0 md:right-[6vw]"
          initial={reduced ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.2, delay: BASE + 0.15, ease: EASE }}
        >
          <motion.div
            className="relative h-full w-full"
            initial={reduced ? false : { scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, delay: BASE + 0.15, ease: EASE }}
          >
            <Image
              src={marketingImages.hero.src}
              alt={marketingImages.hero.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-top saturate-[0.8] contrast-[1.04]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
