import { BiFilterAlt } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { openFilterForm } from "../../store/slices/popupSlice";
import ParticularsTable from "../SalesRepresentativeProfile/datatable";

const columns = [
  {
    name: "SR.NO",
    selector: (row) => <div className="">{row.slno}</div>,
  },
  {
    name: "STATUS",
    selector: (row) => (
      <div
        className={`${
          row.status === "Completed" &&
          "revenueBg text-online px-1 rounded-full"
        }
      ${
        row.status === "Processing" &&
        "processingBg text-live px-1 rounded-full"
      }
      ${
        row.status === "Pending" &&
        "pendingBg text-notification px-1 rounded-full"
      }
      `}
      >
        {row.status}
      </div>
    ),
  },
  {
    name: "DATE",
    selector: (row) => <div className="">{row.date}</div>,
  },
  {
    name: "NAME",
    selector: (row) => <div className="">{row.name}</div>,
  },
  {
    name: "DESCRIPTION OF GOODS",
    selector: (row) => <div className="">{row.goods}</div>,
  },
  {
    name: "COLLECTED NET WEIGHT",
    selector: (row) => <div className="">{row.netweight}</div>,
  },
  {
    name: "REFERENCE ID",
    selector: (row) => <div className="">{row.referenceid}</div>,
  },

  {
    name: "MOBILE NO",
    selector: (row) => (
      <div className="flex ">
        <div className="mr-4"> {row.phone}</div>
        <button>
          <img src="/pdf.svg" className=" h-[30px] w-[30px]" />
        </button>
      </div>
    ),
  },
];

const data = [
  {
    slno: "1",
    status: "Completed",
    date: "15/09/2022",
    name: "bhuvan",
    goods: "necklace",
    netweight: "19.54",
    referenceid: "WE325436D45R",
    phone: "8643761543",
  },
  {
    slno: "2",
    status: "Processing",
    date: "15/09/2022",
    name: "bhuvan",
    goods: "necklace",
    netweight: "19.54",
    referenceid: "WE325436D45R",
    phone: "8643761543",
  },
  {
    slno: "3",
    status: "Pending",
    date: "15/09/2022",
    name: "bhuvan",
    goods: "necklace",
    netweight: "19.54",
    referenceid: "WE325436D45R",
    phone: "8643761543",
  },
  {
    slno: "4",
    status: "Processing",
    date: "15/09/2022",
    name: "bhuvan",
    goods: "necklace",
    netweight: "19.54",
    referenceid: "WE325436D45R",
    phone: "8643761543",
  },
  {
    slno: "5",
    status: "Processing",
    date: "15/09/2022",
    name: "bhuvan",
    goods: "necklace",
    netweight: "19.54",
    referenceid: "WE325436D45R",
    phone: "8643761543",
  },
  {
    slno: "6",
    status: "Completed",
    date: "15/09/2022",
    name: "bhuvan",
    goods: "necklace",
    netweight: "19.54",
    referenceid: "WE325436D45R",
    phone: "8643761543",
  },
  {
    slno: "7",
    status: "Processing",
    date: "15/09/2022",
    name: "bhuvan",
    goods: "necklace",
    netweight: "19.54",
    referenceid: "WE325436D45R",
    phone: "8643761543",
  },
];

export default function RepairStatsTable() {
  const dispatch = useDispatch();
  return (
    <div className="bg-white py-5  rounded-[5px] mt-5">
      <div className="flex flex-col px-4">
        <button
          onClick={() => dispatch(openFilterForm())}
          className="border border-liveprice self-end mb-5 mt-5 rounded-md h-[37px] w-[83px] py-3 flex justify-center items-center font-normal text-xs text-liveprice"
        >
          Filter <BiFilterAlt size={18} className="ml-2" />
        </button>
        <div className="flex items-center border rounded-md">
          <div className="border-0 h-[38px] flex justify-center items-center pl-2 text-position">
            <IoSearchOutline size={22} className=" " />
          </div>
          <input
            type="search"
            className="h-[38px] pl-2 border-0 w-full outline-none"
            placeholder="Search here ...."
          />
        </div>

        <div className="flex justify-between items-center mt-3">
          <div className="mb-5 mr-2">
            <label
              htmlFor="from-date"
              className="text-xs font-medium text-rep  mb-1"
            >
              From Date:
            </label>
            <input
              type="date"
              id="from-date"
              //   {...register(
              //     'From_Date',{required:true}
              //   )}
              className="rounded pl-3 border  text-xs font-normal text-position h-[38px] w-full"
            />
          </div>

          <div className="mb-5 mr-2">
            <label
              htmlFor="to-date"
              className="text-xs font-medium text-rep  mb-1"
            >
              To Date:
            </label>
            <input
              type="date"
              id="to-date"
              //   {...register(
              //     'To_Date',{required:true}
              //   )}
              className="rounded pl-3 border  text-xs font-normal text-position h-[38px] w-full"
            />
          </div>
        </div>

        <div className="flex self-end gap-2">
          <button>
            <img src="/pdf.svg" className=" h-[30px] w-[30px]" />
          </button>
          <button>
            <img src="/xls.svg" className=" h-[30px] w-[30px]" />
          </button>
        </div>
      </div>

      <div>
        <ParticularsTable columns={columns} data={data} />
      </div>
    </div>
  );
}
