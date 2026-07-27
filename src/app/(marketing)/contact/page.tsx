import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SectionEyebrow } from "@/features/marketing/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Thông tin liên hệ, địa chỉ studio và giờ làm việc.",
};

// Địa điểm — placeholder minh hoạ, thay bằng dữ liệu CMS/API khi có.
const LOCATIONS = [
  {
    city: "Hà Nội",
    address: "Tầng 3, Ngõ 102 Trường Chinh, Đống Đa",
  },
  {
    city: "TP. Hồ Chí Minh",
    address: "351/45 Lê Văn Sỹ, Phường Nhiêu Lộc",
  },
] as const;

// Liên hệ — BA §J: form, địa chỉ, giờ làm việc, SĐT/Zalo.
export default function ContactPage() {
  return (
    <main className="bg-surface px-[6vw] pb-24 pt-32 md:pb-32">
      <SectionEyebrow>Liên hệ</SectionEyebrow>
      <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-ink">
        Cùng trò chuyện về buổi chụp của bạn
      </h1>

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        {/* Form liên hệ — chỉ giao diện, nối API khi có backend liên hệ */}
        <form className="space-y-6">
          <div>
            <label className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Họ tên
            </label>
            <input
              type="text"
              name="name"
              className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none focus:border-ink"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div>
            <label className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Số điện thoại
            </label>
            <input
              type="tel"
              name="phone"
              className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none focus:border-ink"
              placeholder="09xx xxx xxx"
            />
          </div>
          <div>
            <label className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
              Nội dung
            </label>
            <textarea
              name="message"
              rows={4}
              className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none focus:border-ink"
              placeholder="Bạn muốn tư vấn gói chụp nào?"
            />
          </div>
          <button
            type="submit"
            className="inline-flex border border-ink bg-ink px-8 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-surface-hi transition-colors hover:bg-transparent hover:text-ink"
          >
            Gửi liên hệ
          </button>
        </form>

        {/* Thông tin studio */}
        <div className="space-y-10">
          <div className="flex gap-4">
            <Phone className="mt-1 h-5 w-5 shrink-0 text-ink" strokeWidth={1.75} />
            <div>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
                Điện thoại &amp; Zalo
              </p>
              <p className="mt-1 font-display text-xl text-ink">
                0396 387 597
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="mt-1 h-5 w-5 shrink-0 text-ink" strokeWidth={1.75} />
            <div>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
                Email
              </p>
              <p className="mt-1 font-display text-xl text-ink">
                hello@wardrobe.vn
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="mt-1 h-5 w-5 shrink-0 text-ink" strokeWidth={1.75} />
            <div>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
                Giờ làm việc
              </p>
              <p className="mt-1 font-display text-xl text-ink">
                8:00 – 20:00, tất cả các ngày
              </p>
            </div>
          </div>

          <div className="space-y-6 border-t border-ink/10 pt-8">
            {LOCATIONS.map((l) => (
              <div key={l.city} className="flex gap-4">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-ink"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="font-display text-lg text-ink">{l.city}</p>
                  <p className="text-sm text-ink-soft">{l.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
