export interface DownloadItem {
  id: number;
  title: string;
  href: string;
}

export interface DownloadCategory {
  id: number;
  title: string;
  items: DownloadItem[];
}

export const downloadCategories: DownloadCategory[] = [
  {
    id: 1,
    title: "Roteiros em PDF",
    items: [
      { id: 1, title: "Roteiro de 3 dias — Essenciais de Seul", href: "#" },
      { id: 2, title: "Roteiro de 5 dias — Cultura & Sabores", href: "#" },
      { id: 3, title: "Roteiro Temático — K-Pop & Cultura Pop", href: "#" },
    ],
  },
  {
    id: 2,
    title: "Mapas",
    items: [],
  },
  {
    id: 3,
    title: "Checklists",
    items: [],
  },
  {
    id: 4,
    title: "Documentos e Preparação",
    items: [
      { id: 1, title: "Guia rápido de Etiqueta & Costumes", href: "#" },
      { id: 2, title: "Frases úteis em Hangul com pronúncia", href: "#" },
      { id: 3, title: "Guia de segurança e contactos oficiais", href: "#" },
    ],
  },
];
