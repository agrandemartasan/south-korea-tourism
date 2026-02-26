import { type LocalizedString } from "@/utils/localize";

export interface Itinerary {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  exploreLink: string;
  image?: string;
}

export const itineraries: Itinerary[] = [
  {
    id: 1,
    title: {
      pt: "Roteiro de 3 dias –\nEssenciais de Seul",
      en: "3-Day Itinerary –\nSeoul Essentials"
    },
    description: {
      pt: "Este itinerário concentra o melhor de Seul em apenas três dias, equilibrando cultura, modernidade e gastronomia. Descobre os palácios históricos de manhã, explora bairros icónicos como Myeongdong, Hongdae ou Insadong à tarde, e termina o dia com experiências gastronómicas inesquecíveis. É um roteiro pensado para quem quer sentir a energia da cidade sem pressa, mas também sem perder os pontos obrigatórios.",
      en: "This itinerary concentrates the best of Seoul in just three days, balancing culture, modernity, and gastronomy. Discover the historic palaces in the morning, explore iconic neighbourhoods like Myeongdong, Hongdae, or Insadong in the afternoon, and end the day with unforgettable culinary experiences. A route designed for those who want to feel the city's energy without rush, while not missing the must-see highlights."
    },
    exploreLink: "#",
    image: "/media/images/621349_poster.jpg"
  },
  {
    id: 2,
    title: {
      pt: "Roteiro de 5 dias –\nCultura + Gastronomia",
      en: "5-Day Itinerary –\nCulture + Gastronomy"
    },
    description: {
      pt: "Este roteiro combina visitas culturais aprofundadas com experiências culinárias típicas. Inclui templos, museus, mercados e aulas de cozinha. Cada dia alterna entre atividades culturais e degustações, permitindo a compreensão a essência da Coreia do Sul através dos sabores, do artesanato e das tradições. Ideal para quem quer mergulhar na identidade coreana.",
      en: "This itinerary combines in-depth cultural visits with typical culinary experiences. Includes temples, museums, markets, and cooking classes. Each day alternates between cultural activities and tastings, allowing you to understand the essence of South Korea through flavours, crafts, and traditions. Ideal for those who want to immerse themselves in Korean identity."
    },
    exploreLink: "#"
  },
  {
    id: 3,
    title: {
      pt: "Roteiro de 7 dias –\nCoreia Completa",
      en: "7-Day Itinerary –\nFull Korea"
    },
    description: {
      pt: "Um roteiro completo que permite explorar duas das cidades mais importantes do país, unindo o lado moderno de Seul com as paisagens costeiras e templos de Busan. Inclui deslocações em KTX, visitas ao palácio Gyeongbokgung, mercados tradicionais, praias de Busan e estadia opcional num templo budista (templestay). Perfeito para quem quer uma visão ampla da Coreia do Sul em apenas uma semana.",
      en: "A complete itinerary that lets you explore two of the country's most important cities, combining the modern side of Seoul with the coastal landscapes and temples of Busan. Includes KTX travel, visits to Gyeongbokgung Palace, traditional markets, Busan beaches, and an optional temple stay. Perfect for those who want a broad view of South Korea in just one week."
    },
    exploreLink: "#"
  },
  {
    id: 4,
    title: {
      pt: "Roteiro Temático –\nK-Pop & Cultura Pop",
      en: "Thematic Itinerary –\nK-Pop & Pop Culture"
    },
    description: {
      pt: "Uma imersão vibrante no coração da cultura pop sul-coreana. Explora os bairros mais emblemáticos do K-Pop, visita lojas oficiais de idols, pisa estúdios lendários e vive a energia da música e do entretenimento que conquistaram o mundo. Inclui paragens em Gangnam, Hongdae e Myeongdong.",
      en: "A vibrant immersion into the heart of South Korean pop culture. Explore the most iconic K-Pop neighbourhoods, visit official idol stores, walk through legendary studios, and experience the energy of the music and entertainment that conquered the world. Includes stops in Gangnam, Hongdae, and Myeongdong."
    },
    exploreLink: "#",
    image: "/media/images/skz_pop_up.jpg"
  }
];
