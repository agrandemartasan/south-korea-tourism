import { type LocalizedString } from "@/utils/localize";

export interface EtiquetteTip {
  id: number;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
}

export const etiquetteTips: EtiquetteTip[] = [
  {
    id: 1,
    icon: "/icons/bow.svg",
    title: { pt: "Cumprimentos", en: "Greetings" },
    description: {
      pt: "Inclina ligeiramente a cabeça ao cumprimentar.",
      en: "Bow your head slightly when greeting."
    },
  },
  {
    id: 2,
    icon: "/icons/chopstick.svg",
    title: { pt: "Etiqueta à mesa", en: "Table etiquette" },
    description: {
      pt: "Não espetes os pauzinhos na tigela de arroz.",
      en: "Do not stick chopsticks upright in a bowl of rice."
    },
  },
  {
    id: 3,
    icon: "/icons/no-shouting.svg",
    title: { pt: "Comportamento em público", en: "Public behaviour" },
    description: {
      pt: "Evita falar alto nos transportes.",
      en: "Avoid speaking loudly on public transport."
    },
  },
  {
    id: 4,
    icon: "/icons/present.svg",
    title: { pt: "Oferecer e receber objetos", en: "Giving and receiving objects" },
    description: {
      pt: "Usa as duas mãos.",
      en: "Use both hands."
    },
  },
];
