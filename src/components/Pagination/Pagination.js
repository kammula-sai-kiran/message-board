import React from "react";
import usePagination from "./usePagination";
import './Pagination.scss';

const Pagination = () => {
  const { totalPages, currentPage, onPageClick } = usePagination();

  return totalPages > 1 ? (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => onPageClick(currentPage - 1)}>{`<`}</button>
      )}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          className={currentPage === i + 1 ? "selected" : ""}
          key={i}
          onClick={() => onPageClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => onPageClick(currentPage + 1)}>{`>`}</button>
      )}
    </div>
  ) : null;
};

export default Pagination;
