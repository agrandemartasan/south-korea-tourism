import Image from "next/image";
import { FeaturedProduct } from "../data/shopProductsData";

interface ProductCardProps {
  product: FeaturedProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <div className="relative aspect-4/3 w-full overflow-hidden mb-3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-celestial px-3 py-1 rounded font-body text-xs font-semibold text-porcelain">
          {product.category}
        </span>
      </div>
      <h4 className="font-body text-lg font-semibold text-inkstone mb-1">
        {product.name}
      </h4>
      <p className="font-body text-sm text-inkstone/70 mb-2">
        {product.description}
      </p>
      <p className="font-body text-base font-semibold text-inkstone">
        {product.price}
      </p>
    </div>
  );
}
