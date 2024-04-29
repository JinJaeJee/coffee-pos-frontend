"use client";

import { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextClick: () => void;
  onBackClick: () => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onNextClick,
  onBackClick,
}: PaginationProps) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <button
        className="disabled:opacity-50 hover:bg-gray-200 px-3 py-2 rounded-md text-gray-500"
        disabled={currentPage === 1}
        onClick={onBackClick}
      >
        Back
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="disabled:opacity-50 hover:bg-gray-200 px-3 py-2 rounded-md text-gray-500"
        disabled={currentPage === totalPages}
        onClick={onNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
