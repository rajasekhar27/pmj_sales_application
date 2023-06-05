import React from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { setRepCurrentTab } from "../../store/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";

export default function RepProfile({ salesProfile }) {
  const dispatch = useDispatch();
  const currentTab = useSelector(
    (state) => state.profile.repProfile.currentTab
  );
  return (
    <div className="h-44 bg-white mt-3 rounded-b-md relative drop-shadow-md">
      <div className="   ">
        <div className="relative">
          <img
            src="/profilebg.svg"
            className="h-28 w-full rounded-t-md object-cover"
          />
          <div className="self-end flex justify-between w-full absolute bottom-0">
            <div className=" flex justify-center items-center mb-5 mx-5 ">
              <div className="h-[50px] w-[50px] bg-indigo-300 flex justify-center items-center border-2 border-white rounded-md">
                {salesProfile?.user_profile?.image ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_BASE_URL}${salesProfile?.user_profile?.image}`}
                    className="h-[50px] w-[50px] object-cover rounded-md"
                  />
                ) : (
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    className="h-[50px] w-[50px] object-cover  rounded-md "
                  />
                )}
              </div>

              <div className="ml-2">
                <h1 className="text-normal  text-sm text-white tracking-wider">
                  {salesProfile?.user_profile?.name}
                </h1>

                <h1 className="text-normal text-xs text-white tracking-wider">
                  Sales Representative
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white  flex justify-center">
        <div className="flex flex-col w-full  overflow-auto ml-3 py-3">
          <button
            onClick={() => dispatch(setRepCurrentTab(1))}
            className={`${
              currentTab === 1
                ? "bg-liveprice text-white"
                : "text-black bg-white"
            } px-4  py-2 text-base font-medium rounded-lg mr-1 self-center `}
          >
            About
          </button>
          {/* <button
            onClick={() => dispatch(setRepCurrentTab(2))}
            className={`${
              currentTab === 2
                ? "bg-liveprice text-white"
                : "text-black bg-white"
            } px-4  py-2 text-base font-medium rounded-lg mr-1`}
          >
            Customer
          </button>
          <button
            onClick={() => dispatch(setRepCurrentTab(3))}
            className={`${
              currentTab === 3
                ? "bg-liveprice text-white"
                : "text-black bg-white"
            } px-4  py-2 text-base font-medium rounded-lg mr-1`}
          >
            Incentives
          </button>
          <button
            onClick={() => dispatch(setRepCurrentTab(4))}
            className={`${
              currentTab === 4
                ? "bg-liveprice text-white"
                : "text-black bg-white"
            } px-4  py-2 text-base font-medium rounded-lg mr-1`}
          >
            SWB
          </button>

          <button
            onClick={() => dispatch(setRepCurrentTab(5))}
            className={`${
              currentTab === 5
                ? "bg-liveprice text-white"
                : "text-black bg-white"
            } px-4  py-2 text-base font-medium rounded-lg mr-3`}
          >
            Settings
          </button> */}
        </div>
      </div>
      {/* <div className="absolute top-0 right-0">
        <img src="/crosslines.svg" />
      </div> */}
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
