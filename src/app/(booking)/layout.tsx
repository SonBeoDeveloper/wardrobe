import SiteHeader from "@/components/layout/SiteHeader";
import FloatingMenu from "@/components/layout/FloatingMenu";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <FloatingMenu />
      <div className="pt-16">{children}</div>
    </>
  );
}
