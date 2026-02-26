import { type LocalizedString } from "@/utils/localize";

export interface DownloadItem {
  id: number;
  title: LocalizedString;
  href: string;
}

export interface DownloadCategory {
  id: number;
  title: LocalizedString;
  items: DownloadItem[];
}

export const downloadCategories: DownloadCategory[] = [
  {
    id: 1,
    title: { pt: "Roteiros em PDF", en: "PDF Itineraries" },
    items: [
      { id: 1, title: { pt: "Roteiro de 3 dias — Essenciais de Seul", en: "3-Day Itinerary — Seoul Essentials" }, href: "#" },
      { id: 2, title: { pt: "Roteiro de 5 dias — Cultura & Sabores", en: "5-Day Itinerary — Culture & Flavours" }, href: "#" },
      { id: 3, title: { pt: "Roteiro Temático — K-Pop & Cultura Pop", en: "Thematic Itinerary — K-Pop & Pop Culture" }, href: "#" },
    ],
  },
  {
    id: 2,
    title: { pt: "Mapas", en: "Maps" },
    items: [],
  },
  {
    id: 3,
    title: { pt: "Checklists", en: "Checklists" },
    items: [],
  },
  {
    id: 4,
    title: { pt: "Documentos e Preparação", en: "Documents & Preparation" },
    items: [
      { id: 1, title: { pt: "Guia rápido de Etiqueta & Costumes", en: "Quick Etiquette & Customs Guide" }, href: "#" },
      { id: 2, title: { pt: "Frases úteis em Hangul com pronúncia", en: "Useful phrases in Hangul with pronunciation" }, href: "#" },
      { id: 3, title: { pt: "Guia de segurança e contactos oficiais", en: "Safety guide and official contacts" }, href: "#" },
    ],
  },
];
