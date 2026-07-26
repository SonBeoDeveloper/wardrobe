"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  CalendarDays,
  Camera,
  Images,
  Menu,
  Phone,
  Shirt,
  X,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

// Menu nổi góc phải dưới — luôn theo khi cuộn. Bấm mở: backdrop mờ + các nút
// pill xuất hiện dần TỪ DƯỚI LÊN (nút gần FAB hiện trước), như ref Gạo Nâu.
const ITEMS: {
  label: string;
  href: string;
  icon: LucideIcon;
  highlight?: boolean;
}[] = [
  // Thứ tự render từ trên xuống; stagger sẽ đảo lại để chạy từ dưới lên.
  { label: "Concept", href: "/concepts", icon: Images },
  { label: "Gói chụp", href: "/packages", icon: Camera },
  { label: "Thuê đồ", href: "/rental", icon: Shirt },
  { label: "Liên hệ", href: "/contact", icon: Phone },
  { label: "Đặt lịch", href: "/booking", icon: CalendarDays, highlight: true },
];

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const last = ITEMS.length - 1;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            aria-label="Đóng menu"
            className="fixed inset-0 z-40 cursor-default bg-ink/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {open &&
            ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  y: 16,
                  scale: 0.95,
                  transition: { duration: 0.18, delay: (last - i) * 0.03 },
                }}
                // Đảo delay: item cuối (sát FAB) hiện trước → trồi dần lên
                transition={{
                  duration: 0.45,
                  delay: (last - i) * 0.06,
                  ease: EASE,
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2.5 rounded-full border px-5 py-3 text-sm font-medium shadow-lg shadow-ink/10 transition-colors ${
                    item.highlight
                      ? "border-ink bg-ink text-surface-hi hover:bg-ink-soft"
                      : "border-ink/10 bg-surface-hi text-ink hover:bg-surface"
                  }`}
                >
                  <item.icon className="h-4 w-4" strokeWidth={1.75} />
                  {item.label}
                </Link>
              </motion.div>
            ))}
        </AnimatePresence>

        <motion.button
          type="button"
          aria-label={open ? "Đóng menu" : "Mở menu nhanh"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-surface-hi shadow-lg shadow-ink/20"
          whileTap={{ scale: 0.92 }}
        >
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </motion.span>
        </motion.button>
      </div>
    </>
  );
}
