# Kiến trúc Frontend — Wardrobe (User Site)

> Nguồn nghiệp vụ: `D:\nestjs\BA project\` (`overview.md`, `User/overview.md`, `Admin/overview.md`, `gap-analysis.md`).
> Đây là **User Site** — trang khách hàng của studio chụp ảnh & thuê đồ. Admin Dashboard là dự án riêng.

## Nguyên tắc

1. **Đọc docs Next.js bundled trước khi code**: `node_modules/next/dist/docs/` (Next 16.2.11, App Router — training data của AI agent có thể lỗi thời).
2. **`src/` layout** — tách code khỏi config theo khuyến nghị Next.js.
3. **`app/` chỉ dùng cho routing** — page/layout mỏng, logic nằm trong `features/`.
4. **Feature-based**: mỗi domain nghiệp vụ (booking, rental, photos…) là một thư mục tự chứa components/hooks/api.
5. **Route groups** phân vùng theo trải nghiệm, không ảnh hưởng URL.

## Cấu trúc thư mục

```
src/
├── app/                      # Routing (App Router)
│   ├── (marketing)/          # Trang công khai, CMS điều khiển, chuẩn SEO
│   │   ├── page.tsx          #   / — Trang chủ (hero, gói nổi bật, đánh giá…)
│   │   ├── about/ contact/ faq/ blog/[slug]/ legal/[slug]/
│   ├── (booking)/            # Gói chụp & đặt lịch (BA §B, §C)
│   │   ├── packages/[slug]/  #   Danh sách + chi tiết gói
│   │   ├── concepts/[slug]/  #   Portfolio/concept (SEO + OG tags)
│   │   └── booking/          #   Luồng multi-step (giữ slot 15', bundle trang phục, voucher)
│   ├── (rental)/             # Thuê đồ (BA §D)
│   │   ├── rental/[slug]/    #   Danh mục (lọc theo ngày) + chi tiết (lịch trống, fitting, wishlist)
│   │   ├── cart/ checkout/   #   Giỏ thuê + e-agreement
│   ├── (account)/            # Khu vực đăng nhập — layout.tsx = sidebar tài khoản (BA §E, §F)
│   │   ├── account/…         #   bookings, rentals, notifications, vouchers, wishlist, profile
│   │   └── my-photos/[albumId]/  # KHO ẢNH — P0: proofing, duyệt retouch, lưu trữ, chia sẻ
│   ├── (auth)/               # login, register, forgot-password, order-lookup (khách vãng lai)
│   ├── gift-cards/           # Mua thẻ quà tặng (BA §H)
│   ├── reviews/[orderId]/    # Viết đánh giá qua link mời (BA §G)
│   ├── share/[token]/        # Xem album chia sẻ công khai (không cần tài khoản)
│   ├── layout.tsx            # Root layout (header, footer, chat widget)
│   ├── error.tsx not-found.tsx globals.css
├── features/                 # Logic theo domain — mỗi feature: components/ hooks/ api/
│   ├── auth/ booking/ rental/ photos/ account/ reviews/ gift-cards/ marketing/
├── components/
│   ├── ui/                   # Component thuần UI, tái sử dụng (Button, Modal…)
│   └── layout/               # Header, Footer, ChatWidget…
├── lib/
│   ├── api/client.ts         # Fetch wrapper gọi backend NestJS (NEXT_PUBLIC_API_URL)
│   └── utils/
├── hooks/                    # Hooks dùng chung nhiều feature
├── types/                    # Type dùng chung (domain types để trong features/*/api)
└── config/site.ts            # Hằng số cấu hình site
```

## Quy ước

- **Đặt tên**: thư mục route `kebab-case`; component `PascalCase.tsx`; hooks `useXxx.ts`.
- **Import**: dùng alias `@/` (trỏ `src/`). Feature không import chéo feature khác — cần chung thì đưa xuống `components/`, `hooks/`, `lib/`.
- **Server Components mặc định**; chỉ thêm `"use client"` khi cần state/effect/event.
- **SEO**: trang concept/gói/blog phải có `generateMetadata` (title/description/OG) — kênh organic chính theo BA.
- **Ảnh**: luôn dùng `next/image`, gallery album phải lazy-load (NFR: album hàng trăm ảnh).
- **Tiền & trạng thái đơn**: hiển thị minh bạch cọc/còn lại/phí phạt — copy chính sách lấy từ API/CMS, không hard-code.

## Ưu tiên build (theo gap-analysis Phần 6)

| P0 | Kho ảnh (proofing + My Photos), luồng đặt lịch với slot hold, chính sách hủy hiển thị rõ |
| P1 | Voucher, đánh giá, CMS blocks, bundle chụp + thuê đồ, fitting |
| P2 | Loyalty, gift card nâng cao, wishlist notify, gia hạn thuê online |
