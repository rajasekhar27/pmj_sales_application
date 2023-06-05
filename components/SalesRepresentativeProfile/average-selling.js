import dynamic from "next/dynamic";
import React from "react";
const LineCharts = dynamic(() => import("./line-chart"), { ssr: false });
export default function AverageSelling() {
  return (
    <div className="bg-white font-Montserrat mr-3 w-full mt-5 rounded-md">
      <div className="flex flex-row justify-between items-center px-3 mt-5 mb-3">
        <div>
          <h1 className="text-rep font-semibold text-2xl ">78.9k</h1>
          <h1 className="text-name font-normal text-sm ">Average Selling</h1>
        </div>
        <div className="averageSelling flex flex-col justify-center items-center  h-[46px] w-[46px] rounded-full ">
          <img src="/livepricecolor.svg" className=" h-6 w-6 " />
        </div>
      </div>
      <LineCharts color={"#7466F0"} type={"line"} />
    </div>
  );
}
