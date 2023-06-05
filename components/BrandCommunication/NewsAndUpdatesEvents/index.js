import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiArrowBack, BiChevronRight } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";

export default function News() {
  const [brandActive, setBrandActive] = useState("ALL");

  const router = useRouter();

  return (
    <div className=" mt-28 px-5 ">
      <div className="bg-white py-5 rounded-md">
        <div className="flex items-center ml-3 space-x-2 my-5">
          <BiArrowBack
            onClick={() => router.back()}
            size={25}
            className="text-bg40 "
          />
          <div className="text-base text-bg40 font-semibold">
            News Updated And Events
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex items-center justify-end  space-x-1 bg-bg40 px-3 py-2 rounded-lg">
            <div>
              <FiCalendar size={24} className="text-white" />
            </div>

            <div className="text-base font-semibold text-white">Filter</div>
          </div>
        </div>

        <div className="flex justify-around mt-5">
          <div
            onClick={() => setBrandActive("ALL")}
            className={`${
              brandActive == "ALL" ? "bg-bg40 text-white" : "text-color5E"
            } text-sm  text-white px-3 py-2 rounded-md font-semibold`}
            style={{
              boxShadow: `${
                brandActive == "ALL"
                  ? "0px 4px 12px -4px rgba(140, 16, 77, 0.4)"
                  : ""
              }`,
            }}
          >
            ALL
          </div>

          <div
            onClick={() => setBrandActive("NEWS")}
            className={`${
              brandActive == "NEWS" ? "bg-bg40 text-white" : "text-color5E"
            } text-sm  text-white px-3 py-2 rounded-md font-semibold`}
            style={{
              boxShadow: `${
                brandActive == "NEWS"
                  ? "0px 4px 12px -4px rgba(140, 16, 77, 0.4)"
                  : ""
              }`,
            }}
          >
            NEWS
          </div>

          <div
            onClick={() => setBrandActive("EVENTS")}
            className={`${
              brandActive == "EVENTS" ? "bg-bg40 text-white" : "text-color5E"
            } text-sm  text-white px-3 py-2 rounded-md font-semibold`}
            style={{
              boxShadow: `${
                brandActive == "EVENTS"
                  ? "0px 4px 12px -4px rgba(140, 16, 77, 0.4)"
                  : ""
              }`,
            }}
          >
            EVENTS
          </div>
        </div>

        {brandActive == "ALL" && (
          <>
            <div
              className="bg-white mx-4 p-3 rounded-xl mt-5"
              style={{ boxShadow: " 0px 4px 24px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="flex justify-center">
                <img src="/images/goldcoin.svg" />
              </div>
              <div className="flex justify-between py-3">
                <div className="text-white bg-bg40 px-3 font-semibold  rounded-lg">
                  NEWS
                </div>
                <div className="text-[#959595] font-medium">22/10/2022</div>
              </div>
              <div className="text-base text-bg40 font-semibold">
                Gold rate today: Yellow metal trades flat ahead of inflation
                data; silver holds Rs 61,000
              </div>
              <div className="text-sm text-bg40 font-medium mt-2">
                Gold prices traded in a narrow range on Thursday as cautious
                investors stayed on the sidelines.....
              </div>

              <Link href="/news-details">
                <div className="text-sm text-bg40 font-medium mt-2 flex items-center justify-end">
                  <div>View More </div> <BiChevronRight size={20} />
                </div>
              </Link>
            </div>
            <div
              className="bg-white mx-4 p-3 rounded-xl mt-5"
              style={{ boxShadow: " 0px 4px 24px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="flex justify-center">
                <img src="/images/goldcoin.svg" />
              </div>
              <div className="flex justify-between py-3">
                <div className="text-white bg-bg40 px-3 font-semibold  rounded-lg">
                  NEWS
                </div>
                <div className="text-[#959595] font-medium">22/10/2022</div>
              </div>
              <div className="text-base text-bg40 font-semibold">
                Gold rate today: Yellow metal trades flat ahead of inflation
                data; silver holds Rs 61,000
              </div>
              <div className="text-sm text-bg40 font-medium mt-2">
                Gold prices traded in a narrow range on Thursday as cautious
                investors stayed on the sidelines.....
              </div>

              <Link href="/news-details">
                <div className="text-sm text-bg40 font-medium mt-2 flex items-center justify-end">
                  <div>View More </div> <BiChevronRight size={20} />
                </div>
              </Link>
            </div>
          </>
        )}

        {brandActive == "NEWS" && (
          <>
            <div
              className="bg-white mx-4 p-3 rounded-xl mt-5"
              style={{ boxShadow: " 0px 4px 24px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="flex justify-center">
                <img src="/images/goldcoin.svg" />
              </div>
              <div className="flex justify-between py-3">
                <div className="text-white bg-bg40 px-3 font-semibold  rounded-lg">
                  NEWS
                </div>
                <div className="text-[#959595] font-medium">22/10/2022</div>
              </div>
              <div className="text-base text-bg40 font-semibold">
                Gold rate today: Yellow metal trades flat ahead of inflation
                data; silver holds Rs 61,000
              </div>
              <div className="text-sm text-bg40 font-medium mt-2">
                Gold prices traded in a narrow range on Thursday as cautious
                investors stayed on the sidelines.....
              </div>{" "}
              <div className="text-sm text-bg40 font-medium mt-2 flex items-center justify-end">
                <div>View More </div> <BiChevronRight size={20} />
              </div>
            </div>

            <div
              className="bg-white mx-4 p-3 rounded-xl mt-5"
              style={{ boxShadow: " 0px 4px 24px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="flex justify-center">
                <img src="/images/goldcoin.svg" />
              </div>
              <div className="flex justify-between py-3">
                <div className="text-white bg-bg40 px-3 font-semibold  rounded-lg">
                  NEWS
                </div>
                <div className="text-[#959595] font-medium">22/10/2022</div>
              </div>
              <div className="text-base text-bg40 font-semibold">
                Gold rate today: Yellow metal trades flat ahead of inflation
                data; silver holds Rs 61,000
              </div>
              <div className="text-sm text-bg40 font-medium mt-2">
                Gold prices traded in a narrow range on Thursday as cautious
                investors stayed on the sidelines.....
              </div>{" "}
              <div className="text-sm text-bg40 font-medium mt-2 flex items-center justify-end">
                <div>View More </div> <BiChevronRight size={20} />
              </div>
            </div>
          </>
        )}

        {brandActive == "EVENTS" && (
          <>
            <div
              className="bg-white mx-4 p-3 rounded-xl mt-5"
              style={{ boxShadow: " 0px 4px 24px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="flex justify-center">
                <img src="/images/goldcoin.svg" />
              </div>
              <div className="flex justify-between py-3">
                <div className="text-white bg-bg40 px-3 font-semibold  rounded-lg">
                  EVENTS
                </div>
                <div className="text-[#959595] font-medium">22/10/2022</div>
              </div>
              <div className="text-base text-bg40 font-semibold">
                Gold rate today: Yellow metal trades flat ahead of inflation
                data; silver holds Rs 61,000
              </div>
              <div className="text-sm text-bg40 font-medium mt-2">
                Gold prices traded in a narrow range on Thursday as cautious
                investors stayed on the sidelines.....
              </div>{" "}
              <div className="text-sm text-bg40 font-medium mt-2 flex items-center justify-end">
                <div>View More </div> <BiChevronRight size={20} />
              </div>
            </div>
            <div
              className="bg-white mx-4 p-3 rounded-xl mt-5"
              style={{ boxShadow: " 0px 4px 24px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="flex justify-center">
                <img src="/images/goldcoin.svg" />
              </div>
              <div className="flex justify-between py-3">
                <div className="text-white bg-bg40 px-3 font-semibold  rounded-lg">
                  EVENTS
                </div>
                <div className="text-[#959595] font-medium">22/10/2022</div>
              </div>
              <div className="text-base text-bg40 font-semibold">
                Gold rate today: Yellow metal trades flat ahead of inflation
                data; silver holds Rs 61,000
              </div>
              <div className="text-sm text-bg40 font-medium mt-2">
                Gold prices traded in a narrow range on Thursday as cautious
                investors stayed on the sidelines.....
              </div>{" "}
              <div className="text-sm text-bg40 font-medium mt-2 flex items-center justify-end">
                <div>View More </div> <BiChevronRight size={20} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
