import React, { Fragment, useEffect } from "react";
import { BiArrowBack, BiLike } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { MdOutlineKeyboardVoice } from "react-icons/md";

import { BsChatLeft } from "react-icons/bs";
import Feedback from "./Feedback";
import { Scrollbars } from "react-custom-scrollbars-2";
import { AiFillLike, AiOutlineDislike } from "react-icons/ai";
import AddTagPopup from "./AddTagPopup";
import ReviewPopup from "./ReviewPopup";
import { useDispatch, useSelector } from "react-redux";
import {
  openObservedFeedbackPopup,
  openReviewPopup,
  setFeedbackTag,
  setHashTag,
} from "../../../store/slices/customerCheckin";
import { useRouter } from "next/router";
import {
  useGetAllTagsQuery,
  useTagLikeRequestMutation,
} from "../../../store/apis/restApi";
import { TbGenderAgender } from "react-icons/tb";
import { toast } from "react-toastify";
import TagForm from "./Tag";

export default function ObservedFeedback() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const router = useRouter();

  const onFeedbackSubmit = () => {
    const [feedbackText] = watch(["feedback"]);
    dispatch(setFeedbackTag(feedbackText));
    dispatch(openReviewPopup());
    reset();
  };

  return (
    <div className="mt-28">
      <div className="px-5">
        <div className="flex items-center space-x-2 my-5">
          <BiArrowBack
            onClick={() => router.back()}
            size={25}
            className="text-bg40"
          />
          <div className="text-base text-bg40 font-semibold">
            Observed Feedback
          </div>
        </div>
        <label className="text-base text-bg40 font-semibold ">Voice/Text</label>
        <form onSubmit={handleSubmit(onFeedbackSubmit)}>
          <div className="flex flex-col mt-3 relative ">
            <input
              type="text"
              className="border rounded-md h-9 px-3 mt-3"
              {...register("feedback", {
                required: true,
              })}
              placeholder="Enter text"
            />
            <MdOutlineKeyboardVoice
              className="absolute right-[88px] top-5 text-bg40"
              size={18}
            />
            <button
              type="submit"
              className="w-[84px] absolute right-0 top-[13px] text-base h-[33.5px] bg-bg40 rounded-l-none rounded-lg text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className=" pl-5">
        <Scrollbars autoHeight>
          <div className="flex space-x-5  ">
            <Feedback />
          </div>
        </Scrollbars>
      </div>

      <div className="pl-5 mt-10 px-5">
        <div className="text-base text-bg40 font-semibold">Tags:</div>
        <TagForm />
        <Scrollbars autoHeight>
          <div className="flex space-x-5  ">
            <Tag />
          </div>
        </Scrollbars>
      </div>

      {/* <div className="px-5 flex justify-center mt-5">
        <button className="bg-bg40 text-white rounded-md px-4 py-1">
          Submit
        </button>
      </div> */}
      {/* <AddTagPopup /> */}
      {/* <ReviewPopup /> */}
    </div>
  );
}

const Tag = () => {
  const accessToken = useSelector(
    (state) => state.auth.SalesRepresentative.accessToken
  );
  const salesRepSlug = useSelector(
    (state) => state.auth.SalesRepresentative?.user?.user_detail?.slug
  );
  const customerSlug = useSelector(
    (state) => state.auth.Customer?.user?.user_detail?.slug
  );

  const { data: TagsData } = useGetAllTagsQuery(
    { customer_slug: customerSlug },
    { skip: accessToken ? false : true }
  );

  const [addTagLike] = useTagLikeRequestMutation();

  const onHandleLike = (likeData) => {
    const backendFormat = {
      tag_slug: likeData.slug,
      user_slug: salesRepSlug,
    };
    addTagLike(backendFormat).then((res) => {
      if (res.data) {
      } else {
        const errorMessage = JSON.stringify(res?.error?.data?.message[0]);
        toast.error(errorMessage);
      }
    });
  };
  return (
    <>
      {TagsData?.results?.map((tag, index) => (
        <div
          key={index}
          className="bg-white p-3 mt-5 rounded-lg w-10/12 shrink-0 flex flex-col justify-between"
        >
          <div className="flex justify-between">
            <div className="text-[#6E6B7B] text-sm">
              Total {tag?.likes_count} users
            </div>
            <div className="flex ">
              {tag?.liked_users.map((each, idx) => (
                <Fragment key={index}>
                  {idx <= 2 && (
                    <img
                      key={idx}
                      src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_BASE_URL}${each}`}
                      className={`h-7 w-7 object-cover relative z-20 rounded-full ${
                        idx !== 0 && `right-${parseInt(idx) * 2}`
                      }`}
                    />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="text-[#5E5873] text-sm font-semibold text-start py-5">
            # {tag?.title}
          </div>
          <div className="flex justify-between  ">
            {/* <div className="text-xs text-bg40 font-semibold">
              {tag?.user_city?.city?.city}
            </div> */}

            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                {tag?.is_like ? (
                  <button onClick={() => onHandleLike(tag)}>
                    <AiFillLike size={14} className=" text-liveprice" />
                  </button>
                ) : (
                  <button onClick={() => onHandleLike(tag)}>
                    <BiLike size={14} className="text-[#6E6B7B]" />
                  </button>
                )}
                <div className="text-[#6E6B7B]">{tag.likes_count}</div>
              </div>
              {/* <div className="flex items-center space-x-1">
                <AiOutlineDislike size={14} className="text-[#6E6B7B]" />
                <div className="text-[#6E6B7B]">3</div>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
