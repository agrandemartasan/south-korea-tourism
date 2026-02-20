"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { FilterIcon, ChevronDownIcon } from "../../components/Icons";
import ShopFeaturedSection from "../../components/ShopFeaturedSection";
import ShopFilters from "../../components/shop/ShopFilters";
import ShopProductCard from "../../components/shop/ShopProductCard";
import ShopPagination from "../../components/shop/ShopPagination";
import FilterTag from "../../components/shop/FilterTag";
import MobileFilterDrawer from "../../components/shop/MobileFilterDrawer";
import {
  allProducts,
  PRODUCTS_PER_PAGE,
} from "../../data/shopAllProductsData";
import {
  mainCategories,
  priceRanges,
  availabilityOptions,
  sortOptions,
} from "../../data/shopFiltersData";

export default function ShopPage() {
  // Filter state
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  );
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedMaisVendidos, setSelectedMaisVendidos] = useState<string[]>(
    []
  );
  const [selectedNovidades, setSelectedNovidades] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");

  // Pagination and sort state
  const [currentPage, setCurrentPage] = useState(0);
  const [sortBy, setSortBy] = useState("recentes");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Mobile drawer state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Animation state for pagination
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<"next" | "prev">("next");
  const previousPageRef = useRef(currentPage);

  // Handle page change with animation
  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage) return;

    // Determine direction
    const direction = newPage > currentPage ? "next" : "prev";
    setAnimationDirection(direction);
    setIsAnimating(true);

    // After fade out, change page
    setTimeout(() => {
      setCurrentPage(newPage);
      previousPageRef.current = newPage;
    }, 150);
  };

  // Reset animation after page change
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentPage, isAnimating]);

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by subcategories
    if (selectedSubcategories.length > 0) {
      result = result.filter((p) =>
        selectedSubcategories.includes(p.subcategory)
      );
    }

    // Filter by search keyword
    if (searchKeyword) {
      const keyword = searchKeyword.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(keyword));
    }

    // Filter by mais vendidos
    if (selectedMaisVendidos.length > 0) {
      result = result.filter((p) =>
        p.maisVendidos.some((tag) => selectedMaisVendidos.includes(tag))
      );
    }

    // Filter by novidades
    if (selectedNovidades.length > 0) {
      result = result.filter((p) =>
        p.novidades.some((tag) => selectedNovidades.includes(tag))
      );
    }

    // Filter by price range
    if (selectedPrice !== "all") {
      result = result.filter((p) => {
        const price = p.price;
        switch (selectedPrice) {
          case "0-10":
            return price >= 0 && price <= 10;
          case "10-25":
            return price > 10 && price <= 25;
          case "25-50":
            return price > 25 && price <= 50;
          case "50-100":
            return price > 50 && price <= 100;
          case "100+":
            return price > 100;
          default:
            return true;
        }
      });
    }

    // Filter by regions
    if (selectedRegions.length > 0) {
      result = result.filter((p) => selectedRegions.includes(p.region));
    }

    // Filter by material
    if (selectedMaterial !== "all") {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    // Filter by availability
    if (selectedAvailability !== "all") {
      result = result.filter((p) => p.availability === selectedAvailability);
    }

    // Sort
    switch (sortBy) {
      case "preco-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "preco-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      // recentes and popularidade would need additional data
      default:
        break;
    }

    return result;
  }, [
    selectedCategory,
    selectedSubcategories,
    searchKeyword,
    selectedMaisVendidos,
    selectedNovidades,
    selectedPrice,
    selectedRegions,
    selectedMaterial,
    selectedAvailability,
    sortBy,
  ]);

  // Paginate
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    currentPage * PRODUCTS_PER_PAGE,
    (currentPage + 1) * PRODUCTS_PER_PAGE
  );

  // Reset to first page when filters change
  const handleFilterChange = <T,>(
    setter: (value: T) => void,
    value: T
  ) => {
    setter(value);
    setCurrentPage(0);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedSubcategories([]);
    setSearchKeyword("");
    setSelectedMaisVendidos([]);
    setSelectedNovidades([]);
    setSelectedPrice("all");
    setSelectedRegions([]);
    setSelectedMaterial("all");
    setSelectedAvailability("all");
    setCurrentPage(0);
  };

  // Get active filter tags
  const getActiveFilterTags = () => {
    const tags: { label: string; onRemove: () => void }[] = [];

    if (selectedCategory !== "all") {
      const cat = mainCategories.find((c) => c.id === selectedCategory);
      if (cat) {
        tags.push({
          label: cat.label,
          onRemove: () => handleFilterChange(setSelectedCategory, "all"),
        });
      }
    }

    if (selectedPrice !== "all") {
      const price = priceRanges.find((p) => p.id === selectedPrice);
      if (price) {
        tags.push({
          label: price.label,
          onRemove: () => handleFilterChange(setSelectedPrice, "all"),
        });
      }
    }

    if (selectedAvailability !== "all") {
      const avail = availabilityOptions.find(
        (a) => a.id === selectedAvailability
      );
      if (avail) {
        tags.push({
          label: avail.label,
          onRemove: () => handleFilterChange(setSelectedAvailability, "all"),
        });
      }
    }

    return tags;
  };

  const filterTags = getActiveFilterTags();

  const filterProps = {
    selectedCategory,
    setSelectedCategory: (v: string) => handleFilterChange(setSelectedCategory, v),
    selectedSubcategories,
    setSelectedSubcategories: (v: string[]) =>
      handleFilterChange(setSelectedSubcategories, v),
    searchKeyword,
    setSearchKeyword: (v: string) => handleFilterChange(setSearchKeyword, v),
    selectedMaisVendidos,
    setSelectedMaisVendidos: (v: string[]) =>
      handleFilterChange(setSelectedMaisVendidos, v),
    selectedNovidades,
    setSelectedNovidades: (v: string[]) =>
      handleFilterChange(setSelectedNovidades, v),
    selectedPrice,
    setSelectedPrice: (v: string) => handleFilterChange(setSelectedPrice, v),
    selectedRegions,
    setSelectedRegions: (v: string[]) =>
      handleFilterChange(setSelectedRegions, v),
    selectedMaterial,
    setSelectedMaterial: (v: string) =>
      handleFilterChange(setSelectedMaterial, v),
    selectedAvailability,
    setSelectedAvailability: (v: string) =>
      handleFilterChange(setSelectedAvailability, v),
    onClearAll: clearAllFilters,
    totalResults: filteredProducts.length,
    totalProducts: allProducts.length,
  };

  return (
    <main className="min-h-screen bg-porcelain">
      {/* Featured Section - Desktop only */}
      <ShopFeaturedSection />

      <div className="px-6 lg:px-[3%] pt-32 pb-8 lg:py-12">
        {/* Page Title */}
        <h1 className="font-body text-heading-md font-bold text-inkstone mb-8">
          Loja Cultural
        </h1>

        {/* Mobile Filter Button */}
        <button
          type="button"
          onClick={() => setIsMobileFilterOpen(true)}
          className="lg:hidden w-full flex items-center justify-center gap-2 border border-inkstone/30 rounded-full py-3 mb-6 font-body text-body-sm text-inkstone cursor-pointer hover:bg-inkstone/5 transition-colors"
        >
          <FilterIcon />
          Filtros
        </button>

        {/* Mobile Filter Drawer */}
        <MobileFilterDrawer
          isOpen={isMobileFilterOpen}
          onClose={() => setIsMobileFilterOpen(false)}
          {...filterProps}
        />

        <div className="lg:flex lg:gap-12">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block lg:w-64 lg:shrink-0">
            <ShopFilters {...filterProps} />
          </aside>

          {/* Products Section */}
          <div className="flex-1">
            {/* Filter Tags and Sort */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6 min-h-9">
              {/* Active Filter Tags */}
              {filterTags.map((tag, idx) => (
                <FilterTag
                  key={idx}
                  label={tag.label}
                  onRemove={tag.onRemove}
                />
              ))}

              {/* Sort Dropdown - Push to right */}
              <div className="w-full lg:w-auto lg:ml-auto relative flex justify-center lg:justify-end">
                <button
                  type="button"
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center gap-2 font-body text-body-sm text-inkstone cursor-pointer"
                >
                  Ordenar por
                  <ChevronDownIcon />
                </button>
                {showSortDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowSortDropdown(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-porcelain border border-inkstone/20 rounded shadow-lg z-20">
                      {sortOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => {
                            setSortBy(option.id);
                            setShowSortDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-body-sm cursor-pointer hover:bg-inkstone/5 ${
                            sortBy === option.id
                              ? "font-semibold text-inkstone"
                              : "text-inkstone/70"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Product Grid */}
            <div
              className={`grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6 transition-all duration-300 ease-out ${
                isAnimating
                  ? animationDirection === "next"
                    ? "opacity-0 translate-x-4"
                    : "opacity-0 -translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {paginatedProducts.map((product) => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {paginatedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-body text-inkstone/70">
                  Nenhum produto encontrado com os filtros selecionados.
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <ShopPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
