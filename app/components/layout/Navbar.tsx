"use client";

import Image from "next/image";
import { usePathname, Link } from "@/i18n/navigation";
import { ChevronDownIcon, MenuIcon } from "@/components/Icons";
import { useMobileMenu } from "@/components/layout/MobileMenuContext";
import { useScrolled } from "@/hooks/useScrolled";
import { useTranslations } from "next-intl";
import { NavItem } from "@/data/navigationData";

interface NavbarProps {
  theme: "dark" | "light";
  logoSrc: string;
  logoHref: string;
  logoAriaLabel: string;
  navItems: NavItem[];
  actionButtons: React.ReactNode;
}

const themeStyles = {
  dark: {
    scrolledBg: "bg-inkstone",
    navText: "text-porcelain",
    activeText: "text-harvest underline underline-offset-4",
    hamburger: "text-porcelain focus:ring-porcelain focus:ring-offset-inkstone",
  },
  light: {
    scrolledBg: "bg-porcelain",
    navText: "text-inkstone",
    activeText: "text-inkstone",
    hamburger: "text-inkstone focus:ring-inkstone focus:ring-offset-porcelain",
  },
} as const;

export default function Navbar({ theme, logoSrc, logoHref, logoAriaLabel, navItems, actionButtons }: NavbarProps) {
  const { isMenuOpen, openMenu } = useMobileMenu();
  const scrolled = useScrolled();
  const pathname = usePathname();
  const styles = themeStyles[theme];
  const t = useTranslations('nav');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? styles.scrolledBg : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-6 lg:px-[3%] py-4">
        {/* Logo */}
        <Link href={logoHref} className="shrink-0" aria-label={logoAriaLabel}>
          <Image
            src={logoSrc}
            alt="Discover South Korea"
            width={200}
            height={60}
            priority
            className="h-auto w-48"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => {
            const label = t(item.labelKey as Parameters<typeof t>[0]);
            return item.href ? (
              <Link
                key={item.labelKey}
                href={item.href}
                className={`flex items-center gap-1 font-body text-body-md whitespace-nowrap ${
                  pathname === item.href ? styles.activeText : styles.navText
                }`}
              >
                {label}
              </Link>
            ) : (
              <button
                key={item.labelKey}
                type="button"
                className={`flex items-center gap-1 ${styles.navText} font-body text-body-md cursor-pointer whitespace-nowrap`}
              >
                {label}
                {item.hasDropdown && <ChevronDownIcon />}
              </button>
            );
          })}
        </div>

        {/* Action Buttons and Hamburger Menu */}
        <div className="flex items-center gap-4">
          {actionButtons}

          {/* Hamburger Menu Button */}
          <button
            type="button"
            className={`xl:hidden flex items-center justify-center h-12 w-12 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.hamburger}`}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={openMenu}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}
