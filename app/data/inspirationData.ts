import { type LocalizedString } from "@/utils/localize";

export interface Article {
  id: string;
  category: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  href: string;
}

export const articles: Article[] = [
  {
    id: "experiencias-autenticas",
    category: { pt: "Atrações", en: "Attractions" },
    title: {
      pt: "5 experiências autênticas para sentir a Coreia além das cidades",
      en: "5 authentic experiences to feel Korea beyond the cities"
    },
    description: {
      pt: "Templos, aldeias tradicionais e rotas naturais que te revelam o lado mais sereno do país.",
      en: "Temples, traditional villages, and natural routes that reveal the country's most serene side."
    },
    image: "/media/images/korea.jpg",
    href: "#"
  },
  {
    id: "navegar-pela-coreia",
    category: { pt: "Planear", en: "Plan" },
    title: {
      pt: "Como navegar pela Coreia com facilidade",
      en: "How to navigate Korea with ease"
    },
    description: {
      pt: "Transportes, apps úteis, dicas práticas e truques para te movimentares como um local.",
      en: "Transport, useful apps, practical tips, and tricks to move around like a local."
    },
    image: "/media/images/subway.jpg",
    href: "#"
  },
  {
    id: "etiqueta-coreana",
    category: { pt: "Planear", en: "Plan" },
    title: {
      pt: "Etiqueta coreana: o que deves saber para ser respeitoso",
      en: "Korean etiquette: what you need to know to be respectful"
    },
    description: {
      pt: "Cumprimentos, regras sociais, bons hábitos e tradições que fazem a diferença na tua viagem.",
      en: "Greetings, social rules, good habits, and traditions that make a difference on your trip."
    },
    image: "/media/images/jeol.jpg",
    href: "#"
  }
];
