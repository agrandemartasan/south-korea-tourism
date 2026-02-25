import { MobileMenuProvider } from "@/components/layout/MobileMenuContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ShopMobileMenuOverlay from "@/components/layout/ShopMobileMenuOverlay";
import Button from "@/components/Button";
import { CartIcon } from "@/components/Icons";
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
        actionButtons={
          <>
            <div className="hidden 2xl:block">
              <Button variant="harvest" href="/">
                Discover South Korea
              </Button>
            </div>
            <div className="hidden xl:block">
              <Button variant="accent" href="#" className="gap-2 whitespace-nowrap">
                <CartIcon />
                Carrinho
              </Button>
            </div>
          </>
        }
      />
      {children}
      <Footer theme="light" shopColumns />
      <ShopMobileMenuOverlay />
    </MobileMenuProvider>
  );
}
