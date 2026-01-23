export const brandInfo = {
  title: "Visit Korea — Turismo Oficial da Coreia do Sul",
  description:
    "A plataforma oficial para descobrir cultura, tradições, atrações e experiências em todo o país.",
  office: "Seoul Tourism Office",
  address: "110 Sejong-daero, Jongno-gu, Seoul, South Korea",
  phone: "(+82) 02-0000-0000",
  email: "info@visitkorea.kr"
};

export const explorarLinks = [
  "Cultura & Tradições",
  "Atrações",
  "Sabores da Coreia",
  "Planear Viagem",
  "Loja Cultural"
];

export const infoLinks = [
  "Segurança & Dicas",
  "Transportes",
  "Alojamento",
  "Etiqueta Coreana",
  "Perguntas Frequentes"
];

export const socialLinks = [
  { name: "Facebook", icon: "facebook" },
  { name: "Instagram", icon: "instagram" },
  { name: "X", icon: "x" },
  { name: "Youtube", icon: "youtube" }
] as const;

export const legalLinks = [
  "Política de Privacidade",
  "Termos & Condições",
  "Sitemap"
];

export type SocialIconType = (typeof socialLinks)[number]["icon"];
