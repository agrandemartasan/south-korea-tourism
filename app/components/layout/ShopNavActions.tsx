"use client";

import Button from "@/components/Button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { CartIcon } from "@/components/Icons";
import { useTranslations } from "next-intl";

export default function ShopNavActions() {
  const t = useTranslations('nav');

  return (
    <>
      <LanguageSwitcher theme="light" />
      <div className="hidden 2xl:block">
        <Button variant="harvest" href="/">
          {t('discoverButton')}
        </Button>
      </div>
      <div className="hidden xl:block">
        <Button variant="accent" href="#" className="gap-2 whitespace-nowrap">
          <CartIcon />
          {t('cartButton')}
        </Button>
      </div>
    </>
  );
}
