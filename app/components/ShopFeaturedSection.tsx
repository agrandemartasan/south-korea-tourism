import Button from "./Button";
import ProductCard from "./ProductCard";
import { featuredProducts } from "../data/shopProductsData";

export default function ShopFeaturedSection() {
  return (
    <section className="hidden lg:block bg-porcelain pt-24 pb-12 px-10">
      <div className="flex gap-16">
        {/* Left Column */}
        <div className="flex-shrink-0 w-80 flex flex-col justify-center">
          <h2 className="font-body text-3xl font-bold text-inkstone mb-4">
            Favoritos dos Viajantes
          </h2>
          <p className="font-body text-base text-inkstone/70 mb-6">
            Os artigos mais procurados que captam a essência da Coreia do Sul.
          </p>
          <Button variant="outline" href="/shop" className="px-4 self-start">
            Ver Tudo
          </Button>
        </div>

        {/* Right Column - Product Cards */}
        <div className="flex-1 grid grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
