"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon
} from "@/components/Icons";
import {
  brandInfo,
  explorarLinks,
  infoLinks,
  socialLinks,
  legalLinks,
  SocialIconType
} from "@/data/footerData";
import { shopCategoryLinks, shopQuickLinks } from "@/data/shopFooterData";
import { useTranslations, useLocale } from "next-intl";
import { localize } from "@/utils/localize";
import type { Locale } from "@/i18n/routing";

const socialIcons: Record<SocialIconType, React.FC> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  youtube: YoutubeIcon
};

type FooterTheme = "dark" | "light";

interface FooterContentProps {
  variant?: "desktop" | "mobile";
  theme?: FooterTheme;
  shopColumns?: boolean;
}

export function FooterContent({ variant = "desktop", theme = "dark", shopColumns = false }: FooterContentProps) {
  const isMobile = variant === "mobile";
  const textColor = theme === "dark" ? "text-porcelain" : "text-inkstone";
  const logo = theme === "dark" ? "/media/images/logo-white.png" : "/media/images/logo-main.png";
  const t = useTranslations('footer');
  const locale = useLocale() as Locale;

  return (
    <div className={isMobile ? "px-8 pt-12 pb-8" : ""}>
      {/* Main Content */}
      <div className={isMobile ? "" : "px-6 lg:px-[3%] py-16 lg:py-20"}>
        <div
          className={
            isMobile
              ? "flex flex-col gap-8"
              : "grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
          }
        >
          {/* Brand Column */}
          <div>
            <Image
              src={logo}
              alt="Discover South Korea"
              width={200}
              height={60}
              className={isMobile ? "h-auto w-32 mb-4" : "h-auto w-40 mb-6"}
            />
            <h3
              className={`font-body font-semibold ${textColor} ${isMobile ? "text-body-sm mb-1" : "text-body-md mb-2"}`}
            >
              {localize(brandInfo.title, locale)}
            </h3>
            <p
              className={`font-body text-body-sm ${textColor} ${isMobile ? "mb-4" : "mb-6"}`}
            >
              {localize(brandInfo.description, locale)}
            </p>
            <p className={`font-body text-body-sm font-semibold ${textColor} mb-1`}>
              {brandInfo.office}
            </p>
            <p className={`font-body text-body-sm ${textColor}`}>
              {brandInfo.address}
            </p>
            <p className={`font-body text-body-sm ${textColor}`}>
              {brandInfo.phone}
            </p>
            <span className={`font-body text-body-sm ${textColor} underline`}>
              {brandInfo.email}
            </span>
          </div>

          {/* Links Container */}
          <div
            className={
              isMobile ? "flex flex-col gap-8" : "grid grid-cols-3 gap-8"
            }
          >
            {shopColumns ? (
              <>
                {/* Categorias Column */}
                <div>
                  <h4
                    className={`font-body font-semibold text-crimson text-body-lg ${isMobile ? "mb-3" : "mb-4"}`}
                  >
                    {t('categorias')}
                  </h4>
                  <ul className={isMobile ? "space-y-2" : "space-y-3"}>
                    {shopCategoryLinks.map((link) => (
                      <li key={link.pt}>
                        <span className={`font-body text-body-sm ${textColor} cursor-pointer`}>
                          {localize(link, locale)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Acesso Rápido Column */}
                <div>
                  <h4
                    className={`font-body font-semibold text-harvest text-body-lg ${isMobile ? "mb-3" : "mb-4"}`}
                  >
                    {t('acessoRapido')}
                  </h4>
                  <ul className={isMobile ? "space-y-2" : "space-y-3"}>
                    {shopQuickLinks.map((link) => (
                      <li key={link.pt}>
                        <span className={`font-body text-body-sm ${textColor} cursor-pointer`}>
                          {localize(link, locale)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                {/* Explorar Column */}
                <div>
                  <h4
                    className={`font-body font-semibold text-harvest text-body-lg ${isMobile ? "mb-3" : "mb-4"}`}
                  >
                    {t('explorar')}
                  </h4>
                  <ul className={isMobile ? "space-y-2" : "space-y-3"}>
                    {explorarLinks.map((link) => (
                      <li key={link.label.pt}>
                        {link.href ? (
                          <Link
                            href={link.href}
                            className={`font-body text-body-sm ${textColor} cursor-pointer`}
                          >
                            {localize(link.label, locale)}
                          </Link>
                        ) : (
                          <span className={`font-body text-body-sm ${textColor} cursor-pointer`}>
                            {localize(link.label, locale)}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Informação útil Column */}
                <div>
                  <h4
                    className={`font-body font-semibold text-crimson text-body-lg ${isMobile ? "mb-3" : "mb-4"}`}
                  >
                    {t('infoUtil')}
                  </h4>
                  <ul className={isMobile ? "space-y-2" : "space-y-3"}>
                    {infoLinks.map((link) => (
                      <li key={link.pt}>
                        <span className={`font-body text-body-sm ${textColor} cursor-pointer`}>
                          {localize(link, locale)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Social Column */}
            <div>
              <h4
                className={`font-body font-semibold text-celestial text-body-lg ${isMobile ? "mb-3" : "mb-4"}`}
              >
                {t('seguenos')}
              </h4>
              <ul className={isMobile ? "space-y-2" : "space-y-3"}>
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <li key={social.name}>
                      <span className={`flex items-center gap-3 font-body text-body-sm ${textColor} cursor-pointer`}>
                        <Icon />
                        {social.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div
        className={
          isMobile
            ? "border-t border-harvest/20 mt-8 pt-6"
            : "border-t border-harvest px-6 lg:px-[3%]"
        }
      >
        <div
          className={
            isMobile
              ? "flex flex-col gap-4"
              : "py-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
          }
        >
          {isMobile ? (
            <>
              <ul className="space-y-2 mb-4">
                {legalLinks.map((link) => (
                  <li key={link.pt}>
                    <span className={`font-body text-body-sm ${textColor} underline cursor-pointer`}>
                      {localize(link, locale)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`font-body text-body-sm ${textColor}`}>
                {t('copyright')}
              </p>
            </>
          ) : (
            <>
              <p className={`font-body text-body-sm ${textColor}`}>
                {t('copyright')}
              </p>
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-6">
                {legalLinks.map((link) => (
                  <span
                    key={link.pt}
                    className={`font-body text-body-sm ${textColor} underline cursor-pointer`}
                  >
                    {localize(link, locale)}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

interface FooterProps {
  theme?: FooterTheme;
  shopColumns?: boolean;
}

export default function Footer({ theme = "dark", shopColumns = false }: FooterProps) {
  const bgColor = theme === "dark" ? "bg-inkstone" : "bg-porcelain";

  return (
    <footer className={`hidden xl:block ${bgColor}`}>
      <FooterContent variant="desktop" theme={theme} shopColumns={shopColumns} />
    </footer>
  );
}
