import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sk-tourism.vercel.app"),
  title: "Discover South Korea | Where Tradition Meets Future",
  description:
    "Experience the beauty of South Korea - from ancient temples to vibrant Seoul. Explore history, nature, technology, and living culture.",
  openGraph: {
    type: "website",
    url: "https://sk-tourism.vercel.app",
    siteName: "Discover South Korea",
    title: "Discover South Korea | Where Tradition Meets Future",
    description:
      "Experience the beauty of South Korea - from ancient temples to vibrant Seoul. Explore history, nature, technology, and living culture.",
    images: [
      {
        url: "/media/images/hero-section-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Discover South Korea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover South Korea | Where Tradition Meets Future",
    description:
      "Experience the beauty of South Korea - from ancient temples to vibrant Seoul. Explore history, nature, technology, and living culture.",
    images: ["/media/images/hero-section-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children as React.ReactElement;
}
