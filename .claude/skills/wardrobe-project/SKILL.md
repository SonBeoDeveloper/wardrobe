---
name: wardrobe-project
description: Quy trình làm việc bắt buộc cho dự án Wardrobe (User Site — studio chụp ảnh & thuê đồ). Dùng khi thêm/sửa bất kỳ tính năng, trang, hoặc component nào trong dự án này.
---

# Wardrobe Project Skill

## 0. Bối cảnh dự án

- Đây là **User Site** (khách hàng) của hệ thống studio chụp ảnh + cho thuê trang phục. Admin Dashboard là dự án riêng — đừng build tính năng admin vào đây.
- Backend: NestJS, gọi qua `src/lib/api/client.ts` (`NEXT_PUBLIC_API_URL`).
- Stack: **Next.js 16.2.11** (App Router, `src/` layout), React 19, Tailwind v4, TypeScript strict, pnpm.

## 1. LUÔN đọc tài liệu trước khi code (bắt buộc)

1. **Tài liệu BA** tại `D:\nestjs\BA project\`:
   - `overview.md` — khung nghiệp vụ tổng, ERD, NFR.
   - `User/overview.md` — đặc tả từng trang User Site (§A–§J) — **nguồn chân lý cho mọi UI ở dự án này**.
   - `Admin/overview.md` — để hiểu luồng phía admin nối với User Site (pipeline ảnh, trạng thái đơn).
   - `gap-analysis.md` — ưu tiên P0/P1/P2 và các câu hỏi chính sách chưa chốt.
2. **Docs Next.js bundled**: `node_modules/next/dist/docs/` — version-matched với 16.2.11; training data có thể lỗi thời, docs là nguồn chân lý (đọc guide liên quan trước khi dùng API của Next).

Nếu tài liệu BA chưa chốt chính sách liên quan (mức cọc, % hoàn, thời hạn lưu ảnh…), **đừng tự bịa số** — làm cấu hình được/lấy từ API và ghi chú lại câu hỏi.

## 2. Cấu trúc & quy ước

Đọc `docs/ARCHITECTURE.md` trước khi tạo file mới. Tóm tắt:

- `src/app/` **chỉ routing** — page mỏng, logic trong `src/features/<domain>/{components,hooks,api}`.
- Route groups: `(marketing)` `(booking)` `(rental)` `(account)` `(auth)` + `gift-cards`, `reviews/[orderId]`, `share/[token]`.
- Feature không import chéo feature; dùng chung → `components/`, `hooks/`, `lib/`.
- Alias `@/*` → `src/*`. Component `PascalCase.tsx`, hook `useXxx.ts`, route folder `kebab-case`.
- Server Components mặc định; `"use client"` chỉ khi cần.

## 3. Quy tắc nghiệp vụ phải tôn trọng (từ BA docs)

- **Kho ảnh là tính năng P0 trọng tâm**: trạng thái album `Chờ chọn ảnh → Đang retouch → Chờ duyệt → Đã bàn giao`; ảnh chưa thanh toán đủ phải watermark + chặn tải; chọn vượt hạn mức → upsell mua thêm.
- **Đặt lịch**: giữ slot 15 phút khi checkout (đếm ngược); hiển thị chính sách hủy/hoàn cọc **trước** khi thanh toán; hỗ trợ khách vãng lai (tra cứu mã đơn + SĐT).
- **Thuê đồ**: lịch trống đã trừ buffer giặt ủi (hiển thị "không khả dụng", không giải thích lý do); cọc tách riêng minh bạch; e-agreement bắt buộc ở checkout.
- **Consent ảnh**: mặc định KHÔNG đồng ý dùng làm portfolio; khách bật/tắt được bất kỳ lúc nào (Nghị định 13/2023 — ảnh là dữ liệu nhạy cảm).
- **SEO**: concept/gói/blog cần `generateMetadata` + OG tags.
- **Thông báo**: email + Zalo ZNS + in-app (không ưu tiên SMS).
- **Hiệu năng**: mobile-first, `next/image` + lazy-load cho gallery, trang < 3s.

## 4. Checklist trước khi hoàn thành task

- [ ] Đã đối chiếu đúng mục tương ứng trong `User/overview.md`?
- [ ] Page mỏng, logic nằm đúng feature folder?
- [ ] Không hard-code chính sách/tiền/chữ nghĩa pháp lý?
- [ ] `pnpm lint` và `pnpm build` pass?
