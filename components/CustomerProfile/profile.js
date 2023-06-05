import React from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar, AiOutlineEdit } from "react-icons/ai";
import { setCustomerCurrentTab } from "../../store/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { openEditProfileImage } from "../../store/slices/popupSlice";
import { useGetCustomerDetailsQuery } from "../../store/apis/restApi";

export default function Profile({ details }) {
  const dispatch = useDispatch();
  const currentTab = useSelector(
    (state) => state.profile.customerProfile.currentTab
  );
  const customerAccess = useSelector(
    (state) => state.auth.Customer?.accessToken
  );

  return (
    <div className="h-44 bg-white mt-3 rounded-b-md relative mx-4 drop-shadow-md">
      <div className="">
        <div className="relative">
          <img
            src="/profilebg.svg"
            className="h-28 w-full rounded-t-md object-cover"
          />
          <div className="self-end flex justify-between w-full absolute bottom-0">
            <div className=" flex justify-center items-center mb-5 mx-5 ">
              <div className="h-[50px] w-[50px]  flex justify-center items-center border-2 border-white rounded-md relative">
                {details?.user_profile?.image ? (
                  <>
                    <img
                      src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_BASE_URL}${details?.user_profile?.image}`}
                      className="h-[50px] w-[50px] object-cover rounded-md"
                    />
                  </>
                ) : (
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    className="h-[50px] w-[50px] object-cover rounded-md  "
                  />
                )}

                <button
                  onClick={() => dispatch(openEditProfileImage())}
                  className=" absolute -bottom-0 -right-2 border border-white rounded-[3px] text-white "
                >
                  <AiOutlineEdit
                    size={12}
                    className="bg-[#FFFF00] opacity-50  rounded-[3px] text-bg40"
                  />
                </button>
              </div>
              <div className="ml-3">
                <h1 className="text-normal  text-sm text-white tracking-wider">
                  {details?.user_profile?.name}
                </h1>
                <h1 className="text-normal  text-xs text-white tracking-wider">
                  Customer
                </h1>
              </div>
            </div>

            {/* <div className="flex  items-center  mx-5 -mb-5">
              <img src="/collection1.svg" className="h-[17px] w-[17px] mr-1" />
              <img src="/collection2.svg" className="h-[17px] w-[17px] mr-1" />
              <img src="/collection3.svg" className="h-[17px] w-[17px] " />
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-white  flex justify-center">
        <div className="flex w-full justify-evenly overflow-auto ml-3 py-3">
          <button
            onClick={() => dispatch(setCustomerCurrentTab(1))}
            className={`${
              currentTab === 1
                ? "bg-liveprice text-white"
                : "text-black bg-white"
            } px-4  py-2 text-base font-medium rounded-lg mr-1 `}
          >
            About
          </button>
          <button
            onClick={() => dispatch(setCustomerCurrentTab(2))}
            className={`${
              currentTab === 2
                ? "bg-liveprice text-white"
                : "text-black bg-white"
            } px-4  py-2 text-base font-medium rounded-lg mr-1`}
          >
            Visit History
          </button>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <img src="/crosslines.svg" />
      </div>
      {/* <div className=" absolute top-2 right-6">
        <Rating
          fractions={2}
          initialRating={0}
          readonly={true}
          emptySymbol={<AiFillStar size={20} fill="#babfc7" stroke="#babfc7" />}
          fullSymbol={
            <AiOutlineStar size={20} fill={"#FF9F44"} stroke={"#FF9F44"} />
          }
        />
      </div> */}
    </div>
  );
}
