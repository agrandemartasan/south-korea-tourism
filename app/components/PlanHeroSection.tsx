import Image from "next/image";
import Button from "./Button";

export default function PlanHeroSection() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/images/seoul-korea.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-inkstone/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 lg:px-[3%] py-32 text-center">
        <h1 className="font-heading text-heading-xl text-harvest mb-6">
          Planeia a Tua Viagem à
          <br />
          Coreia do Sul
        </h1>

        <p className="font-body text-body-xl text-porcelain mb-8 max-w-2xl">
          Tudo o que precisas para preparar a tua viagem num só lugar — roteiros,
          regras de etiqueta, dicas essenciais, alertas e ferramentas práticas.
        </p>

        {/* Button Group */}
        <div className="flex flex-col gap-4 lg:flex-row">
          <Button variant="primary" href="#">
            Criar o meu roteiro
          </Button>
          <Button variant="secondary" href="#etiqueta">
            Guia rápido de etiqueta
          </Button>
        </div>
      </div>
    </section>
  );
}
