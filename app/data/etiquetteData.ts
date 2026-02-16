export interface EtiquetteTip {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const etiquetteTips: EtiquetteTip[] = [
  {
    id: 1,
    icon: "/icons/bow.svg",
    title: "Cumprimentos",
    description: "Inclina ligeiramente a cabeça ao cumprimentar.",
  },
  {
    id: 2,
    icon: "/icons/chopstick.svg",
    title: "Etiqueta à mesa",
    description: "Não espetes os pauzinhos na tigela de arroz.",
  },
  {
    id: 3,
    icon: "/icons/no-shouting.svg",
    title: "Comportamento em público",
    description: "Evita falar alto nos transportes.",
  },
  {
    id: 4,
    icon: "/icons/present.svg",
    title: "Oferecer e receber objetos",
    description: "Usa as duas mãos.",
  },
];
