"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Button from "@/components/Button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ProductCard from "@/components/shop/ProductCard";
import {
  CartIcon,
  ChevronDownIcon,
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon
} from "@/components/Icons";
import { useMobileMenu } from "@/components/layout/MobileMenuContext";
import { useTranslations, useLocale } from "next-intl";
import { shopNavItems } from "@/data/shopNavigationData";
import { shopCategoryLinks, shopQuickLinks } from "@/data/shopFooterData";
import { featuredProducts } from "@/data/shopProductsData";
import { brandInfo, socialLinks, legalLinks } from "@/data/footerData";
import { localize } from "@/utils/localize";
import type { Locale } from "@/i18n/routing";

export default function ShopMobileMenuOverlay() {
  const { isMenuOpen, closeMenu } = useMobileMenu();
  const navT = useTranslations('nav');
  const shopT = useTranslations('shop');
  const footerT = useTranslations('footer');
  const locale = useLocale() as Locale;

  const socialIcons: Record<string, React.FC> = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    x: XIcon,
    youtube: YoutubeIcon
  };

  return (
    <div
      className={`fixed inset-0 z-60 bg-porcelain transition-opacity duration-300 ease-in-out xl:hidden flex flex-col ${
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
      aria-hidden={!isMenuOpen}
    >
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between px-6 lg:px-[3%] py-4">
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

        {/* Language Switcher and Close */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher theme="light" />

          {/* Close Button */}
          <button
            type="button"
            className="flex items-center justify-center h-12 w-12 text-inkstone transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-inkstone focus:ring-offset-2 focus:ring-offset-porcelain"
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
        {shopNavItems.map((item) => (
          <button
            key={item.labelKey}
            type="button"
            className="flex items-center gap-2 text-inkstone font-body text-body-lg cursor-pointer"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {navT(item.labelKey as Parameters<typeof navT>[0])}
            {item.hasDropdown && <ChevronDownIcon />}
          </button>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="flex flex-col items-center gap-4 px-8 pt-8">
        <Button
          variant="harvest"
          href="/"
          tabIndex={isMenuOpen ? 0 : -1}
        >
          {navT('backButton')}
        </Button>

        <Button
          variant="accent"
          href="#"
          className="gap-2"
          tabIndex={isMenuOpen ? 0 : -1}
        >
          <CartIcon />
          {navT('cartButton')}
        </Button>
      </div>

      {/* Featured Products */}
      <div className="px-8 pt-12">
        <h3 className="font-heading text-heading-md text-inkstone mb-2">
          {shopT('featured.heading')}
        </h3>
        <p className="font-body text-body-sm text-inkstone/70 mb-4">
          {shopT('featured.description')}
        </p>
        <Link
          href="/shop"
          className="font-body text-body-sm font-semibold text-crimson mb-6 inline-block"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={closeMenu}
        >
          {shopT('featured.viewAll')}
        </Link>

        <div className="flex flex-col gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      </div>

      {/* Shop Mobile Footer */}
      <div className="px-8 pt-12 pb-8">
        {/* Brand Column */}
        <div className="mb-8">
          <Image
            src="/media/images/logo-main.png"
            alt="Discover South Korea"
            width={200}
            height={60}
            className="h-auto w-32 mb-4"
          />
          <h3 className="font-body font-semibold text-inkstone text-body-sm mb-1">
            {localize(brandInfo.title, locale)}
          </h3>
          <p className="font-body text-body-sm text-inkstone mb-4">
            {localize(brandInfo.description, locale)}
          </p>
          <p className="font-body text-body-sm font-semibold text-inkstone mb-1">
            {brandInfo.office}
          </p>
          <p className="font-body text-body-sm text-inkstone">
            {brandInfo.address}
          </p>
          <p className="font-body text-body-sm text-inkstone">
            {brandInfo.phone}
          </p>
          <span className="font-body text-body-sm text-inkstone underline">
            {brandInfo.email}
          </span>
        </div>

        {/* Link Columns */}
        <div className="flex flex-col gap-8">
          {/* Categorias Column */}
          <div>
            <h4 className="font-body font-semibold text-crimson text-body-md mb-3">
              {footerT('categorias')}
            </h4>
            <ul className="space-y-2">
              {shopCategoryLinks.map((link) => (
                <li key={link.pt}>
                  <span className="font-body text-body-sm text-inkstone cursor-pointer">
                    {localize(link, locale)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Acesso Rápido Column */}
          <div>
            <h4 className="font-body font-semibold text-harvest text-body-md mb-3">
              {footerT('acessoRapido')}
            </h4>
            <ul className="space-y-2">
              {shopQuickLinks.map((link) => (
                <li key={link.pt}>
                  <span className="font-body text-body-sm text-inkstone cursor-pointer">
                    {localize(link, locale)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-body font-semibold text-celestial text-body-md mb-3">
              {footerT('seguenos')}
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <li key={social.name}>
                    <span className="flex items-center gap-3 font-body text-body-sm text-inkstone cursor-pointer">
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
                <li key={link.pt}>
                  <span className="font-body text-body-sm text-inkstone underline cursor-pointer">
                    {localize(link, locale)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-body text-body-sm text-inkstone">
              {footerT('copyright')}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
