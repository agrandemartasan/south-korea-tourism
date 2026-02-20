"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { ChevronDownIcon, MenuIcon } from "./Icons";
import { useMobileMenu } from "./MobileMenuContext";
import { useScrolled } from "../hooks/useScrolled";
import { navItems } from "../data/navigationData";

export default function Navbar() {
  const { isMenuOpen, openMenu } = useMobileMenu();
  const scrolled = useScrolled();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-inkstone" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-6 lg:px-[3%] py-4">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0"
          aria-label="Discover South Korea - Home"
        >
          <Image
            src="/media/images/logo-white.png"
            alt="Discover South Korea"
            width={200}
            height={60}
            priority
            className="h-auto w-48"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden xl:flex items-center gap-8">
          {navItems.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-porcelain font-body text-body-md whitespace-nowrap"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                className="flex items-center gap-1 text-porcelain font-body text-body-md cursor-pointer whitespace-nowrap"
              >
                {item.label}
                {item.hasDropdown && <ChevronDownIcon />}
              </button>
            )
          )}
        </div>

        {/* Buttons and Hamburger Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button variant="accent" href="/shop" className="whitespace-nowrap">
              Loja Cultural
            </Button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            className="xl:hidden flex items-center justify-center h-12 w-12 text-porcelain transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-porcelain focus:ring-offset-2 focus:ring-offset-inkstone"
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
