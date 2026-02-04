export interface FeaturedProduct {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string;
  href: string;
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "mascara-tradicional-tal",
    category: "Artes & Artesanato",
    name: "Máscara Tradicional Tal",
    description:
      "Arte ancestral em madeira, símbolo da cultura coreana.",
    price: "€55",
    image: "/media/images/tal.jpg",
    href: "#"
  },
  {
    id: "kit-cha-coreano-jeong",
    category: "Cozinha & Utensílios",
    name: "Kit de Chá Coreano Jeong",
    description:
      "Conjunto com chá tradicional e utensílios típicos para rituais de chá.",
    price: "€55",
    image: "/media/images/jeong.png",
    href: "#"
  },
  {
    id: "papel-hanji-decorativo",
    category: "Papel & Caligrafia",
    name: "Papel Hanji Decorativo",
    description:
      "Papel artesanal coreano feito à mão, perfeito para arte e decoração.",
    price: "€55",
    image: "/media/images/hanji.webp",
    href: "#"
  }
];
