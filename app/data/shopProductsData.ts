import { type LocalizedString } from "@/utils/localize";

export interface FeaturedProduct {
  id: string;
  category: LocalizedString;
  name: LocalizedString;
  description: LocalizedString;
  price: string;
  image: string;
  href: string;
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "mascara-tradicional-tal",
    category: { pt: "Artes & Artesanato", en: "Arts & Crafts" },
    name: { pt: "Máscara Tradicional Tal", en: "Traditional Tal Mask" },
    description: {
      pt: "Arte ancestral em madeira, símbolo da cultura coreana.",
      en: "Ancient wooden art, a symbol of Korean culture."
    },
    price: "€55",
    image: "/media/images/tal.jpg",
    href: "#"
  },
  {
    id: "kit-cha-coreano-jeong",
    category: { pt: "Cozinha & Utensílios", en: "Kitchen & Utensils" },
    name: { pt: "Kit de Chá Coreano Jeong", en: "Jeong Korean Tea Set" },
    description: {
      pt: "Conjunto com chá tradicional e utensílios típicos para rituais de chá.",
      en: "Set with traditional tea and typical utensils for tea rituals."
    },
    price: "€55",
    image: "/media/images/jeong.png",
    href: "#"
  },
  {
    id: "papel-hanji-decorativo",
    category: { pt: "Papel & Caligrafia", en: "Paper & Calligraphy" },
    name: { pt: "Papel Hanji Decorativo", en: "Decorative Hanji Paper" },
    description: {
      pt: "Papel artesanal coreano feito à mão, perfeito para arte e decoração.",
      en: "Handmade Korean craft paper, perfect for art and decoration."
    },
    price: "€55",
    image: "/media/images/hanji.webp",
    href: "#"
  }
];
