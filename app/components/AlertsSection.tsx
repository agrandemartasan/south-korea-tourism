import SectionHeader from "./SectionHeader";
import Button from "./Button";
import { alertItems, AlertItem } from "../data/alertsData";

function formatContent(content: string) {
  // Convert **text** to bold spans
  const parts = content.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-porcelain">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

interface AlertCardProps {
  item: AlertItem;
}

function AlertCard({ item }: AlertCardProps) {
  return (
    <article className="border border-celestial p-6">
      <h3 className="font-body text-lg font-semibold text-harvest mb-4">
        {item.title}
      </h3>
      <ul className="space-y-2">
        {item.bullets.map((bullet, idx) => (
          <li
            key={idx}
            className="font-body text-sm text-porcelain flex items-start gap-2"
          >
            <span className="mt-1.5">•</span>
            <span>{formatContent(bullet)}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function AlertsSection() {
  // First 4 items for the grid, 5th item centered below
  const gridItems = alertItems.slice(0, 4);
  const centeredItem = alertItems[4];

  return (
    <section className="relative bg-inkstone overflow-hidden">
      {/* Background Pattern - Lantern pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('/icons/lantern.svg'), url('/icons/lantern.svg')",
          backgroundSize: "200px 200px",
          backgroundPosition: "0 0, 100px 100px",
          backgroundRepeat: "space",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 px-6 py-16 lg:px-24 lg:py-24">
        <SectionHeader
          title="Alertas de Segurança e Recomendações Oficiais"
          description=""
        />

        {/* Desktop 2x2 Grid + Centered Card */}
        <div className="hidden lg:block">
          {/* 2x2 Grid for first 4 cards */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {gridItems.map((item) => (
              <AlertCard key={item.id} item={item} />
            ))}
          </div>

          {/* Centered 5th card */}
          <div className="max-w-xl mx-auto mb-12">
            <AlertCard item={centeredItem} />
          </div>
        </div>

        {/* Mobile single column layout */}
        <div className="lg:hidden space-y-6 mb-12">
          {alertItems.map((item) => (
            <AlertCard key={item.id} item={item} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Button variant="primary" href="#">
            Ver todos os alertas ativos
          </Button>
        </div>
      </div>
    </section>
  );
}
