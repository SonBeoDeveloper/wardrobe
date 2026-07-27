// Dữ liệu minh hoạ cho danh mục thuê đồ — cấu trúc tham khảo hizu.com.vn
// (lọc theo dịp/phong cách/size, hiển thị giá thuê + giá thành viên + cọc).
// GIÁ/CỌC ở đây là placeholder cho demo layout — theo BA gap-analysis.md,
// công thức tính cọc và bảng phí phạt CHƯA được chốt, không dùng làm số thật.

export type Occasion = "Áo dài" | "Dạ tiệc" | "Du lịch" | "Công sở";
export type Size = "XS" | "S" | "M" | "L" | "XL";

export type RentalItem = {
  slug: string;
  name: string;
  occasion: Occasion;
  color: string;
  sizes: Size[];
  rentalPrice: number;
  memberPrice: number;
  deposit: number;
  image: string;
  gallery: string[];
  available: boolean;
};

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const occasions: Occasion[] = ["Áo dài", "Dạ tiệc", "Du lịch", "Công sở"];
export const sizes: Size[] = ["XS", "S", "M", "L", "XL"];
export const colors = ["Trắng", "Đen", "Đỏ", "Hồng", "Kem", "Xanh"] as const;

export const rentalItems: RentalItem[] = [
  {
    slug: "ao-dai-lua-trang",
    name: "Áo dài lụa trắng thêu tay",
    occasion: "Áo dài",
    color: "Trắng",
    sizes: ["S", "M", "L"],
    rentalPrice: 295_000,
    memberPrice: 221_250,
    deposit: 995_000,
    image: img("photo-1490578474895-699cd4e2cf59"),
    gallery: [
      img("photo-1490578474895-699cd4e2cf59", 1400),
      img("photo-1445205170230-053b83016050", 1400),
    ],
    available: true,
  },
  {
    slug: "vay-da-tiec-do-nhung",
    name: "Váy dạ tiệc đỏ nhung ôm dáng",
    occasion: "Dạ tiệc",
    color: "Đỏ",
    sizes: ["XS", "S", "M"],
    rentalPrice: 350_000,
    memberPrice: 262_500,
    deposit: 1_200_000,
    image: img("photo-1591369822096-ffd140ec948f"),
    gallery: [
      img("photo-1591369822096-ffd140ec948f", 1400),
      img("photo-1583846717393-dc2412c95ed7", 1400),
    ],
    available: true,
  },
  {
    slug: "vay-maxi-hoa-du-lich",
    name: "Váy maxi hoạ tiết hoa đi biển",
    occasion: "Du lịch",
    color: "Kem",
    sizes: ["S", "M", "L", "XL"],
    rentalPrice: 180_000,
    memberPrice: 135_000,
    deposit: 600_000,
    image: img("photo-1487222477894-8943e31ef7b2"),
    gallery: [
      img("photo-1487222477894-8943e31ef7b2", 1400),
      img("photo-1520006403909-838d6b92c22e", 1400),
    ],
    available: true,
  },
  {
    slug: "blazer-cong-so-den",
    name: "Blazer công sở đen thanh lịch",
    occasion: "Công sở",
    color: "Đen",
    sizes: ["S", "M", "L"],
    rentalPrice: 150_000,
    memberPrice: 112_500,
    deposit: 500_000,
    image: img("photo-1551803091-e20673f15770"),
    gallery: [
      img("photo-1551803091-e20673f15770", 1400),
      img("photo-1509631179647-0177331693ae", 1400),
    ],
    available: false,
  },
  {
    slug: "vay-da-hoi-hong-pastel",
    name: "Váy dạ hội hồng pastel xoè",
    occasion: "Dạ tiệc",
    color: "Hồng",
    sizes: ["XS", "S", "M", "L"],
    rentalPrice: 320_000,
    memberPrice: 240_000,
    deposit: 1_100_000,
    image: img("photo-1544441893-675973e31985"),
    gallery: [
      img("photo-1544441893-675973e31985", 1400),
      img("photo-1585487000160-6ebcfceb0d03", 1400),
    ],
    available: true,
  },
  {
    slug: "ao-dai-gam-xanh",
    name: "Áo dài gấm xanh hoạ tiết sen",
    occasion: "Áo dài",
    color: "Xanh",
    sizes: ["M", "L", "XL"],
    rentalPrice: 280_000,
    memberPrice: 210_000,
    deposit: 950_000,
    image: img("photo-1503342217505-b0a15ec3261c"),
    gallery: [
      img("photo-1503342217505-b0a15ec3261c", 1400),
      img("photo-1595341888016-a392ef81b7de", 1400),
    ],
    available: true,
  },
];

export function formatVnd(value: number) {
  return `${value.toLocaleString("vi-VN")}₫`;
}
