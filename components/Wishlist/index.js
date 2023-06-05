import { useRouter } from "next/router";
import React, { Fragment, useRef } from "react";
import { AiFillHeart, AiOutlineCalendar, AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack, BiBarcodeReader } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetAllWishlistDateWiseQuery,
  useLazyGetWishlistDateWiseQuery,
} from "../../store/apis/restApi";
import moment from "moment/moment";
import InfiniteScrollComponent from "../UI/InfiniteScrollComponent";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import { openBarcodePopup } from "../../store/slices/popupSlice";
import { useEffect } from "react";
import { setIsWishlistChanged } from "../../store/slices/customerCheckin";

export default function index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const dateRef = useRef();
  const [filterDate, setFilterDate] = useState("");
  const [maintain, setMaintain] = useState([]);
  const customerAccess = useSelector(
    (state) => state?.auth?.Customer?.accessToken
  );

  const { height: windowHeight } = useViewportSize();

  const { data: datewiseWishlist } = useGetAllWishlistDateWiseQuery(
    { date: filterDate },
    { skip: customerAccess ? false : true }
  );

  const handleDate = (e) => {
    if (e.length === 0) {
      setFilterDate("");
      return;
    }
    setFilterDate(moment(new Date(e)).format("YYYY-MM-DD"));
  };

  useEffect(() => {
    setMaintain(datewiseWishlist?.results);
  }, [datewiseWishlist]);

  return (
    <div className=" h-screen  py-5">
      <div className="px-4">
        <div className=" flex items-center   bg-[url('/images/backdots.svg')] bg-no-repeat bg-cover rounded h-[62px] w-full space-x-2 mb-2">
          <BiArrowBack
            onClick={() => router.push("/")}
            size={30}
            className="text-white ml-2"
          />
          <div className="text-base text-white w-4/5 font-semibold text-center">
            Wishlist
          </div>

          <div
            className=" outline-none pr-2"
            onClick={() => dispatch(openBarcodePopup())}
          >
            <BiBarcodeReader className="h-8 w-8 text-white  " />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 mb-3">
          <div className="text-md text-bg40 font-semibold">
            Recent Wishlists
          </div>
          <div className="">
            <div className="  w-[130px] h-10 flex justify-center items-center rounded   text-xs font-normal placeholder:text-position  mt-1 bg-white ">
              <Flatpickr
                options={{ minDate: "", maxDate: new Date() }}
                onChange={(e) => handleDate(e)}
                className="h-[36px] border border-liveprice rounded-sm w-full text-sm px-1"
              />
            </div>
          </div>
        </div>
      </div>
      {customerAccess && (
        <InfiniteScrollComponent
          lazyHook={useLazyGetWishlistDateWiseQuery}
          height={windowHeight - 62 - 24 - 10 - 30}
          parentClasses={"px-4"}
          hookParams={{ date: filterDate }}
          customLoader={
            <p style={{ textAlign: "center" }}>
              <b>loading....</b>
            </p>
          }
        >
          <DateRelatedWishList />
        </InfiniteScrollComponent>
      )}
    </div>
  );
}

const DateRelatedWishList = ({ data: dateList, clearData }) => {
  const handleWishlistListing = (date) => {
    router.push(`/wishlist-product-listing/${date} `);
  };
  const dispatch = useDispatch();
  const router = useRouter();
  const isWishlistChanged = useSelector(
    (state) => state.customerIn?.isWishlistChanged
  );

  if (isWishlistChanged) {
    dispatch(setIsWishlistChanged());
    clearData();
  }

  return (
    <div
      onClick={() => handleWishlistListing(dateList?.date)}
      className=" flex justify-between items-center border border-bg40 rounded h-[94px]  py-2 text-white mb-3 pl-2"
      style={{ backgroundColor: "rgba(64, 1, 32, 0.2) " }}
    >
      <div className="">
        <div className="text-md text-bg40 font-semibold">
          {moment(new Date(dateList?.date)).format("DD/MM/YYYY")}
        </div>
        <div className="text-md text-bg40 font-normal mt-2">
          Total Qty:{" "}
          <span className="text-md text-bg40 font-semibold">
            {dateList?.total_product}
          </span>
        </div>
      </div>
      <div className="self-center ">
        <div className=" flex  w-[195px] justify-center items-center h-8">
          <div className=" flex flex-wrap self-center ">
            {dateList?.pImages?.map((eachImage, idx) => (
              <Fragment key={idx}>
                {idx < 6 && (
                  <img
                    key={idx}
                    src={`${eachImage}`}
                    className={`rounded-full w-8 h-8 bg-white z-0 object-cover relative  ${
                      idx !== 0 && `right-${parseInt(idx)}`
                    }`}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {dateList?.pImages.length > 6 ? (
          <div className="font-medium mt-2 text-base text-black self-center text-center">
            + {dateList?.total_product - 6} Others
          </div>
        ) : (
          dateList?.total_product > 6 &&
          dateList?.pImages.length < 6 && (
            <div className="font-medium mt-2 text-base text-black self-center text-center">
              + {dateList?.total_product - dateList?.pImages.length} Others
            </div>
          )
        )}
      </div>
    </div>
  );
};
