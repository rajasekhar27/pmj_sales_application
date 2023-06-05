import React from "react";

export default function SpecialInstruction() {
  return (
    <div className="py-5">
      <div className="flex justify-between px-10 py-5">
        <img
          src="/profile.svg"
          className="h-16 w-16 object-cover rounded-md bg-indigo-300"
        />
        <div>
          <div>Premtej jakka</div>
          <img src="/images/userlogin2.svg" />
        </div>
      </div>
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">
          Product Summery
        </div>
        <div className="text-[#333333] text-sm font-medium">
          I need this ring to be unique & Stylish{" "}
        </div>
      </div>
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">
          Special Instructions{" "}
        </div>
        <div className="text-[#333333] text-sm font-medium">
          I need this ring to be unique & Stylish
        </div>
      </div>
    </div>
  );
}
