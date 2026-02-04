import HeroSection from "../components/HeroSection";
import IconGridSection from "../components/IconGridSection";
import EventsSection from "../components/EventsSection";
import InspirationSection from "../components/InspirationSection";
import ProverbsSection from "../components/ProverbsSection";
import SafetySection from "../components/SafetySection";
import ShopCtaSection from "../components/ShopCtaSection";
import { highlights } from "../data/highlightsData";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IconGridSection
        heading="Explora o melhor da Coreia do Sul"
        description="Escolhe o que queres descobrir a seguir — cultura, sabores, paisagens ou planeamento."
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
