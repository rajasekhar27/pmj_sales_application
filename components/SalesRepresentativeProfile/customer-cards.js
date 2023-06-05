import React from "react";
import { useGetAllCustomerDetailsQuery } from "../../store/apis/restApi";
export default function CustomerCards() {
  const { data: allCustomer } = useGetAllCustomerDetailsQuery();
  return (
    <div className="grid overflow-y-scroll grid-cols-2 mt-5 gap-5 pb-5">
      {allCustomer?.results?.map((a, index) => (
        <div className="  pb-5 bg-white shadow-md" key={index}>
          <div className="h-[42px] w-full bg-slate-200 relative rounded-t-md">
            <img
              src="/event-image.svg"
              className="h-full w-full object-cover rounded-t-md"
            />
            <div className=" absolute -bottom-4 left-5 bg-customerProfileBg border-2 border-white  rounded-full h-[38px] w-[38px] flex justify-center items-center ">
              {a?.image ? (
                <img
                  src={`${a?.image}`}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <img
                  src="/customer-profile.svg"
                  className=" rounded-full h-full w-full object-cover"
                />
              )}
            </div>
            <h1 className="absolute right-2 top-2 customerBg text-customer px-2 rounded-[3px] font-semibold text-[8px]">
              DIAMOND
            </h1>
          </div>
          <div className="flex  flex-col px-2">
            <div className="self-center mt-5 h-7">
              <h1 className="text-medium  text-sm text-rep tracking-wider text-center overtext">
                {a?.name}
              </h1>
              <h1 className="text-medium  text-xs text-position tracking-wider text-center overtext">
                {a?.city}
              </h1>
            </div>
            <hr className="mt-4 mb-3" />
            <div className="flex justify-between items-center ">
              <div className="flex flex-col ">
                <h1 className="text-semibold  text-[8px] text-position tracking-wider text-center">
                  Visits
                </h1>
                <h1 className="text-medium  text-[8px] text-rep tracking-wider text-center mt-3">
                  {a?.visits}
                </h1>
              </div>
              <div className="flex flex-col ">
                <h1 className="text-semibold  text-[8px] text-position tracking-wider text-center">
                  {a?.converted}
                </h1>
                <h1 className="text-medium  text-[8px] text-rep tracking-wider text-center mt-3">
                  156
                </h1>
              </div>
              <div className="flex flex-col ">
                <h1 className="text-semibold  text-[8px] text-position tracking-wider text-center">
                  Revenue
                </h1>
                <h1 className="text-medium  text-[8px] text-rep tracking-wider text-center mt-3">
                  2{a?.revenue}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
