"use client";

import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import AccentCard from "@/components/AccentCard";
import { alertItems, AlertItem } from "@/data/alertsData";
import { formatContent } from "@/utils/formatContent";
import { useTranslations, useLocale } from "next-intl";
import { localize } from "@/utils/localize";
import type { Locale } from "@/i18n/routing";

interface AlertCardProps {
  item: AlertItem;
  locale: Locale;
}

function AlertCard({ item, locale }: AlertCardProps) {
  return (
    <AccentCard>
      <h3 className="font-body text-body-lg font-semibold text-harvest mb-4">
        {localize(item.title, locale)}
      </h3>
      <ul className="space-y-2">
        {item.bullets.map((bullet, idx) => (
          <li
            key={idx}
            className="font-body text-body-sm text-porcelain flex items-start gap-2"
          >
            <span className="mt-1.5">•</span>
            <span>{formatContent(localize(bullet, locale))}</span>
          </li>
        ))}
      </ul>
    </AccentCard>
  );
}

export default function AlertsSection() {
  const t = useTranslations('plan');
  const locale = useLocale() as Locale;
  // First 4 items for the grid, 5th item centered below
  const gridItems = alertItems.slice(0, 4);
  const centeredItem = alertItems[4];

  return (
    <section className="relative bg-inkstone overflow-hidden">
      {/* Background Pattern - Lantern pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('/icons/lantern.svg'), url('/icons/lantern.svg')",
          backgroundSize: "200px 200px",
          backgroundPosition: "0 0, 100px 100px",
          backgroundRepeat: "space",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-[3%] py-16 lg:py-24">
        <SectionHeader
          title={t('alerts.heading')}
          description=""
        />

        {/* Desktop 2x2 Grid + Centered Card */}
        <div className="hidden lg:block">
          {/* 2x2 Grid for first 4 cards */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {gridItems.map((item) => (
              <AlertCard key={item.id} item={item} locale={locale} />
            ))}
          </div>

          {/* Centered 5th card */}
          <div className="max-w-xl mx-auto mb-12">
            <AlertCard item={centeredItem} locale={locale} />
          </div>
        </div>

        {/* Mobile single column layout */}
        <div className="lg:hidden space-y-6 mb-12">
          {alertItems.map((item) => (
            <AlertCard key={item.id} item={item} locale={locale} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Button variant="primary" href="#">
            {t('alerts.button')}
          </Button>
        </div>
      </div>
    </section>
  );
}
