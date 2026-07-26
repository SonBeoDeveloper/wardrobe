import Image from "next/image";
import Link from "next/link";
import { PanelWipe } from "../motion/PanelWipe";
import { marketingImages } from "../../images";

// S2 — SPEC §3/S2: chia đôi sage / panel sáng, panel vào bằng wipe theo scroll.
export function SplitIntro() {
  return (
    <section className="grid bg-sage md:grid-cols-2">
      <div className="flex flex-col justify-between px-[6vw] py-24 md:py-32">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
          [ Về studio ]
        </p>
        <h2 className="mt-16 font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] text-ink">
          Không gian chụp, trang phục và kho ảnh cá nhân — trong một nơi duy
          nhất.
        </h2>
        <div className="relative mt-16 aspect-4/5 max-w-sm overflow-hidden bg-slate-mid">
          <Image
            src={marketingImages.intro.src}
            alt={marketingImages.intro.alt}
            fill
            sizes="(max-width: 768px) 88vw, 30vw"
            className="object-cover saturate-[0.8] contrast-[1.04]"
          />
        </div>
      </div>

      <PanelWipe className="bg-surface">
        <div className="flex h-full flex-col justify-between px-[6vw] py-24 md:py-32">
          <p className="max-w-md text-base leading-[1.6] text-ink-soft">
            Mỗi buổi chụp tại studio đều trở thành một album trong tài khoản
            của bạn: chọn ảnh, duyệt retouch, tải về và chia sẻ với người
            thân. Trang phục cho buổi chụp được chọn ngay khi đặt lịch.
          </p>
          <Link
            href="/booking"
            className="mt-16 inline-flex w-fit items-center gap-3 border border-ink px-8 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-surface"
          >
            Đặt lịch chụp
          </Link>
        </div>
      </PanelWipe>
    </section>
  );
}
