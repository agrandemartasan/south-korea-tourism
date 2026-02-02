export interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const articles: Article[] = [
  {
    id: "experiencias-autenticas",
    category: "Atrações",
    title: "5 experiências autênticas para sentir a Coreia além das cidades",
    description:
      "Templos, aldeias tradicionais e rotas naturais que te revelam o lado mais sereno do país.",
    image: "/media/images/korea.jpg",
    href: "#"
  },
  {
    id: "navegar-pela-coreia",
    category: "Planear",
    title: "Como navegar pela Coreia com facilidade",
    description:
      "Transportes, apps úteis, dicas práticas e truques para te movimentares como um local.",
    image: "/media/images/subway.jpg",
    href: "#"
  },
  {
    id: "etiqueta-coreana",
    category: "Planear",
    title: "Etiqueta coreana: o que deves saber para ser respeitoso",
    description:
      "Cumprimentos, regras sociais, bons hábitos e tradições que fazem a diferença na tua viagem.",
    image: "/media/images/jeol.jpg",
    href: "#"
  }
];
