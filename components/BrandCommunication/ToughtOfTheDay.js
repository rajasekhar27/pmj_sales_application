import { useRouter } from "next/router";
import React from "react";
import { BiArrowBack, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";

export default function ToughtOfTheDay() {
  const router = useRouter();

  return (
    <div className="px-5 mt-28">
      <div className="bg-white px-3 py-3 rounded-md">
        <div className="flex items-center space-x-2 py-5">
          <BiArrowBack
            onClick={() => router.back()}
            size={25}
            className="text-bg40"
          />
          <div className="text-base text-bg40 font-semibold">
            Thought of the day
          </div>
        </div>

        <div className="border-2 border-bg40 rounded-2xl ">
          <div className="p-2">
            <div className="text-base text-bg40 font-semibold">
              Today Thought of the Day :
            </div>
            <div className="text-sm text-bg40 font-medium mt-4 text-center px-3">
              Lorem ipsum dolor sit amet consectetur. Risus praesent turpis
              vitae in nisi pro in felis. Tincidunt.
            </div>
          </div>
          <div className="text-base text-white bg-bg40 font-semibold rounded-md py-2 mt-2 rounded-t-none text-center ">
            THANKS AND HAVE A NICE DAY.
          </div>
        </div>
      </div>

      <div className="bg-white mt-5 py-3 px-2 rounded-md">
        <div className="flex justify-between items-center mt-7">
          <div className="text-base font-semibold text-bg40 flex space-x-2 items-center">
            <BiChevronLeft size={24} />
            <div>JANUARY, 2022</div> <BiChevronRight size={24} />
          </div>
          <div className="flex items-center space-x-1 bg-bg40 px-3 py-2 rounded-lg">
            <div>
              <FiCalendar size={24} className="text-white" />
            </div>
            <div className="text-base font-semibold text-white">Filter</div>
          </div>
        </div>
        {/* bg-[url('/images/pinkflowers.svg')] */}
        <div className="grid grid-cols-2 gap-4 gap-y-10 mt-8">
          <div
            className=" bg-white  bg-[url('/images/pinkflowers.svg')]  h-[155px] rounded-lg"
            style={{
              boxShadow:
                " 0px 12px 12px rgba(50, 50, 71, 0.08), 0px 16px 24px rgba(50, 50, 71, 0.08)",
            }}
          >
            <div className="flex justify-center relative ">
              <div className="py-1 w-[121px] px-5 bg-bg40 absolute -top-3 rounded-full text-white font-semibold">
                1st, SUN
              </div>
            </div>

            <div className="font-medium text-sm p-2 pt-6 ">
              Lorem ipsum dolor sit amet consectetur. Risus praesent turpis
              vitae in nisi proin felis. Tincidunt.
            </div>
          </div>

          <div
            className="bg-[url('/images/trees.svg')]  h-[155px] rounded-lg"
            style={{
              boxShadow:
                " 0px 12px 12px rgba(50, 50, 71, 0.08), 0px 16px 24px rgba(50, 50, 71, 0.08)",
            }}
          >
            <div className="flex justify-center relative ">
              <div className="py-1 w-[121px] px-5 bg-bg40 absolute -top-3 rounded-full text-white font-semibold">
                2st, MON
              </div>
            </div>

            <div className="font-medium text-sm p-2 pt-6 ">
              Lorem ipsum dolor sit amet consectetur. Risus praesent turpis
              vitae in nisi proin felis. Tincidunt.
            </div>
          </div>

          <div
            className="bg-[url('/images/pinkflowers.svg')]  h-[155px] rounded-lg"
            style={{
              boxShadow:
                " 0px 12px 12px rgba(50, 50, 71, 0.08), 0px 16px 24px rgba(50, 50, 71, 0.08)",
            }}
          >
            <div className="flex justify-center relative ">
              <div className="py-1 w-[121px] px-5 bg-bg40 absolute -top-3 rounded-full text-white font-semibold">
                1st, SUN
              </div>
            </div>

            <div className="font-medium text-sm p-2 pt-6 ">
              Lorem ipsum dolor sit amet consectetur. Risus praesent turpis
              vitae in nisi proin felis. Tincidunt.
            </div>
          </div>

          <div
            className="bg-[url('/images/trees.svg')]  h-[155px] rounded-lg"
            style={{
              boxShadow:
                " 0px 12px 12px rgba(50, 50, 71, 0.08), 0px 16px 24px rgba(50, 50, 71, 0.08)",
            }}
          >
            <div className="flex justify-center relative ">
              <div className="py-1 w-[121px] px-5 bg-bg40 absolute -top-3 rounded-full text-white font-semibold">
                2st, MON
              </div>
            </div>

            <div className="font-medium text-sm p-2 pt-6 ">
              Lorem ipsum dolor sit amet consectetur. Risus praesent turpis
              vitae in nisi proin felis. Tincidunt.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
