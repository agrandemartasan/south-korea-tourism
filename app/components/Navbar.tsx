"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useMobileMenu } from "./MobileMenuContext";

const navItems = [
  { label: "Raízes da Coreia", hasDropdown: true },
  { label: "Cultura & Tradições", hasDropdown: true },
  { label: "Atrações", hasDropdown: true },
  { label: "Sabores da Coreia", hasDropdown: true },
  { label: "Planear", hasDropdown: false }
];

const ChevronDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navbar() {
  const { isMenuOpen, openMenu } = useMobileMenu();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto flex items-center justify-between px-10 py-4">
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
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="flex items-center gap-1 text-porcelain font-body text-base cursor-pointer"
            >
              {item.label}
              {item.hasDropdown && <ChevronDownIcon />}
            </button>
          ))}
        </div>

        {/* Buttons and Hamburger Menu */}
        <div className="flex items-center gap-4">
          <Button
            variant="accent"
            href="/shop"
            className="hidden xs:inline-flex"
          >
            Loja Cultural
          </Button>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center p-2 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-porcelain focus:ring-offset-2 focus:ring-offset-inkstone"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={openMenu}
          >
            <Image
              src="/icons/menu.svg"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 invert"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
