export interface ShopProduct {
  id: string;
  title: string;
  price: number;
  priceFormatted: string;
  image: string;
  category: string;
  subcategory: string;
  region: string;
  material: string;
  availability: string;
  maisVendidos: string[];
  novidades: string[];
}

// 8 unique products based on screenshots
const baseProducts: ShopProduct[] = [
  {
    id: "garrafa-termica-lotus",
    title: "Garrafa térmica (Lótus)",
    price: 55,
    priceFormatted: "€55",
    image: "/media/images/lotus.webp",
    category: "cozinha",
    subcategory: "garrafas",
    region: "seul",
    material: "inox",
    availability: "em-stock",
    maisVendidos: ["favoritos"],
    novidades: [],
  },
  {
    id: "set-traditional-garrafas",
    title: "Set traditional de garrafas",
    price: 55,
    priceFormatted: "€55",
    image: "/media/images/tea_set.webp",
    category: "cozinha",
    subcategory: "garrafas",
    region: "gyeongju",
    material: "ceramica",
    availability: "em-stock",
    maisVendidos: ["top10"],
    novidades: ["novos"],
  },
  {
    id: "set-molheiras-sorriso-silla",
    title: "Set de molheiras (Sorriso de Silla)",
    price: 55,
    priceFormatted: "€55",
    image: "/media/images/set_smile.webp",
    category: "cozinha",
    subcategory: "ceramicas",
    region: "gyeongju",
    material: "ceramica",
    availability: "em-stock",
    maisVendidos: ["populares"],
    novidades: [],
  },
  {
    id: "copo-soju-moon-jar",
    title: "Copo para soju e chá Moon Jar",
    price: 55,
    priceFormatted: "€55",
    image: "/media/images/moon_jar.webp",
    category: "cozinha",
    subcategory: "copos",
    region: "seul",
    material: "ceramica",
    availability: "em-stock",
    maisVendidos: ["favoritos", "top10"],
    novidades: [],
  },
  {
    id: "set-canecas-ilwolobongdo",
    title: "Set de canecas Ilwolobongdo",
    price: 55,
    priceFormatted: "€55",
    image: "/media/images/Ilwolobongdo.webp",
    category: "cozinha",
    subcategory: "copos",
    region: "seul",
    material: "ceramica",
    availability: "em-stock",
    maisVendidos: [],
    novidades: ["limitada"],
  },
  {
    id: "set-copos-gonryongpo",
    title: "Set de copos Gonryongpo",
    price: 55,
    priceFormatted: "€55",
    image: "/media/images/Gonryongpo.webp",
    category: "cozinha",
    subcategory: "copos",
    region: "busan",
    material: "ceramica",
    availability: "em-stock",
    maisVendidos: ["populares"],
    novidades: ["novos"],
  },
  {
    id: "set-colher-pauzinhos",
    title: "Set de colher e pauzinhos",
    price: 55,
    priceFormatted: "€55",
    image: "/media/images/set_spoon.webp",
    category: "cozinha",
    subcategory: "talheres",
    region: "andong",
    material: "inox",
    availability: "em-stock",
    maisVendidos: ["top10"],
    novidades: [],
  },
  {
    id: "base-copos-madreperola",
    title: "Base para copos em madrepérola",
    price: 55,
    priceFormatted: "€55",
    image: "/media/images/coaster.webp",
    category: "cozinha",
    subcategory: "acessorios",
    region: "jeju",
    material: "madeira",
    availability: "em-stock",
    maisVendidos: [],
    novidades: ["limitada"],
  },
];

// Generate 100 products by repeating the base products
export const allProducts: ShopProduct[] = [];

for (let i = 0; i < 100; i++) {
  const baseProduct = baseProducts[i % baseProducts.length];
  allProducts.push({
    ...baseProduct,
    id: `${baseProduct.id}-${i}`,
  });
}

export const PRODUCTS_PER_PAGE = 20;
export const TOTAL_PAGES = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
