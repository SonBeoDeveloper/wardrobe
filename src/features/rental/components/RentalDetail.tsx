"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarClock, Heart, ShieldCheck } from "lucide-react";
import { formatVnd, type RentalItem } from "../data/items";

// Chi tiết sản phẩm thuê — BA §D2: slider ảnh, chọn size, ngày thuê–trả với
// tính tiền + cọc tách riêng, điều khoản thuê tóm tắt, nút thêm giỏ / thử đồ.
export function RentalDetail({ item }: { item: RentalItem }) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  const [days, setDays] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const rentalTotal = item.rentalPrice * days;

  return (
    <div className="grid gap-12 md:grid-cols-2">
      {/* Gallery */}
      <div>
        <div className="relative aspect-3/4 overflow-hidden bg-slate-mid">
          <Image
            src={item.gallery[activeImage]}
            alt={item.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover saturate-[0.85]"
          />
        </div>
        <div className="mt-3 flex gap-3">
          {item.gallery.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveImage(i)}
              className={`relative h-20 w-16 overflow-hidden border ${
                activeImage === i ? "border-ink" : "border-transparent"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="64px"
                className="object-cover saturate-[0.85]"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Thông tin & đặt thuê */}
      <div>
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
          {item.occasion}
        </p>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h1 className="font-display text-3xl leading-tight text-ink">
            {item.name}
          </h1>
          <button
            type="button"
            aria-label={
              wishlisted ? "Bỏ khỏi yêu thích" : "Thêm vào yêu thích"
            }
            onClick={() => setWishlisted((v) => !v)}
            className="shrink-0 rounded-full border border-ink/15 p-2.5"
          >
            <Heart
              className={`h-5 w-5 ${
                wishlisted ? "fill-clay-deep text-clay-deep" : "text-ink-soft"
              }`}
              strokeWidth={1.75}
            />
          </button>
        </div>

        <p className="mt-4 flex items-baseline gap-3">
          <span className="font-display text-2xl text-ink">
            {formatVnd(item.rentalPrice)}
          </span>
          <span className="text-sm text-ink-soft">/ngày</span>
        </p>

        {!item.available && (
          <p className="mt-3 inline-block bg-ink/10 px-3 py-1 text-xs font-medium text-ink-soft">
            Sản phẩm đang hết lịch trống trong khoảng ngày bạn chọn
          </p>
        )}

        {/* Size */}
        <div className="mt-8">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
            Kích cỡ
          </p>
          <div className="mt-3 flex gap-2">
            {item.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSize(s)}
                className={`h-10 min-w-10 border px-3 text-sm transition-colors ${
                  selectedSize === s
                    ? "border-ink bg-ink text-surface-hi"
                    : "border-ink/15 text-ink-soft hover:border-ink/40"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Số ngày thuê */}
        <div className="mt-8">
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
            Số ngày thuê
          </p>
          <div className="mt-3 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setDays((d) => Math.max(1, d - 1))}
              className="h-10 w-10 border border-ink/15 text-ink"
              aria-label="Giảm số ngày"
            >
              −
            </button>
            <span className="w-6 text-center font-display text-lg text-ink">
              {days}
            </span>
            <button
              type="button"
              onClick={() => setDays((d) => d + 1)}
              className="h-10 w-10 border border-ink/15 text-ink"
              aria-label="Tăng số ngày"
            >
              +
            </button>
          </div>
        </div>

        {/* Tổng tiền — minh bạch cọc tách riêng */}
        <dl className="mt-8 space-y-2 border-y border-ink/10 py-6 text-sm">
          <div className="flex justify-between text-ink-soft">
            <dt>
              Tiền thuê ({days} ngày × {formatVnd(item.rentalPrice)})
            </dt>
            <dd className="text-ink">{formatVnd(rentalTotal)}</dd>
          </div>
          <div className="flex justify-between text-ink-soft">
            <dt>Tiền cọc (hoàn lại khi trả đồ nguyên vẹn)</dt>
            <dd className="text-ink">{formatVnd(item.deposit)}</dd>
          </div>
          <div className="flex justify-between border-t border-ink/10 pt-2 font-display text-lg text-ink">
            <dt>Tổng thanh toán</dt>
            <dd>{formatVnd(rentalTotal + item.deposit)}</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            disabled={!item.available}
            className="inline-flex flex-1 items-center justify-center border border-ink bg-ink px-6 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-surface-hi transition-colors hover:bg-transparent hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
          >
            Thêm vào giỏ thuê
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 border border-ink/20 px-6 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
          >
            <CalendarClock className="h-4 w-4" strokeWidth={1.75} />
            Đặt lịch thử đồ
          </button>
        </div>

        <p className="mt-6 flex items-start gap-2 text-xs leading-[1.6] text-ink-soft">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
          Điều khoản thuê: phí trễ hạn/ngày và mức bồi thường hỏng/mất được
          hiển thị đầy đủ ở bước thanh toán trước khi bạn xác nhận đơn.
        </p>
      </div>
    </div>
  );
}
