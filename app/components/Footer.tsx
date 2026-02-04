import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon
} from "./Icons";
import {
  brandInfo,
  explorarLinks,
  infoLinks,
  socialLinks,
  legalLinks,
  SocialIconType
} from "../data/footerData";

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
}

export function FooterContent({ variant = "desktop", theme = "dark" }: FooterContentProps) {
  const isMobile = variant === "mobile";
  const textColor = theme === "dark" ? "text-porcelain" : "text-inkstone";
  const logo = theme === "dark" ? "/media/images/logo-white.png" : "/media/images/logo-main.png";

  return (
    <div className={isMobile ? "px-5 pt-12 pb-8" : ""}>
      {/* Main Content */}
      <div className={isMobile ? "" : "px-10 py-16 lg:py-20"}>
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
              className={`font-body font-semibold ${textColor} ${isMobile ? "text-sm mb-1" : "text-base mb-2"}`}
            >
              {brandInfo.title}
            </h3>
            <p
              className={`font-body text-sm ${textColor} ${isMobile ? "mb-4" : "mb-6"}`}
            >
              {brandInfo.description}
            </p>
            <p className={`font-body text-sm font-semibold ${textColor} mb-1`}>
              {brandInfo.office}
            </p>
            <p className={`font-body text-sm ${textColor}`}>
              {brandInfo.address}
            </p>
            <p className={`font-body text-sm ${textColor}`}>
              {brandInfo.phone}
            </p>
            <span className={`font-body text-sm ${textColor} underline`}>
              {brandInfo.email}
            </span>
          </div>

          {/* Links Container */}
          <div
            className={
              isMobile ? "flex flex-col gap-8" : "grid grid-cols-3 gap-8"
            }
          >
            {/* Explorar Column */}
            <div>
              <h4
                className={`font-body font-semibold text-crimson ${isMobile ? "text-base mb-3" : "text-lg mb-4"}`}
              >
                Explorar
              </h4>
              <ul className={isMobile ? "space-y-2" : "space-y-3"}>
                {explorarLinks.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        className={`font-body text-sm ${textColor} cursor-pointer`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className={`font-body text-sm ${textColor} cursor-pointer`}>
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Informação útil Column */}
            <div>
              <h4
                className={`font-body font-semibold text-crimson ${isMobile ? "text-base mb-3" : "text-lg mb-4"}`}
              >
                Informação útil
              </h4>
              <ul className={isMobile ? "space-y-2" : "space-y-3"}>
                {infoLinks.map((link) => (
                  <li key={link}>
                    <span className={`font-body text-sm ${textColor} cursor-pointer`}>
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h4
                className={`font-body font-semibold text-crimson ${isMobile ? "text-base mb-3" : "text-lg mb-4"}`}
              >
                Segue-nos
              </h4>
              <ul className={isMobile ? "space-y-2" : "space-y-3"}>
                {socialLinks.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <li key={social.name}>
                      <span className={`flex items-center gap-3 font-body text-sm ${textColor} cursor-pointer`}>
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
            ? "border-t border-harvest/20 pt-6"
            : "border-t border-harvest mx-10"
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
                  <li key={link}>
                    <span className={`font-body text-sm ${textColor} underline cursor-pointer`}>
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`font-body text-sm ${textColor}`}>
                © 2025 Discover South Korea. Todos os direitos reservados.
              </p>
            </>
          ) : (
            <>
              <p className={`font-body text-sm ${textColor}`}>
                © 2025 Discover South Korea. Todos os direitos reservados.
              </p>
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-6">
                {legalLinks.map((link) => (
                  <span
                    key={link}
                    className={`font-body text-sm ${textColor} underline cursor-pointer`}
                  >
                    {link}
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
}

export default function Footer({ theme = "dark" }: FooterProps) {
  const bgColor = theme === "dark" ? "bg-inkstone" : "bg-porcelain";

  return (
    <footer className={`hidden lg:block ${bgColor}`}>
      <FooterContent variant="desktop" theme={theme} />
    </footer>
  );
}
