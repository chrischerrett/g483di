import * as React from "react";

import ReactPaginate from "react-paginate";

export interface IPaginationProps {
    page: number;
    pageCount: number;
    onPageChange(index: number): void;
}

const Pagination = (props: IPaginationProps) => {
    if (props.pageCount < 2) {
        return null;
    }

    return (
        <div className="gs-Pagination">
            <ReactPaginate
                // --- custom
                forcePage={props.page}
                onPageChange={i => props.onPageChange(i.selected)}
                pageCount={props.pageCount}
                // --- defaults
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                containerClassName={"pagination small justify-content-center m-0 py-3"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
            />
        </div>
    );
};

export default Pagination;
