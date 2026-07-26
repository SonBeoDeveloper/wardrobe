import SiteHeader from "@/components/layout/SiteHeader";
import FloatingMenu from "@/components/layout/FloatingMenu";

// Shell cho các trang công khai — header cố định trên cùng (BA §2).
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <FloatingMenu />
      {children}
    </>
  );
}
