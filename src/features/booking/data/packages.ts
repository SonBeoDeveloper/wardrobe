// Dữ liệu minh hoạ cho trang Gói chụp — cấu trúc tham khảo từ đối thủ cùng
// ngành (gaonauchupanh.vn) để dựng UI đầy đủ. GIÁ, SỐ ẢNH, CHÍNH SÁCH ở đây
// là placeholder cho demo layout — theo gap-analysis.md các con số này CHƯA
// được chốt với chủ studio, khi có API/CMS thật phải thay bằng dữ liệu cấu
// hình được, không hard-code.

export type ServiceCategory = {
  slug: string;
  name: string;
  fromPrice: number;
  summary: string;
  image: string;
};

export type PackageTier = {
  slug: string;
  name: string;
  price: number;
  popular?: boolean;
  editedPhotos: number;
  description: string;
  benefits: string[];
};

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "chan-dung",
    name: "Chân dung",
    fromPrice: 3_800_000,
    summary: "Tôn lên nét riêng của bạn qua ống kính chuyên nghiệp.",
    image: img("photo-1524504388940-b1c1722653e1"),
  },
  {
    slug: "gia-dinh",
    name: "Gia đình",
    fromPrice: 3_500_000,
    summary: "Lưu giữ khoảnh khắc sum vầy của cả nhà.",
    image: img("photo-1502086223501-7ea6ecd79368"),
  },
  {
    slug: "ao-dai",
    name: "Áo dài",
    fromPrice: 3_800_000,
    summary: "Vẻ đẹp truyền thống trong từng tà áo.",
    image: img("photo-1490481651871-ab68de25d43d"),
  },
  {
    slug: "nang-tho",
    name: "Nàng thơ",
    fromPrice: 3_800_000,
    summary: "Concept nhẹ nhàng, lãng mạn, đậm chất điện ảnh.",
    image: img("photo-1529626455594-4ff0802cfb7e"),
  },
  {
    slug: "me-bau",
    name: "Mẹ bầu",
    fromPrice: 3_800_000,
    summary: "Ghi lại hành trình thiêng liêng chờ đón con yêu.",
    image: img("photo-1518199266791-5375a83190b7"),
  },
  {
    slug: "sinh-nhat-nhom-ban",
    name: "Sinh nhật & nhóm bạn",
    fromPrice: 5_000_000,
    summary: "Concept vui nhộn cho hội bạn thân và tiệc sinh nhật.",
    image: img("photo-1516035069371-29a1b244cc32"),
  },
];

export const packageTiers: PackageTier[] = [
  {
    slug: "khoanh-khac",
    name: "Khoảnh Khắc",
    price: 3_800_000,
    editedPhotos: 10,
    description: "Gói cơ bản, đủ đầy cho một buổi chụp trọn vẹn.",
    benefits: [
      "10 ảnh gốc đã chỉnh sửa",
      "1 concept, 1 bộ trang phục",
      "Trang điểm & làm tóc cơ bản",
      "Toàn bộ ảnh gốc chưa chỉnh sửa",
    ],
  },
  {
    slug: "cau-chuyen",
    name: "Câu Chuyện",
    price: 4_800_000,
    popular: true,
    editedPhotos: 20,
    description: "Lựa chọn phổ biến nhất — thêm concept, thêm câu chuyện.",
    benefits: [
      "20 ảnh gốc đã chỉnh sửa",
      "2 concept, 2 bộ trang phục",
      "Trang điểm & làm tóc chuyên nghiệp",
      "Chăm sóc trước buổi chụp (đắp mặt nạ, massage chân)",
      "Toàn bộ ảnh gốc chưa chỉnh sửa",
    ],
  },
  {
    slug: "di-san",
    name: "Di Sản",
    price: 6_800_000,
    editedPhotos: 35,
    description: "Trải nghiệm trọn vẹn nhất — dành riêng cho dịp đặc biệt.",
    benefits: [
      "35 ảnh gốc đã chỉnh sửa",
      "3 concept, 3 bộ trang phục",
      "Trang điểm & làm tóc cao cấp",
      "Chăm sóc trước buổi chụp",
      "Video 'Glow-Up Moment' 15 giây",
      "Toàn bộ ảnh gốc chưa chỉnh sửa",
    ],
  },
];

export const differentiators = [
  {
    title: "Chăm sóc trước buổi chụp",
    body: "Đắp mặt nạ dưỡng da và massage chân thư giãn trước khi lên hình.",
  },
  {
    title: "Tham quan studio 360°",
    body: "Xem trước không gian chụp thật trước khi quyết định đặt lịch.",
  },
  {
    title: "Video Glow-Up Moment",
    body: "Tặng kèm video ngắn 15 giây ghi lại khoảnh khắc bạn tỏa sáng.",
  },
] as const;

export const trustStats = [
  { value: "10K+", label: "Khách đã chụp" },
  { value: "35%", label: "Quay lại lần 2–3" },
  { value: "5.0★", label: "Đánh giá Google" },
  { value: "4", label: "Báo Tier-1 đưa tin" },
] as const;

export function formatVnd(value: number) {
  return `${value.toLocaleString("vi-VN")}đ`;
}
