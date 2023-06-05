import { BsTruck } from "react-icons/bs";
import { Scrollbars } from "react-custom-scrollbars";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useRouter } from "next/router";
import DataTable from "react-data-table-component";
import { useGetAllOrdersQuery } from "../../store/apis/restApi";
import ISTFormat from "../../utils/ISTFormat";
import Link from "next/link";

const data = [];
const customStyles = {
  rows: {},
  headCells: {
    style: {
      background: "#111111",
      color: "white",
    },
  },
  cells: {
    style: {},
  },
};
function Orders({ handleMyRaerClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [pageOffset, setPageOffset] = useState(0);
  const [activePageNumber, SetactivePageNumber] = useState(0);
  const router = useRouter();
  const handleShowDetails = (row) => {
    router.push(`/order/${row.slug}`);
    handleMyRaerClose();
  };
  const columns = [
    {
      name: "ORDER",
      selector: (row) => <div className="">{row.order_id}</div>,
    },
    {
      name: "DATE",
      selector: (row) => ISTFormat(new Date(row.date_created)),
    },
    {
      name: "TOTAL PRICE",
      selector: (row) => row.total_payable,
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
    },
    {
      name: "DETAILS",
      selector: (row) => (
        <p
          className="text-onwOrange2 underline text-sm sm:text-base"
          onClick={() => handleShowDetails(row)}
        >
          Show Details
        </p>
      ),
    },
  ];
  const { data: ordersData, isFetching } = useGetAllOrdersQuery({
    limit: rowsPerPage,
    offset: pageOffset,
  });
  function CustomPagination() {
    const count = Math.ceil(ordersData?.count / rowsPerPage);
    return (
      <ReactPaginate
        className="flex gap-3 justify-end items-center"
        previousLabel={""}
        nextLabel={""}
        breakLabel={"..."}
        pageCount={count || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName={
          "active text-white bg-black  border-2 px-2 py-1  border-black "
        }
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => handlePagination(page)}
        pageClassName={"page-item  text-center w-10 mt-5 red-500 rounded-full"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        breakClassName="page-item"
        breakLinkClassName="page-link"
      />
    );
  }
  // ** Function to handle Pagination
  const handlePagination = (page) => {
    const nextOffset = page.selected * rowsPerPage;
    setPageOffset(nextOffset);
    setCurrentPage(page.selected + 1);
    SetactivePageNumber(page);
  };
  return (
    <Scrollbars style={{ height: 550 }} autoHide>
      <div>
        <DataTable
          columns={columns}
          data={ordersData?.results}
          pagination
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          progressPending={isFetching}
          customStyles={customStyles}
          className="mt-5"
          noDataComponent={
            <NoDataComponent
              title="No Orders"
              buttonTitle="CONTINUE SHOPPING"
              image={<BsTruck size={70} className=" w-16 sm:w-fit" />}
            />
          }
        />
      </div>
    </Scrollbars>
  );
}
function NoDataComponent({ title, buttonTitle, image, onClick }) {
  return (
    <div className="grid place-content-center justify-items-center pt-20">
      <div className="instructions rounded-full w-[131px] h-[131px] grid place-content-center border-[1px] border-black border-dashed bg-ownGrey4">
        {image}
      </div>
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
export default Orders;
