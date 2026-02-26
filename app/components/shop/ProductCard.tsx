import Image from "next/image";
import { FeaturedProduct } from "@/data/shopProductsData";
import { localize } from "@/utils/localize";
import type { Locale } from "@/i18n/routing";

interface ProductCardProps {
  product: FeaturedProduct;
  locale: Locale;
}

export default function ProductCard({ product, locale }: ProductCardProps) {
  return (
    <div>
      <div className="relative aspect-4/3 w-full overflow-hidden mb-3">
        <Image
          src={product.image}
          alt={localize(product.name, locale)}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-celestial px-3 py-1 rounded font-body text-xs font-semibold text-porcelain">
          {localize(product.category, locale)}
        </span>
      </div>
      <h4 className="font-body text-body-lg font-semibold text-inkstone mb-1">
        {localize(product.name, locale)}
      </h4>
      <p className="font-body text-body-sm text-inkstone/70 mb-2">
        {localize(product.description, locale)}
      </p>
      <p className="font-body text-body-md font-semibold text-inkstone">
        {product.price}
      </p>
    </div>
  );
}
