"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;
const PETALS = 8;

/** Tổng thời gian trước khi màn loader lift lên (giây) — Hero căn delay theo số này. */
export const LOADER_DURATION = 2.4;

// Loader toàn trang: bông hoa nở giữa nền sage, từng cánh "ngắt" rời bay ra
// ngoài theo hướng của cánh, rồi cả màn lift lên để lộ trang.
export function FlowerLoader() {
  const reduced = useReducedMotion();
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), (LOADER_DURATION + 1) * 1000);
    return () => clearTimeout(t);
  }, []);

  if (reduced || gone) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-sage"
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.9, delay: LOADER_DURATION, ease: EASE }}
      aria-hidden
    >
      <div className="relative h-44 w-44">
        {/* Các cánh hoa — mỗi cánh nằm trong wrapper xoay i*45°, nên khi
            animate y âm là cánh bay ra ngoài đúng hướng của nó */}
        {Array.from({ length: PETALS }, (_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 origin-top-left"
            style={{ transform: `rotate(${(360 / PETALS) * i}deg)` }}
          >
            <motion.div
              className="h-16 w-8 -translate-x-1/2 -translate-y-full rounded-full bg-surface-hi"
              style={{ originY: 1 }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.4, 1, 1, 0.9],
                y: [10, 0, 0, -72],
                rotate: [0, 0, 0, i % 2 ? 28 : -24],
              }}
              transition={{
                duration: LOADER_DURATION,
                times: [0, 0.25, 0.45 + i * 0.05, 0.72 + i * 0.035],
                ease: EASE,
              }}
            />
          </div>
        ))}

        {/* Nhụy hoa */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1, 0] }}
          transition={{
            duration: LOADER_DURATION,
            times: [0, 0.2, 0.85, 1],
            ease: EASE,
          }}
        />

        {/* Tên studio hiện ra khi cánh bắt đầu rụng */}
        <motion.p
          className="absolute inset-x-0 top-full mt-8 text-center font-display text-2xl text-ink"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: [0, 0, 1], y: [12, 12, 0] }}
          transition={{ duration: LOADER_DURATION, times: [0, 0.5, 0.8], ease: EASE }}
        >
          Wardrobe Studio
        </motion.p>
      </div>
    </motion.div>
  );
}
