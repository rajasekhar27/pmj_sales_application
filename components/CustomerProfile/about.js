import React from "react";
import { BsGenderAmbiguous, BsBriefcaseFill } from "react-icons/bs";
import { GiDiamondRing } from "react-icons/gi";
import { HiCake } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { openEditProfile } from "../../store/slices/popupSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeCustomerTokens } from "../../store/slices/auth";
import { useRouter } from "next/router";
import {
  useGetCustomerDetailsQuery,
  useHandleLogoutMutation,
} from "../../store/apis/restApi";
import { toast } from "react-toastify";
import moment from "moment/moment";
export default function About({ details }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const customerAccess = useSelector(
    (state) => state.auth.Customer?.accessToken
  );
  const checkinSlug = useSelector(
    (state) => state.auth.Customer?.user?.checkin_slug
  );

  const [handleLogout] = useHandleLogoutMutation();

  const handleLogOut = () => {
    const backendFormat = {
      slug: checkinSlug,
    };

    handleLogout(backendFormat).then((res) => {
      if (res.data) {
        dispatch(removeCustomerTokens());
        router.push("/customer-login");
        toast.success("Customer Logout Successfull");
      } else {
        toast.error(res?.error?.data?.message);
      }
    });
  };
  return (
    <div className="mx-4">
      <div className="bg-white mt-5 p-5 border border-liveprice rounded-md ">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between items-start">
            <div className="flex justify-center items-center mb-5">
              <BsGenderAmbiguous className="h-[32px] w-[24px] mr-3" />
              <div className="flex flex-col">
                <h1 className="font-normal text-sm text-rep">Gender</h1>
                <h1 className="font-semibold text-sm text-rep">
                  {" "}
                  {details?.user_profile?.gender}
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <BsBriefcaseFill className="h-[32px] w-[24px] mr-3" />
              <div className="flex flex-col">
                <h1 className="font-normal text-sm text-rep">Profession</h1>
                <h1 className="font-semibold text-sm text-rep">
                  {details?.user_profile?.profession}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start ">
            <div className="flex justify-center items-center mb-5">
              <HiCake className="h-[32px] w-[24px] mr-3" />
              <div className="flex flex-col">
                <h1 className="font-normal text-sm text-rep">Dob</h1>
                <h1 className="font-semibold text-sm text-rep">
                  {details?.user_profile?.date_of_birth?.length === 0 ||
                  details?.user_profile?.date_of_birth === null
                    ? ""
                    : moment(
                        new Date(details?.user_profile?.date_of_birth)
                      ).format("DD/MM/YYYY")}
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <GiDiamondRing className="h-[32px] w-[24px] mr-3" />
              <div className="flex flex-col">
                <h1 className="font-normal text-sm text-rep">Marital Status</h1>
                <h1 className="font-semibold text-sm text-rep">
                  {details?.user_profile?.Marital_status
                    ? "Married"
                    : "un-Married"}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-5 p-5 border border-liveprice rounded-md flex flex-col relative">
        <h1 className="text-liveprice font-semibold text-base text-center ">
          General
        </h1>
        <button
          onClick={() => dispatch(openEditProfile())}
          className="absolute top-5 right-5 text-rep"
        >
          <FiEdit size={24} />{" "}
        </button>
        <div className="mt-5">
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name mr-2">Name</h1>
            <h1 className="font-medium text-sm text-mail">
              {" "}
              {details?.user_profile?.name}
            </h1>
          </div>
          <hr className="mt-4" />
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name mr-2">
              Mobile Number
            </h1>
            <h1 className="font-medium text-sm text-mail">
              {" "}
              {details?.phone_number}
            </h1>
          </div>
          <hr className="mt-4" />
        </div>
        {/* <div className="mt-5">
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name">Dob</h1>
            <h1 className="font-medium text-sm text-mail">
              {moment(new Date(details?.user_profile?.date_of_birth)).format(
                "DD/MM/YYYY"
              )}
            </h1>
          </div>
          <hr className="mt-4" />
        </div> */}
        <div className="mt-5">
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name mr-2">Country</h1>
            <h1 className="font-medium text-sm text-mail">
              {" "}
              {details?.address?.country}
            </h1>
          </div>
          <hr className="mt-4" />
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name mr-2">State</h1>
            <h1 className="font-medium text-sm text-mail">
              {" "}
              {details?.address?.state}
            </h1>
          </div>
          <hr className="mt-4" />
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name mr-2">City</h1>
            <h1 className="font-medium text-sm text-mail">
              {" "}
              {details?.address?.city}
            </h1>
          </div>
          <hr className="mt-4" />
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name mr-2">Address</h1>
            <h1 className="font-medium text-sm text-mail text-right">
              {details?.address?.Address}
            </h1>
          </div>
          <hr className="mt-4" />
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name mr-2">Pin</h1>
            <h1 className="font-medium text-sm text-mail">
              {" "}
              {details?.address?.pincode}
            </h1>
          </div>
          <hr className="mt-4" />
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name mr-2">Email</h1>
            <h1 className="font-medium text-sm text-mail"> {details?.email}</h1>
          </div>
          <hr className="mt-4" />
        </div>
        {details?.user_profile?.Marital_status && (
          <div className="mt-5">
            <div className="flex justify-between items-start ">
              <h1 className="font-medium text-sm text-name mr-2">
                Wedding Anniversary
              </h1>
              <h1 className="font-medium text-sm text-mail">
                {details?.user_profile?.wedding_anniversary?.length === 0 ||
                details?.user_profile?.wedding_anniversary === null
                  ? ""
                  : moment(
                      new Date(details?.user_profile?.wedding_anniversary)
                    ).format("DD/MM/YYYY")}
              </h1>
            </div>
          </div>
        )}
        {/* <div className="mt-5">
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name">Profession</h1>
            <h1 className="font-medium text-sm text-mail">
              {" "}
              {details?.user_profile?.profession}
            </h1>
          </div>
          <hr className="mt-4" />
        </div> */}
        {/* <div className="mt-5">
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name">Marital Status</h1>
            <h1 className="font-medium text-sm text-mail">
              {" "}
              {details?.user_profile?.Marital_status ? "Married" : "un-Married"}
            </h1>
          </div>
        </div> */}
      </div>
      <div className="mt-5 px-10">
        <button
          onClick={handleLogOut}
          className="bg-liveprice h-[46px] w-full text-white  font-medium text-md rounded-md"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
