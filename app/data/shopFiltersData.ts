import { type LocalizedString } from "@/utils/localize";

// Main categories (exclusive selection)
export const mainCategories = [
  { id: "all", label: { pt: "Ver Tudo", en: "View All" } as LocalizedString },
  { id: "artes", label: { pt: "Artes & Artesanato", en: "Arts & Crafts" } as LocalizedString },
  { id: "papel", label: { pt: "Papel & Caligrafia", en: "Paper & Calligraphy" } as LocalizedString },
  { id: "lembrancas", label: { pt: "Lembranças", en: "Souvenirs" } as LocalizedString },
  { id: "cozinha", label: { pt: "Cozinha & Utensílios", en: "Kitchen & Utensils" } as LocalizedString },
];

// Subcategories (multi-select checkboxes)
export const subcategories = [
  { id: "talheres", label: { pt: "Talheres", en: "Cutlery" } as LocalizedString },
  { id: "ceramicas", label: { pt: "Cerâmicas", en: "Ceramics" } as LocalizedString },
  { id: "copos", label: { pt: "Copos", en: "Cups" } as LocalizedString },
  { id: "garrafas", label: { pt: "Garrafas", en: "Bottles" } as LocalizedString },
  { id: "acessorios", label: { pt: "Acessórios", en: "Accessories" } as LocalizedString },
];

// Price ranges (exclusive selection) — labels stay as strings (prices are universal)
export const priceRanges = [
  { id: "all", label: "Tudo" },
  { id: "0-10", label: "0–10 €" },
  { id: "10-25", label: "10–25 €" },
  { id: "25-50", label: "25–50 €" },
  { id: "50-100", label: "50–100 €" },
  { id: "100+", label: "+100 €" },
];

// Regions (multi-select checkboxes) — proper place names, no change
export const regions = [
  { id: "seul", label: "Seul" },
  { id: "busan", label: "Busan" },
  { id: "jeju", label: "Jeju" },
  { id: "gyeongju", label: "Gyeongju" },
  { id: "andong", label: "Andong" },
];

// Materials (dropdown, exclusive)
export const materials = [
  { id: "all", label: { pt: "Todos", en: "All" } as LocalizedString },
  { id: "madeira", label: { pt: "Madeira", en: "Wood" } as LocalizedString },
  { id: "inox", label: { pt: "Inox", en: "Stainless steel" } as LocalizedString },
  { id: "ceramica", label: { pt: "Cerâmica", en: "Ceramic" } as LocalizedString },
  { id: "vidro", label: { pt: "Vidro", en: "Glass" } as LocalizedString },
  { id: "tecido", label: { pt: "Tecido", en: "Fabric" } as LocalizedString },
];

// Availability (exclusive selection)
export const availabilityOptions = [
  { id: "all", label: { pt: "Tudo", en: "All" } as LocalizedString },
  { id: "em-stock", label: { pt: "Em stock", en: "In stock" } as LocalizedString },
  { id: "ultimas", label: { pt: "Últimas unidades", en: "Last units" } as LocalizedString },
  { id: "pre-venda", label: { pt: "Pré-venda", en: "Pre-order" } as LocalizedString },
];

// Mais Vendidos tags (multi-select buttons)
export const maisVendidosTags = [
  { id: "favoritos", label: { pt: "Favoritos dos Viajantes", en: "Travellers' Favourites" } as LocalizedString },
  { id: "top10", label: { pt: "Top 10", en: "Top 10" } as LocalizedString },
  { id: "populares", label: { pt: "Mais Populares desta Semana", en: "Most Popular This Week" } as LocalizedString },
];

// Novidades tags (multi-select buttons)
export const novidadesTags = [
  { id: "novos", label: { pt: "Novos produtos", en: "New products" } as LocalizedString },
  { id: "limitada", label: { pt: "Edição limitada", en: "Limited edition" } as LocalizedString },
];

// Sort options
export const sortOptions = [
  { id: "recentes", label: { pt: "Mais recentes", en: "Most recent" } as LocalizedString },
  { id: "preco-asc", label: { pt: "Preço: menor", en: "Price: lowest" } as LocalizedString },
  { id: "preco-desc", label: { pt: "Preço: maior", en: "Price: highest" } as LocalizedString },
  { id: "popularidade", label: { pt: "Popularidade", en: "Popularity" } as LocalizedString },
];
