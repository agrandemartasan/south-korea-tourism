import PlanHeroSection from "../../components/PlanHeroSection";
import IconGridSection from "../../components/IconGridSection";
import ItinerariesSection from "../../components/ItinerariesSection";
import EtiquetteSection from "../../components/EtiquetteSection";
import EssentialsSection from "../../components/EssentialsSection";
import AlertsSection from "../../components/AlertsSection";
import { travelKitItems } from "../../data/travelKitData";

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
    </main>
  );
}
