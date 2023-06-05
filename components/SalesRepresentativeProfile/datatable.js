import { BsTruck } from "react-icons/bs";
import { Scrollbars } from "react-custom-scrollbars";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useRouter } from "next/router";
import DataTable from "react-data-table-component";
import Link from "next/link";

const customStyles = {
  rows: {},
  headCells: {
    style: {
      background: "#F7F2F5",
      color: "#5E5873",
    },
  },
  cells: {
    style: {},
  },
};

function ParticularsTable({ columns, ordersData, isFetching, handleApi }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [pageOffset, setPageOffset] = useState(0);
  const [activePageNumber, SetactivePageNumber] = useState(0);
  const router = useRouter();

  function CustomPagination() {
    const count = Math.ceil(ordersData?.length / rowsPerPage);
    return "";
    // <ReactPaginate
    //   className="flex gap-3 justify-end items-center"
    //   previousLabel={""}
    //   nextLabel={""}
    //   breakLabel={"..."}
    //   pageCount={count || 1}
    //   marginPagesDisplayed={2}
    //   pageRangeDisplayed={2}
    //   activeClassName={
    //     "active text-white bg-black  border-2 px-2 py-1  border-black "
    //   }
    //   forcePage={currentPage !== 0 ? currentPage - 1 : 0}
    //   onPageChange={(page) => handlePagination(page)}
    //   pageClassName={"page-item  text-center w-10 mt-5 red-500 rounded-full"}
    //   nextLinkClassName={"page-link"}
    //   nextClassName={"page-item next"}
    //   previousClassName={"page-item prev"}
    //   previousLinkClassName={"page-link"}
    //   pageLinkClassName={"page-link"}
    //   breakClassName="page-item"
    //   breakLinkClassName="page-link"
    //   containerClassName={
    //     "pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1"
    //   }
    // />
  }
  // ** Function to handle Pagination
  const handlePagination = (page) => {
    const nextOffset = page.selected * rowsPerPage;
    handleApi(nextOffset);
    setPageOffset(nextOffset);
    setCurrentPage(page.selected + 1);
    SetactivePageNumber(page);
  };
  return (
    <div className="drop-shadow-md bg-white">
      <Scrollbars style={{ height: 200 }} autoHide>
        <div>
          <DataTable
            columns={columns}
            data={ordersData}
            pagination
            paginationDefaultPage={currentPage + 1}
            paginationComponent={CustomPagination}
            progressPending={isFetching}
            customStyles={customStyles}
            className="mt-0 "
            noDataComponent={
              <NoDataComponent
                title="Not Found"
                buttonTitle="CONTINUE SHOPPING"
                image={<BsTruck size={70} className=" w-16 sm:w-fit" />}
              />
            }
          />
        </div>
      </Scrollbars>
    </div>
  );
}
function NoDataComponent({ title, buttonTitle, image, onClick }) {
  return (
    <div className="grid place-content-center justify-items-center pt-20">
      {/* <div className="instructions rounded-full w-[131px] h-[131px] grid place-content-center border-[1px] border-black border-dashed bg-ownGrey4">
        {image}
      </div> */}
      <div className="text-sm text-ownGrey7 pt-6 pb-10 ">{title}</div>
      <Link href={"/products"}>
        <div
          // onClick={onClick}
          className="text-white bg-onwOrange2 px-6 py-3 grid place-content-center text-[10px] rounded-sm"
        >
          {buttonTitle}
        </div>
      </Link>
    </div>
  );
}
function DataComponent() {
  return <h1>No Data Found</h1>;
}
export default ParticularsTable;
