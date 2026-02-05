import ShopFeaturedSection from "../../components/ShopFeaturedSection";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-porcelain">
      <ShopFeaturedSection />
      <div className="flex items-center justify-center py-32">
        <h1 className="font-heading text-4xl text-inkstone">Loja Cultural</h1>
      </div>
    </main>
  );
}
