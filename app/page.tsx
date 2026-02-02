import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import EventsSection from "./components/EventsSection";
import InspirationSection from "./components/InspirationSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <EventsSection />
      <InspirationSection />
    </main>
  );
}
