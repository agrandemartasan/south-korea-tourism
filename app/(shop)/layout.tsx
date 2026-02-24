import { MobileMenuProvider } from "@/components/layout/MobileMenuContext";
import ShopNavbar from "@/components/layout/ShopNavbar";
import Footer from "@/components/layout/Footer";
import ShopMobileMenuOverlay from "@/components/layout/ShopMobileMenuOverlay";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MobileMenuProvider>
      <ShopNavbar />
      {children}
      <Footer theme="light" shopColumns />
      <ShopMobileMenuOverlay />
    </MobileMenuProvider>
  );
}
