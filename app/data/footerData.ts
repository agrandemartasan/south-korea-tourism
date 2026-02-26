import { type LocalizedString } from "@/utils/localize";

export const brandInfo = {
  title: { pt: "Visit Korea — Turismo Oficial da Coreia do Sul", en: "Visit Korea — Official Tourism of South Korea" } as LocalizedString,
  description: {
    pt: "A plataforma oficial para descobrir cultura, tradições, atrações e experiências em todo o país.",
    en: "The official platform to discover culture, traditions, attractions, and experiences across the country."
  } as LocalizedString,
  office: "Seoul Tourism Office",
  address: "110 Sejong-daero, Jongno-gu, Seoul, South Korea",
  phone: "(+82) 02-0000-0000",
  email: "info@visitkorea.kr"
};

export interface FooterLink {
  label: LocalizedString;
  href?: string;
}

export const explorarLinks: FooterLink[] = [
  { label: { pt: "Cultura & Tradições", en: "Culture & Traditions" } },
  { label: { pt: "Atrações", en: "Attractions" } },
  { label: { pt: "Sabores da Coreia", en: "Flavours of Korea" } },
  { label: { pt: "Planear Viagem", en: "Plan Your Trip" }, href: "/plan" },
  { label: { pt: "Loja Cultural", en: "Cultural Shop" } }
];

export const infoLinks: LocalizedString[] = [
  { pt: "Segurança & Dicas", en: "Safety & Tips" },
  { pt: "Transportes", en: "Transport" },
  { pt: "Alojamento", en: "Accommodation" },
  { pt: "Etiqueta Coreana", en: "Korean Etiquette" },
  { pt: "Perguntas Frequentes", en: "FAQs" }
];

export const socialLinks = [
  { name: "Facebook", icon: "facebook" },
  { name: "Instagram", icon: "instagram" },
  { name: "X", icon: "x" },
  { name: "Youtube", icon: "youtube" }
] as const;

export const legalLinks: LocalizedString[] = [
  { pt: "Política de Privacidade", en: "Privacy Policy" },
  { pt: "Termos & Condições", en: "Terms & Conditions" },
  { pt: "Sitemap", en: "Sitemap" }
];

export type SocialIconType = (typeof socialLinks)[number]["icon"];
