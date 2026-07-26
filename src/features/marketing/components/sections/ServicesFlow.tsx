import Link from "next/link";
import { RevealList } from "../motion/RevealList";

const SERVICES = [
  {
    index: "01",
    title: "Đặt lịch chụp",
    body: "Chọn gói, chọn concept, chọn ngày giờ theo lịch trống thật của studio. Slot được giữ trong lúc bạn thanh toán cọc.",
    href: "/packages",
    label: "Xem gói chụp",
  },
  {
    index: "02",
    title: "Thuê trang phục",
    body: "Váy cưới, áo dài, vest và phụ kiện — lọc theo đúng ngày bạn cần, hẹn thử đồ miễn phí tại studio.",
    href: "/rental",
    label: "Xem trang phục",
  },
  {
    index: "03",
    title: "Kho ảnh của bạn",
    body: "Ảnh sau mỗi buổi chụp được lưu thành album riêng: chọn ảnh retouch, nghiệm thu, tải về và chia sẻ bằng link riêng tư.",
    href: "/my-photos",
    label: "Ảnh của tôi",
  },
];

// S3 — SPEC §3/S3: vùng đọc trên nền surface, item reveal stagger khi vào viewport.
export function ServicesFlow() {
  return (
    <section className="bg-surface px-[6vw] py-28 md:py-36">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
        [ Dịch vụ ]
      </p>

      <RevealList
        className="mt-16 divide-y divide-ink/10 border-y border-ink/10"
        items={SERVICES.map((s) => (
          <div
            key={s.index}
            className="grid gap-6 py-12 md:grid-cols-[6rem_1fr_1fr_auto] md:items-baseline"
          >
            <span className="font-mono text-sm text-ink-soft">{s.index}</span>
            <h3 className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.05] text-ink">
              {s.title}
            </h3>
            <p className="max-w-md text-base leading-[1.6] text-ink-soft">
              {s.body}
            </p>
            <Link
              href={s.href}
              className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink underline-offset-4 hover:underline"
            >
              [ {s.label} ]
            </Link>
          </div>
        ))}
      />
    </section>
  );
}
