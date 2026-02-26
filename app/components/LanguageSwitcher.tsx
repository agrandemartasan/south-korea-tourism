"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

interface LanguageSwitcherProps {
  theme?: "dark" | "light";
}

export default function LanguageSwitcher({ theme = "dark" }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const baseText = theme === "dark" ? "text-porcelain" : "text-inkstone";
  const activeText = theme === "dark" ? "text-harvest" : "text-crimson";
  const divider = theme === "dark" ? "bg-porcelain/40" : "bg-inkstone/30";

  function switchLocale(next: Locale) {
    if (locale !== next) {
      router.replace(pathname, { locale: next });
    }
  }

  return (
    <div className={`flex items-center gap-0 font-body text-body-sm font-semibold ${baseText}`}>
      <button
        type="button"
        onClick={() => switchLocale("pt")}
        className={`px-1 transition-colors ${locale === "pt" ? activeText : "opacity-60 hover:opacity-100"}`}
        aria-label="Português"
      >
        PT
      </button>
      <span className={`w-px h-3 ${divider} mx-1`} aria-hidden="true" />
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={`px-1 transition-colors ${locale === "en" ? activeText : "opacity-60 hover:opacity-100"}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
