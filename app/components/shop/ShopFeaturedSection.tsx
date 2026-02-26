import Button from "@/components/Button";
import ProductCard from "./ProductCard";
import { featuredProducts } from "@/data/shopProductsData";
import { getTranslations, getLocale } from "next-intl/server";
import { localize } from "@/utils/localize";
import type { Locale } from "@/i18n/routing";

export default async function ShopFeaturedSection() {
  const t = await getTranslations('shop.featured');
  const locale = await getLocale() as Locale;
  return (
    <section className="hidden lg:block bg-porcelain pt-32 pb-12 border-b border-harvest">
      <div className="px-6 lg:px-[3%] flex gap-16">
        {/* Left Column */}
        <div className="shrink-0 w-80 flex flex-col justify-center">
          <h2 className="font-body text-heading-md font-bold text-inkstone mb-4">
            {t('heading')}
          </h2>
          <p className="font-body text-body-md text-inkstone/70 mb-6">
            {t('description')}
          </p>
          <Button variant="outline" href="/shop" className="px-4 self-start">
            {t('viewAll')}
          </Button>
        </div>

        {/* Right Column - Product Cards */}
        <div className="flex-1 grid grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
