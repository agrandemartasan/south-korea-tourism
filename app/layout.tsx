import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { MobileMenuProvider } from "./components/MobileMenuContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileMenuOverlay from "./components/MobileMenuOverlay";

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
  title: "Discover South Korea | Where Tradition Meets Future",
  description: "Experience the beauty of South Korea - from ancient temples to vibrant Seoul. Explore history, nature, technology, and living culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${korean.variable} ${merriweather.variable} antialiased`}
      >
        <MobileMenuProvider>
          <Navbar />
          {children}
          <Footer />
          <MobileMenuOverlay />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
