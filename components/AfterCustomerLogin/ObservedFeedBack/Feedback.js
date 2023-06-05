import React from "react";
import { useEffect } from "react";
import { AiFillLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BsChatLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useFeedbackLikeRequestMutation,
  useGetAllFeedbacksQuery,
  useTagLikeRequestMutation,
} from "../../../store/apis/restApi";
export default function Feedback() {
  const accessToken = useSelector(
    (state) => state.auth.SalesRepresentative.accessToken
  );
  const salesRepSlug = useSelector(
    (state) => state.auth.SalesRepresentative?.user?.user_detail?.slug
  );
  const customerSlug = useSelector(
    (state) => state.auth.Customer?.user?.user_detail?.slug
  );
  const { data: feedbacks } = useGetAllFeedbacksQuery(
    { customer_slug: customerSlug },
    { skip: accessToken ? false : true }
  );

  const [addLike] = useFeedbackLikeRequestMutation();

  const onHandleLike = (likeData) => {
    const backendFormat = {
      feedback_slug: likeData.slug,
    };

    addLike(backendFormat).then((res) => {
      if (res.data) {
      } else {
        const errorMessage = JSON.stringify(res?.error?.data?.message[0]);
        toast.error(errorMessage);
      }
    });
  };
  return (
    <>
      {feedbacks?.results?.map((feedback, index) => (
        <div
          key={index}
          className="bg-white p-3 mt-5 rounded-lg w-10/12 shrink-0 flex flex-col justify-between"
        >
          <div
            className="text-[#28C76F] font-semibold  w-20 text-center rounded-full"
            style={{ backgroundColor: "rgba(40, 199, 111, 0.12)" }}
          >
            {feedback?.tag}
          </div>
          <div className="text-[#5E5873] text-sm font-medium text-start py-5">
            {feedback?.description}
          </div>
          <div className="flex justify-between ">
            <div className="flex space-x-5">
              <div className="flex items-center space-x-1">
                {feedback?.is_like ? (
                  <button onClick={() => onHandleLike(feedback)}>
                    <AiFillLike size={14} className=" text-liveprice" />
                  </button>
                ) : (
                  <button onClick={() => onHandleLike(feedback)}>
                    <BiLike size={14} className="text-[#6E6B7B]" />
                  </button>
                )}

                <div className="text-[#6E6B7B]">{feedback.likes_count}</div>
              </div>
            </div>

            <div className="flex ">
              {feedback?.liked_users.map((each, idx) => (
                <>
                  {idx <= 2 && (
                    <img
                      key={idx}
                      src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_BASE_URL}${each}`}
                      className={`h-7 w-7 object-cover relative z-20 rounded-full ${
                        idx !== 0 && `right-${parseInt(idx) * 2}`
                      }`}
                    />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
