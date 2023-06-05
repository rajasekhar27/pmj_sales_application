import React from "react";
import { AiOutlineFolder, AiOutlineMail, AiOutlineStar } from "react-icons/ai";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { closeInboxMessage } from "../../../store/slices/popupSlice";
import { useDispatch, useSelector } from "react-redux";

export default function EmailNavigations() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg-white py-5 px-4 rounded-[5px] mt-5 ">
        <div className="flex items-start">
          <button onClick={() => dispatch(closeInboxMessage())}>
            <MdOutlineArrowBackIos className="mr-2 h-6 w-5 text-name" />
          </button>
          <div className="w-3/4">
            <div className="w-full overflow-hidden text-ellipsis">
              <h1 className="font-medium text-base text-name whitespace-nowrap">
                Decorate For Less With Art...
              </h1>
            </div>
            <div className="mt-3 flex w-full justify-between">
              <button>
                <AiOutlineStar className="h-[18px] w-[18px] mr-1 text-rep" />
              </button>
              <button>
                <AiOutlineFolder className="h-[18px] w-[18px] mr-1 text-rep" />
              </button>
              <button>
                <BsTag className="h-[18px] w-[18px] mr-1 text-rep" />
              </button>
              <button>
                <AiOutlineMail className="h-[18px] w-[18px] mr-1 text-rep" />
              </button>
              <button>
                <FiTrash className="h-[18px] w-[18px]  text-rep" />
              </button>
              <hr className="h-[20px] w-[1px] bg-slate-300 mx-4" />
              <div className="flex">
                <button>
                  <MdOutlineArrowBackIos className="h-[18px] w-[18px] mr-1 text-rep" />
                </button>
                <button>
                  <MdOutlineArrowBackIos className="h-[18px] w-[18px] mr-1 text-rep rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pendingBg w-[88px] h-[26px] rounded-full mt-5 flex justify-center items-center">
        <h1 className="text-liveprice font-semibold text-xs">Company</h1>
      </div>
    </div>
  );
}
