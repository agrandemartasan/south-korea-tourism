"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import {
  CartIcon,
  ChevronDownIcon,
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon
} from "./Icons";
import { useMobileMenu } from "./MobileMenuContext";
import { shopNavItems } from "../data/shopNavigationData";
import { shopCategoryLinks, shopQuickLinks } from "../data/shopFooterData";
import { featuredProducts } from "../data/shopProductsData";
import { brandInfo, socialLinks, legalLinks } from "../data/footerData";

export default function ShopMobileMenuOverlay() {
  const { isMenuOpen, closeMenu } = useMobileMenu();

  const socialIcons: Record<string, React.FC> = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    x: XIcon,
    youtube: YoutubeIcon
  };

  return (
    <div
      className={`fixed inset-0 z-60 bg-porcelain transition-opacity duration-300 ease-in-out lg:hidden overflow-y-auto ${
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
      aria-hidden={!isMenuOpen}
    >
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <Link
          href="/shop"
          className="shrink-0"
          aria-label="Discover South Korea Shop - Home"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={closeMenu}
        >
          <Image
            src="/media/images/logo-main.png"
            alt="Discover South Korea"
            width={200}
            height={60}
            className="h-auto w-48"
          />
        </Link>

        {/* Close Button */}
        <button
          type="button"
          className="flex items-center justify-center p-2 text-inkstone transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-inkstone focus:ring-offset-2 focus:ring-offset-porcelain"
          aria-label="Close menu"
          onClick={closeMenu}
          tabIndex={isMenuOpen ? 0 : -1}
        >
          <CloseIcon />
        </button>
      </div>

      {/* Mobile Navigation Items */}
      <nav className="flex flex-col items-center gap-6 pt-8">
        {shopNavItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className="flex items-center gap-2 text-inkstone font-body text-lg cursor-pointer"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {item.label}
            {item.hasDropdown && <ChevronDownIcon />}
          </button>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="flex flex-col items-center gap-4 px-10 pt-8">
        <Button
          variant="harvest"
          href="/"
          tabIndex={isMenuOpen ? 0 : -1}
        >
          Voltar para Discover South Korea
        </Button>

        <Button
          variant="accent"
          href="#"
          className="gap-2"
          tabIndex={isMenuOpen ? 0 : -1}
        >
          <CartIcon />
          Carrinho
        </Button>
      </div>

      {/* Featured Products */}
      <div className="px-5 pt-12">
        <h3 className="font-heading text-2xl text-inkstone mb-2">
          Favoritos dos Viajantes
        </h3>
        <p className="font-body text-sm text-inkstone/70 mb-4">
          Os artigos mais procurados que captam a essência da Coreia do Sul.
        </p>
        <Link
          href="/shop"
          className="font-body text-sm font-semibold text-crimson mb-6 inline-block"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={closeMenu}
        >
          Ver Tudo
        </Link>

        <div className="flex flex-col gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <div className="relative aspect-4/3 w-full overflow-hidden mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw"
                />
                <span className="absolute top-3 left-3 bg-harvest px-3 py-1 rounded font-body text-xs font-semibold text-inkstone">
                  {product.category}
                </span>
              </div>
              <h4 className="font-heading text-lg text-inkstone mb-1">
                {product.name}
              </h4>
              <p className="font-body text-sm text-inkstone/70 mb-2">
                {product.description}
              </p>
              <p className="font-body text-base font-semibold text-inkstone">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Shop Mobile Footer */}
      <div className="px-5 pt-12 pb-8">
        {/* Brand Column */}
        <div className="mb-8">
          <Image
            src="/media/images/logo-main.png"
            alt="Discover South Korea"
            width={200}
            height={60}
            className="h-auto w-32 mb-4"
          />
          <h3 className="font-body font-semibold text-inkstone text-sm mb-1">
            {brandInfo.title}
          </h3>
          <p className="font-body text-sm text-inkstone mb-4">
            {brandInfo.description}
          </p>
          <p className="font-body text-sm font-semibold text-inkstone mb-1">
            {brandInfo.office}
          </p>
          <p className="font-body text-sm text-inkstone">
            {brandInfo.address}
          </p>
          <p className="font-body text-sm text-inkstone">
            {brandInfo.phone}
          </p>
          <span className="font-body text-sm text-inkstone underline">
            {brandInfo.email}
          </span>
        </div>

        {/* Link Columns */}
        <div className="flex flex-col gap-8">
          {/* Categorias Column */}
          <div>
            <h4 className="font-body font-semibold text-crimson text-base mb-3">
              Categorias
            </h4>
            <ul className="space-y-2">
              {shopCategoryLinks.map((link) => (
                <li key={link}>
                  <span className="font-body text-sm text-inkstone cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Acesso Rápido Column */}
          <div>
            <h4 className="font-body font-semibold text-crimson text-base mb-3">
              Acesso Rápido
            </h4>
            <ul className="space-y-2">
              {shopQuickLinks.map((link) => (
                <li key={link}>
                  <span className="font-body text-sm text-inkstone cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-body font-semibold text-crimson text-base mb-3">
              Segue-nos
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <li key={social.name}>
                    <span className="flex items-center gap-3 font-body text-sm text-inkstone cursor-pointer">
                      <Icon />
                      {social.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="border-t border-harvest/20 pt-6 mt-8">
          <div className="flex flex-col gap-4">
            <ul className="space-y-2 mb-4">
              {legalLinks.map((link) => (
                <li key={link}>
                  <span className="font-body text-sm text-inkstone underline cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm text-inkstone">
              © 2025 Discover South Korea. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
