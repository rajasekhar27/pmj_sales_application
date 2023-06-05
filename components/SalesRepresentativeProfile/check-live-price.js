import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openLivePrice } from "../../store/slices/popupSlice";
export default function CheckLivePrice() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(openLivePrice())}
      className="flex justify-between w-full items-center mt-4 font-Montserrat "
    >
      <FaArrowLeft className="h-5 w-6 text-liveprice" />
      <div className="flex bg-white py-2 px-2 rounded-[5px]">
        <div className=" flex flex-col justify-center items-center bg-live h-[22px] w-[22px] rounded-full mr-2">
          <img src="/liveprice.svg" className="text-white h-2 w-4 " />
        </div>
        <h1 className="text-liveprice font-semibold text-sm tracking-wide mt-1">
          CHECK LIVE PRICE
        </h1>
      </div>
    </button>
  );
}
