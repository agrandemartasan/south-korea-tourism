import { type LocalizedString } from "@/utils/localize";

export interface SafetyTopic {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  href: string;
}

export const safetyTopics: SafetyTopic[] = [
  {
    id: "informacao-essencial",
    title: { pt: "Informação Essencial", en: "Essential Information" },
    description: {
      pt: "Vistos, clima, documentos e recomendações básicas antes de viajar.",
      en: "Visas, weather, documents and basic recommendations before travelling."
    },
    href: "#"
  },
  {
    id: "seguranca-bem-estar",
    title: { pt: "Segurança e Bem-estar", en: "Safety & Wellbeing" },
    description: {
      pt: "Dicas de segurança, contactos úteis e comportamentos recomendados nas principais cidades.",
      en: "Safety tips, useful contacts and recommended behaviour in the main cities."
    },
    href: "#"
  },
  {
    id: "saude-emergencias",
    title: { pt: "Saúde & Emergências", en: "Health & Emergencies" },
    description: {
      pt: "Números de emergência, farmácias, apps locais e conselhos de saúde para viajantes.",
      en: "Emergency numbers, pharmacies, local apps, and health advice for travellers."
    },
    href: "#"
  }
];
