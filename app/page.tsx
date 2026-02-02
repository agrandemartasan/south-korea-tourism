import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import EventsSection from "./components/EventsSection";
import InspirationSection from "./components/InspirationSection";
import ProverbsSection from "./components/ProverbsSection";
import SafetySection from "./components/SafetySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <EventsSection />
      <InspirationSection />
      <ProverbsSection />
      <SafetySection />
    </main>
  );
}
