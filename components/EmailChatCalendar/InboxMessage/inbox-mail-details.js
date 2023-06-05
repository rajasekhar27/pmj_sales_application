import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdAttach } from "react-icons/io";

export default function InboxMailDetails() {
  return (
    <div className="bg-white py-5  rounded-[5px] mt-5 ">
      <div className="flex items-start px-4 mb-5">
        <img
          src="/email-profile.svg"
          className="h-[46px] w-[46px] rounded-full object-cover  bg-emailProfile mr-3"
        />
        <div className="flex flex-col">
          <h1 className="font-medium text-base text-rep">Bernice Underwoo</h1>
          <div className="flex flex-col mt-1">
            <h1 className="font-normal text-sm text-position">
              bernice@gmail.com
            </h1>
            <div className="flex ">
              <h1 className="font-normal text-xs text-position mr-2">
                9 Aug 2020, 16:41
              </h1>
              <BsThreeDotsVertical className="h-[18px] w-[18px] text-name" />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="mt-5 px-4 mb-5">
        <h1 className="font-normal text-sm text-name mb-2">Hey John,</h1>
        <div className="font-normal text-sm text-name ">
          Adwords Keyword research for beginners When you embark on your first
          PPC journey, you need to keep a small number of keywords at first.
          Keyword lists that are thousands of words long should be left to the
          more experienced PPC marketer. Ideally, a beginner should use around
          100 targeted keywords. 😎
          <br />
          <div className="mt-5">
            By doing this, you will export this data into an excel spreadsheet.
            The data, which only appears as green bars on the main Google page,
            will be transformed into numeric data that has much more value for
            you.
          </div>
          <br />
          <div className="mt-0">
            What is your attitude as a small town businessman when it comes to
            advertising or taking help of an advertising design…
          </div>
        </div>
      </div>

      <hr />

      <div className="mt-5 px-4 mb-5">
        <div className="flex items-center">
          <IoMdAttach className="h-[16px] w-[16px] mr-2" />
          <h1 className="font-semibold text-name text-sm">
            <span className="mr-1">2</span>Attachments
          </h1>
        </div>
        <div className="flex items-center mt-3">
          <img src="/diamond.svg" className="h-[16px] w-[16px] mr-2 " />
          <h1 className="font-semibold text-position text-xs">
            uikit-design.sketch
          </h1>
        </div>
        <div className="flex items-center mt-3">
          <img src="/banner.svg" className="h-[16px] w-[16px] mr-2 " />
          <h1 className="font-semibold text-position text-xs">banner.ps</h1>
        </div>
      </div>
      <div className=" px-4 mb-5">
        <h1 className="text-font-medium text-[15px] text-rep tracking-wider">
          Click here to <span className="text-customer">Reply</span> or{" "}
          <span className="text-customer">Forward</span>
        </h1>
      </div>
    </div>
  );
}
