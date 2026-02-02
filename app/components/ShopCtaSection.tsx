import Image from "next/image";
import Button from "./Button";

export default function ShopCtaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/media/images/pc_2.webp"
        alt="Peças de cerâmica e artesanato coreano"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-inkstone/50" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:px-24 lg:py-24">
        {/* Title */}
        <div className="lg:flex-1">
          <h2 className="font-heading text-3xl leading-tight text-harvest lg:text-5xl">
            Leva a Coreia
            <br />
            Contigo
          </h2>
        </div>

        {/* Description + CTA */}
        <div className="lg:flex-1">
          <p className="font-body text-base text-porcelain leading-relaxed mb-6 lg:text-lg">
            Descobre peças autênticas, artesanato tradicional, livros,
            gastronomia e objetos inspirados na cultura coreana —
            cuidadosamente selecionados para quem ama explorar.
          </p>
          <Button variant="accent" href="#">
            Explorar Loja Cultural
          </Button>
        </div>
      </div>
    </section>
  );
}
