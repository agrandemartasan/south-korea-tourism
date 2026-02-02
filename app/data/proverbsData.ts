export interface Proverb {
  id: string;
  quote: string;
  attribution: string;
}

export const proverbs: Proverb[] = [
  {
    id: "respeito",
    quote: "O respeito é a ponte que liga todas as relações.",
    attribution: "Provérbio coreano"
  },
  {
    id: "vento-montanha",
    quote: "O vento muda, mas a montanha permanece.",
    attribution: "Ditado tradicional"
  },
  {
    id: "honra-passado",
    quote: "Honra o passado, vive o presente, sonha o futuro.",
    attribution: "Máxima cultural coreana"
  }
];
