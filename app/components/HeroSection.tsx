import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/images/hero-section-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-inkstone/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-start justify-center px-10 py-32">
        {/* Heading Section */}
        <div className="space-y-6 lg:w-[70%]">
          <h1 className="font-heading text-5xl leading-tight text-harvest xs:text-6xl">
            Descobre a Coreia do Sul: onde tradição e futuro se encontram
          </h1>
        </div>

        {/* Subheading and Buttons Section */}
        <div className="mt-6 space-y-6 lg:ml-auto lg:mt-16 lg:w-[50%] lg:text-right">
          <p className="font-body text-lg leading-relaxed text-porcelain xs:text-xl">
            Do esplendor dos templos antigos às luzes vibrantes de Seul — vive
            uma viagem que combina história, natureza, tecnologia e cultura
            viva.
          </p>

          {/* Button Group */}
          <div className="flex flex-col gap-4 pt-4 xs:flex-row lg:justify-end">
            <Button variant="primary" href="/plan">
              Planear Viagem
            </Button>
            <Button variant="secondary" href="/plan">
              Explorar Coreia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
