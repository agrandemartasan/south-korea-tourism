"use client";

import { useState, useId } from "react";
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from "@/components/Icons";
import {
  mainCategories,
  subcategories,
  priceRanges,
  regions,
  materials,
  availabilityOptions,
  maisVendidosTags,
  novidadesTags
} from "@/data/shopFiltersData";

interface ShopFiltersProps {
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

interface CollapsibleSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function CollapsibleSection({
  title,
  isOpen,
  onToggle,
  children
}: CollapsibleSectionProps) {
  return (
    <div className="border-b border-harvest py-4">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-body text-body-sm font-semibold text-inkstone">
          {title}
        </span>
        <span className="text-inkstone">
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </button>
      {isOpen && <div className="mt-3">{children}</div>}
    </div>
  );
}

export default function ShopFilters({
  selectedCategory,
  setSelectedCategory,
  selectedSubcategories,
  setSelectedSubcategories,
  searchKeyword,
  setSearchKeyword,
  selectedMaisVendidos,
  setSelectedMaisVendidos,
  selectedNovidades,
  setSelectedNovidades,
  selectedPrice,
  setSelectedPrice,
  selectedRegions,
  setSelectedRegions,
  selectedMaterial,
  setSelectedMaterial,
  selectedAvailability,
  setSelectedAvailability,
  onClearAll,
  totalResults,
  totalProducts
}: ShopFiltersProps) {
  const id = useId();

  // Collapsible sections state
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set([
      "subcategorias",
      "pesquisa",
      "maisvendidos",
      "novidades",
      "preco",
      "regiao",
      "material",
      "disponibilidade"
    ])
  );

  const toggleSection = (section: string) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const toggleMultiSelect = (
    id: string,
    selected: string[],
    setSelected: (ids: string[]) => void
  ) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="font-body">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-body-lg font-semibold text-inkstone">Filtros</h2>
        <button
          type="button"
          onClick={onClearAll}
          className="text-body-sm text-inkstone/70 hover:text-inkstone cursor-pointer"
        >
          Limpar tudo
        </button>
      </div>

      {/* Results count */}
      <p className="text-body-sm text-inkstone/70 mb-6">
        A mostrar {totalResults} de {totalProducts}
      </p>

      {/* Main Categories */}
      <div className="space-y-1 mb-4">
        {mainCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`block w-full text-left py-1 text-body-sm cursor-pointer transition-colors ${
              selectedCategory === cat.id
                ? "font-semibold text-inkstone"
                : "text-inkstone/70 hover:text-inkstone"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Subcategorias */}
      <CollapsibleSection
        title="Subcategorias"
        isOpen={openSections.has("subcategorias")}
        onToggle={() => toggleSection("subcategorias")}
      >
        <div className="space-y-2">
          {subcategories.map((sub) => (
            <label
              key={sub.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedSubcategories.includes(sub.id)}
                onChange={() =>
                  toggleMultiSelect(
                    sub.id,
                    selectedSubcategories,
                    setSelectedSubcategories
                  )
                }
                className="w-4 h-4 rounded border border-inkstone/30 focus:ring-celestial"
              />
              <span className="text-body-sm text-inkstone">{sub.label}</span>
            </label>
          ))}
        </div>
      </CollapsibleSection>

      {/* Pesquisa */}
      <CollapsibleSection
        title="Pesquisa"
        isOpen={openSections.has("pesquisa")}
        onToggle={() => toggleSection("pesquisa")}
      >
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-inkstone/50">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Keyword"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-inkstone/30 rounded text-body-sm text-inkstone placeholder:text-inkstone/50 focus:outline-none focus:border-celestial"
          />
        </div>
      </CollapsibleSection>

      {/* Mais Vendidos */}
      <CollapsibleSection
        title="Mais Vendidos"
        isOpen={openSections.has("maisvendidos")}
        onToggle={() => toggleSection("maisvendidos")}
      >
        <div className="flex flex-wrap gap-2">
          {maisVendidosTags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() =>
                toggleMultiSelect(
                  tag.id,
                  selectedMaisVendidos,
                  setSelectedMaisVendidos
                )
              }
              className={`px-3 py-1.5 rounded-full text-body-sm border cursor-pointer transition-colors ${
                selectedMaisVendidos.includes(tag.id)
                  ? "bg-inkstone/10 border-inkstone text-inkstone"
                  : "border-inkstone/30 text-inkstone hover:border-inkstone"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </CollapsibleSection>

      {/* Novidades */}
      <CollapsibleSection
        title="Novidades"
        isOpen={openSections.has("novidades")}
        onToggle={() => toggleSection("novidades")}
      >
        <div className="flex flex-wrap gap-2">
          {novidadesTags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() =>
                toggleMultiSelect(
                  tag.id,
                  selectedNovidades,
                  setSelectedNovidades
                )
              }
              className={`px-3 py-1.5 rounded-full text-body-sm border cursor-pointer transition-colors ${
                selectedNovidades.includes(tag.id)
                  ? "bg-inkstone/10 border-inkstone text-inkstone"
                  : "border-inkstone/30 text-inkstone hover:border-inkstone"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </CollapsibleSection>

      {/* Preço */}
      <CollapsibleSection
        title="Preço"
        isOpen={openSections.has("preco")}
        onToggle={() => toggleSection("preco")}
      >
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name={`${id}-price`}
                checked={selectedPrice === range.id}
                onChange={() => setSelectedPrice(range.id)}
                className="w-4 h-4 rounded-full border border-inkstone/30 focus:ring-celestial"
              />
              <span className="text-body-sm text-inkstone">{range.label}</span>
            </label>
          ))}
        </div>
      </CollapsibleSection>

      {/* Região */}
      <CollapsibleSection
        title="Região"
        isOpen={openSections.has("regiao")}
        onToggle={() => toggleSection("regiao")}
      >
        <div className="space-y-2">
          {regions.map((region) => (
            <label
              key={region.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedRegions.includes(region.id)}
                onChange={() =>
                  toggleMultiSelect(
                    region.id,
                    selectedRegions,
                    setSelectedRegions
                  )
                }
                className="w-4 h-4 rounded border border-inkstone/30 focus:ring-celestial"
              />
              <span className="text-body-sm text-inkstone">{region.label}</span>
            </label>
          ))}
        </div>
      </CollapsibleSection>

      {/* Material */}
      <CollapsibleSection
        title="Material"
        isOpen={openSections.has("material")}
        onToggle={() => toggleSection("material")}
      >
        <select
          value={selectedMaterial}
          onChange={(e) => setSelectedMaterial(e.target.value)}
          className="w-full px-3 py-2 border border-inkstone/30 rounded text-body-sm text-inkstone focus:outline-none focus:border-celestial cursor-pointer"
        >
          {materials.map((mat) => (
            <option key={mat.id} value={mat.id}>
              {mat.label}
            </option>
          ))}
        </select>
      </CollapsibleSection>

      {/* Disponibilidade */}
      <CollapsibleSection
        title="Disponibilidade"
        isOpen={openSections.has("disponibilidade")}
        onToggle={() => toggleSection("disponibilidade")}
      >
        <div className="space-y-2">
          {availabilityOptions.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name={`${id}-availability`}
                checked={selectedAvailability === option.id}
                onChange={() => setSelectedAvailability(option.id)}
                className="w-4 h-4 rounded-full border border-inkstone/30 focus:ring-celestial"
              />
              <span className="text-body-sm text-inkstone">{option.label}</span>
            </label>
          ))}
        </div>
      </CollapsibleSection>
    </div>
  );
}
