import HeroSection from "@/components/main/HeroSection";
import IconGridSection from "@/components/IconGridSection";
import EventsSection from "@/components/main/EventsSection";
import InspirationSection from "@/components/main/InspirationSection";
import ProverbsSection from "@/components/main/ProverbsSection";
import SafetySection from "@/components/main/SafetySection";
import ShopCtaSection from "@/components/main/ShopCtaSection";
import { highlights } from "@/data/highlightsData";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home.highlights');
  return (
    <main>
      <HeroSection />
      <IconGridSection
        id="explorar"
        heading={t('heading')}
        description={t('description')}
        items={highlights}
      />
      <EventsSection />
      <InspirationSection />
      <ProverbsSection />
      <SafetySection />
      <ShopCtaSection />
    </main>
  );
}
