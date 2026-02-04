import { MobileMenuProvider } from "../components/MobileMenuContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileMenuOverlay from "../components/MobileMenuOverlay";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MobileMenuProvider>
      <Navbar />
      {children}
      <Footer />
      <MobileMenuOverlay />
    </MobileMenuProvider>
  );
}
