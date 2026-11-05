import { useState } from "react";
import "./PaginationDemo.css";
import usePagination from "../../hooks/usePagination";

const exampleArray = Array.from({ length: 105 }, (_, index) => index + 1);

function PaginationDemo() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(exampleArray.length, itemsPerPage, 0);

  function createPaginationResults() {
    const slicedItems = exampleArray.slice(startIndex, endIndex);
    return slicedItems.map((value, index) => <li key={index}>Item {value}</li>);
  }
  function createPaginationButtons() {
    const newArray = new Array(totalPages).fill(0);
    return newArray.map((value, index) => (
      <button disabled={currentPage === index} onClick={() => setPage(index)}>
        {index + 1}
      </button>
    ));
  }

  return (
    <div className="exampleSection">
      <h3 className="sectionHeader self-ac">Pagination Demo</h3>
      <div className="flx-between fill-x">
        <div>
          <label htmlFor="numItems" className="txt-sm2">
            Items per page:{" "}
          </label>
          <input
            value={itemsPerPage}
            type="number"
            step={5}
            min={5}
            max={50}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
            }}
            className="txt-sm2"
          />
        </div>
        <div className="txt-sm2">Total Items: {exampleArray.length}</div>
      </div>
      <ol>{createPaginationResults()}</ol>
      <div className="flx-between fill-x">
        <button className="txt-sm2" disabled={!canPrevPage} onClick={prevPage}>
          Previous
        </button>
        <div className="txt-sm2">
          Page{" "}
          <input
            className="txt-sm2"
            type="number"
            step={1}
            onChange={(e) => setPage(Number(e.target.value))}
            max={totalPages}
            min={1}
            value={currentPage + 1}
          />{" "}
          of {totalPages || 1}
        </div>
        <button className="txt-sm2" disabled={!canNextPage} onClick={nextPage}>
          Next
        </button>
      </div>
      <div className="txt-sm3 self-ac txt-center">
        Showing items {startIndex + 1} - {endIndex} (Total on this page:{" "}
        {itemsOnCurrentPage})
      </div>
      <div className="flx-between fill-x" id="PageButtons">
        {createPaginationButtons()}
      </div>
    </div>
  );
}

export default PaginationDemo;
