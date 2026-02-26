import { type LocalizedString } from "@/utils/localize";

export interface Proverb {
  id: string;
  quote: LocalizedString;
  attribution: LocalizedString;
}

export const proverbs: Proverb[] = [
  {
    id: "respeito",
    quote: {
      pt: "O respeito é a ponte que liga todas as relações.",
      en: "Respect is the bridge that connects all relationships."
    },
    attribution: { pt: "Provérbio coreano", en: "Korean proverb" }
  },
  {
    id: "vento-montanha",
    quote: {
      pt: "O vento muda, mas a montanha permanece.",
      en: "The wind changes, but the mountain remains."
    },
    attribution: { pt: "Ditado tradicional", en: "Traditional saying" }
  },
  {
    id: "honra-passado",
    quote: {
      pt: "Honra o passado, vive o presente, sonha o futuro.",
      en: "Honour the past, live the present, dream the future."
    },
    attribution: { pt: "Máxima cultural coreana", en: "Korean cultural maxim" }
  }
];
