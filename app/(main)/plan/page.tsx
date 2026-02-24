import PlanHeroSection from "@/components/plan/PlanHeroSection";
import IconGridSection from "@/components/IconGridSection";
import ItinerariesSection from "@/components/plan/ItinerariesSection";
import EtiquetteSection from "@/components/plan/EtiquetteSection";
import EssentialsSection from "@/components/plan/EssentialsSection";
import AlertsSection from "@/components/plan/AlertsSection";
import DownloadsSection from "@/components/plan/DownloadsSection";
import { travelKitItems } from "@/data/travelKitData";

export default function PlanPage() {
  return (
    <main>
      <PlanHeroSection />
      <IconGridSection
        heading="Kit do Viajante"
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
