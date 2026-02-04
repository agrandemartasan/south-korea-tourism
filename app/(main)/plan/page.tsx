import PlanHeroSection from "../../components/PlanHeroSection";
import IconGridSection from "../../components/IconGridSection";
import { travelKitItems } from "../../data/travelKitData";

export default function PlanPage() {
  return (
    <main>
      <PlanHeroSection />
      <IconGridSection
        heading="Kit do Viajante"
        items={travelKitItems}
      />
    </main>
  );
}
