import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const korean = localFont({
  src: "../public/fonts/Korean.ttf",
  variable: "--font-korean",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover South Korea | Where Tradition Meets Future",
    description:
      "Experience the beauty of South Korea - from ancient temples to vibrant Seoul. Explore history, nature, technology, and living culture.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${korean.variable} ${merriweather.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
