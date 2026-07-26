import SiteHeader from "@/components/layout/SiteHeader";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <div className="pt-16">{children}</div>
    </>
  );
}
