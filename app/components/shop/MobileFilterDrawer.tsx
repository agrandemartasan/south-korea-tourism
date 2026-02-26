"use client";

import { useEffect } from "react";
import { CloseIcon } from "@/components/Icons";
import ShopFilters from "./ShopFilters";
import { useTranslations } from "next-intl";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
  selectedSubcategories: string[];
  setSelectedSubcategories: (ids: string[]) => void;
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
  selectedMaisVendidos: string[];
  setSelectedMaisVendidos: (ids: string[]) => void;
  selectedNovidades: string[];
  setSelectedNovidades: (ids: string[]) => void;
  selectedPrice: string;
  setSelectedPrice: (id: string) => void;
  selectedRegions: string[];
  setSelectedRegions: (ids: string[]) => void;
  selectedMaterial: string;
  setSelectedMaterial: (id: string) => void;
  selectedAvailability: string;
  setSelectedAvailability: (id: string) => void;
  onClearAll: () => void;
  totalResults: number;
  totalProducts: number;
}

export default function MobileFilterDrawer({
  isOpen,
  onClose,
  ...filterProps
}: MobileFilterDrawerProps) {
  const t = useTranslations('shop.filterPanel');
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-inkstone/50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-porcelain z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-inkstone/10">
          <h2 className="font-body text-body-lg font-semibold text-inkstone">
            {t('heading')}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-inkstone hover:text-inkstone/70 cursor-pointer"
            aria-label={t('closeFilters')}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Filters Content */}
        <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
          <ShopFilters {...filterProps} />
        </div>
      </div>
    </>
  );
}
