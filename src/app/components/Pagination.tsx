"use client";

import { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onNextClick: () => void;
  onBackClick: () => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onNextClick,
  onBackClick,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex flex-col items-center mt-4 mb-4">
      <div>
        <button
          className="disabled:opacity-50 hover:bg-gray-200 px-3 py-2 rounded-md text-gray-500"
          disabled={currentPage === 1}
          onClick={onBackClick}
        >
          Back
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 ${
              currentPage === page ? "bg-orange-500 text-white" : "bg-white"
            } rounded hover:bg-orange-600`}
          >
            {page}
          </button>
        ))}

        <button
          className="disabled:opacity-50 hover:bg-gray-200 px-3 py-2 rounded-md text-gray-500"
          disabled={currentPage === totalPages}
          onClick={onNextClick}
        >
          Next
        </button>
      </div>
      <div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
