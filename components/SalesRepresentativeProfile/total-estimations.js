import dynamic from "next/dynamic";
import React from "react";
import { BiUserCheck } from "react-icons/bi";
const LineCharts = dynamic(() => import("./line-chart"), { ssr: false });
export default function TotalEstimations() {
  return (
    <div className="bg-white font-Montserrat mr-3 w-full mt-5 rounded-md">
      <div className="flex flex-row justify-between items-center px-3 mt-5 mb-3">
        <div>
          <h1 className="text-rep font-semibold text-2xl ">92.6k</h1>
          <h1 className="text-name font-normal text-sm ">Total Estimations</h1>
        </div>
        <div className="revenueBg flex flex-col justify-center items-center  h-[46px] w-[46px] rounded-full ">
          <BiUserCheck className=" h-6 w-6 text-revenue" />
        </div>
      </div>
      <LineCharts color={"#00CB65"} type={"line"} />
    </div>
  );
}
