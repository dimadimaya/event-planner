import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";
import { ReactComponent as Right } from "../../icons/right.svg";
import { ReactComponent as Left } from "../../icons/left.svg";
import { ReactComponent as Points } from "../../icons/points.svg";

export const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    pageCount >= 1 && (
      <div className={styles.pagination}>
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          breakLabel={<Points />}
          onPageChange={(selected) => onPageChange(selected.selected + 1)}
          containerClassName={styles.paginationContainer}
          pageClassName={styles.paginationItem}
          activeClassName={styles.active}
          previousLinkClassName={styles.paginationLink}
          nextLinkClassName={styles.paginationLink}
          previousLabel={<Left />}
          nextLabel={<Right />}
        />
      </div>
    )
  );
};
