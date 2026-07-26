import Link from "next/link";
import { RevealList } from "../motion/RevealList";

const CONCEPTS = ["Vintage", "Hàn Quốc", "Dạ tiệc", "Tết"];

// S4 — nền sáng nhất trang (surface-hi), hai lớp reveal lệch pha:
// khối ảnh xám vào trước, hàng chữ theo sau (RevealList stagger).
export function ConceptStrip() {
  return (
    <section className="bg-surface-hi px-[6vw] py-28 md:py-36">
      <div className="flex items-baseline justify-between">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
          [ Concept ]
        </p>
        <Link
          href="/concepts"
          className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink underline-offset-4 hover:underline"
        >
          [ Xem tất cả ]
        </Link>
      </div>

      <RevealList
        className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4"
        items={CONCEPTS.map((name) => (
          <Link key={name} href="/concepts" className="group block">
            {/* Placeholder ảnh concept — thay bằng next/image khi có ảnh thật */}
            <div className="aspect-[3/4] bg-slate-mid transition-opacity group-hover:opacity-90" />
            <p className="mt-4 font-display text-xl text-ink">{name}</p>
          </Link>
        ))}
      />
    </section>
  );
}
