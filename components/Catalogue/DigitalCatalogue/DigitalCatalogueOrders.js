import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function DigitalCatalogueOrders() {
  return (
    <div className="pb-5 pt-5 ">
      {/* <div className="text-16 py-2 text-bg40 font-semibold text-center border-b border-bg40">
        Order
      </div> */}
      <div className="">
        <div className="flex  ">
          <div className="text-16 text-[#6E6B7B] font-semibold">Delivery</div>
          <div class="relative ml-1">
            <div class="absolute ">
              <MdLocationOn className="text-[#6E6B7B]" />
            </div>
            <input
              type="text"
              className="w-[100px] bg-transparent border-b border-black"
            />
          </div>

          <div className="text-16 text-[#6E6B7B] font-semibold">QTY</div>

          <input
            type="text"
            className="w-[67px] bg-transparent border-b border-black"
          />
        </div>

        <div className="text-[#6E6B7B] text-12 mt-2">
          Enter pincode for exact Delivery dates/charges.
        </div>

        <div className="text-[#333333] font-normal text-sm mt-2">
          + ₹40 Delivery Sunday, 25 - 27 September
        </div>

        <div className="flex mt-3">
          <div>
            <MdLocationOn size={31} />
          </div>
          <div className="w-10/12 text-sm ">
            Workafella, 1st Floor, Western Pearl, Hitec City, Kondapur,
            Hyderabad - 50008 .
          </div>
        </div>

        <div className="text-bg40 border-b border-bg40 w-16 text-16 mt-3 font-semibold">
          Change
        </div>

        {/* <div className="my-5">
          <div className="flex justify-between">
            <button className="px-5 w-full bg-bg40 text-white rounded-lg py-2">
              Order
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
