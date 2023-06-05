import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCube, BiUser } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { ImCogs } from "react-icons/im";
import { MdPendingActions } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addNewRepairFormOpen } from "../../store/slices/popupSlice";
import { useRouter } from "next/router";

export default function RepairStatsCard() {
  const dispatch = useDispatch();

  const router = useRouter();

  return (
    <div className="bg-white py-5 px-4 rounded-[5px] ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FaArrowLeft
            onClick={() => router.back()}
            className="h-5 w-6 text-liveprice mr-2"
          />
          <h1 className="text-liveprice font-semibold text-lg tracking-wide ">
            Repair Stats
          </h1>
        </div>
        <h1
          onClick={() => dispatch(addNewRepairFormOpen())}
          className="mr-1 font-semibold text-sm text-liveprice flex items-center"
        >
          <AiOutlinePlus /> Add Repair Form
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-2 mt-5">
        <div className="flex flex-col items-center">
          <div className="averageSelling h-12 w-12 flex flex-col justify-center items-center rounded-full">
            <ImCogs className="h-6 w-6 text-liveprice rotate-90" />
          </div>
          <h1 className="text-rep font-semibold text-base mt-1">430</h1>
          <h1 className="text-name font-normal text-xs mt-1">Processing</h1>
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
            <CgNotes className="h-6 w-6 text-live " />
          </div>
          <h1 className="text-rep font-semibold text-base mt-1">434</h1>
          <h1 className="text-name font-normal text-xs mt-1">Total Orders</h1>
        </div>
      </div>
    </div>
  );
}
