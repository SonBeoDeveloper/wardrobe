import { FlowerLoader } from "@/features/marketing/components/motion/FlowerLoader";
import { Hero } from "@/features/marketing/components/sections/Hero";
import { SplitIntro } from "@/features/marketing/components/sections/SplitIntro";
import { ServicesFlow } from "@/features/marketing/components/sections/ServicesFlow";
import { ConceptStrip } from "@/features/marketing/components/sections/ConceptStrip";
import { StickyShowcase } from "@/features/marketing/components/sections/StickyShowcase";
import { ClosingWarm } from "@/features/marketing/components/sections/ClosingWarm";

// Trang chủ — BA User/overview.md §A, dựng theo SPEC-landing-page (S1 → S6).
// Nội dung khối (ảnh, gói nổi bật, đánh giá) sẽ nối CMS/API ở bước sau.
export default function HomePage() {
  return (
    <>
      <FlowerLoader />
      <Hero />
      <SplitIntro />
      <ServicesFlow />
      <ConceptStrip />
      <StickyShowcase />
      <ClosingWarm />
    </>
  );
}
