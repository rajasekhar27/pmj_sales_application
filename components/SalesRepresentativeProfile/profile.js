import { useRouter } from "next/router";
import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BiCopy } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useHandleLogoutMutation } from "../../store/apis/restApi";
import {
  removeCustomerTokens,
  removeSalesRepTokens,
} from "../../store/slices/auth";
import { closeSideBarPopup } from "../../store/slices/headerSlice";

export default function Profile({ salesProfile }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [copy, setCopy] = useState();
  const salesSlug = useSelector((state) => state.auth.SalesRepresentative);
  const customerAccess = useSelector(
    (state) => state.auth.Customer?.accessToken
  );
  const checkinSlug = useSelector(
    (state) => state.auth.Customer?.user?.checkin_slug
  );

  if (copy) {
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  }

  const [handleLogout] = useHandleLogoutMutation();

  const handleSalesRepLogout = () => {
    const backendFormat = {
      slug: checkinSlug,
    };

    if (!customerAccess) {
      if (checkinSlug === undefined) {
        dispatch(removeSalesRepTokens());
        dispatch(removeCustomerTokens());

        router.push("/sales-login");
        toast.success("SalesRep Logout Successfull");
        return;
      }

      handleLogout(backendFormat).then((res) => {
        if (res.data) {
          dispatch(removeSalesRepTokens());
          dispatch(removeCustomerTokens());
          dispatch(closeSideBarPopup());
          toast.success("SalesRep Logout Successfull");
          router.push("/sales-login");
        } else {
          toast.error(res?.error?.data?.message);
        }
      });
    } else {
      toast.error("Please Logout Customer First");
    }
  };
  return (
    <div className="h-[366px] bg-white mt-5">
      <div className="h-[115px] bg-liveprice rounded-t-md  flex flex-col justify-center px-3 relative">
        <div className="flex  items-center">
          <div className=" h-[78px] w-[78px] flex flex-col justify-center items-center rounded-full mr-1">
            {salesProfile?.user_profile?.image ? (
              <img
                src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_BASE_URL}${salesProfile?.user_profile?.image}`}
                className="h-[78px] w-[78px] rounded-full object-cover"
              />
            ) : (
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                className="h-[78px] w-[78px] rounded-full object-cover"
              />
            )}
          </div>

          <div className="ml-2">
            <h1 className="text-semibold  text-lg text-white tracking-wider">
              {salesProfile?.user_profile?.name}
            </h1>

            <div className="text-medium relative  text-sm text-white tracking-wider flex items-center mt-1">
              <div> {salesProfile?.employee_id}</div>
              <div className="relative">
                <CopyToClipboard
                  className="  "
                  text={salesSlug?.user?.user_detail?.employee_id}
                  onCopy={() => setCopy(true)}
                >
                  <span>
                    <BiCopy size={25} className="h-5 w-5 ml-1" />
                  </span>
                </CopyToClipboard>

                {copy ? (
                  <span
                    style={{ color: "" }}
                    className="absolute -right-16 top-5 bg-white opacity-50 text-black rounded-full px-1 "
                  >
                    Copied
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-[254px] px-5 flex flex-col justify-evenly drop-shadow-md bg-white">
        <div>
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name">Email</h1>
            <h1 className="font-medium text-sm text-mail">
              {salesProfile?.email}
            </h1>
          </div>
          <hr className="mt-2" />
        </div>

        <div>
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name">Mobile</h1>
            <h1 className="font-medium text-sm text-mail">
              {salesProfile?.phone_number}
            </h1>
          </div>
          <hr className="mt-2" />
        </div>

        <div>
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name">Address</h1>
            <h1 className="font-medium text-sm text-mail text-right">
              {salesProfile?.address?.Address},
              <br />
              {salesProfile?.address?.city},
              <br />
              {salesProfile?.address?.country},{salesProfile?.address?.pincode}
            </h1>
          </div>
          <hr className="mt-2" />
        </div>

        <div>
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name">DOJ</h1>
            <h1 className="font-medium text-sm text-mail">
              {" "}
              {salesProfile?.date_created}
            </h1>
          </div>
          <hr className="mt-2" />
        </div>

        <div>
          <div className="flex justify-between items-start ">
            <h1 className="font-medium text-sm text-name">Blood Group</h1>
            <h1 className="font-medium text-sm text-mail">O+</h1>
          </div>
          {/* <hr className="mt-2" /> */}
        </div>
      </div>

      <div className="mt-5 px-10 pb-5 ">
        <button
          onClick={handleSalesRepLogout}
          className="bg-liveprice h-[46px] w-full text-white  font-medium text-md rounded-md"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
