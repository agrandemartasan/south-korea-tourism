import Image from "next/image";
import { highlights } from "../data/highlightsData";

export default function HighlightsSection() {
  return (
    <section className="relative bg-inkstone overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/icons/decoration_blue.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px"
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-10 py-16 lg:p-24">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-4xl leading-tight text-harvest mb-4 lg:text-5xl">
            Explora o melhor da Coreia do Sul
          </h2>
          <p className="font-body text-lg text-porcelain">
            Escolhe o que queres descobrir a seguir — cultura, sabores,
            paisagens ou planeamento.
          </p>
        </div>

        {/* Highlights Cards */}
        <div className="flex flex-col items-center gap-12 px-12 lg:flex-row lg:justify-between lg:items-start lg:gap-8">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="flex flex-col items-center text-center lg:flex-1 lg:max-w-[220px]"
            >
              <Image
                src={highlight.icon}
                alt=""
                width={64}
                height={64}
                className="w-16 h-16 mb-4"
              />
              <h3 className="font-heading text-xl text-harvest mb-2">
                {highlight.title}
              </h3>
              <p className="font-body text-base text-porcelain leading-relaxed">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
