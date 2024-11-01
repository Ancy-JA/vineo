// Pagination.tsx
import React from 'react';

interface PaginationProps {
  page: number;
  totalPages: number;
  handlePageClick: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, handlePageClick }) => {
  const renderPageNumbers = () => {
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
    }
    // Add ellipsis and adjacent numbers if total pages > 5
    else {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageClick(1)}
          className={`px-3 py-1 border rounded ${page === 1 ? 'bg-blue-500 text-white' : 'text-black'}`}
        >
          1
        </button>
      );
      if (page > 3) {
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
      if (page < totalPages - 2) {
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

  return (
    <div className="flex justify-end items-center space-x-2">
      <button onClick={() => handlePageClick(page - 1)} disabled={page === 1}>&lt;</button>
      {renderPageNumbers()}
      <button onClick={() => handlePageClick(page + 1)} disabled={page === totalPages}>&gt;</button>
    </div>
  );
};

export default Pagination;
