import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/Icons";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { itineraries, Itinerary } from "@/data/itinerariesData";

interface ItineraryCardProps {
  itinerary: Itinerary;
  className?: string;
  horizontal?: boolean;
}

function ItineraryCard({ itinerary, className = "", horizontal = false }: ItineraryCardProps) {
  return (
    <article
      className={`flex bg-inkstone/80 rounded-lg ${
        horizontal && itinerary.image ? "flex-row" : "flex-col"
      } ${className}`}
    >
      {/* Card Image - Only if image exists */}
      {itinerary.image && (
        <div
          className={`relative overflow-hidden ${
            horizontal ? "w-1/2 aspect-auto rounded-l-lg" : "aspect-square w-full rounded-t-lg"
          }`}
        >
          <Image
            src={itinerary.image}
            alt={itinerary.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Card Content */}
      <div className={`p-6 flex flex-col flex-1 ${horizontal ? "justify-center" : ""}`}>
        <h3 className="font-body text-heading-sm font-semibold text-crimson mb-3 whitespace-pre-line">
          {itinerary.title}
        </h3>
        <p className="font-body text-body-md text-porcelain mb-4 flex-1">
          {itinerary.description}
        </p>
        <Link
          href={itinerary.exploreLink}
          className="inline-flex items-center gap-1 font-body text-body-md text-porcelain hover:text-harvest transition-colors"
        >
          Explorar
          <ChevronRightIcon />
        </Link>
      </div>
    </article>
  );
}

export default function ItinerariesSection() {
  // Separate cards with and without images for mobile ordering
  const card1 = itineraries[0]; // with image
  const card2 = itineraries[1]; // no image
  const card3 = itineraries[2]; // no image
  const card4 = itineraries[3]; // with image

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/media/images/hanok.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-inkstone/70" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-[3%] py-16 lg:py-24">
        <SectionHeader
          title="Roteiros para Todos"
          description="Começa com um roteiro recomendado ou explora itinerários temáticos pensados para diferentes interesses."
        />

        {/* Desktop Bento Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-[25.5rem_25.5rem] gap-6 mb-12">
          {/* Card 1 - Left column, spans 2 rows */}
          <div className="row-span-2">
            <ItineraryCard itinerary={card1} className="h-full" />
          </div>

          {/* Card 2 - Top middle */}
          <ItineraryCard itinerary={card2} />

          {/* Card 3 - Top right */}
          <ItineraryCard itinerary={card3} />

          {/* Card 4 - Bottom, spans 2 columns */}
          <div className="col-span-2">
            <ItineraryCard itinerary={card4} className="h-full" horizontal />
          </div>
        </div>

        {/* Mobile Column Layout */}
        <div className="flex flex-col gap-6 lg:hidden mb-12">
          <ItineraryCard itinerary={card1} />
          <ItineraryCard itinerary={card2} />
          <ItineraryCard itinerary={card3} />
          <ItineraryCard itinerary={card4} />
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
          <Button variant="primary" href="#">
            Ver mais Roteiros
          </Button>
        </div>
      </div>
    </section>
  );
}
