import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { useGetAllIncentivesQuery } from "../../store/apis/restApi";
import ParticularsTable from "./datatable";
import moment from "moment/moment";
import { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { useSelector } from "react-redux";

const columns = [
  {
    name: "INCENTIVES",
    selector: (row) => (
      <div className="flex items-center">
        <BiRupee />
        {row.amount}/
      </div>
    ),
  },
  {
    name: "REFERENCE ID",
    selector: (row) => (
      <div className="flex justify-between w-20">
        <div className="mr-2"> {row.referance_id}</div>
        <button>
          <FiCopy size={20} />
        </button>
      </div>
    ),
  },
  {
    name: "DATE",
    selector: (row) => (
      <div className="">{moment(row.date).format("DD-MM-YYYY")}</div>
    ),
  },
  {
    name: "PAYMENT MODE",
    selector: (row) => <div className="">{row.payment_type}</div>,
  },
  {
    name: "STATUS",
    selector: (row) => (
      <div
        className={`${
          row.status === "COMPLETED" &&
          "revenueBg text-online px-1 rounded-full"
        }
      ${
        row.status === "PROCESSING" &&
        "processingBg text-live px-1 rounded-full"
      }
      ${
        row.status === "PENDING" &&
        "pendingBg text-notification px-1 rounded-full"
      }
      ${
        row.status === "CANCELLED" &&
        "selectedBg text-red-500 px-1 rounded-full"
      }
      `}
      >
        {row.status}
      </div>
    ),
  },
  // {
  //   name: "ACTION",
  //   selector: (row) => (
  //     <div className="bg-bg40 space-x-1 px-3 flex items-center py-1 text-white rounded-md">
  //       <AiOutlineEye size={20} />
  //       <div>View</div>
  //     </div>
  //   ),
  // },
];

const FilterEnums = [
  { id: 1, status: "COMPLETED", data: "Completed" },
  { id: 2, status: "PENDING", data: "Pending" },
  { id: 3, status: "PROCESSING", data: "In-Progress" },
  { id: 4, status: "CANCELLED", data: "Cancelled" },
  { id: 5, status: "", data: "All" },
];

export default function Incentives() {
  const [limit, setLimit] = useState(7);
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState("");

  const handleOffset = (offsetData) => {
    setOffset(offsetData);
  };

  const SalesRepresentative = useSelector(
    (state) => state.auth.SalesRepresentative?.user?.user_detail?.slug
  );

  const { data: incentives, isFetching: fetching } = useGetAllIncentivesQuery(
    {
      limit: limit,
      offset: offset,
      status: filter,
    },
    { skip: SalesRepresentative ? false : true }
  );

  const handleFilterIncentives = (values) => {
    setFilter(values.status);
  };

  return (
    <div className="mt-5">
      <div className="bg-white mt-5 rounded-md">
        <h1 className="text-liveprice font-semibold text-2xl px-5 pt-5 pb-5">
          Incentive
        </h1>
        <div className="flex pl-5 items-start">
          <h1 className="mr-5 font-normal text-base">Filter</h1>
          <div className="flex flex-wrap">
            {FilterEnums?.map((each) => (
              <button
                onClick={() => handleFilterIncentives(each)}
                key={each.id}
                className={`${
                  filter == each.status
                    ? "bg-liveprice text-white rounded-2xl"
                    : "text-[#6E6B7B] bg-white border-2 rounded-2xl"
                } mb-2 px-4  py-1 text-sm font-normal rounded-lg mr-2 `}
              >
                {each.data}
              </button>
            ))}

            {/* <button
              className={`${
                false
                  ? "bg-liveprice text-white rounded-2xl"
                  : "text-black bg-white border-2 rounded-2xl"
              } mb-2 px-4  py-1 text-base font-medium rounded-lg mr-2 `}
            >
              In-Process
            </button>
            <button
              className={`${
                false
                  ? "bg-liveprice text-white rounded-2xl"
                  : "text-black bg-white border-2 rounded-2xl"
              } mb-2 px-4  py-1 text-base font-medium rounded-lg mr-2 `}
            >
              Failed
            </button>
            <button
              className={`${
                true
                  ? "bg-liveprice text-white rounded-2xl"
                  : "text-black bg-white border-2 rounded-2xl"
              } mb-2 px-4  py-1 text-base font-medium rounded-lg mr-2 `}
            >
              All
            </button> */}
          </div>
        </div>
        <ParticularsTable
          columns={columns}
          ordersData={incentives}
          isFetching={fetching}
          handleApi={handleOffset}
        />
      </div>
    </div>
  );
}

{
  /* <div className='p-5 flex flex-col'>
        <div className='flex flex-col mb-3'>
            <h1 className='text-rep font-semibold text-base mb-1'>Selections</h1>
            <input className='border-2 rounded-md pl-2 w-full h-10' placeholder='Transaction ID Search...'/>
        </div>
        <div className='flex flex-col mb-3'>
            <h1 className='text-rep font-semibold text-base mb-1'>Reference ID</h1>
            <input className='border-2 rounded-md pl-2 w-full h-10' placeholder='Reference ID Search...'/>
        </div>
        <div className='flex justify-between items-center pt-2'>
           <button className='h-[28px] flex justify-center items-center border text-liveprice border-liveprice px-1 py-1 font-normal text-sm rounded-sm'>Clear Filters</button>
           <button className='h-[28px]  bg-liveprice text-white px-3 flex justify-center items-center font-normal text-xs rounded-sm'>Filters <BiFilterAlt className='ml-1 ' size={18}/></button>
        </div>

        <div className='self-end flex justify-center items-center mt-5'>
            <h1 className='font-semibold text-sm text-liveprice mr-2'>Export</h1>
            <div className='bg-liveprice text-white p-1 mr-3 rounded-sm'><AiOutlineFilePdf size={16}/></div>
            <div className='bg-liveprice text-white p-1 rounded-sm'><SiMicrosoftexcel size={16}/></div>
            
        </div>
        </div> */
}

// import dynamic from 'next/dynamic'
// import React from 'react'

// const Goal = dynamic(() => import('./goal'),{ssr:false})
// const AverageSessions = dynamic(() => import('./average-sessions'),{ssr:false})

// export default function Incentives() {

//   return (

//     <div className='grid grid-cols-1 gap-4 mt-5'>
//     <Goal/>
//     <AverageSessions/>
//     </div>

//   )
// }
