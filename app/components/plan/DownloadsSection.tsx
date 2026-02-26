"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { ChevronDownIcon, ChevronUpIcon } from "@/components/Icons";
import Button from "@/components/Button";
import {
  downloadCategories,
  DownloadCategory,
  DownloadItem,
} from "@/data/downloadsData";
import { useTranslations, useLocale } from "next-intl";
import { localize } from "@/utils/localize";
import type { Locale } from "@/i18n/routing";

interface DownloadItemRowProps {
  item: DownloadItem;
  isLast: boolean;
  downloadLabel: string;
  locale: Locale;
}

function DownloadItemRow({ item, isLast, downloadLabel, locale }: DownloadItemRowProps) {
  return (
    <div
      className={`flex items-center justify-between py-6 ${
        !isLast ? "border-b border-porcelain/30" : ""
      }`}
    >
      <span className="font-body text-body-sm text-porcelain pr-4">{localize(item.title, locale)}</span>
      <Link
        href={item.href}
        className="shrink-0 border border-porcelain text-porcelain rounded-full px-5 py-2 font-body text-body-sm hover:bg-porcelain/10 transition-colors"
      >
        {downloadLabel}
      </Link>
    </div>
  );
}

interface AccordionCategoryProps {
  category: DownloadCategory;
  isOpen: boolean;
  onToggle: () => void;
  isFirst: boolean;
  isLast: boolean;
  downloadLabel: string;
  locale: Locale;
}

function AccordionCategory({
  category,
  isOpen,
  onToggle,
  isFirst,
  isLast,
  downloadLabel,
  locale,
}: AccordionCategoryProps) {
  return (
    <div
      className={`border-celestial ${isFirst ? "border-t" : ""} ${
        isLast ? "border-b" : ""
      }`}
    >
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left cursor-pointer border-b border-celestial"
        aria-expanded={isOpen}
      >
        <h3 className="font-body text-body-lg font-semibold text-harvest">
          {localize(category.title, locale)}
        </h3>
        <span className="text-crimson ml-4 shrink-0">
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </button>

      {/* Content */}
      {isOpen && category.items.length > 0 && (
        <div className="pb-2">
          {category.items.map((item, idx) => (
            <DownloadItemRow
              key={item.id}
              item={item}
              isLast={idx === category.items.length - 1}
              downloadLabel={downloadLabel}
              locale={locale}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function DownloadsSection() {
  const t = useTranslations('plan.downloads');
  const commonT = useTranslations('common');
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

  return (
    <section className="bg-inkstone">
      <div className="px-6 lg:px-[3%] py-16 lg:py-24">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-heading-lg text-harvest">
            {t('heading')}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto">
          {downloadCategories.map((category, idx) => (
            <AccordionCategory
              key={category.id}
              category={category}
              isOpen={openItems.has(category.id)}
              onToggle={() => toggleItem(category.id)}
              isFirst={idx === 0}
              isLast={idx === downloadCategories.length - 1}
              downloadLabel={commonT('download')}
              locale={locale}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button variant="primary" href="#">
            {t('button')}
          </Button>
        </div>
      </div>
    </section>
  );
}
