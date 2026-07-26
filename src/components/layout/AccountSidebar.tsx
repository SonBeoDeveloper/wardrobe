"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Camera,
  Shirt,
  Images,
  Bell,
  TicketPercent,
  Heart,
  Settings,
  LogOut,
  BadgeCheck,
  Aperture,
  type LucideIcon,
} from "lucide-react";

// Menu theo BA User/overview.md §F — khu vực tài khoản.
const MAIN_MENU: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Tổng quan", href: "/account", icon: LayoutDashboard },
  { label: "Đơn chụp", href: "/account/bookings", icon: Camera },
  { label: "Đơn thuê", href: "/account/rentals", icon: Shirt },
  { label: "Ảnh của tôi", href: "/my-photos", icon: Images },
  { label: "Thông báo", href: "/account/notifications", icon: Bell },
  { label: "Voucher của tôi", href: "/account/vouchers", icon: TicketPercent },
  { label: "Yêu thích", href: "/account/wishlist", icon: Heart },
];

const ACCOUNT_MENU: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Hồ sơ", href: "/account/profile", icon: Settings },
];

function isActive(pathname: string, href: string) {
  if (href === "/account") return pathname === "/account";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuItem({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      title={label}
      className={`relative flex items-center gap-4 rounded-lg px-2 py-3 text-sm font-medium transition-colors justify-center lg:justify-start ${
        active
          ? "text-blue-600"
          : "text-slate-700 hover:text-slate-900"
      }`}
    >
      {active && (
        <span className="absolute -left-6 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-md bg-blue-600" />
      )}
      <Icon className="h-5 w-5 shrink-0" strokeWidth={1.75} />
      <span className="hidden lg:inline">{label}</span>
    </Link>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 mt-6 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-400 lg:text-left">
      {children}
    </p>
  );
}

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-20 flex-col rounded-2xl bg-white px-6 py-6 shadow-xl shadow-gray-200/50 lg:w-64">
      {/* Header: logo + tên app */}
      <div className="mb-2 flex items-center gap-3 border-b border-gray-100 pb-6 justify-center lg:justify-start">
        <span className="rounded-xl bg-gray-50 p-2">
          <Aperture className="h-6 w-6 text-slate-800" strokeWidth={1.75} />
        </span>
        <div className="hidden lg:block">
          <p className="text-lg font-bold leading-tight text-slate-800">
            Wardrobe
          </p>
          <p className="text-xs font-medium text-slate-400">
            Studio &amp; Rental
          </p>
        </div>
      </div>

      {/* Nhóm menu chính */}
      <nav className="flex flex-1 flex-col">
        <GroupLabel>Menu</GroupLabel>
        {MAIN_MENU.map((item) => (
          <MenuItem
            key={item.href}
            {...item}
            active={isActive(pathname, item.href)}
          />
        ))}

        <GroupLabel>Tài khoản</GroupLabel>
        {ACCOUNT_MENU.map((item) => (
          <MenuItem
            key={item.href}
            {...item}
            active={isActive(pathname, item.href)}
          />
        ))}
        <button
          type="button"
          title="Đăng xuất"
          className="flex items-center gap-4 rounded-lg px-2 py-3 text-sm font-medium text-rose-500 transition-colors hover:text-rose-600 justify-center lg:justify-start"
        >
          <LogOut className="h-5 w-5 shrink-0" strokeWidth={1.75} />
          <span className="hidden lg:inline">Đăng xuất</span>
        </button>
      </nav>

      {/* Footer: hồ sơ user — sẽ thay bằng dữ liệu thật từ features/auth */}
      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-6 justify-center lg:justify-start">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">
          KH
        </span>
        <div className="hidden min-w-0 lg:block">
          <p className="flex items-center gap-1 truncate text-sm font-bold text-slate-800">
            Khách hàng
            <BadgeCheck className="h-4 w-4 shrink-0 text-blue-600" />
          </p>
          <p className="truncate text-xs text-slate-400">Thành viên</p>
        </div>
      </div>
    </aside>
  );
}
