import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { serviceCategories } from "@/features/booking/data/packages";
import { RevealList } from "@/features/marketing/components/motion/RevealList";
import { SectionEyebrow } from "@/features/marketing/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Concept",
  description:
    "Thư viện concept chụp ảnh: chân dung, gia đình, áo dài, nàng thơ, mẹ bầu, sinh nhật & nhóm bạn.",
};

// Concept/Portfolio — BA User/overview.md §C: grid ảnh theo phong cách,
// mỗi concept dẫn tới gói chụp tương ứng. Dùng chung dữ liệu dịch vụ với
// /packages vì mỗi concept ở đây map 1-1 với một danh mục dịch vụ.
export default function ConceptListPage() {
  return (
    <main className="bg-surface px-[6vw] py-24 md:py-32">
      <SectionEyebrow>Concept</SectionEyebrow>
      <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-ink">
        Mỗi phong cách một câu chuyện riêng
      </h1>
      <p className="mt-6 max-w-xl text-base leading-[1.6] text-ink-soft">
        Chọn concept yêu thích, xem thư viện ảnh mẫu và đặt lịch với đúng gói
        phù hợp.
      </p>

      <RevealList
        className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3"
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
            <p className="mt-4 font-display text-xl text-ink">{c.name}</p>
            <p className="mt-1 text-sm text-ink-soft">{c.summary}</p>
          </Link>
        ))}
      />
    </main>
  );
}
