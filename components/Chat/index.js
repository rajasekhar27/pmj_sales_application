import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import {
  openSideBarPopup,
  closeSideBarPopup,
} from "../../store/slices/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { SlOptionsVertical } from "react-icons/sl";
export default function index() {
  const dispatch = useDispatch();

  return (
    <div className="mx-5 mt-10 ">
      <div className="font-Montserrat flex justify-around items-center bg-white  rounded-sm self-center  w-full h-[62px] px-5 ">
        <div className="flex">
          <GiHamburgerMenu
            size={20}
            className="mr-2 text-[#5E5873]"
            onClick={() => dispatch(openSideBarPopup())}
          />
          {/* <FiSearch size={20} className="text-[#5E5873]" /> */}
        </div>
        <div className="relative ">
          <img
            src="/profile.svg"
            className="h-38 w-38 object-cover rounded-full bg-indigo-300"
          />
          <div className="absolute -right-1 bottom-0 bg-online h-3 w-3 rounded-full border border-white" />
        </div>
        <div className="flex items-center">
          <div className="relative mr-5 text-color5E font-medium">
            Carrie Hawkins
          </div>
        </div>
        <div>
          <SlOptionsVertical className="text-[#6E6B7B]" />
        </div>
      </div>
    </div>
  );
}
