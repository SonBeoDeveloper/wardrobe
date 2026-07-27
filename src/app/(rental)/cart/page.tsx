import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Trash2 } from "lucide-react";
import { formatVnd, rentalItems } from "@/features/rental/data/items";
import { SectionEyebrow } from "@/features/marketing/components/ui/SectionEyebrow";

export const metadata: Metadata = { title: "Giỏ thuê đồ" };

// Giỏ thuê — BA §D3. Minh hoạ tĩnh với 2 sản phẩm mẫu (chưa nối state giỏ
// hàng thật — sẽ nối localStorage/API khi làm features/rental đầy đủ).
const cartLines = rentalItems.slice(0, 2).map((item) => ({
  item,
  days: 2,
  size: item.sizes[0],
}));

export default function CartPage() {
  const rentalTotal = cartLines.reduce(
    (sum, l) => sum + l.item.rentalPrice * l.days,
    0,
  );
  const depositTotal = cartLines.reduce((sum, l) => sum + l.item.deposit, 0);

  return (
    <main className="bg-surface px-[6vw] pb-24 pt-10 md:pb-32">
      <SectionEyebrow>Giỏ thuê đồ</SectionEyebrow>
      <h1 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] text-ink">
        Giỏ thuê đồ của bạn
      </h1>

      {cartLines.length === 0 ? (
        <p className="mt-10 text-sm text-ink-soft">
          Giỏ thuê đang trống.{" "}
          <Link href="/rental" className="underline">
            Xem trang phục cho thuê
          </Link>
        </p>
      ) : (
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_20rem]">
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {cartLines.map((line) => (
              <li key={line.item.slug} className="flex gap-4 py-6">
                <div className="relative h-28 w-20 shrink-0 overflow-hidden bg-slate-mid">
                  <Image
                    src={line.item.image}
                    alt={line.item.name}
                    fill
                    sizes="80px"
                    className="object-cover saturate-[0.85]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="font-display text-lg text-ink">
                      {line.item.name}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">
                      Size {line.size} · {line.days} ngày thuê
                    </p>
                  </div>
                  <p className="text-sm text-ink">
                    {formatVnd(line.item.rentalPrice * line.days)}
                    <span className="ml-2 text-ink-soft">
                      + cọc {formatVnd(line.item.deposit)}
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Xoá khỏi giỏ"
                  className="self-start p-2 text-ink-soft hover:text-clay-deep"
                >
                  <Trash2 className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </li>
            ))}
          </ul>

          {/* Tổng tiền — cọc tách riêng, rõ ràng theo BA §D3 */}
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
            <Link
              href="/checkout"
              className="mt-6 inline-flex w-full items-center justify-center border border-ink bg-ink px-6 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-surface-hi transition-colors hover:bg-transparent hover:text-ink"
            >
              Tiến hành đặt thuê
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
