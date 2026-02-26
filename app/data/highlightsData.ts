import { type LocalizedString } from "@/utils/localize";

export interface Highlight {
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
  href?: string;
}

export const highlights: Highlight[] = [
  {
    icon: "/icons/mask_yellow.png",
    title: { pt: "Cultura & Tradições", en: "Culture & Traditions" },
    description: {
      pt: "Mergulha nas raízes profundas do país: rituais, etiqueta, festivais, artes e histórias que moldam a identidade coreana.",
      en: "Dive into the country's deep roots: rituals, etiquette, festivals, arts, and stories that shape Korean identity."
    },
    href: "#"
  },
  {
    icon: "/icons/gyeongbokgung-palace_yellow.png",
    title: { pt: "Atrações", en: "Attractions" },
    description: {
      pt: "Explora lugares imperdíveis, desde aldeias históricas a arranha-céus futuristas, passando por montanhas, palácios e ilhas paradisíacas.",
      en: "Explore must-see places, from historic villages to futuristic skyscrapers, through mountains, palaces, and paradise islands."
    },
    href: "#"
  },
  {
    icon: "/icons/noodle_yellow.png",
    title: { pt: "Sabores da Coreia", en: "Flavours of Korea" },
    description: {
      pt: "Descobre as delícias que definem a gastronomia coreana: mercados de rua, pratos tradicionais, comida moderna e sabores únicos.",
      en: "Discover the delights that define Korean cuisine: street markets, traditional dishes, modern food, and unique flavours."
    },
    href: "#"
  },
  {
    icon: "/icons/calendar_yellow.png",
    title: { pt: "Planear", en: "Plan" },
    description: {
      pt: "Mapas, dicas práticas, transportes, segurança, épocas recomendadas e tudo o que precisas para começar a preparar a tua viagem.",
      en: "Maps, practical tips, transport, safety, recommended seasons, and everything you need to start planning your trip."
    },
    href: "/plan"
  },
  {
    icon: "/icons/shopping-bag_yellow.png",
    title: { pt: "Loja Cultural", en: "Cultural Shop" },
    description: {
      pt: "Produtos autênticos, artesanato tradicional e lembranças para levar contigo um pedaço da Coreia.",
      en: "Authentic products, traditional crafts, and souvenirs to take a piece of Korea home with you."
    },
    href: "/shop"
  }
];
