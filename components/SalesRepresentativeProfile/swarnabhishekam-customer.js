import React from "react";
import dynamic from "next/dynamic";
import { CgBox } from "react-icons/cg";
const AreaCharts = dynamic(() => import("./area-chart"), { ssr: false });

export default function SwarnabhishekamCustomer() {
  return (
    <div className="bg-white font-Montserrat w-full">
      <div className="flex flex-col items-center pt-5">
        <div className="revenueBg h-12 w-12 flex flex-col justify-center items-center rounded-full">
          <CgBox className="h-6 w-6 text-revenue" />
        </div>
        <h1 className="text-rep font-semibold text-2xl mt-5 text-center">
          97.5k
        </h1>
        <h1 className="text-name font-normal text-sm mt-1 text-center px-1">
          Swarnabhishekam Customer
        </h1>
      </div>
      <AreaCharts color={"#00CB65"} type={"area"} />
    </div>
  );
}
