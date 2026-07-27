import Image from "next/image";
import type { Metadata } from "next";
import { trustStats } from "@/features/booking/data/packages";
import { RevealList } from "@/features/marketing/components/motion/RevealList";
import { SectionEyebrow } from "@/features/marketing/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Câu chuyện studio — chúng tôi không tạo ra vẻ đẹp mới, chúng tôi tôn lên vẻ đẹp vốn có của bạn.",
};

const VALUES = [
  {
    title: "Lắng nghe trước khi bấm máy",
    body: "Mỗi buổi chụp bắt đầu bằng một cuộc trò chuyện — hiểu câu chuyện bạn muốn kể trước khi chọn góc máy.",
  },
  {
    title: "Ê-kíp giàu kinh nghiệm",
    body: "Nhiếp ảnh gia, chuyên viên trang điểm và retoucher làm việc cùng nhau trên từng đơn hàng.",
  },
  {
    title: "Kho ảnh không giới hạn thời gian xem",
    body: "Album của bạn không biến mất sau buổi chụp — mở lại bất cứ lúc nào trong tài khoản.",
  },
] as const;

// Trang Về chúng tôi — BA §J: câu chuyện, đội ngũ, ảnh studio.
export default function AboutPage() {
  return (
    <main className="bg-surface pt-16">
      <section className="grid gap-10 bg-sage px-[6vw] py-24 md:grid-cols-2 md:py-32">
        <div className="flex flex-col justify-center">
          <SectionEyebrow>Về chúng tôi</SectionEyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-ink">
            Chúng tôi không tạo ra vẻ đẹp mới — chúng tôi tôn lên vẻ đẹp vốn
            có của bạn.
          </h1>
          <p className="mt-6 max-w-md text-base leading-[1.6] text-ink-soft">
            Từ 2021, studio đồng hành cùng hàng nghìn khách hàng lưu giữ
            khoảnh khắc chân dung, gia đình và áo dài tại Hà Nội &amp; TP.HCM.
          </p>
        </div>
        <div className="relative aspect-4/5 overflow-hidden bg-slate-mid md:aspect-auto">
          <Image
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200"
            alt="Không gian studio chụp ảnh"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover saturate-[0.85]"
          />
        </div>
      </section>

      <section className="px-[6vw] py-24 md:py-32">
        <dl className="grid grid-cols-2 gap-8 border-b border-ink/10 pb-16 md:grid-cols-4">
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

        <SectionEyebrow>
          <span className="mt-16 block">Điều chúng tôi tin</span>
        </SectionEyebrow>
        <RevealList
          className="mt-10 grid gap-10 md:grid-cols-3"
          items={VALUES.map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-xl text-ink">{v.title}</h3>
              <p className="mt-3 text-sm leading-[1.6] text-ink-soft">
                {v.body}
              </p>
            </div>
          ))}
        />
      </section>
    </main>
  );
}
