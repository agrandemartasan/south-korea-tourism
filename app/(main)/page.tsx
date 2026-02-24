import HeroSection from "@/components/main/HeroSection";
import IconGridSection from "@/components/IconGridSection";
import EventsSection from "@/components/main/EventsSection";
import InspirationSection from "@/components/main/InspirationSection";
import ProverbsSection from "@/components/main/ProverbsSection";
import SafetySection from "@/components/main/SafetySection";
import ShopCtaSection from "@/components/main/ShopCtaSection";
import { highlights } from "@/data/highlightsData";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IconGridSection
        id="explorar"
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
