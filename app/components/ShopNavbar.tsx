"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { CartIcon, ChevronDownIcon, MenuIcon } from "./Icons";
import { useMobileMenu } from "./MobileMenuContext";
import { useScrolled } from "../hooks/useScrolled";
import { shopNavItems } from "../data/shopNavigationData";

export default function ShopNavbar() {
  const { isMenuOpen, openMenu } = useMobileMenu();
  const scrolled = useScrolled();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-porcelain" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-6 lg:px-[3%] py-4">
        {/* Logo */}
        <Link
          href="/shop"
          className="shrink-0"
          aria-label="Discover South Korea Shop - Home"
        >
          <Image
            src="/media/images/logo-main.png"
            alt="Discover South Korea"
            width={200}
            height={60}
            priority
            className="h-auto w-48"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden xl:flex items-center gap-8">
          {shopNavItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="flex items-center gap-1 text-inkstone font-body text-body-md cursor-pointer whitespace-nowrap"
            >
              {item.label}
              {item.hasDropdown && <ChevronDownIcon />}
            </button>
          ))}
        </div>

        {/* Buttons and Hamburger Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden 2xl:block">
            <Button variant="harvest" href="/">
              Discover South Korea
            </Button>
          </div>

          <div className="hidden xl:block">
            <Button
              variant="accent"
              href="#"
              className="gap-2 whitespace-nowrap"
            >
              <CartIcon />
              Carrinho
            </Button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            className="xl:hidden flex items-center justify-center h-12 w-12 text-inkstone transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-inkstone focus:ring-offset-2 focus:ring-offset-porcelain"
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
