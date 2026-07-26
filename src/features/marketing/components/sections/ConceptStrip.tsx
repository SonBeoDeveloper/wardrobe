import Image from "next/image";
import Link from "next/link";
import { RevealList } from "../motion/RevealList";
import { marketingImages } from "../../images";

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
        items={marketingImages.concepts.map((c) => (
          <Link key={c.name} href="/concepts" className="group block">
            <div className="relative aspect-3/4 overflow-hidden bg-slate-mid">
              <Image
                src={c.src}
                alt={c.alt}
                fill
                sizes="(max-width: 768px) 44vw, 22vw"
                className="object-cover saturate-[0.8] transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
              />
            </div>
            <p className="mt-4 font-display text-xl text-ink">{c.name}</p>
          </Link>
        ))}
      />
    </section>
  );
}
