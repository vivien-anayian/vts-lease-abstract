import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  itemsPerPageOptions?: number[];
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPageOptions = [10, 25, 50, 100],
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Don't show pagination if there are no items
  if (totalItems === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-between py-4 px-6 border-t border-[#ecedef] bg-white">
      {/* Left side - Items per page */}
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e]">
          Items per page:
        </span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="h-[32px] px-3 pr-8 text-[13px] font-['Inter:Regular',sans-serif] text-[#1d1e20] border border-[#d1d5db] rounded-[6px] bg-white cursor-pointer hover:border-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4837b9] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3d%2210%22%20height%3d%226%22%20viewBox%3d%220%200%2010%206%22%20fill%3d%22none%22%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%3e%3cpath%20d%3d%22M1%201L5%205L9%201%22%20stroke%3d%22%2372777e%22%20stroke-width%3d%221.5%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%2f%3e%3c%2fsvg%3e')] bg-[length:10px_6px] bg-[right_12px_center] bg-no-repeat"
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Center - Page info and navigation */}
      <div className="flex items-center gap-4">
        {/* Items range */}
        <span className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e]">
          {startItem}-{endItem} of {totalItems}
        </span>

        {/* Page navigation */}
        <div className="flex items-center gap-2">
          {/* Previous button */}
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="w-[32px] h-[32px] flex items-center justify-center rounded-[6px] border border-[#d1d5db] bg-white hover:bg-[#f9fafb] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4 text-[#72777e]" strokeWidth={2} />
          </button>

          {/* Page selector */}
          <div className="flex items-center gap-1">
            <span className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e]">
              Page
            </span>
            <select
              value={currentPage}
              onChange={(e) => onPageChange(Number(e.target.value))}
              className="h-[32px] px-3 pr-8 text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20] border border-[#d1d5db] rounded-[6px] bg-white cursor-pointer hover:border-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4837b9] focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3d%2210%22%20height%3d%226%22%20viewBox%3d%220%200%2010%206%22%20fill%3d%22none%22%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%3e%3cpath%20d%3d%22M1%201L5%205L9%201%22%20stroke%3d%22%2372777e%22%20stroke-width%3d%221.5%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%2f%3e%3c%2fsvg%3e')] bg-[length:10px_6px] bg-[right_12px_center] bg-no-repeat"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </select>
            <span className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e]">
              of {totalPages}
            </span>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="w-[32px] h-[32px] flex items-center justify-center rounded-[6px] border border-[#d1d5db] bg-white hover:bg-[#f9fafb] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4 text-[#72777e]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Right side - Empty for balance */}
      <div className="w-[140px]" />
    </div>
  );
}
