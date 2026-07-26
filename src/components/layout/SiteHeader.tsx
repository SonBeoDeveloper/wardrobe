"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Aperture, Menu, ShoppingBag, User, X } from "lucide-react";

// Header User Site — BA User/overview.md §2: logo, menu chính, giỏ thuê,
// nút Đặt lịch nổi bật, tài khoản. Cố định khi cuộn, style editorial.
const NAV = [
  { label: "Trang chủ", href: "/" },
  { label: "Gói chụp", href: "/packages" },
  { label: "Concept", href: "/concepts" },
  { label: "Thuê đồ", href: "/rental" },
  { label: "Về chúng tôi", href: "/about" },
  { label: "Liên hệ", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-surface/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-[6vw]">
        <Link href="/" className="flex items-center gap-2" title="Trang chủ">
          <Aperture className="h-6 w-6 text-ink" strokeWidth={1.75} />
          <span className="font-display text-xl text-ink">Wardrobe</span>
        </Link>

        {/* Menu chính — desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                isActive(pathname, item.href)
                  ? "text-ink underline underline-offset-8"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            title="Giỏ thuê đồ"
            className="p-2 text-ink-soft transition-colors hover:text-ink"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.75} />
          </Link>
          <Link
            href="/account"
            title="Tài khoản"
            className="p-2 text-ink-soft transition-colors hover:text-ink"
          >
            <User className="h-5 w-5" strokeWidth={1.75} />
          </Link>
          <Link
            href="/booking"
            className="ml-2 hidden border border-ink bg-ink px-5 py-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-surface-hi transition-colors hover:bg-transparent hover:text-ink md:inline-flex"
          >
            Đặt lịch ngay
          </Link>
          <button
            type="button"
            className="p-2 text-ink lg:hidden"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      {open && (
        <nav className="border-t border-ink/10 bg-surface px-[6vw] py-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-display text-2xl ${
                    isActive(pathname, item.href) ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex border border-ink bg-ink px-6 py-3 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-surface-hi"
          >
            Đặt lịch ngay
          </Link>
        </nav>
      )}
    </header>
  );
}
