import type { Metadata } from "next";
import { FaqAccordion } from "@/features/marketing/components/ui/FaqAccordion";
import { SectionEyebrow } from "@/features/marketing/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Câu hỏi thường gặp",
  description: "Giải đáp về đặt lịch, thuê đồ, cọc/hủy/hoàn tiền và kho ảnh.",
};

// FAQ — BA §J: nhóm câu hỏi đặt lịch, thuê đồ, cọc/hủy/hoàn tiền, ảnh & lưu
// trữ. Câu trả lời chi tiết (số ngày, % hoàn) sẽ lấy từ CMS khi chính sách
// được chốt — nội dung dưới đây chỉ minh hoạ cấu trúc trang.
const FAQ_GROUPS: { group: string; items: { question: string; answer: string }[] }[] = [
  {
    group: "Đặt lịch chụp",
    items: [
      {
        question: "Tôi cần đặt cọc bao nhiêu khi đặt lịch?",
        answer:
          "Mức cọc được hiển thị rõ trong bước thanh toán trước khi bạn xác nhận đơn, theo cấu hình hiện hành của studio.",
      },
      {
        question: "Slot tôi chọn có bị người khác đặt mất không?",
        answer:
          "Khi bạn vào bước thanh toán, slot được giữ tạm trong một khoảng thời gian ngắn — hết thời gian giữ chỗ mà chưa thanh toán, slot sẽ tự nhả cho khách khác.",
      },
    ],
  },
  {
    group: "Thuê trang phục",
    items: [
      {
        question: "Vì sao một số ngày hiển thị 'không khả dụng' dù đã có người trả đồ?",
        answer:
          "Sau mỗi lượt thuê, sản phẩm cần thời gian giặt ủi/vệ sinh trước khi cho thuê tiếp — hệ thống tự động chặn những ngày này.",
      },
      {
        question: "Tôi có thể thử đồ trước khi thuê không?",
        answer:
          "Có. Với váy cưới và áo dài, bạn có thể đặt lịch thử đồ miễn phí tại studio trước khi quyết định thuê.",
      },
    ],
  },
  {
    group: "Ảnh & lưu trữ",
    items: [
      {
        question: "Ảnh của tôi được lưu trong bao lâu?",
        answer:
          "Album được lưu miễn phí trong một khoảng thời gian nhất định; gần hết hạn hệ thống sẽ nhắc bạn tải về hoặc gia hạn lưu trữ.",
      },
      {
        question: "Tôi có thể chia sẻ album cho người thân không cần tài khoản không?",
        answer:
          "Có. Trong album đã bàn giao, bạn có thể tạo link chia sẻ riêng tư, tuỳ chọn đặt mật khẩu và thời hạn xem.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="bg-surface px-[6vw] pb-24 pt-32 md:pb-32">
      <SectionEyebrow>Hỗ trợ</SectionEyebrow>
      <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] text-ink">
        Câu hỏi thường gặp
      </h1>

      <div className="mt-16 space-y-16">
        {FAQ_GROUPS.map((g) => (
          <div key={g.group}>
            <h2 className="mb-4 font-display text-2xl text-ink">{g.group}</h2>
            <FaqAccordion items={g.items} />
          </div>
        ))}
      </div>
    </main>
  );
}
