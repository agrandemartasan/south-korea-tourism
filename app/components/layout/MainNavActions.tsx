"use client";

import Button from "@/components/Button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function MainNavActions() {
  const t = useTranslations('nav');

  return (
    <>
      <LanguageSwitcher theme="dark" />
      <div className="hidden sm:block">
        <Button variant="accent" href="/shop" className="whitespace-nowrap">
          {t('shopButton')}
        </Button>
      </div>
    </>
  );
}
