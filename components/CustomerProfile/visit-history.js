import React from "react";
import { useSelector } from "react-redux";
import {
  useGetCustomerVisitStoreQuery,
  useLazyGetCustomerVisitStoreQuery,
} from "../../store/apis/restApi";
import moment from "moment";
import { RiDeleteBinLine } from "react-icons/ri";
import InfiniteScrollComponent from "../UI/InfiniteScrollComponent";
import { useViewportSize } from "@mantine/hooks";
export default function VistitHistory() {
  const customerAccess = useSelector(
    (state) => state.auth.Customer?.accessToken
  );
  const { height: windowHeight } = useViewportSize();

  return (
    <div className="">
      <InfiniteScrollComponent
        lazyHook={useLazyGetCustomerVisitStoreQuery}
        height={windowHeight - 62 - 176 - 100}
        parentClasses={"pt-3"}
        customLoader={
          <p style={{ textAlign: "center" }}>
            <b>loading....</b>
          </p>
        }
      >
        <VistitHistoryComponent />
      </InfiniteScrollComponent>
    </div>
  );
}

const VistitHistoryComponent = ({ data }) => {
  return (
    <div className="mb-3 px-4">
      <div className="text-lg mt-2 font-normal ">
        Visit :{" "}
        <span className="font-semibold">
          {moment(data?.check_in).format("D/MM/YY")}
        </span>{" "}
      </div>
      <div className="flex flex-col">
        <div className="h-[115px] bg-white mt-1 border-bg40 border rounded-md">
          <div className="p-2 border-b-bg40 border">
            <div className="text-base font-normal">
              Store{" "}
              <span className="font-extrabold text-base">
                {data?.store?.title}
              </span>
            </div>

            <div className="text-base font-normal">
              Store Code{" "}
              <span className="font-extrabold text-base">
                {data?.store?.code}
              </span>
            </div>
          </div>

          <div className="p-2 flex justify-between mt-2">
            <div className="flex   self-center  items-center  w-[48%] ">
              <div className="flex   justify-between items-center mr-2">
                <div className=" text-left text-xs font-normal">Check in </div>
              </div>

              <div className="font-semibold text-xs">
                {moment(data?.check_in).format("hh:mm a")}
              </div>
            </div>
            <div className="flex flex-col w-[51%]  ">
              <div className="flex self-end   items-center  ">
                <div className="flex items-center  justify-between mr-2">
                  <div className=" text-left text-xs font-normal">
                    Check Out{" "}
                  </div>
                </div>

                <div className="font-semibold text-xs">
                  {" "}
                  {data?.check_out !== null
                    ? moment(data?.check_out).format("hh:mm a")
                    : "- - : - -"}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-end mt-[22px]">
          <div className="flex w-full h-10 items-center justify-center rounded-md rounded-l-none space-x-1 rounded-r-none px-1 bg-bg40 py-1 font-medium  ">
            <RiDeleteBinLine className="text-bg40" />
            <button className="text-white">Converted</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};
