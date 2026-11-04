import { useState } from "react";

export default function usePagination(totalItems, itemsPerPage, initialPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const itemsOnCurrentPage = endIndex - startIndex;
  const canNextPage = currentPage < totalPages - 1;
  const canPrevPage = currentPage > 0;

  function nextPage() {
    setCurrentPage((prevVal) => prevVal + 1);
  }

  function prevPage() {
    setCurrentPage((prevVal) => prevVal - 1);
  }
  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage: setCurrentPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  };
}
