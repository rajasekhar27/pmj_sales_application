import React from "react";
import { AiOutlineMail, AiOutlineStar } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbBrandTelegram } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

import {
  closeEmailSideBar,
  openComposeForm,
} from "../../../store/slices/popupSlice";
import Modal2 from "../../Modal/modal2";

export default function EmailSideBar({ modalOuterClick }) {
  const dispatch = useDispatch();
  const emailSidebarStatus = useSelector((state) => state.popup.emailSidebar);
  return (
    <div className="absolute top-0 z-20  bg-[#000000b3] w-full h-screen flex ">
      <div className="bg-white w-9/12 email">
        <div className="px-5 mt-5">
          <button
            onClick={() => dispatch(openComposeForm())}
            className=" w-full mb-5  rounded-md h-[38px]  flex justify-center bg-liveprice items-center font-semibold text-md text-white"
          >
            Compose
          </button>
        </div>

        <div>
          <button className="mb-0  text-liveprice border-4 py-3 border-l-liveprice border-r-0 border-b-0 border-t-0 flex justify-between items-center w-full">
            <div className="flex items-center pl-5">
              <AiOutlineMail className="mr-2 h-5 w-5" />
              <h1 className="font-semibold text-sm ">Inbox</h1>
            </div>
            <div className="mr-5 averageSelling p-1 text-liveprice h-[20px] w-[20px] font-semibold text-xs flex justify-center items-center rounded-full">
              8
            </div>
          </button>

          <button className="mb-0  text-liveprice border-4 py-3 border-l-liveprice border-r-0 border-b-0 border-t-0 flex justify-between items-center w-full">
            <div className="flex items-center pl-5">
              <TbBrandTelegram className="mr-2 h-5 w-5" />
              <h1 className="font-semibold text-sm ">Sent</h1>
            </div>
            <div className="mr-5 pendingBg p-1 text-liveprice h-[20px] w-[20px] font-semibold text-xs flex justify-center items-center rounded-full">
              8
            </div>
          </button>

          <button className="mb-0 text-liveprice border-4 py-3 border-l-liveprice border-r-0 border-b-0 border-t-0 flex justify-between items-center w-full">
            <div className="flex items-center pl-5">
              <FiEdit2 className="mr-2 h-5 w-5" />
              <h1 className="font-semibold text-sm ">Draft</h1>
            </div>
            <div className="mr-5 notconvertedBg p-1 text-notification h-[20px] w-[20px] font-semibold text-xs flex justify-center items-center rounded-full">
              2
            </div>
          </button>

          <button className="mb-0  text-liveprice border-4 py-3 border-l-liveprice border-r-0 border-b-0 border-t-0 flex justify-between items-center w-full">
            <div className="flex items-center pl-5">
              <AiOutlineStar className="mr-2 h-5 w-5" />
              <h1 className="font-semibold text-sm ">Starred</h1>
            </div>
            <div className="mr-5 pendingBg p-1 text-liveprice h-[20px] w-[20px] font-semibold text-xs flex justify-center items-center rounded-full">
              8
            </div>
          </button>
          <button className="mb-0  text-liveprice border-4 py-3 border-l-liveprice border-r-0 border-b-0 border-t-0 flex justify-between items-center w-full">
            <div className="flex items-center pl-5">
              <RiErrorWarningLine className="mr-2 h-5 w-5" />
              <h1 className="font-semibold text-sm ">Span</h1>
            </div>
            <div className="mr-5 processingBg p-1 text-live h-[20px] w-[20px] font-semibold text-xs flex justify-center items-center rounded-full">
              3
            </div>
          </button>
          <button className="mb-5  text-liveprice border-4 py-3 border-l-liveprice border-r-0 border-b-0 border-t-0 flex justify-between items-center w-full">
            <div className="flex items-center pl-5">
              <BiTrash className="mr-2 h-5 w-5" />
              <h1 className="font-semibold text-sm ">Trash</h1>
            </div>
            <div className="mr-5 pendingBg p-1 text-liveprice h-[20px] w-[20px] font-semibold text-xs flex justify-center items-center rounded-full">
              8
            </div>
          </button>
        </div>

        <div className=" mt-10 px-5 ">
          <h1 className="text-position font-medium text-xs mb-5">LABELS</h1>
          <div className="flex items-center mb-2">
            <div className="h-[10px] w-[10px] bg-online rounded-full mr-3"></div>
            <h1 className="text-rep font-medium text-sm">Personal</h1>
          </div>
          <div className="flex items-center mb-2">
            <div className="h-[10px] w-[10px] bg-customer rounded-full mr-3"></div>
            <h1 className="text-rep font-medium text-sm">Company</h1>
          </div>
          <div className="flex items-center mb-2">
            <div className="h-[10px] w-[10px] bg-live rounded-full mr-3"></div>
            <h1 className="text-rep font-medium text-sm">Important</h1>
          </div>
          <div className="flex items-center mb-2">
            <div className="h-[10px] w-[10px] bg-notification rounded-full mr-3"></div>
            <h1 className="text-rep font-medium text-sm">Private</h1>
          </div>
        </div>
      </div>
      <button onClick={modalOuterClick} className="w-1/4  "></button>
    </div>
  );
}
