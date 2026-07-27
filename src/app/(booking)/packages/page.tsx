import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { RevealList } from "@/features/marketing/components/motion/RevealList";
import { SectionEyebrow } from "@/features/marketing/components/ui/SectionEyebrow";
import {
  differentiators,
  formatVnd,
  packageTiers,
  serviceCategories,
  trustStats,
} from "@/features/booking/data/packages";

export const metadata: Metadata = {
  title: "Bảng giá gói chụp",
  description:
    "Gói chụp ảnh chân dung, gia đình, áo dài, nàng thơ, mẹ bầu và sinh nhật — trọn gói từ trang điểm, trang phục đến ảnh gốc.",
};

// Bảng giá — BA §B1/B2, cấu trúc tham khảo đối thủ cùng ngành để có đủ mọi
// khối cần thiết (danh mục dịch vụ, 3 hạng gói, điểm khác biệt, minh chứng).
export default function PackageListPage() {
  return (
    <main className="bg-surface">
      {/* Hero */}
      <section className="bg-sage px-[6vw] py-24 md:py-32">
        <SectionEyebrow>Bảng giá</SectionEyebrow>
        <h1 className="mt-8 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-ink">
          Mỗi gói chụp là một câu chuyện — bạn chọn cách kể.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-[1.6] text-ink-soft">
          Trọn gói từ trang điểm, trang phục, chăm sóc trước buổi chụp đến
          toàn bộ ảnh gốc — không phát sinh chi phí ẩn.
        </p>

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-ink/10 pt-10 md:grid-cols-4">
          {trustStats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl text-ink md:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-[0.6875rem] uppercase tracking-[0.16em] text-ink-soft">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Danh mục dịch vụ */}
      <section className="px-[6vw] py-24 md:py-32">
        <SectionEyebrow>Dịch vụ</SectionEyebrow>
        <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink">
          Chọn concept phù hợp với bạn
        </h2>

        <RevealList
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3"
          items={serviceCategories.map((c) => (
            <Link key={c.slug} href={`/packages/${c.slug}`} className="group block">
              <div className="relative aspect-4/5 overflow-hidden bg-slate-mid">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 44vw, 30vw"
                  className="object-cover saturate-[0.85] transition-transform duration-700 ease-expo group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-2">
                <h3 className="font-display text-xl text-ink">{c.name}</h3>
                <span className="whitespace-nowrap text-sm text-ink-soft">
                  Từ {formatVnd(c.fromPrice)}
                </span>
              </div>
              <p className="mt-1 text-sm leading-[1.6] text-ink-soft">
                {c.summary}
              </p>
            </Link>
          ))}
        />
      </section>

      {/* 3 hạng gói */}
      <section className="bg-surface-hi px-[6vw] py-24 md:py-32">
        <SectionEyebrow>Gói dịch vụ</SectionEyebrow>
        <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink">
          3 gói trọn vẹn, một mức giá minh bạch
        </h2>

        <RevealList
          className="mt-14 grid gap-6 md:grid-cols-3"
          items={packageTiers.map((tier) => (
            <div
              key={tier.slug}
              className={`flex flex-col border p-8 ${
                tier.popular
                  ? "border-ink bg-ink text-surface-hi"
                  : "border-ink/10 bg-surface"
              }`}
            >
              {tier.popular && (
                <span className="mb-6 w-fit border border-surface-hi/40 px-3 py-1 text-[0.625rem] font-medium uppercase tracking-[0.16em]">
                  Phổ biến nhất
                </span>
              )}
              <h3 className="font-display text-2xl">{tier.name}</h3>
              <p
                className={`mt-2 text-sm leading-[1.6] ${
                  tier.popular ? "text-surface-hi/70" : "text-ink-soft"
                }`}
              >
                {tier.description}
              </p>
              <p className="mt-8 font-display text-4xl">
                {formatVnd(tier.price)}
              </p>
              <p
                className={`mt-1 text-[0.6875rem] uppercase tracking-[0.16em] ${
                  tier.popular ? "text-surface-hi/60" : "text-ink-soft"
                }`}
              >
                {tier.editedPhotos} ảnh đã chỉnh sửa
              </p>

              <ul
                className={`mt-8 flex-1 space-y-3 border-t pt-8 text-sm leading-[1.6] ${
                  tier.popular
                    ? "border-surface-hi/20"
                    : "border-ink/10 text-ink-soft"
                }`}
              >
                {tier.benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span aria-hidden>—</span>
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href="/booking"
                className={`mt-10 inline-flex items-center justify-center border px-6 py-3 text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                  tier.popular
                    ? "border-surface-hi bg-surface-hi text-ink hover:bg-transparent hover:text-surface-hi"
                    : "border-ink bg-ink text-surface-hi hover:bg-transparent hover:text-ink"
                }`}
              >
                Đặt lịch gói này
              </Link>
            </div>
          ))}
        />
      </section>

      {/* Điểm khác biệt */}
      <section className="px-[6vw] py-24 md:py-32">
        <SectionEyebrow>Vì sao chọn chúng tôi</SectionEyebrow>

        <RevealList
          className="mt-14 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-3"
          items={differentiators.map((d) => (
            <div key={d.title}>
              <h3 className="font-display text-xl text-ink">{d.title}</h3>
              <p className="mt-3 text-sm leading-[1.6] text-ink-soft">
                {d.body}
              </p>
            </div>
          ))}
        />
      </section>

      {/* CTA cuối */}
      <section className="bg-slate-mid px-[6vw] py-24 text-center md:py-32">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-surface-hi">
          Sẵn sàng kể câu chuyện của bạn?
        </h2>
        <Link
          href="/booking"
          className="mt-10 inline-flex border border-surface-hi bg-surface-hi px-8 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-transparent hover:text-surface-hi"
        >
          Đặt lịch chụp ngay
        </Link>
      </section>
    </main>
  );
}
