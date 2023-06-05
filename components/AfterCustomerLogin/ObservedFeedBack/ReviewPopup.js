import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useAddNewFeedbackMutation,
  useGetTagEnumsQuery,
} from "../../../store/apis/restApi";
import {
  closeObservedFeedbackPopup,
  closeReviewPopup,
  setFeedbackTagEmpty,
} from "../../../store/slices/customerCheckin";

const Enums = [
  {
    id: 1,
    tag: "DESIGN",
  },
  {
    id: 2,
    tag: "PRICE",
  },
];

export default function ReviewPopup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const feedbackText = useSelector((state) => state.customerIn.feedbackTag);

  // const salesRepSlug = useSelector(
  //   (state) => state.auth.SalesRepresentative?.user?.user_detail?.slug
  // );

  // const customerSlug = useSelector(
  //   (state) => state.auth.Customer?.user?.user_detail?.slug
  // );

  const [tag, setTag] = useState("");

  // const accessToken = useSelector(
  //   (state) => state.auth.SalesRepresentative?.accessToken
  // );

  const reviewText = useSelector((state) => state.customerIn.feedbackTitle);

  const [addNewFeedback] = useAddNewFeedbackMutation();

  const SubmitNewTag = () => {
    const backendFormat = {
      tag: tag,
      description: reviewText,
    };

    addNewFeedback(backendFormat).then((res) => {
      if (res.data) {
        toast.success(JSON.stringify(res?.data?.msg));
        dispatch(setFeedbackTagEmpty(""));
        dispatch(closeReviewPopup());
      } else {
        toast.error(JSON.stringify(res.error?.data));
      }
    });
  };

  const setTagFunction = (tagInfo) => {
    setTag(tagInfo.tag);
  };

  const handleCancel = () => {
    dispatch(setFeedbackTagEmpty());
    dispatch(closeReviewPopup());
  };
  return (
    <div className="px-5 py-5">
      <div className="text-2xl font-medium text-color5E text-center mb-5">
        Review
      </div>

      <div className="text-bg40 font-medium">Entered Feedback</div>
      <div
        className="border p-2 text-xs rounded-md mt-1 w-full bg-white"
        style={{ minHeight: "100px" }}
      >
        {reviewText}
      </div>
      <div className="text-bg40 font-medium mt-5">Select Tag</div>
      <div className="text-[#28C76F]  text-xs font-semibold grid grid-cols-3 gap-3 mt-5 text-center ">
        {Enums.map((each, index) => (
          <button
            key={index}
            onClick={() => setTagFunction(each)}
            className={`w-20 flex justify-center items-center border border-black px-2 py-1 rounded-full ${
              tag === each.tag
                ? "bg-bg40 text-white"
                : "bg-customerProfileBg text-bg40 "
            }`}
          >
            <div> {each.tag} </div>
            <div
              className={` ${
                tag === each.tag ? " text-white" : "text-[#333333]"
              }`}
            ></div>
          </button>
        ))}
      </div>

      <div className="mt-10 flex justify-between ">
        <button
          onClick={SubmitNewTag}
          className="px-5 h-9 bg-bg40 rounded-lg text-white"
        >
          Confirm
        </button>
        <button
          onClick={handleCancel}
          className="px-5 h-9 border rounded-lg text-color5E border-[#82868B]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
