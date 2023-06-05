import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { closeMagaDiscountPopup } from "../../store/slices/customerCheckin";
export default function SecretCode() {
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    setOtp(e);
  };
  const dispatch = useDispatch();

  const handleCancle = () => {
    // setCustomer(true);
    dispatch(closeMagaDiscountPopup());
  };
  return (
    <div className="px-5 py-5">
      <div className="h-[600px] w-full">
        <div className="text-color5E text-2xl text-center font-medium">
          Secret Code
        </div>
        <div className="text-color6E text-center text-sm mt-3">
          10% Mega Manager Discount Permission
        </div>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          inputStyle={{
            color: "#400120",
            height: "55px",
            width: "55px",
            backgroundColor: "#D9D9D9",
            boxShadow: " inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "25px",
          }}
          className="flex justify-between mt-10"
          separator={<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
        />
      </div>

      <div className="mt-3 flex justify-around ">
        <button
          // onClick={() => setCustomer(false)}
          className="px-5 h-9 bg-bg40 rounded-md text-white"
        >
          Submit
        </button>

        <button
          onClick={handleCancle}
          className="px-5 h-9 border rounded-md text-color5E border-[#82868B]"
        >
          Cancle
        </button>
      </div>
    </div>
  );
}
