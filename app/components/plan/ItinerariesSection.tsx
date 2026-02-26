import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ChevronRightIcon } from "@/components/Icons";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { itineraries, Itinerary } from "@/data/itinerariesData";
import { getTranslations, getLocale } from "next-intl/server";
import { localize } from "@/utils/localize";
import type { Locale } from "@/i18n/routing";

interface ItineraryCardProps {
  itinerary: Itinerary;
  className?: string;
  horizontal?: boolean;
  exploreLabel: string;
  title: string;
  description: string;
}

function ItineraryCard({ itinerary, className = "", horizontal = false, exploreLabel, title, description }: ItineraryCardProps) {
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
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Card Content */}
      <div className={`p-6 flex flex-col flex-1 ${horizontal ? "justify-center" : ""}`}>
        <h3 className="font-body text-heading-sm font-semibold text-crimson mb-3 whitespace-pre-line">
          {title}
        </h3>
        <p className="font-body text-body-md text-porcelain mb-4 flex-1">
          {description}
        </p>
        <Link
          href={itinerary.exploreLink}
          className="inline-flex items-center gap-1 font-body text-body-md text-porcelain hover:text-harvest transition-colors"
        >
          {exploreLabel}
          <ChevronRightIcon />
        </Link>
      </div>
    </article>
  );
}

export default async function ItinerariesSection() {
  const t = await getTranslations('plan.itineraries');
  const locale = await getLocale() as Locale;

  // Separate cards with and without images for mobile ordering
  const card1 = itineraries[0]; // with image
  const card2 = itineraries[1]; // no image
  const card3 = itineraries[2]; // no image
  const card4 = itineraries[3]; // with image

  const exploreLabel = t('exploreLink');

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
          title={t('heading')}
          description={t('description')}
        />

        {/* Desktop Bento Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-[25.5rem_25.5rem] gap-6 mb-12">
          {/* Card 1 - Left column, spans 2 rows */}
          <div className="row-span-2">
            <ItineraryCard itinerary={card1} className="h-full" exploreLabel={exploreLabel} title={localize(card1.title, locale)} description={localize(card1.description, locale)} />
          </div>

          {/* Card 2 - Top middle */}
          <ItineraryCard itinerary={card2} exploreLabel={exploreLabel} title={localize(card2.title, locale)} description={localize(card2.description, locale)} />

          {/* Card 3 - Top right */}
          <ItineraryCard itinerary={card3} exploreLabel={exploreLabel} title={localize(card3.title, locale)} description={localize(card3.description, locale)} />

          {/* Card 4 - Bottom, spans 2 columns */}
          <div className="col-span-2">
            <ItineraryCard itinerary={card4} className="h-full" horizontal exploreLabel={exploreLabel} title={localize(card4.title, locale)} description={localize(card4.description, locale)} />
          </div>
        </div>

        {/* Mobile Column Layout */}
        <div className="flex flex-col gap-6 lg:hidden mb-12">
          <ItineraryCard itinerary={card1} exploreLabel={exploreLabel} title={localize(card1.title, locale)} description={localize(card1.description, locale)} />
          <ItineraryCard itinerary={card2} exploreLabel={exploreLabel} title={localize(card2.title, locale)} description={localize(card2.description, locale)} />
          <ItineraryCard itinerary={card3} exploreLabel={exploreLabel} title={localize(card3.title, locale)} description={localize(card3.description, locale)} />
          <ItineraryCard itinerary={card4} exploreLabel={exploreLabel} title={localize(card4.title, locale)} description={localize(card4.description, locale)} />
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
          <Button variant="primary" href="#">
            {t('moreButton')}
          </Button>
        </div>
      </div>
    </section>
  );
}
