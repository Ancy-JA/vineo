import React from 'react';

interface PaginationProps {
  page: number;
  totalPages: number;
  pageSize: number;
  handlePageClick: (page: number) => void;
  handlePageSizeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, pageSize, handlePageClick, handlePageSizeChange }) => {
  const renderFullPagination = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-3 py-1 border rounded ${page === i ? 'bg-blue-500 text-white' : 'text-black'}`}
          >
            {i}
          </button>
        );
      }
    } else {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageClick(1)}
          className={`px-3 py-1 border rounded ${page === 1 ? 'bg-blue-500 text-white' : 'text-black'}`}
        >
          1
        </button>
      );

      if (page > 2) {
        pages.push(<span key="start-ellipsis">...</span>);
      }

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);
      for (let i = start; i <= end; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`px-3 py-1 border rounded ${page === i ? 'bg-blue-500 text-white' : 'text-black'}`}
          >
            {i}
          </button>
        );
      }

      if (page < totalPages - 1) {
        pages.push(<span key="end-ellipsis">...</span>);
      }

      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageClick(totalPages)}
          className={`px-3 py-1 border rounded ${page === totalPages ? 'bg-blue-500 text-white' : 'text-black'}`}
        >
          {totalPages}
        </button>
      );
    }
    return pages;
  };

  const renderCompactPagination = () => (
    <>
      <button
        onClick={() => handlePageClick(page)}
        className="px-2 py-1 md:px-3 md:py-1 border rounded bg-blue-500 text-white text-sm md:text-base"
      >
        {page}
      </button>

      {page !== totalPages && (
        <button
          onClick={() => handlePageClick(totalPages)}
          className="px-2 py-1 md:px-3 md:py-1 border rounded text-black text-sm md:text-base"
        >
          {totalPages}
        </button>
      )}
    </>
  );

  return (
    <div className="flex justify-end items-center space-x-2">
      <button
        onClick={() => handlePageClick(page - 1)}
        disabled={page === 1}
        className="px-2 py-1 md:px-3 md:py-1 text-sm md:text-base"
      >
        &lt;
      </button>

      {/* Full pagination for md and up */}
      <div className="hidden md:flex space-x-2">
        {renderFullPagination()}
      </div>

      {/* Compact pagination for below md */}
      <div className="flex md:hidden space-x-2">
        {renderCompactPagination()}
      </div>

      <button
        onClick={() => handlePageClick(page + 1)}
        disabled={page === totalPages}
        className="px-2 py-1 md:px-3 md:py-1 text-sm md:text-base"
      >
        &gt;
      </button>

      {/* Page Size Dropdown */}
      <select
        className="border p-1 rounded text-sm md:text-base"
        value={pageSize}
        onChange={handlePageSizeChange}
      >
        <option value={10}>10 / page</option>
        <option value={20}>20 / page</option>
        <option value={50}>50 / page</option>
      </select>
    </div>
  );
};

export default Pagination;
