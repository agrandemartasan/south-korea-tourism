"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon } from "@/components/Icons";
import { events, Event } from "@/data/eventsData";

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="shrink-0 w-70 sm:w-[320px] lg:w-85 h-full flex flex-col bg-inkstone/80 rounded-lg overflow-hidden">
      {/* Card Image - Hidden on mobile */}
      <div className="hidden lg:block relative h-48 w-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          sizes="340px"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="font-body text-body-md text-porcelain uppercase tracking-wide mb-2">
          {event.location}
        </p>
        <h3 className="font-body text-heading-sm font-semibold text-crimson mb-3">
          {event.title}
        </h3>
        <p className="font-body text-body-md text-porcelain mb-4 flex-1">
          {event.description}
        </p>
        <Link
          href={event.href}
          className="inline-flex items-center gap-1 font-body text-body-md text-porcelain hover:text-harvest transition-colors"
        >
          Ver mais
          <ChevronRightIcon />
        </Link>
      </div>
    </article>
  );
}

const GAP = 24; // gap-6 = 24px
const totalCards = events.length;

function getStep(container: HTMLDivElement): number {
  const firstChild = container.firstElementChild as HTMLElement | null;
  if (!firstChild) return 364;
  return firstChild.offsetWidth + GAP;
}

export default function EventsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotCount, setDotCount] = useState(totalCards);
  const dotCountRef = useRef(totalCards);

  const updateActiveIndex = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const step = getStep(container);
    const index = Math.round(container.scrollLeft / step);
    setActiveIndex(Math.min(index, dotCountRef.current - 1));
  }, []);

  const updateDotCount = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const step = getStep(container);
    if (step === 0) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const count = Math.floor(maxScroll / step) + 1;
    dotCountRef.current = count;
    setDotCount(count);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateActiveIndex();
    updateDotCount();
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);
    window.addEventListener("resize", updateDotCount);

    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
      window.removeEventListener("resize", updateDotCount);
    };
  }, [updateActiveIndex, updateDotCount]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const step = getStep(container);
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10;
    const isAtStart = scrollLeft <= 10;

    if (direction === "right" && isAtEnd) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === "left" && isAtStart) {
      container.scrollTo({ left: scrollWidth, behavior: "smooth" });
    } else {
      const scrollAmount = direction === "left" ? -step : step;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const step = getStep(container);
    container.scrollTo({ left: index * step, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/media/images/Events_bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-inkstone/60" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-[3%] py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-heading-lg text-harvest mb-4">
            O que está a acontecer na Coreia agora
          </h2>
          <p className="font-body text-body-lg text-porcelain">
            Festas, celebrações sazonais e eventos culturais que mostram o
            espírito vivo do país.
          </p>
        </div>

        {/* Cards Carousel */}
        <div className="flex items-stretch gap-4 mx-4 lg:mx-8">
          {/* Left Arrow Button - Desktop only */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="hidden lg:flex self-center shrink-0 items-center justify-center w-12 h-12 rounded-full bg-celestial text-porcelain hover:bg-celestial/80 cursor-pointer focus:outline-none focus:ring-2 focus:ring-porcelain focus:ring-offset-2 focus:ring-offset-inkstone"
            aria-label="Ver eventos anteriores"
          >
            <ArrowLeftIcon />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory min-w-0 flex-1"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {events.map((event) => (
              <div key={event.id} className="snap-start flex self-stretch">
                <EventCard event={event} />
              </div>
            ))}
          </div>

          {/* Right Arrow Button - Desktop only */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="hidden lg:flex self-center shrink-0 items-center justify-center w-12 h-12 rounded-full bg-celestial text-porcelain hover:bg-celestial/80 cursor-pointer focus:outline-none focus:ring-2 focus:ring-porcelain focus:ring-offset-2 focus:ring-offset-inkstone"
            aria-label="Ver mais eventos"
          >
            <ArrowRightIcon />
          </button>
        </div>

        {/* Pagination Dots */}
        <div
          className="flex justify-center gap-2 mt-8 lg:hidden"
          role="tablist"
          aria-label="Navegação de eventos"
        >
          {Array.from({ length: dotCount }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-porcelain focus:ring-offset-2 focus:ring-offset-inkstone ${
                index === activeIndex
                  ? "bg-porcelain"
                  : "bg-porcelain/40 hover:bg-porcelain/60"
              }`}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Ver evento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
