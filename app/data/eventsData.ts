import { type LocalizedString } from "@/utils/localize";

export interface Event {
  id: string;
  location: LocalizedString;
  title: string;
  description: LocalizedString;
  image: string;
  href: string;
}

export const events: Event[] = [
  {
    id: "jeju-olle-walking-festival",
    location: { pt: "Ilha de Jeju", en: "Jeju Island" },
    title: "Jeju Olle Walking Festival",
    description: {
      pt: "De 6 a 8 de novembro de 2025, ocorrem caminhadas por percursos costeiros e rurais, contato com a natureza e paisagens de outono. Ideal para quem gosta de turismo ativo e natureza.",
      en: "From 6 to 8 November 2025, hikes along coastal and rural trails, contact with nature and autumn landscapes. Ideal for those who enjoy active tourism and nature."
    },
    image: "/media/images/Jeju_Olle_Walking_Festival.jpg",
    href: "#"
  },
  {
    id: "busan-fireworks-festival",
    location: { pt: "Gwangalli, Busan", en: "Gwangalli, Busan" },
    title: "Busan Fireworks Festival",
    description: {
      pt: "A 15 de novembro de 2025 acontece o festival de fogos de artifício à beira-mar, com ambiente festivo, praia à noite, música e celebração urbana costeira.",
      en: "On 15 November 2025, a seafront fireworks festival with a festive atmosphere, beach at night, music, and coastal urban celebration."
    },
    image: "/media/images/Busan_Fireworks_Festival.jpg",
    href: "#"
  },
  {
    id: "seoul-winter-festa",
    location: { pt: "Seul", en: "Seoul" },
    title: "Seoul Winter Festa",
    description: {
      pt: "Durante o mês de dezembro, poderá ver uma combinação de mercadinhos natalícios, decorações, pista de gelo no centro da cidade, concertos, shows de luz & som, e espírito festivo nas ruas.",
      en: "Throughout December, enjoy a combination of Christmas markets, decorations, an ice rink in the city centre, concerts, light & sound shows, and a festive spirit in the streets."
    },
    image: "/media/images/Seoul_Winter_Festa.jpg",
    href: "#"
  },
  {
    id: "seoul-k-food-festival",
    location: { pt: "Seul", en: "Seoul" },
    title: "Seoul K‑Food Festival 'Knock Knock'",
    description: {
      pt: "Todos os fins-de-semana até 31 de dezembro de 2025. Uma celebração da gastronomia coreana com dezenas de food trucks que servem pratos tradicionais e contemporâneos.",
      en: "Every weekend until 31 December 2025. A celebration of Korean gastronomy with dozens of food trucks serving traditional and contemporary dishes."
    },
    image: "/media/images/Seoul_K‑Food_Festival.jpg",
    href: "#"
  },
  {
    id: "jinhae-cherry-blossom",
    location: { pt: "Jinhae, Gyeongsang", en: "Jinhae, Gyeongsang" },
    title: "Jinhae Cherry Blossom Festival",
    description: {
      pt: "Em abril, a cidade transforma-se num mar de flores de cerejeira. Um dos maiores festivais de primavera da Coreia, com desfiles, música e paisagens deslumbrantes.",
      en: "In April, the city transforms into a sea of cherry blossoms. One of Korea's largest spring festivals, with parades, music, and breathtaking scenery."
    },
    image: "/media/images/Jeju_Olle_Walking_Festival.jpg",
    href: "#"
  },
  {
    id: "boryeong-mud-festival",
    location: { pt: "Boryeong, Chungcheong", en: "Boryeong, Chungcheong" },
    title: "Boryeong Mud Festival",
    description: {
      pt: "Em julho, a praia de Daecheon recebe milhares de visitantes para o famoso festival de lama. Diversão garantida com banhos de lama, música e atividades ao ar livre.",
      en: "In July, Daecheon Beach welcomes thousands of visitors for the famous mud festival. Guaranteed fun with mud baths, music, and outdoor activities."
    },
    image: "/media/images/Busan_Fireworks_Festival.jpg",
    href: "#"
  },
  {
    id: "andong-mask-dance",
    location: { pt: "Andong, Gyeongsang", en: "Andong, Gyeongsang" },
    title: "Andong Mask Dance Festival",
    description: {
      pt: "Em outubro, descobre danças tradicionais com máscaras, performances teatrais e rituais ancestrais numa das cidades mais históricas da Coreia.",
      en: "In October, discover traditional mask dances, theatrical performances, and ancestral rituals in one of Korea's most historic cities."
    },
    image: "/media/images/Seoul_Winter_Festa.jpg",
    href: "#"
  },
  {
    id: "hwacheon-ice-festival",
    location: { pt: "Hwacheon, Gangwon", en: "Hwacheon, Gangwon" },
    title: "Hwacheon Sancheoneo Ice Festival",
    description: {
      pt: "Em janeiro, participa na pesca no gelo, patinagem e atividades de inverno num dos festivais mais populares da estação fria coreana.",
      en: "In January, take part in ice fishing, skating, and winter activities at one of the most popular cold-season festivals in Korea."
    },
    image: "/media/images/Jeju_Olle_Walking_Festival.jpg",
    href: "#"
  },
  {
    id: "jinju-lantern-festival",
    location: { pt: "Jinju, Gyeongsang", en: "Jinju, Gyeongsang" },
    title: "Jinju Namgang Lantern Festival",
    description: {
      pt: "Em outubro, o rio Namgang ilumina-se com milhares de lanternas flutuantes, criando um espetáculo mágico de luz e cor.",
      en: "In October, the Namgang River lights up with thousands of floating lanterns, creating a magical spectacle of light and colour."
    },
    image: "/media/images/Busan_Fireworks_Festival.jpg",
    href: "#"
  },
  {
    id: "gyeongju-cherry-blossom",
    location: { pt: "Gyeongju, Gyeongsang", en: "Gyeongju, Gyeongsang" },
    title: "Gyeongju Cherry Blossom Marathon",
    description: {
      pt: "Em abril, corre entre cerejeiras em flor na antiga capital do reino de Silla, combinando desporto com paisagens históricas deslumbrantes.",
      en: "In April, run among blossoming cherry trees in the ancient capital of the Silla kingdom, combining sport with breathtaking historic landscapes."
    },
    image: "/media/images/Seoul_Winter_Festa.jpg",
    href: "#"
  }
];
