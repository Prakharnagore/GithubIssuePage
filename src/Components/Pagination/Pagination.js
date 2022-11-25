import React from "react";
import ReactPaginate from "react-paginate";
import { useAppContext } from "../../Context";
import "./Pagination.css";

const Pagination = () => {
  const {
    handlePageClick,
    state: { repo, issuePerPage },
  } = useAppContext();

  const pcount = Math.ceil(repo?.open_issues_count / issuePerPage - 1);

  return (
    <>
      <div className="pagination">
        <ReactPaginate
          breakLabel=". . ."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pcount || 0}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default Pagination;
