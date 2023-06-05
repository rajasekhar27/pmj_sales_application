import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import {
  openSideBarPopup,
  closeSideBarPopup,
} from "../../store/slices/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { openLivePrice } from "../../store/slices/popupSlice";
import { useGetSalesProfileDetailsQuery } from "../../store/apis/restApi";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();

  const salesSlug = useSelector((state) => state.auth.SalesRepresentative);
  const salesAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );

  const { data: salesProfile } = useGetSalesProfileDetailsQuery(
    {
      slug: salesSlug.user?.user_detail?.slug,
    },
    { skip: salesAccess ? false : true }
  );

  const name = salesProfile?.user_profile?.name;

  return (
    <div className="bg-white fixed top-0 right-0 left-0 z-30">
      <div className="mx-4 mt-5 flex flex-col  ">
        <div className=" font-Montserrat flex justify-between items-center bg-white shadow-md rounded-md self-center  w-full  h-[62px] px-5 ">
          <div className="flex">
            <GiHamburgerMenu
              size={20}
              className="mr-3 text-[#5E5873]"
              onClick={() => dispatch(openSideBarPopup())}
            />
            {/* <FiSearch size={20} className="text-[#5E5873]" /> */}

            {/* <div
              onClick={() => dispatch(openLivePrice())}
              className=" flex flex-col justify-center items-center border border-black bg-live h-[22px] w-[22px] rounded-full ml-0"
            >
              <img src="/liveprice.svg" className="text-white h-2 w-4 " />
            </div> */}
          </div>

          <div className="flex items-center">
            {/* <div className="relative mr-5">
              <IoNotificationsOutline size={20} className="text-[#5E5873]" />
              <div className=" absolute -top-2 -right-2 bg-notification h-18 w-18 rounded-full font-semibold text-xs  flex flex-col justify-center items-center text-white">
                0
              </div>
            </div> */}

            <Link href="/sales-profile">
              <div className="flex items-center">
                <div className="mr-5">
                  <h1 className="text-normal  text-sm text-name text-right ">
                    {name?.split(" ")[0]}
                  </h1>
                  <h1 className="text-normal  text-xs text-position text-right ">
                    Sales Rep
                  </h1>
                </div>

                <div className="relative ">
                  {/* <img
                  src=""
                  className="h-38 w-38 object-cover rounded-full bg-indigo-300"
                /> */}
                  {salesProfile?.user_profile?.image ? (
                    <img
                      src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_BASE_URL}${salesProfile?.user_profile?.image}`}
                      className="h-38 w-38 rounded-full object-cover "
                    />
                  ) : (
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      className="h-38 w-38 rounded-full object-cover "
                    />
                  )}
                  <div className="absolute -right-1 bottom-0 bg-online h-3 w-3 rounded-full border border-white" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
