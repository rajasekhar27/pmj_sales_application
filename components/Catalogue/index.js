import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export default function Catalogue() {
  const entry = [
    {
      id: 1,
      name: "LIVE JEWELLERY",
      icon: <img src="/images/user.svg" />,
    },
    {
      id: 2,
      name: "NON-LIVE JEWELLERY",
      icon: <img src="/images/selectJewel.svg" />,
    },
    {
      id: 3,
      name: "Best Selling Products",
      icon: <img src="/images/observerFeedback.svg" />,
    },
    {
      id: 4,
      name: "INCENTIVES ",
      icon: <img src="/images/incentive.svg" />,
    },
    {
      id: 5,
      name: "CATALOGUE ",
      icon: <HiOutlineClipboardDocumentList color="white" size={25} />,
    },
    {
      id: 6,
      name: "SWB ",
      icon: <img src="/images/SWB.svg" />,
    },
  ];
  return (
    <div className="px-5 mt-28">
      <div className="flex items-center space-x-2">
        <BiArrowBack
          //   onClick={handleArrowClick}
          size={25}
          className="text-bg40"
        />
        <div className="text-base text-bg40 font-semibold">Catalogue</div>
      </div>

      <div
        className={` bg-white p-2  rounded-xl h-[114px] w-[144px]`}
        style={{
          boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          //   onClick={() => handleEntryClick(e.name)}
          className={`rounded-md h-full w-full flex flex-col justify-center items-center bg-bg40`}
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img src="/images/selectJewel.svg" />
          <div
            className={`  text-center font-semibold text-sm mt-2 px-3 text-white`}
          >
            LIVE JEWELLERY
          </div>
        </div>
      </div>
    </div>
  );
}
