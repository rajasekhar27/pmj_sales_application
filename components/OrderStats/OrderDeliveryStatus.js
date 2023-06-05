import React from "react";
import { BsArchive } from "react-icons/bs";
import { ImUserTie } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { setJewelOrderStatus } from "../../store/slices/profileSlice";
import CustomerDetails from "./customerDetails";
import ProductDetails from "./ProductDetails";
import SpecialInstruction from "./specialInstruction";

export default function OrderDeliveryStatus() {
  const dispatch = useDispatch();
  const currentTab = useSelector(
    (state) => state.profile.customerDetails.currentTab
  );

  const data = [
    {
      id: 1,
      count: 1,
      title: "Customer Ordered the Product ",
      date: "08/10/2022",
      status: true,
    },
    {
      id: 2,
      count: 2,
      title: "Got Confirmed and Preparing the Product ",
      date: "08/10/2022",
      status: true,
    },
    {
      id: 3,
      count: 3,
      title: "Initiated Delivery Executive to PMJ Store ",
      date: "08/10/2022",
      status: true,
    },
    {
      id: 4,
      count: 4,
      title: "Customer Collected the Ordered Product",
      date: "08/10/2022",
      status: true,
    },
  ];

  return (
    <div className=" bg-white py-5 rounded-md">
      <div className="border-b-bg40 mx-3 border-t-0 border-l-0 border-r-0 border pb-5">
        {data?.map((a, i) => (
          <div className="flex justify-center items-start" key={i}>
            <div className="w-1/5 flex flex-col justify-center items-center">
              <div
                className={`h-8 w-8 bg-bg40 ${
                  data[i].status ? "bg-bg40" : "bg-[#D9CCD2]"
                } rounded-full text-white flex items-center justify-center`}
              >
                {a.count}
              </div>

              {data.length !== data[i].count && (
                <div
                  className={`w-[3px] h-16 bg-bg40 ${
                    data[i].status ? "bg-bg40" : "bg-[#D9CCD2]"
                  }`}
                ></div>
              )}
            </div>

            <div className="w-4/5">
              <div className="text-bg40 font-medium">{a.title}</div>
              <div className="font-medium">{a.date}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mx-2 mt-5">
        <button
          onClick={() => dispatch(setJewelOrderStatus(1))}
          className="flex flex-col justify-center items-center"
        >
          <h1
            className={`${
              currentTab === 1 ? "bg-liveprice text-white" : "bg-order text-rep"
            } h-[38px] w-[38px]  flex justify-center items-center rounded-md mb-3`}
          >
            <ImUserTie size={20} className="" />
          </h1>
          <h1
            className={`${
              currentTab === 1 ? "text-liveprice " : " text-rep"
            } font-semibold text-sm text-left`}
          >
            Customer
            <br />
            Details
          </h1>
        </button>

        <button
          onClick={() => dispatch(setJewelOrderStatus(2))}
          className="flex flex-col justify-center items-center"
        >
          <h1
            className={`${
              currentTab === 2 ? "bg-liveprice text-white" : "bg-order text-rep"
            } h-[38px] w-[38px]  flex justify-center items-center rounded-md mb-3`}
          >
            <BsArchive size={20} className="" />
          </h1>
          <h1
            className={`${
              currentTab === 2 ? "text-liveprice " : " text-rep"
            } font-semibold text-sm text-left`}
          >
            Special
            <br />
            Instruction
          </h1>
        </button>

        <button
          onClick={() => dispatch(setJewelOrderStatus(3))}
          className="flex flex-col justify-center items-center"
        >
          <h1
            className={`${
              currentTab === 3 ? "bg-liveprice text-white" : "bg-order text-rep"
            } h-[38px] w-[38px]  flex justify-center items-center rounded-md mb-3`}
          >
            <BsArchive size={20} className="" />
          </h1>
          <h1
            className={`${
              currentTab === 3 ? "text-liveprice " : " text-rep"
            } font-semibold text-sm text-left`}
          >
            Product
            <br />
            Details
          </h1>
        </button>
      </div>

      {currentTab === 1 && <CustomerDetails />}
      {currentTab === 2 && <SpecialInstruction />}
      {currentTab === 3 && <ProductDetails />}
    </div>
  );
}
