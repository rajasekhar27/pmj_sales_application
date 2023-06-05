import React from "react";

export default function CustomerDetails() {
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
          Ordered Recd by{" "}
        </div>
        <div className="text-[#333333] text-sm font-medium">Premtej akka </div>
      </div>
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Mobile Number </div>
        <div className="text-[#333333] text-sm font-medium">9123456984 </div>
      </div>{" "}
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Approved by </div>
        <div className="text-[#333333] text-sm font-medium">Nimish Jain </div>
      </div>{" "}
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Email </div>
        <div className="text-[#333333] text-sm font-medium">
          Example@gmail.com{" "}
        </div>
      </div>{" "}
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Receipt No </div>
        <div className="text-[#333333] text-sm font-medium">1233455 </div>
      </div>{" "}
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Advance paid </div>
        <div className="text-[#333333] text-sm font-medium">1233455 </div>
      </div>{" "}
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Scheme No </div>
        <div className="text-[#333333] text-sm font-medium">1233455</div>
      </div>{" "}
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Gross Wt </div>
        <div className="text-[#333333] text-sm font-medium">123 </div>
      </div>
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Gold Price </div>
        <div className="text-[#333333] text-sm font-medium">123 </div>
      </div>
    </div>
  );
}
