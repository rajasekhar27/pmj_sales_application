import { useViewportSize } from "@mantine/hooks";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineWhatsApp } from "react-icons/ai";
import { BiArrowBack, BiBarcodeReader } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { WhatsappShareButton } from "react-share";
import { toast } from "react-toastify";
import {
  useAddToWishListMutation,
  useGetDateWiseWishListQuery,
  useGetRecentWishlistDetailsQuery,
  useGetWishlistDateWiseQuery,
  useGetwishlistDetailsQuery,
  useGetWishlistProductsPdfQuery,
  useLazyGetWishlistDetailsQuery,
} from "../../store/apis/restApi";
import { setIsWishlistChanged } from "../../store/slices/customerCheckin";
import { openBarcodePopup } from "../../store/slices/popupSlice";
import InfiniteScrollComponent from "../UI/InfiniteScrollComponent";
import { Loader } from "../UI/Loader";

export default function index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const routerSlug = router?.query?.id;
  const [maintain, setMaintain] = useState([]);
  const customerAccess = useSelector(
    (state) => state?.auth?.Customer?.accessToken
  );

  // const { data: wish } = useGetwishlistDetailsQuery(
  //   {},
  //   { skip: customerAccess ? false : true }
  // );

  const customerSlug = useSelector(
    (state) => state.auth.Customer?.user?.user_detail?.slug
  );

  const { data: wishListProducts } = useGetWishlistProductsPdfQuery(
    { slug: customerSlug, date: routerSlug },

    { skip: customerAccess ? false : true }
  );

  const { data: datewiseWishlist } = useGetRecentWishlistDetailsQuery(
    { date: routerSlug },
    { skip: customerAccess ? false : true }
  );
  const { height: windowHeight } = useViewportSize();

  useEffect(() => {
    setMaintain(datewiseWishlist?.results);
  }, [datewiseWishlist]);

  return (
    <div className=" ">
      <div className="bg-white fixed top-0 right-0 left-0  z-30 pt-5">
        <div className="flex items-center  bg-[url('/images/backdots.svg')] bg-no-repeat bg-cover rounded h-[62px]  space-x-2 mb-2 mx-4">
          <BiArrowBack
            onClick={() => router.push("/wishlist")}
            size={30}
            className="text-white ml-2"
          />
          <div className="text-base text-white w-4/5 font-semibold text-center ">
            Wishlist
          </div>

          <div
            className=" outline-none pr-2"
            onClick={() => dispatch(openBarcodePopup())}
          >
            <BiBarcodeReader className="h-8 w-8 text-white  " />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className=" mx-4 text-sm text-liveprice font-semibold mb-4 pt-1">
            Your Jewellery ({datewiseWishlist ? datewiseWishlist?.count : 0}{" "}
            QTY)
          </div>
          {wishListProducts?.path && (
            <WhatsappShareButton
              // title={`Price : ₹${parseInt(
              //   catalogueProductDetails?.attribute?.total_style_value
              // )}`}
              url={`${wishListProducts?.path}`}
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                border: "2px solid #400120",
                borderRadius: "4px",
                marginRight: "16px",
                marginLeft: "16px",
                background: "#400120",
                padding: "3px",
                padding: "3px",
              }}
              className="  text-base font-semibold "
            >
              <p className="text-white">Share</p>
            </WhatsappShareButton>
          )}
        </div>
      </div>

      <div className="mt-[105px]">
        {customerAccess && routerSlug && (
          <InfiniteScrollComponent
            lazyHook={useLazyGetWishlistDetailsQuery}
            hookParams={{ date: routerSlug }}
            height={windowHeight - 100}
            parentClasses={"grid grid-cols-2 gap-6 px-4 pt-8"}
            customLoader={
              <div
                style={{
                  height: "full",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Loader />
              </div>
            }
          >
            <WishlistListingPage />
          </InfiniteScrollComponent>
        )}
      </div>
      {/* <button className="bg-bg40 text-white rounded justify-center fixed bottom-5 right-0 left-0 mt-5  items-center space-x-3 flex px-2 py-2 mx-4">
        <BsWhatsapp />
        <p>Whatsapp Share</p>{" "}
      </button> */}
    </div>
  );
}

const WishlistListingPage = ({ data, clearData }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isWishlistChanged = useSelector(
    (state) => state.customerIn?.isWishlistChanged
  );
  const [addToWishList] = useAddToWishListMutation();
  const handleProductList = () => {
    router.push(`/wishlist-product-detail/${data?.product?.slug}`);
  };

  const handleWishlist = (values) => {
    const backendFormat = {
      product: values?.slug,
    };

    addToWishList(backendFormat).then((res) => {
      if (res.data) {
        toast.success(res?.data?.message);
        clearData();
      }
      if (res.error) {
        toast.error(JSON.stringify(res?.error?.data?.message));
      }
    });
  };

  if (isWishlistChanged) {
    dispatch(setIsWishlistChanged());
    clearData();
  }

  return (
    <div
      className="width prodList p-2 rounded-md bg-white "
      style={{
        boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="relative w-full flex">
        <div
          className="h-[160px] w-full"
          onClick={() => handleProductList(data)}
        >
          {data?.product?.images.length !== 0 ? (
            <img
              src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_BASE_URL}${data?.image?.[0]}`}
              className="h-full w-full rounded-md  object-cover"
            />
          ) : data?.product?.cdn_images?.length !== 0 ? (
            <img
              src={data?.product?.cdn_images?.[0]}
              className="h-full w-full rounded-md  object-cover"
            />
          ) : (
            <img
              src="/not-found.png"
              className="h-full w-full rounded-md  object-cover"
            />
          )}
        </div>
        {/* {data?.is_wishlist ? (
          <button onClick={() => handleWishlist(data)}> 
            <AiFillHeart
              size={25}
              color="red"
              className={`absolute right-2  top-2 z-10`}
            />
          </button>
        ) : (
          <button onClick={() => handleWishlist(data)}>
            <AiOutlineHeart
              size={25}
              color="red"
              className={`absolute right-2  top-2 z-10`}
            />
          </button>
        )} */}
        <button onClick={() => handleWishlist(data?.product)}>
          <AiFillHeart
            size={25}
            color="#CF0606"
            className={`absolute right-2  top-2 z-10`}
          />
        </button>
      </div>
      <div onClick={() => handleProductList(data)}>
        <div className="flex justify-between items-center mt-3">
          <div className="text-base overTextCart font-semibold text-gray-600">
            {data?.product?.title}
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="text-15 text-ellipsis overflow-hidden  text-start font-Montserrat  mt-3 text-black font-semibold">
            ₹ {data?.product?.total_style_value?.toFixed(2)}
          </div>
          <div className="flex space-x-1">
            {data?.product?.available_colors?.map((data, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full `}
                style={{ backgroundColor: `${data?.unique_code}` }}
              ></div>
            ))}
          </div>
          {/* <div className="flex space-x-1 mt-3">
            <div className="w-2 h-2 rounded-full bg-[#D5D1D1]"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
