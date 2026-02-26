import PlanHeroSection from "@/components/plan/PlanHeroSection";
import IconGridSection from "@/components/IconGridSection";
import ItinerariesSection from "@/components/plan/ItinerariesSection";
import EtiquetteSection from "@/components/plan/EtiquetteSection";
import EssentialsSection from "@/components/plan/EssentialsSection";
import AlertsSection from "@/components/plan/AlertsSection";
import DownloadsSection from "@/components/plan/DownloadsSection";
import { travelKitItems } from "@/data/travelKitData";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function PlanPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('plan.travelKit');
  return (
    <main>
      <PlanHeroSection />
      <IconGridSection
        heading={t('heading')}
        items={travelKitItems}
      />
      <ItinerariesSection />
      <EtiquetteSection />
      <EssentialsSection />
      <AlertsSection />
      <DownloadsSection />
    </main>
  );
}
