import { proverbs } from "../data/proverbsData";

export default function ProverbsSection() {
  return (
    <section className="relative bg-inkstone overflow-hidden">
      {/* Background Pattern - Diamond arrangement via two offset layers */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('/icons/decoration_blue.png'), url('/icons/decoration_blue.png')",
          backgroundSize: "200px 200px",
          backgroundPosition: "0 0, 100px 100px",
          backgroundRepeat: "space"
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-6 py-16 lg:px-24 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl leading-tight text-harvest mb-4 lg:text-5xl">
            Sabedoria que atravessa gerações
          </h2>
          <p className="font-body text-base text-porcelain lg:text-lg">
            Pequenos fragmentos da cultura coreana que refletem valores,
            respeito e tradição.
          </p>
        </div>

        {/* Quotes */}
        <div className="mx-auto max-w-3xl">
          {proverbs.map((proverb) => (
            <div
              key={proverb.id}
              className="border-t border-harvest/20 py-8 lg:py-10"
            >
              <blockquote className="font-body text-xl italic text-porcelain mb-2 lg:text-2xl">
                &ldquo;{proverb.quote}&rdquo;
              </blockquote>
              <p className="font-body text-sm text-porcelain">
                — {proverb.attribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
