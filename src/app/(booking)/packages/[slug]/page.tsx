import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  formatVnd,
  packageTiers,
  serviceCategories,
} from "@/features/booking/data/packages";
import { RevealList } from "@/features/marketing/components/motion/RevealList";
import { SectionEyebrow } from "@/features/marketing/components/ui/SectionEyebrow";

type Props = { params: Promise<{ slug: string }> };

function getCategory(slug: string) {
  return serviceCategories.find((c) => c.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.summary,
    openGraph: { images: [category.image] },
  };
}

export function generateStaticParams() {
  return serviceCategories.map((c) => ({ slug: c.slug }));
}

// Chi tiết gói chụp — BA §B2: gallery, quyền lợi minh bạch (số ảnh gốc/retouch,
// SLA bàn giao), bảng giá, concept liên quan, CTA đặt lịch với gói đã chọn sẵn.
export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const related = serviceCategories.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <main className="bg-surface">
      <section className="relative h-[56svh] min-h-105 overflow-hidden bg-slate-mid">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority
          sizes="100vw"
          className="object-cover saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-ink/25" />
        <div className="absolute inset-x-0 bottom-0 px-[6vw] pb-14">
          <SectionEyebrow>
            <span className="text-surface-hi/80">Gói chụp</span>
          </SectionEyebrow>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-none text-surface-hi">
            {category.name}
          </h1>
        </div>
      </section>

      <section className="px-[6vw] py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="max-w-xl text-base leading-[1.6] text-ink-soft">
              {category.summary} Giá minh bạch, trọn gói từ trang điểm, trang
              phục đến ảnh gốc — không phát sinh chi phí ẩn.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-ink-soft">
                  Giá từ
                </dt>
                <dd className="mt-2 font-display text-2xl text-ink">
                  {formatVnd(category.fromPrice)}
                </dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-ink-soft">
                  Thời gian chụp
                </dt>
                <dd className="mt-2 font-display text-2xl text-ink">2 giờ</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.16em] text-ink-soft">
                  Bàn giao ảnh
                </dt>
                <dd className="mt-2 font-display text-2xl text-ink">7 ngày</dd>
              </div>
            </dl>

            <Link
              href="/booking"
              className="mt-10 inline-flex border border-ink bg-ink px-8 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-surface-hi transition-colors hover:bg-transparent hover:text-ink"
            >
              Đặt lịch gói này
            </Link>
          </div>

          {/* Bảng giá 3 hạng — cùng dữ liệu với /packages, chọn sẵn concept này */}
          <div className="space-y-4">
            {packageTiers.map((tier) => (
              <div
                key={tier.slug}
                className="flex items-baseline justify-between border border-ink/10 bg-surface-hi px-6 py-5"
              >
                <div>
                  <p className="font-display text-lg text-ink">{tier.name}</p>
                  <p className="text-xs text-ink-soft">
                    {tier.editedPhotos} ảnh chỉnh sửa
                  </p>
                </div>
                <p className="font-display text-xl text-ink">
                  {formatVnd(tier.price)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-hi px-[6vw] py-24 md:py-32">
        <SectionEyebrow>Concept khác</SectionEyebrow>
        <RevealList
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
          items={related.map((c) => (
            <Link key={c.slug} href={`/packages/${c.slug}`} className="group block">
              <div className="relative aspect-4/5 overflow-hidden bg-slate-mid">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover saturate-[0.85] transition-transform duration-700 ease-expo group-hover:scale-105"
                />
              </div>
              <p className="mt-4 font-display text-xl text-ink">{c.name}</p>
            </Link>
          ))}
        />
      </section>
    </main>
  );
}
