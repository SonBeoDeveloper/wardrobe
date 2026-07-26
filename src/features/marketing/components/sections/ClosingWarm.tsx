import Link from "next/link";
import { RevealList } from "../motion/RevealList";

// S6 — SPEC §3/S6: payoff màu ấm — nơi DUY NHẤT dùng clay/sand trên trang.
export function ClosingWarm() {
  return (
    <section className="bg-slate-mid px-[6vw] pb-16 pt-28 md:pt-36">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-surface/60">
            [ Bắt đầu ]
          </p>
          <h2 className="mt-10 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1] text-surface-hi">
            Sẵn sàng cho buổi chụp của bạn?
          </h2>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center border border-surface-hi bg-surface-hi px-8 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-transparent hover:text-surface-hi"
            >
              Đặt lịch ngay
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-surface/40 px-8 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-surface-hi transition-colors hover:border-surface-hi"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>

        {/* Khối chất liệu ấm — placeholder cho ảnh thật (da/gỗ/người) */}
        <RevealList
          className="grid grid-cols-3 gap-3 self-end"
          items={[
            <div key="a" className="aspect-[4/5] bg-clay" />,
            <div key="b" className="aspect-[4/5] bg-sand" />,
            <div key="c" className="aspect-[4/5] bg-clay-deep" />,
          ]}
        />
      </div>

      <footer className="mt-24 flex flex-col gap-6 border-t border-surface/20 pt-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-surface/60">
          © {new Date().getFullYear()} Wardrobe Studio
        </p>
        <nav className="flex flex-wrap gap-6 text-[0.6875rem] uppercase tracking-[0.16em] text-surface/60">
          <Link href="/packages" className="hover:text-surface-hi">
            Gói chụp
          </Link>
          <Link href="/rental" className="hover:text-surface-hi">
            Thuê đồ
          </Link>
          <Link href="/account" className="hover:text-surface-hi">
            Tài khoản
          </Link>
          <Link href="/legal/dieu-khoan-su-dung" className="hover:text-surface-hi">
            Điều khoản
          </Link>
          <Link href="/legal/chinh-sach-bao-mat" className="hover:text-surface-hi">
            Bảo mật
          </Link>
        </nav>
      </footer>
    </section>
  );
}
