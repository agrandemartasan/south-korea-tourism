import Button from "@/components/Button";
import ProductCard from "./ProductCard";
import { featuredProducts } from "@/data/shopProductsData";

export default function ShopFeaturedSection() {
  return (
    <section className="hidden lg:block bg-porcelain pt-32 pb-12 border-b border-harvest">
      <div className="px-6 lg:px-[3%] flex gap-16">
        {/* Left Column */}
        <div className="shrink-0 w-80 flex flex-col justify-center">
          <h2 className="font-body text-heading-md font-bold text-inkstone mb-4">
            Favoritos dos Viajantes
          </h2>
          <p className="font-body text-body-md text-inkstone/70 mb-6">
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
