export interface Itinerary {
  id: number;
  title: string;
  description: string;
  exploreLink: string;
  image?: string;
}

export const itineraries: Itinerary[] = [
  {
    id: 1,
    title: "Roteiro de 3 dias –\nEssenciais de Seul",
    description:
      "Este itinerário concentra o melhor de Seul em apenas três dias, equilibrando cultura, modernidade e gastronomia. Descobre os palácios históricos de manhã, explora bairros icónicos como Myeongdong, Hongdae ou Insadong à tarde, e termina o dia com experiências gastronómicas inesquecíveis. É um roteiro pensado para quem quer sentir a energia da cidade sem pressa, mas também sem perder os pontos obrigatórios.",
    exploreLink: "#",
    image: "/media/images/621349_poster.jpg"
  },
  {
    id: 2,
    title: "Roteiro de 5 dias –\nCultura + Gastronomia",
    description:
      "Este roteiro combina visitas culturais aprofundadas com experiências culinárias típicas. Inclui templos, museus, mercados e aulas de cozinha. Cada dia alterna entre atividades culturais e degustações, permitindo a compreensão a essência da Coreia do Sul através dos sabores, do artesanato e das tradições. Ideal para quem quer mergulhar na identidade coreana.",
    exploreLink: "#"
  },
  {
    id: 3,
    title: "Roteiro de 7 dias –\nCoreia Completa",
    description:
      "Um roteiro completo que permite explorar duas das cidades mais importantes do país, unindo o lado moderno de Seul com as paisagens costeiras e templos de Busan. Inclui deslocações em KTX, visitas ao palácio Gyeongbokgung, mercados tradicionais, praias de Busan e estadia opcional num templo budista (templestay). Perfeito para quem quer uma visão ampla da Coreia do Sul em apenas uma semana.",
    exploreLink: "#"
  },
  {
    id: 4,
    title: "Roteiro Temático –\nK-Pop & Cultura Pop",
    description:
      "Uma imersão vibrante no coração da cultura pop sul-coreana. Explora os bairros mais emblemáticos do K-Pop, visita lojas oficiais de idols, pisa estúdios lendários e vive a energia da música e do entretenimento que conquistaram o mundo. Inclui paragens em Gangnam, Hongdae e Myeongdong.",
    exploreLink: "#",
    image: "/media/images/skz_pop_up.jpg"
  }
];
