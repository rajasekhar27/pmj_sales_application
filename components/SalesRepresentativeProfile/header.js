import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className="flex flex-col fixed top-0 right-0 left-2 z-20 w-full pr-6 pl-2 ">
      <div className="relative ">
        <nav className="font-Montserrat flex justify-between items-center bg-white rounded-md self-center  mt-[20px] w-full h-62  px-5 py-2 cart">
          <div className="flex">
            <GiHamburgerMenu size={20} className="mr-5" />
            <FiSearch size={20} />
          </div>
          <div className="flex items-center">
            <div className="relative mr-5">
              <IoNotificationsOutline size={20} />
              <div className=" absolute -top-2 -right-2 bg-notification h-18 w-18 rounded-full font-semibold text-xs  flex flex-col justify-center items-center text-white">
                0
              </div>
            </div>

            <div className="mr-5">
              <h1 className="text-normal  text-sm text-name text-right">
                John Doe
              </h1>
              <h1 className="text-normal  text-xs text-position text-right">
                Admin
              </h1>
            </div>

            <div className="relative ">
              <img
                src="/profile.svg"
                className="h-38 w-38 object-cover rounded-full bg-indigo-300"
              />
              <div className="absolute -right-1 bottom-0 bg-online h-3 w-3 rounded-full border border-white" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
