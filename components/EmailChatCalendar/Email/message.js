import React from "react";
import { AiOutlineFolder, AiOutlineMail, AiOutlineStar } from "react-icons/ai";
import { BsTag } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCalenderSideBar,
  closeEmailSideBar,
  openEmailSideBar,
} from "../../../store/slices/popupSlice";
import AllMessages from "./all-messages";
import EmailSideBar from "./email-sidebar";

export default function Message() {
  const dispatch = useDispatch();
  const emailSidebarStatus = useSelector((state) => state.popup.emailSidebar);
  const calenderOuterClick = () => {
    dispatch(closeCalenderSideBar());
    dispatch(closeEmailSideBar());
  };

  return (
    <div className="bg-white   rounded-[5px] mt-5 w-full">
      <div className="relative ">
        {emailSidebarStatus && (
          <EmailSideBar modalOuterClick={calenderOuterClick} />
        )}
      </div>
      <div className="py-5">
        <div className="flex items-center px-4">
          <button
            onClick={() => dispatch(openEmailSideBar())}
            className="text-rep h-5 w-5 mr-2"
          >
            <GiHamburgerMenu />
          </button>
          <div className="flex items-center">
            <label
              htmlFor="search"
              className="text-rep h-5 w-5 flex justify-center items-center mr-1"
            >
              <IoSearchOutline />
            </label>
            <input
              id="search"
              type="search"
              className="border-0 outline-none text-sm font-normal text-position"
              placeholder="Search email"
            />
          </div>
        </div>
        <div className="h-[46px] flex flex-row justify-center items-center border border-r-0 border-l-0 mt-5 w-full">
          <div className=" flex justify-between w-full  items-center px-4">
            <div className="flex items-center">
              <input
                id="select-all"
                type="checkbox"
                className="h-[18px] w-[18px] mr-2 accent-liveprice"
              />
              <label
                htmlFor="select-all"
                className="text-name font-semibold text-sm "
              >
                Select All
              </label>
            </div>

            <div className=" flex w-1/2 justify-between ">
              <button>
                <AiOutlineFolder className="h-[18px] w-[18px]  text-rep" />
              </button>
              <button>
                <BsTag className="h-[18px] w-[18px]  text-rep" />
              </button>
              <button>
                <AiOutlineMail className="h-[18px] w-[18px]  text-rep" />
              </button>
              <button>
                <FiTrash className="h-[18px] w-[18px]  text-rep" />
              </button>
            </div>
          </div>
        </div>

        <AllMessages />
      </div>
    </div>
  );
}
