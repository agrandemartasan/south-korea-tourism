import { setRequestLocale } from "next-intl/server";
import ShopFeaturedSection from "@/components/shop/ShopFeaturedSection";
import ShopProductsSection from "@/components/shop/ShopProductsSection";

export default async function ShopPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-porcelain">
      <ShopFeaturedSection />
      <ShopProductsSection />
    </main>
  );
}
