import Image from "next/image";
import Link from "next/link";
import { Highlight } from "@/data/highlightsData";

interface IconGridSectionProps {
  heading: string;
  description?: string;
  items: Highlight[];
  id?: string;
}

export default function IconGridSection({ heading, description, items, id }: IconGridSectionProps) {
  return (
    <section id={id} className="relative bg-inkstone overflow-hidden scroll-mt-24">
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
      <div className="relative z-10 px-6 lg:px-[3%] py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-heading-lg text-harvest mb-4">
            {heading}
          </h2>
          {description && (
            <p className="font-body text-body-lg text-porcelain">
              {description}
            </p>
          )}
        </div>

        {/* Icon Grid */}
        <div className="flex flex-col items-center gap-12 px-12 lg:flex-row lg:justify-between lg:items-start lg:gap-8">
          {items.map((item) => {
            const cardClassName = "flex flex-col items-center text-center lg:flex-1 lg:max-w-[220px]";
            const cardContent = (
              <>
                <Image
                  src={item.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="font-body text-xl font-semibold text-harvest mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-body-md text-porcelain">
                  {item.description}
                </p>
              </>
            );

            return item.href ? (
              <Link
                key={item.title}
                href={item.href}
                className={`${cardClassName} hover:opacity-80 transition-opacity`}
              >
                {cardContent}
              </Link>
            ) : (
              <article key={item.title} className={cardClassName}>
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
