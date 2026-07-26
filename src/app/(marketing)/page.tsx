import Link from "next/link";
import { siteConfig } from "@/config/site";

// Trang chủ — BA User/overview.md §A. Các khối (hero, gói nổi bật, đánh giá…)
// sẽ do CMS điều khiển; hiện là placeholder điều hướng trong lúc dựng khung.
export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 px-6 text-center">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">{siteConfig.name}</h1>
        <p className="mt-3 text-slate-500">{siteConfig.description}</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/booking"
          className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Đặt lịch chụp ngay
        </Link>
        <Link
          href="/concepts"
          className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
        >
          Khám phá concept
        </Link>
        <Link
          href="/rental"
          className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
        >
          Thuê trang phục
        </Link>
      </div>

      <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
        <Link href="/packages" className="hover:text-slate-600">
          Gói chụp
        </Link>
        <Link href="/account" className="hover:text-slate-600">
          Tài khoản của tôi
        </Link>
        <Link href="/my-photos" className="hover:text-slate-600">
          Ảnh của tôi
        </Link>
        <Link href="/login" className="hover:text-slate-600">
          Đăng nhập
        </Link>
      </nav>
    </main>
  );
}
