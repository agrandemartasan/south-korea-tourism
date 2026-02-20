"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FooterContent } from "./Footer";
import { ChevronDownIcon, CloseIcon } from "./Icons";
import { useMobileMenu } from "./MobileMenuContext";
import { navItems } from "../data/navigationData";

export default function MobileMenuOverlay() {
  const { isMenuOpen, closeMenu } = useMobileMenu();

  return (
    <div
      className={`fixed inset-0 z-60 bg-inkstone transition-opacity duration-300 ease-in-out lg:hidden flex flex-col ${
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
      aria-hidden={!isMenuOpen}
    >
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between px-6 lg:px-[3%] py-4">
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
          <div className="hidden sm:block">
            <Button variant="accent" href="/shop" tabIndex={isMenuOpen ? 0 : -1}>
              Loja Cultural
            </Button>
          </div>

          {/* Close Button */}
          <button
            type="button"
            className="flex items-center justify-center h-12 w-12 text-porcelain transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-porcelain focus:ring-offset-2 focus:ring-offset-inkstone"
            aria-label="Close menu"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Mobile Navigation Items */}
        <nav className="flex flex-col items-center gap-6 pt-8">
          {navItems.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-porcelain font-body text-body-lg"
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                className="flex items-center gap-2 text-porcelain font-body text-body-lg cursor-pointer"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {item.label}
                {item.hasDropdown && <ChevronDownIcon />}
              </button>
            )
          )}
        </nav>

        {/* Loja Cultural button - only on small phones where it's hidden in the header */}
        <div className="flex justify-center pt-6 sm:hidden">
          <Button
            variant="accent"
            href="/shop"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Loja Cultural
          </Button>
        </div>

        {/* Mobile Footer Content */}
        <FooterContent variant="mobile" />
      </div>
    </div>
  );
}
