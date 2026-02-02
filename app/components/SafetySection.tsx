import Link from "next/link";
import { ChevronRightIcon } from "./Icons";
import { safetyTopics, SafetyTopic } from "../data/safetyData";
import SectionHeader from "./SectionHeader";

interface SafetyCardProps {
  topic: SafetyTopic;
}

function SafetyCard({ topic }: SafetyCardProps) {
  return (
    <article className="bg-celestial/20 border-l-2 border-harvest rounded-lg p-6 lg:p-8">
      <h3 className="font-body text-xl font-semibold text-harvest mb-3">
        {topic.title}
      </h3>
      <p className="font-body text-base text-porcelain leading-relaxed mb-4">
        {topic.description}
      </p>
      <Link
        href={topic.href}
        className="inline-flex items-center gap-1 font-body text-base text-porcelain hover:text-harvest transition-colors"
      >
        Ler mais
        <ChevronRightIcon />
      </Link>
    </article>
  );
}

export default function SafetySection() {
  return (
    <section className="bg-inkstone">
      <div className="px-6 py-16 lg:px-24 lg:py-24">
        <SectionHeader
          title="Viaja com confiança e segurança"
          description="Tudo o que precisas para uma viagem tranquila e bem preparada."
        />

        {/* Safety Cards */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
          {safetyTopics.map((topic) => (
            <SafetyCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
}
