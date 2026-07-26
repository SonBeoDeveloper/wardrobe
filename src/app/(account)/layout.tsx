import AccountSidebar from "@/components/layout/AccountSidebar";

// Shell cho khu vực đăng nhập (Tài khoản + Ảnh của tôi) — BA User/overview.md §F.
// Sidebar tự responsive: mobile thu gọn icon-only, desktop mở rộng.
export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen gap-6 bg-slate-50 p-4 lg:p-6">
      <AccountSidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
