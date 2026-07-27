import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { rentalItems } from "@/features/rental/data/items";
import { RentalDetail } from "@/features/rental/components/RentalDetail";

type Props = { params: Promise<{ slug: string }> };

function getItem(slug: string) {
  return rentalItems.find((i) => i.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) return {};
  return {
    title: item.name,
    description: `Thuê ${item.name} theo ngày — có hẹn thử đồ miễn phí tại studio.`,
    openGraph: { images: [item.image] },
  };
}

export function generateStaticParams() {
  return rentalItems.map((i) => ({ slug: i.slug }));
}

export default async function RentalItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item) notFound();

  return (
    <main className="bg-surface px-[6vw] pb-24 pt-10 md:pb-32">
      <RentalDetail item={item} />
    </main>
  );
}
