export interface Season {
  icon: string;
  title: string;
  description: string;
}

export interface EssentialItem {
  id: number;
  title: string;
  content: string;
  bulletList?: string[];
  seasons?: Season[];
}

export const essentialItems: EssentialItem[] = [
  {
    id: 1,
    title: "Melhor altura para visitar",
    content:
      "A Coreia do Sul é um destino para todo o ano, mas as estações mais recomendadas são **primavera (abril–junho)** e **outono (setembro–novembro)**, quando as temperaturas são amenas e as paisagens ganham cores vibrantes.\nNo verão, espera **muitos festivais**, mas também **chuva e humidade elevada**. No inverno, cidades como Seul oferecem **eventos de luzes, mercados de Natal e neve**.",
  },
  {
    id: 2,
    title: "Moeda e métodos de pagamento",
    content:
      "A moeda oficial é o **Won sul-coreano (KRW)**. Cartões **Visa e Mastercard** são amplamente aceites, inclusive em transportes, lojas e cafés.\nNo entanto, pequenos mercados e lojas locais podem exigir pagamento em dinheiro. ATMs internacionais estão disponíveis em quase todas as zonas turísticas.",
  },
  {
    id: 3,
    title: "Cartões SIM e eSIM",
    content:
      "A forma mais fácil de ficar conectado é comprar um **SIM de turista** nos aeroportos de Incheon ou Gimpo, com **opções diárias ou semanais**.\nPara conveniência máxima, muitos viajantes optam por **eSIM**, que pode ser ativado antes mesmo da chegada ao país.",
  },
  {
    id: 4,
    title: "Saúde e seguro",
    content:
      "Não há vacinas obrigatórias para entrar na Coreia do Sul, mas é altamente recomendável contratar um **seguro de viagem** que cubra emergência médica.\nO sistema de saúde é eficiente, mas **consultas e tratamentos podem ser caros** para turistas sem seguro adequado.",
  },
  {
    id: 5,
    title: "Clima por estação",
    content: "",
    seasons: [
      {
        icon: "/icons/cherry-blossom.svg",
        title: "Primavera",
        description: "Clima ameno, cerejeiras em flor.",
      },
      {
        icon: "/icons/summer.svg",
        title: "Verão",
        description: "Quente, húmido e chuvoso, época de monções.",
      },
      {
        icon: "/icons/leaf-fall.svg",
        title: "Outono",
        description: "Temperaturas agradáveis e folhas douradas.",
      },
      {
        icon: "/icons/snowflake.svg",
        title: "Inverno",
        description: "Frio intenso, possível neve, ideal para eventos sazonais.",
      },
    ],
  },
  {
    id: 6,
    title: "T-Money e transportes integrados",
    content:
      "A **T-Money** é o cartão de transporte mais prático para metro, autocarro e táxi. Pode ser comprado em lojas de conveniência e recarregado facilmente.\nÉ também aceite em algumas máquinas automáticas e cafés.",
  },
  {
    id: 7,
    title: "Internet pública (Wi-Fi)",
    content:
      "A Coreia do Sul é famosa por ter um dos sistemas de Internet mais rápidos do mundo.\nCidades como Seul oferecem Wi-Fi gratuito em:",
    bulletList: [
      "Estações de metro",
      "Autocarros",
      "Centros comerciais",
      "Atrações turísticas",
      "Bibliotecas públicas",
    ],
  },
  {
    id: 8,
    title: "Ficha elétrica (220V, Tipo F)",
    content:
      "A Coreia utiliza 220V, 60Hz, com tomadas Tipo F.\nA maioria dos viajantes não precisa de adaptador, mas dispositivos antigos podem necessitar de transformadores específicos.",
  },
];
