import React from "react";
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'

export default function Pagination({ currentPage,onChangePage }) {
  return (
    <>
      <ReactPaginate
      className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </>
  );
}
