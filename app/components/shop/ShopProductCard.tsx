"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ShopProduct } from "@/data/shopAllProductsData";
import { useLocale, useTranslations } from "next-intl";
import { localize } from "@/utils/localize";
import type { Locale } from "@/i18n/routing";

interface ShopProductCardProps {
  product: ShopProduct;
}

export default function ShopProductCard({ product }: ShopProductCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations('shop');
  return (
    <article className="flex flex-col">
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden mb-3">
        <Image
          src={product.image}
          alt={localize(product.title, locale)}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Product Info */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-body text-body-sm text-inkstone leading-tight">
          {localize(product.title, locale)}
        </h3>
        <span className="font-body text-body-sm font-semibold text-inkstone shrink-0">
          {product.priceFormatted}
        </span>
      </div>

      {/* Buy Button */}
      <Link
        href="#"
        className="inline-flex items-center justify-center border border-crimson text-crimson rounded-full px-4 py-2 font-body text-body-sm hover:bg-crimson/5 transition-colors mt-auto"
      >
        {t('buyNow')}
      </Link>
    </article>
  );
}
