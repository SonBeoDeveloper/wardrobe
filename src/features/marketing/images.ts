// Ảnh placeholder (Unsplash, free license) cho landing — đã kiểm tra URL sống.
// Nguyên tắc màu theo SPEC: ảnh tông xám lạnh ở S1–S5, tông ấm DỒN HẾT vào S6.
// Khi có bộ ảnh thật của studio, chỉ cần thay URL tại đây.

const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const marketingImages = {
  /** S1 — hero: chân dung thời trang tông lạnh */
  hero: {
    src: u("photo-1496747611176-843222e1e57c", 1400),
    alt: "Người mẫu trong trang phục trắng, ánh sáng studio",
  },

  /** S2 — panel giới thiệu: cô dâu + váy, tông lạnh */
  intro: {
    src: u("photo-1515372039744-b8f02a3ae446", 1200),
    alt: "Cô dâu trong váy cưới trắng tại studio",
  },

  /** S4 — 4 concept */
  concepts: [
    {
      name: "Vintage",
      src: u("photo-1471341971476-ae15ff5dd4ea", 900),
      alt: "Máy ảnh phim cổ điển trên nền vải",
    },
    {
      name: "Hàn Quốc",
      src: u("photo-1529626455594-4ff0802cfb7e", 900),
      alt: "Chân dung thiếu nữ tông sáng nhẹ nhàng",
    },
    {
      name: "Dạ tiệc",
      src: u("photo-1469334031218-e382a71b716b", 900),
      alt: "Người mẫu trong trang phục dạ tiệc",
    },
    {
      name: "Tết",
      src: u("photo-1490481651871-ab68de25d43d", 900),
      alt: "Trang phục truyền thống sắc đỏ",
    },
  ],

  /** S5 — nền section sticky: không gian studio */
  showcase: {
    src: u("photo-1516035069371-29a1b244cc32", 2000),
    alt: "Máy ảnh và thiết bị trong không gian studio tối",
  },

  /** S6 — payoff màu ấm */
  closing: [
    {
      src: u("photo-1519741497674-611481863552", 900),
      alt: "Cặp đôi cô dâu chú rể trong ánh hoàng hôn ấm",
    },
    {
      src: u("photo-1524504388940-b1c1722653e1", 900),
      alt: "Chân dung thiếu nữ đội mũ tông nắng ấm",
    },
    {
      src: u("photo-1537633552985-df8429e8048b", 900),
      alt: "Váy cưới treo trong phòng ánh sáng vàng",
    },
  ],
} as const;
