"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon } from "./Icons";
import { events, Event } from "../data/eventsData";

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] h-full flex flex-col bg-inkstone/80 rounded-lg overflow-hidden">
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
        <p className="font-body text-sm text-porcelain uppercase tracking-wide mb-2">
          {event.location}
        </p>
        <h3 className="font-body text-xl font-semibold text-crimson mb-3">
          {event.title}
        </h3>
        <p className="font-body text-sm text-porcelain leading-relaxed mb-4 flex-1">
          {event.description}
        </p>
        <Link
          href={event.href}
          className="inline-flex items-center gap-1 font-body text-sm text-porcelain hover:text-harvest transition-colors"
        >
          Ver mais
          <ChevronRightIcon />
        </Link>
      </div>
    </article>
  );
}

export default function EventsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 340 + 24; // card width + gap
  const totalCards = events.length;

  const updateActiveIndex = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft } = container;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, totalCards - 1));
  }, [cardWidth, totalCards]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateActiveIndex();
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10;
    const isAtStart = scrollLeft <= 10;

    if (direction === "right" && isAtEnd) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === "left" && isAtStart) {
      container.scrollTo({ left: scrollWidth, behavior: "smooth" });
    } else {
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
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
      <div className="relative z-10 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center px-6 mb-12">
          <h2 className="font-heading text-3xl leading-tight text-harvest mb-4 lg:text-5xl">
            O que está a acontecer na Coreia agora
          </h2>
          <p className="font-body text-base text-porcelain lg:text-lg">
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
          className="flex justify-center gap-2 mt-8"
          role="tablist"
          aria-label="Navegação de eventos"
        >
          {events.map((event, index) => (
            <button
              key={event.id}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-porcelain focus:ring-offset-2 focus:ring-offset-inkstone ${
                index === activeIndex
                  ? "bg-porcelain"
                  : "bg-porcelain/40 hover:bg-porcelain/60"
              }`}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Ver ${event.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
