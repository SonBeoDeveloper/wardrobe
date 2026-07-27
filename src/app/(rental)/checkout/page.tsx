import type { Metadata } from "next";
import { formatVnd, rentalItems } from "@/features/rental/data/items";
import { SectionEyebrow } from "@/features/marketing/components/ui/SectionEyebrow";

export const metadata: Metadata = { title: "Đặt thuê" };

const cartLines = rentalItems.slice(0, 2).map((item) => ({
  item,
  days: 2,
  size: item.sizes[0],
}));

// Checkout thuê đồ — BA §D4: 4 bước (kiểm tra đơn → thông tin khách + mã
// giảm giá → đồng ý e-agreement + thanh toán cọc → hoàn tất).
export default function RentalCheckoutPage() {
  const rentalTotal = cartLines.reduce(
    (sum, l) => sum + l.item.rentalPrice * l.days,
    0,
  );
  const depositTotal = cartLines.reduce((sum, l) => sum + l.item.deposit, 0);

  return (
    <main className="bg-surface px-[6vw] pb-24 pt-10 md:pb-32">
      <SectionEyebrow>Đặt thuê</SectionEyebrow>
      <h1 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink">
        Hoàn tất đơn thuê
      </h1>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-10">
          {/* Bước 1 — kiểm tra đơn */}
          <section>
            <h2 className="font-display text-xl text-ink">
              1. Kiểm tra đơn
            </h2>
            <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
              {cartLines.map((l) => (
                <li
                  key={l.item.slug}
                  className="flex items-center justify-between py-4 text-sm"
                >
                  <span className="text-ink">
                    {l.item.name}{" "}
                    <span className="text-ink-soft">
                      · size {l.size} · {l.days} ngày
                    </span>
                  </span>
                  <span className="text-ink">
                    {formatVnd(l.item.rentalPrice * l.days)}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Bước 2 — thông tin khách */}
          <section>
            <h2 className="font-display text-xl text-ink">
              2. Thông tin nhận đồ
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Họ tên"
                className="border-b border-ink/20 bg-transparent py-3 text-ink outline-none focus:border-ink"
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="border-b border-ink/20 bg-transparent py-3 text-ink outline-none focus:border-ink"
              />
              <input
                type="text"
                placeholder="Mã giảm giá / gift card"
                className="border-b border-ink/20 bg-transparent py-3 text-ink outline-none focus:border-ink sm:col-span-2"
              />
            </div>
          </section>

          {/* Bước 3 — e-agreement */}
          <section>
            <h2 className="font-display text-xl text-ink">
              3. Điều khoản thuê
            </h2>
            <label className="mt-4 flex items-start gap-3 text-sm text-ink-soft">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-ink" />
              Tôi đã đọc và đồng ý với điều khoản thuê, bao gồm trách nhiệm
              bồi thường khi làm hỏng hoặc mất trang phục.
            </label>
          </section>
        </div>

        {/* Tổng tiền + thanh toán */}
        <div className="h-fit border border-ink/10 bg-surface-hi p-6">
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between text-ink-soft">
              <dt>Tổng tiền thuê</dt>
              <dd className="text-ink">{formatVnd(rentalTotal)}</dd>
            </div>
            <div className="flex justify-between text-ink-soft">
              <dt>Tổng tiền cọc</dt>
              <dd className="text-ink">{formatVnd(depositTotal)}</dd>
            </div>
            <div className="flex justify-between border-t border-ink/10 pt-3 font-display text-lg text-ink">
              <dt>Thanh toán</dt>
              <dd>{formatVnd(rentalTotal + depositTotal)}</dd>
            </div>
          </dl>

          <p className="mt-6 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
            Phương thức thanh toán
          </p>
          <div className="mt-3 space-y-2 text-sm text-ink">
            {["VNPay", "Momo", "Thẻ", "Thanh toán tại studio"].map((m) => (
              <label key={m} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  className="h-4 w-4 accent-ink"
                  defaultChecked={m === "VNPay"}
                />
                {m}
              </label>
            ))}
          </div>

          <button
            type="button"
            className="mt-6 inline-flex w-full items-center justify-center border border-ink bg-ink px-6 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-surface-hi transition-colors hover:bg-transparent hover:text-ink"
          >
            Xác nhận đặt thuê
          </button>
        </div>
      </div>
    </main>
  );
}
