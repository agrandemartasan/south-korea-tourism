import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";

interface ShopPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ShopPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ShopPaginationProps) {
  const goToPrevious = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    } else {
      onPageChange(totalPages - 1); // Loop to last page
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    } else {
      onPageChange(0); // Loop to first page
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-12">
      {/* Previous Arrow */}
      <button
        type="button"
        onClick={goToPrevious}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-inkstone/30 text-inkstone hover:bg-inkstone/5 cursor-pointer transition-colors"
        aria-label="Página anterior"
      >
        <ArrowLeftIcon />
      </button>

      {/* Page Dots */}
      <div className="flex items-center gap-2" role="tablist">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onPageChange(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
              index === currentPage
                ? "bg-inkstone"
                : "bg-inkstone/30 hover:bg-inkstone/50"
            }`}
            role="tab"
            aria-selected={index === currentPage}
            aria-label={`Página ${index + 1}`}
          />
        ))}
      </div>

      {/* Next Arrow */}
      <button
        type="button"
        onClick={goToNext}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-inkstone/30 text-inkstone hover:bg-inkstone/5 cursor-pointer transition-colors"
        aria-label="Próxima página"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}
