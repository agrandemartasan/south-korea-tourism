import { MobileMenuProvider } from "../components/MobileMenuContext";
import ShopNavbar from "../components/ShopNavbar";
import Footer from "../components/Footer";
import ShopMobileMenuOverlay from "../components/ShopMobileMenuOverlay";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MobileMenuProvider>
      <ShopNavbar />
      {children}
      <Footer theme="light" />
      <ShopMobileMenuOverlay />
    </MobileMenuProvider>
  );
}
