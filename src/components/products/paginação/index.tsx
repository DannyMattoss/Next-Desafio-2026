'use client';

import Image from "next/image";
import Link from "next/link";
type PaginationProps = {
    currentPage: number;
    handlePageChange: (page: number) => void;
    totalPages: number;
};

export default function Pagination({currentPage, handlePageChange, totalPages} : PaginationProps) {
  
  const getVisiblePages = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center">
        {/* voltar */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center w-10 h-10 rounded-xl ${
            currentPage === 1
              ? 'text-mclaro cursor-not-allowed'
              : 'text-mescuro'
          }`}
        >
            <i className="bi bi-chevron-left [-webkit-text-stroke:1px_currentColor]"></i>
        </button>

       {/* números */}
        <div className="flex items-center text-mescuro">
          {visiblePages.map((page, index) => {
            if (page === '...') {
              return (
                <div
                  key={`ellipsis-${index}`}
                  className="flex items-center justify-center w-10 h-10 text-mescuro"
                >
                  ...
                </div>
              );
            }

            const pageNumber = page as number;
            const isCurrentPage = currentPage === pageNumber;

            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`flex items-center justify-center w-7 h-8 rounded-xl font-logo font-medium text-sm transition-all duration-300 ${
                  isCurrentPage
                    ? ' text-bege bg-mescuro '
                    : 'text-mescuro'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        {/* proximo */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
            currentPage === totalPages
              ? ' text-mclaro cursor-not-allowed'
              : 'text-mescuro'
          }`}
        >
          <i className="bi bi-chevron-right [-webkit-text-stroke:1px_currentColor]"></i>
        </button>
      </div>
    </div>
  );
}