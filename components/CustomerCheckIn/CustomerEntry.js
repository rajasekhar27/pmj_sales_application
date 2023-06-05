import React from "react";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiFillGold, AiFillTool, AiOutlineTool } from "react-icons/ai";
import {
  openCustomerEnteyPopup,
  closeCustomerEnteyPopup,
} from "../../store/slices/customerCheckin";
import { useDispatch, useSelector } from "react-redux";
import { setRepCurrentTab } from "../../store/slices/profileSlice";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
export default function CustomerEntry() {
  const entry = [
    {
      id: 1,
      name: "CUSTOMER ENTRY",
      icon: <FaRegUserCircle size={25} color="white" />,
    },
    //   {
    //     id: 2,
    //     name: "SELECT JEWELLERY",
    //     icon: <img src="/images/selectJewel.svg" />,
    //   },
    //   {
    //     id: 3,
    //     name: "CATALOGUE",
    //     icon: <HiOutlineClipboardDocumentList color="white" size={25} />,
    //   },
    //   {
    //     id: 4,
    //     name: "INCENTIVES",
    //     icon: <img src="/images/incentive.svg" />,
    //   },
    //   {
    //     id: 5,
    //     name: "SWB",
    //     icon: <img src="/images/SWB.svg" />,
    //   },
    //   {
    //     id: 6,
    //     name: "CUSTOMER OLD GOLD",
    //     icon: <AiFillGold color="white" size={25} />,
    //   },
    // ];
    // const order = [
    //   {
    //     id: 1,
    //     name: "ORDER FORM",
    //     icon: <img src="/images/orderform.svg" />,
    //   },
    //   {
    //     id: 2,
    //     name: "REPAIR",
    //     icon: <AiOutlineTool color="white" size={25} />,
    //   },
    //   {
    //     id: 3,
    //     name: "BRAND COMMS.",
    //     icon: <img src="/images/brandcomm.svg" />,
    //   },
  ];
  const dispatch = useDispatch();
  const router = useRouter();
  const salesRepStatus = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );
  const handleEntryClick = (name) => {
    if (name == "CUSTOMER ENTRY" && salesRepStatus) {
      dispatch(openCustomerEnteyPopup());
      return;
    }
    if (name == "INCENTIVES" && salesRepStatus) {
      router.push("/sales-profile");
      dispatch(setRepCurrentTab(3));
      return;
    }

    toast.error("SalesRep Login Required");
  };
  return (
    <div className="mt-28">
      {/* <LivePrice /> */}
      <div className="px-5">
        <div className="grid grid-cols-1">
          {entry?.map((e, index) => (
            <div
              key={index}
              className={` bg-white p-2  rounded-xl h-[140px] w-[full]`}
              style={{
                boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                onClick={() => handleEntryClick(e.name)}
                className={`rounded-md h-full w-full flex flex-col justify-center items-center bg-bg40`}
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div>{e.icon}</div>
                <div
                  className={`   font-semibold text-sm mt-2  text-white w-[87px] text-center`}
                >
                  <h1 className="text-center">{e.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div
          className="grid grid-cols-2 justify-items-center gap-3 mt-3 py-2 rounded-lg  "
          style={{
            boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {order?.map((e) => (
            <div className={` bg-white p-2  rounded-xl h-[114px] w-[144px]`}>
              <div
                className={`${
                  e.id !== order.length ? "bg-bg40" : "border-2 border-bg40 "
                }  rounded-md h-full w-full flex flex-col justify-center items-center `}
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div>{e.icon}</div>
                <div
                  className={`${
                    e.id == order.length ? "text-bg40" : "text-white"
                  }  text-center font-semibold text-sm mt-2 px-3`}
                >
                  {e.name}
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
