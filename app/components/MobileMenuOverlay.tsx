"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FooterContent } from "./Footer";
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

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function MobileMenuOverlay() {
  const { isMenuOpen, closeMenu } = useMobileMenu();

  return (
    <div
      className={`fixed inset-0 z-60 bg-inkstone transition-opacity duration-300 ease-in-out lg:hidden overflow-y-auto ${
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
      aria-hidden={!isMenuOpen}
    >
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0"
          aria-label="Discover South Korea - Home"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={closeMenu}
        >
          <Image
            src="/media/images/logo-white.png"
            alt="Discover South Korea"
            width={200}
            height={60}
            className="h-auto w-48"
          />
        </Link>

        {/* Button and Close */}
        <div className="flex items-center gap-4">
          <Button
            variant="accent"
            href="/shop"
            className="hidden xs:inline-flex"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Loja Cultural
          </Button>

          {/* Close Button */}
          <button
            type="button"
            className="flex items-center justify-center p-2 text-porcelain transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-porcelain focus:ring-offset-2 focus:ring-offset-inkstone"
            aria-label="Close menu"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Items */}
      <nav className="flex flex-col items-center gap-6 pt-8">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className="flex items-center gap-2 text-porcelain font-body text-lg cursor-pointer"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {item.label}
            {item.hasDropdown && <ChevronDownIcon />}
          </button>
        ))}
      </nav>

      {/* Mobile Footer Content */}
      <FooterContent variant="mobile" />
    </div>
  );
}
