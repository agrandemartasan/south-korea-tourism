import { Link } from "@/i18n/navigation";
import { ChevronRightIcon } from "@/components/Icons";
import { safetyTopics, SafetyTopic } from "@/data/safetyData";
import SectionHeader from "@/components/SectionHeader";
import AccentCard from "@/components/AccentCard";
import { getTranslations, getLocale } from "next-intl/server";
import { localize } from "@/utils/localize";
import type { Locale } from "@/i18n/routing";

interface SafetyCardProps {
  topic: SafetyTopic;
  readMoreLabel: string;
  locale: Locale;
}

function SafetyCard({ topic, readMoreLabel, locale }: SafetyCardProps) {
  return (
    <AccentCard>
      <h3 className="font-body text-heading-sm font-semibold text-harvest mb-3">
        {localize(topic.title, locale)}
      </h3>
      <p className="font-body text-body-md text-porcelain mb-4">
        {localize(topic.description, locale)}
      </p>
      <Link
        href={topic.href}
        className="inline-flex items-center gap-1 font-body text-body-md text-porcelain hover:text-harvest transition-colors"
      >
        {readMoreLabel}
        <ChevronRightIcon />
      </Link>
    </AccentCard>
  );
}

export default async function SafetySection() {
  const t = await getTranslations('home.safety');
  const commonT = await getTranslations('common');
  const locale = await getLocale() as Locale;
  return (
    <section className="bg-inkstone">
      <div className="px-6 lg:px-[3%] py-16 lg:py-24">
        <SectionHeader
          title={t('heading')}
          description={t('description')}
        />

        {/* Safety Cards */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
          {safetyTopics.map((topic) => (
            <SafetyCard key={topic.id} topic={topic} readMoreLabel={commonT('readMore')} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
