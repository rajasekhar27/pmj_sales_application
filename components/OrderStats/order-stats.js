import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { ImCogs } from "react-icons/im";
import { MdPendingActions } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addorderformstatus } from "../../store/slices/popupSlice";
import JewelleryOrderedForm from "../JewelleryOrderedForm";

export default function OrderStatsCard() {
  const [orderform, setorderform] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();
  return (
    <>
      {orderform ? (
        <JewelleryOrderedForm />
      ) : (
        <div className="bg-white py-5 px-4 rounded-[5px] mt-20">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaArrowLeft
                onClick={() => router.back()}
                className="h-5 w-6 text-liveprice "
              />
              <h1 className="text-liveprice font-semibold text-lg tracking-wide ">
                Order Stats
              </h1>
            </div>
            <h1
              onClick={() => dispatch(addorderformstatus())}
              className="mr-1 font-semibold text-xs text-liveprice flex items-center"
            >
              <AiOutlinePlus /> Add ordered Form
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="flex flex-col items-center">
              <div className="averageSelling h-12 w-12 flex flex-col justify-center items-center rounded-full">
                <CgNotes className="h-6 w-6 text-liveprice" />
              </div>
              <h1 className="text-rep font-semibold text-base mt-1">434</h1>
              <h1 className="text-name font-normal text-xs mt-1">
                Total Orders
              </h1>
            </div>

            <div className="flex flex-col items-center">
              <div className="revenueBg h-12 w-12 flex flex-col justify-center items-center rounded-full">
                <FiCheckCircle className="h-6 w-6 text-online" />
              </div>
              <h1 className="text-rep font-semibold text-base mt-1">430</h1>
              <h1 className="text-name font-normal text-xs mt-1">Completed</h1>
            </div>

            <div className="flex flex-col items-center">
              <div className="pendingBg h-12 w-12 flex flex-col justify-center items-center rounded-full">
                <MdPendingActions className="h-6 w-6 text-pending" />
              </div>
              <h1 className="text-rep font-semibold text-base mt-1">03</h1>
              <h1 className="text-name font-normal text-xs mt-1">Pending</h1>
            </div>

            <div className="flex flex-col items-center">
              <div className="processingBg h-12 w-12 flex flex-col justify-center items-center rounded-full">
                <ImCogs className="h-6 w-6 text-live rotate-90" />
              </div>
              <h1 className="text-rep font-semibold text-base mt-1">430</h1>
              <h1 className="text-name font-normal text-xs mt-1">Processing</h1>
            </div>

            <div className="flex flex-col items-center">
              <div className="revenueBg h-12 w-12 flex flex-col justify-center items-center rounded-full">
                <RxCross1 className="h-6 w-6 text-notification" />
              </div>
              <h1 className="text-rep font-semibold text-base mt-1">430</h1>
              <h1 className="text-name font-normal text-xs mt-1">Cancelled</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
