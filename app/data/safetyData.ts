export interface SafetyTopic {
  id: string;
  title: string;
  description: string;
  href: string;
}

export const safetyTopics: SafetyTopic[] = [
  {
    id: "informacao-essencial",
    title: "Informação Essencial",
    description:
      "Vistos, clima, documentos e recomendações básicas antes de viajar.",
    href: "#"
  },
  {
    id: "seguranca-bem-estar",
    title: "Segurança e Bem-estar",
    description:
      "Dicas de segurança, contactos úteis e comportamentos recomendados nas principais cidades.",
    href: "#"
  },
  {
    id: "saude-emergencias",
    title: "Saúde & Emergências",
    description:
      "Números de emergência, farmácias, apps locais e conselhos de saúde para viajantes.",
    href: "#"
  }
];
