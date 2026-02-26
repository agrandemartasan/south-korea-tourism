import Image from "next/image";
import Button from "@/components/Button";
import { ChevronRightIcon } from "@/components/Icons";
import { etiquetteTips, EtiquetteTip } from "@/data/etiquetteData";
import { getTranslations, getLocale } from "next-intl/server";
import { localize } from "@/utils/localize";
import type { Locale } from "@/i18n/routing";

interface EtiquetteTipItemProps {
  tip: EtiquetteTip;
  isLast?: boolean;
  locale: Locale;
}

function EtiquetteTipItem({ tip, isLast = false, locale }: EtiquetteTipItemProps) {
  return (
    <div
      className={`flex gap-4 py-4 ${!isLast ? "border-b border-porcelain/30" : ""}`}
    >
      <div className="shrink-0 w-10 h-10">
        <Image
          src={tip.icon}
          alt=""
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-body text-body-lg font-semibold text-harvest mb-1">
          {localize(tip.title, locale)}
        </h3>
        <p className="font-body text-body-sm text-porcelain">{localize(tip.description, locale)}</p>
      </div>
    </div>
  );
}

export default async function EtiquetteSection() {
  const t = await getTranslations('plan.etiquette');
  const locale = await getLocale() as Locale;
  return (
    <section id="etiqueta" className="bg-inkstone scroll-mt-24">
      <div className="px-6 lg:px-[3%] py-12 lg:py-16">
        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:gap-16">
          {/* Left - Image */}
          <div className="flex-1">
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <Image
                src="/media/images/jeol.jpg"
                alt="Duas pessoas a fazer uma vénia tradicional coreana"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 flex flex-col">
            <h2 className="font-heading text-heading-lg text-harvest mb-4">
              {t('headingLine1')}
              <span className="block">{t('headingLine2')}</span>
            </h2>
            <p className="font-body text-body-md text-porcelain mb-8 max-w-xl">
              {t('description')}
            </p>

            {/* Etiquette Tips */}
            <div className="mb-8">
              {etiquetteTips.map((tip, index) => (
                <EtiquetteTipItem
                  key={tip.id}
                  tip={tip}
                  isLast={index === etiquetteTips.length - 1}
                  locale={locale}
                />
              ))}
            </div>

            {/* Button */}
            <div>
              <Button variant="primary" href="#">
                {t('button')}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Title & Description */}
          <h2 className="font-heading text-heading-lg text-harvest mb-4">
            {t('headingMobile')}
          </h2>
          <p className="font-body text-body-md text-porcelain mb-8">
            {t('description')}
          </p>

          {/* Image - Square on mobile */}
          <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-8">
            <Image
              src="/media/images/jeol.jpg"
              alt="Dois homens a fazer uma vénia tradicional coreana"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Etiquette Tips */}
          <div className="mb-8">
            {etiquetteTips.map((tip, index) => (
              <EtiquetteTipItem
                key={tip.id}
                tip={tip}
                isLast={index === etiquetteTips.length - 1}
                locale={locale}
              />
            ))}
          </div>

          {/* Button */}
          <div>
            <Button variant="primary" href="#">
              {t('button')}
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
