import React from "react";
import { BiCube, BiUser } from "react-icons/bi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { FiDollarSign } from "react-icons/fi";

export default function RepresentativeStats() {
  return (
    <div className="bg-white rounded-md font-Montserrat mt-5 px-2 py-5">
      <div className="flex justify-between items-center ">
        <h1 className="text-rep font-medium text-sm">Representative Stats</h1>
        <h1 className="text-name font-normal text-xs">Updated 1 month ago</h1>
      </div>

      <div className="flex justify-around mt-5">
        <div className="flex flex-col items-center">
          <div className="notconvertedBg h-12 w-12 flex flex-col justify-center items-center rounded-full">
            <BiCube className="h-6 w-6 text-notification" />
          </div>
          <h1 className="text-rep font-semibold text-base mt-1">1.423k</h1>
          <h1 className="text-name font-normal text-xs mt-1">Not Converted</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="convertedBg h-12 w-12 flex flex-col justify-center items-center rounded-full">
            <BiUser className="h-6 w-6 text-converted" />
          </div>
          <h1 className="text-rep font-semibold text-base mt-1">8.549k</h1>
          <h1 className="text-name font-normal text-xs mt-1">Converted</h1>
        </div>
      </div>
      <div className="flex justify-around mt-3">
        <div className="flex flex-col items-center">
          <div className="customerBg h-12 w-12 flex flex-col justify-center items-center rounded-full">
            <HiArrowTrendingUp className="h-6 w-6 text-customer" />
          </div>
          <h1 className="text-rep font-semibold text-base mt-1">230k</h1>
          <h1 className="text-name font-normal text-xs mt-1">Customer</h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="revenueBg h-12 w-12 flex flex-col justify-center items-center rounded-full">
            <FiDollarSign className="h-6 w-6 text-revenue" />
          </div>
          <h1 className="text-rep font-semibold text-base mt-1">$9745</h1>
          <h1 className="text-name font-normal text-xs mt-1">Revenue</h1>
        </div>
      </div>
    </div>
  );
}
