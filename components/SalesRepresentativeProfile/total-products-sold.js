import dynamic from "next/dynamic";
import React from "react";
import { FiUsers } from "react-icons/fi";

const AreaCharts = dynamic(() => import("./area-chart"), { ssr: false });

export default function TotlalProductsSold() {
  return (
    <div className="bg-white font-Montserrat mr-3 w-full">
      <div className="flex flex-col items-center pt-5">
        <div className="customerBg h-12 w-12 flex flex-col justify-center items-center rounded-full">
          <FiUsers className="h-6 w-6 text-customer" />
        </div>
        <h1 className="text-rep font-semibold text-2xl mt-5 text-center">
          92.6k
        </h1>
        <h1 className="text-name font-normal text-sm mt-1 text-center px-1">
          Total Products Sold
        </h1>
      </div>
      <AreaCharts color={"#7466F0"} type={"area"} />
    </div>
  );
}
