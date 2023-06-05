import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function ReferenceIdModal() {
  return (
    <div className="px-5 ">
      <div className="h-[600px]">
        <div className="text-color5E text-2xl text-center font-medium">
          Reference ID
        </div>
        <div className="text-color6E text-center text-sm mt-3">
          Please use this this referral code In the Billing Counter
        </div>
        <div className="mt-10 flex justify-between font-medium">
          <div
            className="bg-bgD9 rounded-lg  text-2xl text-color5E w-8 h-8 text-center"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            1
          </div>
          <div
            className="bg-bgD9 rounded-lg  text-2xl text-color5E w-8 h-8 text-center"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            R
          </div>
          <div
            className="bg-bgD9 rounded-lg  text-2xl text-color5E w-8 h-8 text-center"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            G
          </div>
          <div
            className="bg-bgD9 rounded-lg  text-2xl text-color5E w-8 h-8 text-center"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            5
          </div>
          <div
            className="bg-bgD9 rounded-lg  text-2xl text-color5E w-8 h-8 text-center"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            D
          </div>
          <div
            className="bg-bgD9 rounded-lg  text-2xl text-color5E w-8 h-8 text-center"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            0
          </div>
        </div>
      </div>

      <div className="mt-3 flex justify-around ">
        <div
          onClick={() => setCustomer(false)}
          className="px-10 h-9 bg-bg40 rounded-md text-white flex items-center space-x-2"
        >
          <BsWhatsapp size={20} />
          <div>Share</div>
        </div>
      </div>
    </div>
  );
}
