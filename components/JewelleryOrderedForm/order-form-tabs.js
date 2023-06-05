import React from "react";
import { ImUserTie } from "react-icons/im";
import { BsArchive } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setJewleryOrderTab } from "../../store/slices/profileSlice";
import CustomerDetails from "./customer-details";
import ProductSummary from "./product-summary";
import ProductDetails from "./product-details";

export default function OrderedFormTabs() {
  const dispatch = useDispatch();
  const currentTab = useSelector(
    (state) => state.profile.jewleryOrder.currentTab
  );

  return (
    <div className="bg-white mt-16 rounded-md px-5 py-5">
      <div className="flex justify-between items-center">
        <button
          onClick={() => dispatch(setJewleryOrderTab(1))}
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
          onClick={() => dispatch(setJewleryOrderTab(2))}
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
            Product
            <br />
            Summary
          </h1>
        </button>

        <button
          onClick={() => dispatch(setJewleryOrderTab(3))}
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

      <hr className="mt-5" />

      {currentTab === 1 && <CustomerDetails />}
      {currentTab === 2 && <ProductSummary />}
      {currentTab === 3 && <ProductDetails />}
    </div>
  );
}
