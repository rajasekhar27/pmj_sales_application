import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { useRouter } from "next/router";
export default function CalenderSideBar({ modalOuterClick }) {
  const router = useRouter();

  return (
    <div className="absolute top-0 z-20  bg-[#000000b3] w-full flex">
      <div className="bg-white w-9/12">
        <div className="text-color5E space-y-5 px-5 font-medium  flex flex-col justify-between h-screen">
          <div className="mt-28">
            <div
              onClick={() => router.push("/sales-login")}
              className={` bg-bg40 rounded-md py-2 text-white flex items-center justify-center space-x-2 px-2`}
              // style={{ boxShadow: " 0px 4px 12px -4px rgba(140, 16, 77, 0.4)" }}
            >
              <div className="text-center ">Add New</div>
            </div>

            <div className="text-xs text-[#B9B9C3] px-2 py-4 mt-5">FILTER</div>

            <div
              onClick={() => router.push("/email")}
              className={` flex items-center py-2 space-x-2 px-2`}
            >
              <div>
                <input
                  id="view-all"
                  type="checkbox"
                  className="accent-[#7367F0] flex items-center rounded h-[18px] w-[18px]"
                  checked
                  style={{ boxShadow: "0 2px 4px #7367f066" }}
                />
              </div>

              <div>View All </div>
            </div>

            <div
              onClick={() => router.push("/chat")}
              className={`flex items-center py-2 space-x-2 px-2`}
            >
              <div>
                <input
                  id="view-all"
                  type="checkbox"
                  className="accent-[#EA5455] flex items-center rounded h-[18px] w-[18px]"
                  checked
                  style={{ boxShadow: "0 2px 4px #ea545566" }}
                />
              </div>
              <div>Personal</div>
            </div>

            <div
              onClick={() => router.push("/reminder")}
              className={` flex items-center py-2 space-x-2 px-2`}
            >
              <div>
                <input
                  id="view-all"
                  type="checkbox"
                  className="accent-[#7367F0] h-[18px] w-[18px] flex items-center rounded"
                  checked
                  style={{ boxShadow: "0 2px 4px #7367f066" }}
                />
              </div>
              <div>Business</div>
            </div>

            <div
              onClick={() => router.push("/calender")}
              className={`flex items-center  py-2 space-x-2 px-2`}
            >
              <div>
                <input
                  id="view-all"
                  type="checkbox"
                  className="accent-[#FF9F43] h-[18px] w-[18px] flex items-center rounded"
                  checked
                  style={{ boxShadow: "0 2px 4px #ff9f4366" }}
                />
              </div>
              <div>Family</div>
            </div>

            <div
              onClick={() => router.push("/calender")}
              className={`flex items-center  py-2 space-x-2 px-2`}
            >
              <div>
                <input
                  id="view-all"
                  type="checkbox"
                  className="accent-[#28C76F] h-[18px] w-[18px] flex items-center rounded"
                  checked
                  style={{ boxShadow: "0 2px 4px #28c76f66" }}
                />
              </div>
              <div>Holiday</div>
            </div>
            <div
              onClick={() => router.push("/calender")}
              className={` flex items-center py-2 space-x-2 px-2`}
            >
              <div>
                <input
                  id="view-all"
                  type="checkbox"
                  className="accent-[#00CFE8]  h-[18px] w-[18px] flex items-center rounded"
                  checked
                  style={{ boxShadow: "0 2px 4px #00cfe866" }}
                />
              </div>
              <div>ETC</div>
            </div>
          </div>

          <div className="">
            <img
              src="/images/calenderdownimg.svg"
              className="w-full h-[189px]"
            />
          </div>
        </div>
      </div>

      <button onClick={modalOuterClick} className="w-1/4  "></button>
    </div>
  );
}
