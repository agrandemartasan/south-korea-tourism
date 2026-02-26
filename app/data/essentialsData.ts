import { type LocalizedString } from "@/utils/localize";

export interface Season {
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface EssentialItem {
  id: number;
  title: LocalizedString;
  content: LocalizedString;
  bulletList?: LocalizedString[];
  seasons?: Season[];
}

export const essentialItems: EssentialItem[] = [
  {
    id: 1,
    title: { pt: "Melhor altura para visitar", en: "Best time to visit" },
    content: {
      pt: "A Coreia do Sul é um destino para todo o ano, mas as estações mais recomendadas são **primavera (abril–junho)** e **outono (setembro–novembro)**, quando as temperaturas são amenas e as paisagens ganham cores vibrantes.\nNo verão, espera **muitos festivais**, mas também **chuva e humidade elevada**. No inverno, cidades como Seul oferecem **eventos de luzes, mercados de Natal e neve**.",
      en: "South Korea is a year-round destination, but the most recommended seasons are **spring (April–June)** and **autumn (September–November)**, when temperatures are mild and landscapes take on vibrant colours.\nIn summer, expect **many festivals**, but also **rain and high humidity**. In winter, cities like Seoul offer **light events, Christmas markets, and snow**."
    },
  },
  {
    id: 2,
    title: { pt: "Moeda e métodos de pagamento", en: "Currency and payment methods" },
    content: {
      pt: "A moeda oficial é o **Won sul-coreano (KRW)**. Cartões **Visa e Mastercard** são amplamente aceites, inclusive em transportes, lojas e cafés.\nNo entanto, pequenos mercados e lojas locais podem exigir pagamento em dinheiro. ATMs internacionais estão disponíveis em quase todas as zonas turísticas.",
      en: "The official currency is the **South Korean Won (KRW)**. **Visa and Mastercard** are widely accepted, including on transport, in shops, and cafés.\nHowever, small markets and local shops may require cash payment. International ATMs are available in almost all tourist areas."
    },
  },
  {
    id: 3,
    title: { pt: "Cartões SIM e eSIM", en: "SIM and eSIM cards" },
    content: {
      pt: "A forma mais fácil de ficar conectado é comprar um **SIM de turista** nos aeroportos de Incheon ou Gimpo, com **opções diárias ou semanais**.\nPara conveniência máxima, muitos viajantes optam por **eSIM**, que pode ser ativado antes mesmo da chegada ao país.",
      en: "The easiest way to stay connected is to buy a **tourist SIM** at Incheon or Gimpo airports, with **daily or weekly options**.\nFor maximum convenience, many travellers opt for an **eSIM**, which can be activated even before arriving in the country."
    },
  },
  {
    id: 4,
    title: { pt: "Saúde e seguro", en: "Health and insurance" },
    content: {
      pt: "Não há vacinas obrigatórias para entrar na Coreia do Sul, mas é altamente recomendável contratar um **seguro de viagem** que cubra emergência médica.\nO sistema de saúde é eficiente, mas **consultas e tratamentos podem ser caros** para turistas sem seguro adequado.",
      en: "There are no mandatory vaccines to enter South Korea, but it is highly recommended to take out **travel insurance** that covers medical emergencies.\nThe healthcare system is efficient, but **consultations and treatments can be expensive** for tourists without adequate insurance."
    },
  },
  {
    id: 5,
    title: { pt: "Clima por estação", en: "Climate by season" },
    content: { pt: "", en: "" },
    seasons: [
      {
        icon: "/icons/cherry-blossom.svg",
        title: { pt: "Primavera", en: "Spring" },
        description: { pt: "Clima ameno, cerejeiras em flor.", en: "Mild weather, cherry blossoms in bloom." },
      },
      {
        icon: "/icons/summer.svg",
        title: { pt: "Verão", en: "Summer" },
        description: { pt: "Quente, húmido e chuvoso, época de monções.", en: "Hot, humid and rainy, monsoon season." },
      },
      {
        icon: "/icons/leaf-fall.svg",
        title: { pt: "Outono", en: "Autumn" },
        description: { pt: "Temperaturas agradáveis e folhas douradas.", en: "Pleasant temperatures and golden leaves." },
      },
      {
        icon: "/icons/snowflake.svg",
        title: { pt: "Inverno", en: "Winter" },
        description: { pt: "Frio intenso, possível neve, ideal para eventos sazonais.", en: "Intense cold, possible snow, ideal for seasonal events." },
      },
    ],
  },
  {
    id: 6,
    title: { pt: "T-Money e transportes integrados", en: "T-Money and integrated transport" },
    content: {
      pt: "A **T-Money** é o cartão de transporte mais prático para metro, autocarro e táxi. Pode ser comprado em lojas de conveniência e recarregado facilmente.\nÉ também aceite em algumas máquinas automáticas e cafés.",
      en: "The **T-Money** card is the most practical transport card for metro, bus, and taxi. It can be purchased at convenience stores and easily topped up.\nIt is also accepted at some vending machines and cafés."
    },
  },
  {
    id: 7,
    title: { pt: "Internet pública (Wi-Fi)", en: "Public internet (Wi-Fi)" },
    content: {
      pt: "A Coreia do Sul é famosa por ter um dos sistemas de Internet mais rápidos do mundo.\nCidades como Seul oferecem Wi-Fi gratuito em:",
      en: "South Korea is famous for having one of the fastest internet systems in the world.\nCities like Seoul offer free Wi-Fi in:"
    },
    bulletList: [
      { pt: "Estações de metro", en: "Metro stations" },
      { pt: "Autocarros", en: "Buses" },
      { pt: "Centros comerciais", en: "Shopping centres" },
      { pt: "Atrações turísticas", en: "Tourist attractions" },
      { pt: "Bibliotecas públicas", en: "Public libraries" },
    ],
  },
  {
    id: 8,
    title: { pt: "Ficha elétrica (220V, Tipo F)", en: "Power plug (220V, Type F)" },
    content: {
      pt: "A Coreia utiliza 220V, 60Hz, com tomadas Tipo F.\nA maioria dos viajantes não precisa de adaptador, mas dispositivos antigos podem necessitar de transformadores específicos.",
      en: "Korea uses 220V, 60Hz, with Type F plugs.\nMost travellers do not need an adapter, but older devices may require specific transformers."
    },
  },
];
