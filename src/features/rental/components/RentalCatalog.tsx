"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, SlidersHorizontal, X } from "lucide-react";
import {
  colors,
  formatVnd,
  occasions,
  rentalItems,
  sizes,
  type Occasion,
  type Size,
} from "../data/items";

// Danh mục thuê đồ — BA §D1: sidebar lọc (loại, kích cỡ, giá), lưới sản
// phẩm (ảnh, tên, giá thuê/ngày, badge tình trạng, wishlist). Cấu trúc bộ
// lọc tham khảo hizu.com.vn — mobile gập thành filter drawer.
export function RentalCatalog() {
  const [occasion, setOccasion] = useState<Occasion | "Tất cả">("Tất cả");
  const [size, setSize] = useState<Size | "Tất cả">("Tất cả");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const filtered = useMemo(
    () =>
      rentalItems.filter((item) => {
        if (occasion !== "Tất cả" && item.occasion !== occasion) return false;
        if (size !== "Tất cả" && !item.sizes.includes(size)) return false;
        if (onlyAvailable && !item.available) return false;
        return true;
      }),
    [occasion, size, onlyAvailable],
  );

  function toggleWishlist(slug: string) {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  const filters = (
    <div className="space-y-8">
      <div>
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
          Dịp
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(["Tất cả", ...occasions] as const).map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => setOccasion(o)}
              className={`border px-4 py-2 text-sm transition-colors ${
                occasion === o
                  ? "border-ink bg-ink text-surface-hi"
                  : "border-ink/15 text-ink-soft hover:border-ink/40"
              }`}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
          Kích cỡ
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(["Tất cả", ...sizes] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`h-10 min-w-10 border px-3 text-sm transition-colors ${
                size === s
                  ? "border-ink bg-ink text-surface-hi"
                  : "border-ink/15 text-ink-soft hover:border-ink/40"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
          Màu sắc
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm text-ink-soft">
          {colors.map((c) => (
            <span key={c} className="border border-ink/15 px-3 py-1.5">
              {c}
            </span>
          ))}
        </div>
      </div>

      <label className="flex items-center gap-3 text-sm text-ink">
        <input
          type="checkbox"
          checked={onlyAvailable}
          onChange={(e) => setOnlyAvailable(e.target.checked)}
          className="h-4 w-4 accent-ink"
        />
        Chỉ xem còn hàng
      </label>
    </div>
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[15rem_1fr]">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:block">{filters}</aside>

      {/* Filter bar — mobile */}
      <div className="flex items-center justify-between lg:hidden">
        <p className="text-sm text-ink-soft">{filtered.length} sản phẩm</p>
        <button
          type="button"
          onClick={() => setFiltersOpen(true)}
          className="flex items-center gap-2 border border-ink/15 px-4 py-2 text-sm text-ink"
        >
          <SlidersHorizontal className="h-4 w-4" strokeWidth={1.75} />
          Bộ lọc
        </button>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <button
            type="button"
            aria-label="Đóng bộ lọc"
            className="absolute inset-0 bg-ink/30"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-surface p-6">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-display text-xl text-ink">Bộ lọc</p>
              <button
                type="button"
                aria-label="Đóng"
                onClick={() => setFiltersOpen(false)}
              >
                <X className="h-5 w-5 text-ink" strokeWidth={1.75} />
              </button>
            </div>
            {filters}
          </div>
        </div>
      )}

      {/* Grid sản phẩm */}
      <div>
        <p className="mb-6 hidden text-sm text-ink-soft lg:block">
          {filtered.length} sản phẩm
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.slug} className="group">
              <Link href={`/rental/${item.slug}`} className="block">
                <div className="relative aspect-3/4 overflow-hidden bg-slate-mid">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 44vw, 28vw"
                    className="object-cover saturate-[0.85] transition-transform duration-700 ease-expo group-hover:scale-105"
                  />
                  {!item.available && (
                    <span className="absolute left-3 top-3 bg-ink/80 px-3 py-1 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-surface-hi">
                      Hết lịch trống
                    </span>
                  )}
                  <button
                    type="button"
                    aria-label={
                      wishlist.has(item.slug)
                        ? "Bỏ khỏi yêu thích"
                        : "Thêm vào yêu thích"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(item.slug);
                    }}
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-surface-hi/90"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        wishlist.has(item.slug)
                          ? "fill-clay-deep text-clay-deep"
                          : "text-ink-soft"
                      }`}
                      strokeWidth={1.75}
                    />
                  </button>
                </div>
              </Link>
              <Link href={`/rental/${item.slug}`}>
                <p className="mt-3 font-display text-lg text-ink">
                  {item.name}
                </p>
              </Link>
              <p className="mt-1 text-sm text-ink-soft">
                {formatVnd(item.rentalPrice)}
                <span className="text-ink-soft/60"> /ngày</span>
              </p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-24 text-center text-sm text-ink-soft">
            Không có sản phẩm phù hợp bộ lọc hiện tại.
          </p>
        )}
      </div>
    </div>
  );
}
