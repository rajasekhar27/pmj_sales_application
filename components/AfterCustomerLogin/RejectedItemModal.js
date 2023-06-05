import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRejectSelectJewelMutation } from "../../store/apis/restApi";
import { closeRejectPopup } from "../../store/slices/customerCheckin";

const tabs = [
  {
    id: 1,
    name: "HIGH_PRICE",
  },
  {
    id: 2,
    name: "LESS_WEIGHT",
  },
];

export default function RejectedItemModal() {
  const [reason, setReason] = useState("");

  const customerSlug = useSelector(
    (state) => state.auth.Customer?.user?.user_detail?.slug
  );

  const dispatch = useDispatch();
  const productSlug = useSelector((state) => state.customerIn?.rejectJewel);
  const rejectedImage = useSelector((state) => state.customerIn?.rejectedImage);
  const [rejectJewel] = useRejectSelectJewelMutation();

  const onSubmit = () => {
    const backendFormat = {
      productSlug: productSlug,
      reason: reason,
    };
    rejectJewel(backendFormat).then((res) => {
      if (res.data) {
        toast.success("Product Successfully Rejected");
        dispatch(closeRejectPopup());
      } else {
        toast.error(JSON.stringify(res?.error?.data?.error));
      }
    });
  };

  const onSetReason = (value) => {
    setReason(value);
  };

  return (
    <div className="px-5">
      <div className="h-[600px]">
        <div className="text-28 text-color5E text-center font-medium mt-5">
          Rejected Item
        </div>
        <div className="flex justify-center mt-5">
          <img
            src={rejectedImage}
            className="w-[134px] h-[125px] shadow-md rounded-xl"
          />
        </div>
        <div className="text-center text-color6E mt-5">
          Please select the reason to serve our customers better.
        </div>

        <div className="flex flex-wrap justify-between gap-2 mt-5">
          {tabs?.map((t) => (
            <button
              onClick={() => onSetReason(t.name)}
              key={t.id}
              className={`${
                reason == t.name
                  ? "bg-liveprice text-white"
                  : "text-bg40 border border-bg40"
              } text-sm font-medium rounded-xl px-5 py-1 `}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-center ">
        <button
          onClick={onSubmit}
          className="px-5 h-9 bg-bg40 rounded-md text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
