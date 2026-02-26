import { MobileMenuProvider } from "@/components/layout/MobileMenuContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ShopMobileMenuOverlay from "@/components/layout/ShopMobileMenuOverlay";
import ShopNavActions from "@/components/layout/ShopNavActions";
import { shopNavItems } from "@/data/shopNavigationData";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MobileMenuProvider>
      <Navbar
        theme="light"
        logoSrc="/media/images/logo-main.png"
        logoHref="/shop"
        logoAriaLabel="Discover South Korea Shop - Home"
        navItems={shopNavItems}
        actionButtons={<ShopNavActions />}
      />
      {children}
      <Footer theme="light" shopColumns />
      <ShopMobileMenuOverlay />
    </MobileMenuProvider>
  );
}
