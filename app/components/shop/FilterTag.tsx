"use client";

import { CloseSmallIcon } from "@/components/Icons";
import { useTranslations } from "next-intl";

interface FilterTagProps {
  label: string;
  onRemove: () => void;
}

export default function FilterTag({ label, onRemove }: FilterTagProps) {
  const t = useTranslations('shop');
  return (
    <span className="inline-flex items-center gap-2 bg-celestial text-porcelain px-3 py-1.5 rounded font-body text-body-sm">
      {label}
      <button
        type="button"
        onClick={onRemove}
        className="hover:opacity-70 transition-opacity cursor-pointer"
        aria-label={t('removeFilter', { label })}
      >
        <CloseSmallIcon />
      </button>
    </span>
  );
}
