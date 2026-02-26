"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@/components/Icons";
import SectionHeader from "@/components/SectionHeader";
import { essentialItems, EssentialItem } from "@/data/essentialsData";
import { formatContent } from "@/utils/formatContent";
import { useTranslations, useLocale } from "next-intl";
import { localize } from "@/utils/localize";
import type { Locale } from "@/i18n/routing";

interface AccordionItemProps {
  item: EssentialItem;
  isOpen: boolean;
  onToggle: () => void;
  locale: Locale;
}


function AccordionItem({ item, isOpen, onToggle, locale }: AccordionItemProps) {
  return (
    <div className="border-y border-porcelain/30">
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <h3 className="font-body text-body-lg font-semibold text-harvest">
          {localize(item.title, locale)}
        </h3>
        <span className="text-crimson ml-4 shrink-0">
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </button>

      {/* Content */}
      {isOpen && (
        <div className="pb-6">
          {/* Regular content with line breaks */}
          {item.content && localize(item.content, locale) && (
            <div className="font-body text-body-sm text-porcelain">
              {localize(item.content, locale).split("\n").map((paragraph, idx) => (
                <p key={idx} className={idx > 0 ? "mt-3" : ""}>
                  {formatContent(paragraph)}
                </p>
              ))}
            </div>
          )}

          {/* Bullet list */}
          {item.bulletList && (
            <ul className="mt-3 space-y-1">
              {item.bulletList.map((listItem, idx) => (
                <li
                  key={idx}
                  className="font-body text-body-sm text-porcelain flex items-start gap-2"
                >
                  <span className="mt-1.5">•</span>
                  {formatContent(localize(listItem, locale))}
                </li>
              ))}
            </ul>
          )}

          {/* Seasons grid */}
          {item.seasons && (
            <div className="grid grid-cols-2 gap-4">
              {item.seasons.map((season, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Image
                    src={season.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 shrink-0 mt-0.5"
                  />
                  <div>
                    <h4 className="font-body text-body-sm font-semibold text-porcelain">
                      {localize(season.title, locale)}
                    </h4>
                    <p className="font-body text-xs text-porcelain/80">
                      {localize(season.description, locale)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function EssentialsSection() {
  const t = useTranslations('plan.essentials');
  const locale = useLocale() as Locale;
  // All items start collapsed
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Split items for desktop 2-column layout (first 4 left, last 4 right)
  const leftColumnItems = essentialItems.filter((_, idx) => idx < 4);
  const rightColumnItems = essentialItems.filter((_, idx) => idx >= 4);

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/media/images/seoul.jpg"
          alt=""
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-inkstone/70" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-[3%] py-16 lg:py-24">
        <SectionHeader
          title={t('heading')}
          description={t('description')}
        />

        {/* Desktop 2-column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-16">
          {/* Left Column */}
          <div>
            {leftColumnItems.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
                locale={locale}
              />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightColumnItems.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
                locale={locale}
              />
            ))}
          </div>
        </div>

        {/* Mobile single column layout */}
        <div className="lg:hidden">
          {essentialItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
