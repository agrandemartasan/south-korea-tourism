import { MobileMenuProvider } from "@/components/layout/MobileMenuContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileMenuOverlay from "@/components/layout/MobileMenuOverlay";
import Button from "@/components/Button";
import { navItems } from "@/data/navigationData";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MobileMenuProvider>
      <Navbar
        theme="dark"
        logoSrc="/media/images/logo-white.png"
        logoHref="/"
        logoAriaLabel="Discover South Korea - Home"
        navItems={navItems}
        actionButtons={
          <div className="hidden sm:block">
            <Button variant="accent" href="/shop" className="whitespace-nowrap">
              Loja Cultural
            </Button>
          </div>
        }
      />
      {children}
      <Footer />
      <MobileMenuOverlay />
    </MobileMenuProvider>
  );
}
