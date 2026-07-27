import type { Metadata } from "next";
import { RentalCatalog } from "@/features/rental/components/RentalCatalog";
import { SectionEyebrow } from "@/features/marketing/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Thuê trang phục",
  description:
    "Cho thuê áo dài, váy dạ tiệc, trang phục du lịch và công sở — lọc theo dịp, kích cỡ, còn hàng.",
};

// Thuê đồ — BA §D1: danh mục sản phẩm, sidebar lọc, wishlist, badge tình
// trạng. Bố cục tham khảo hizu.com.vn (lọc theo dịp/size/màu).
export default function RentalCatalogPage() {
  return (
    <main className="bg-surface px-[6vw] pb-24 pt-10 md:pb-32">
      <SectionEyebrow>Thuê trang phục</SectionEyebrow>
      <h1 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] text-ink">
        Hơn 1.000 mẫu trang phục sẵn sàng cho buổi chụp của bạn
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-[1.6] text-ink-soft">
        Áo dài, dạ tiệc, du lịch, công sở — thuê theo ngày, có hẹn thử đồ
        miễn phí tại studio.
      </p>

      <div className="mt-14">
        <RentalCatalog />
      </div>
    </main>
  );
}
