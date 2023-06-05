import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { BiArrowBack, BiRupee } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

import {
  openSelectJewelPopup,
  openRejectPopup,
  openReviewVisitPopup,
  setRejectJewel,
  setRejectImage,
  setExtimateSlug,
} from "../../store/slices/customerCheckin";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import {
  useAddSelectJewelToCartMutation,
  useGetAllSelectJewelQuery,
  useGetCartProductsQuery,
} from "../../store/apis/restApi";
import { toast } from "react-toastify";
const QrScanner = dynamic(() => import("../QrScanner"), {
  ssr: false,
});

export default function SelectJewel() {
  const scanned = [
    {
      id: 1,
      img: "/images/chain.svg",
      name: "Necklace",
      price: "₹3,704.00",
      caption: "Built-in cellular lets you receive calls...",
    },
    {
      id: 2,
      img: "/images/chain.svg",
      name: "Necklace",
      price: "₹3,704.00",
      caption: "Built-in cellular lets you receive calls...",
    },
    {
      id: 3,
      img: "/images/chain.svg",
      name: "Necklace",
      price: "₹3,704.00",
      caption: "Built-in cellular lets you receive calls...",
    },
    {
      id: 4,
      img: "/images/chain.svg",
      name: "Necklace",
      price: "₹3,704.00",
      caption: "Built-in cellular lets you receive calls...",
    },
    {
      id: 5,
      img: "/images/chain.svg",
      name: "Necklace",
      price: "₹3,704.00",
      caption: "Built-in cellular lets you receive calls...",
    },
    {
      id: 6,
      img: "/images/chain.svg",
      name: "Necklace",
      price: "₹3,704.00",
      caption: "Built-in cellular lets you receive calls...",
    },
  ];

  const dispatch = useDispatch();
  const customerToken = useSelector(
    (state) => state.auth.Customer?.accessToken
  );

  const router = useRouter();

  const { data: selectJewelList } = useGetAllSelectJewelQuery(
    {},
    { skip: customerToken ? false : true }
  );

  const { data: cartList } = useGetCartProductsQuery(
    {},
    { skip: customerToken ? false : true }
  );

  const [addToCart] = useAddSelectJewelToCartMutation();

  const handleArrowClick = () => {
    router.back();
  };

  const handleReject = (value) => {
    if (value?.status !== "CART") {
      dispatch(setRejectJewel(value.slug));
      dispatch(setRejectImage(value?.product?.image));
      dispatch(openRejectPopup());
    }
  };

  const handleExtimatePrice = (value) => {
    dispatch(setExtimateSlug(value?.slug));
    dispatch(openSelectJewelPopup());
  };

  const onHandleAddToCart = (value) => {
    const backendFormat = {
      slug: value?.slug,
    };
    if (value?.status !== "CART") {
      addToCart(backendFormat).then((res) => {
        if (res.data) {
          toast.success("Product Added To Cart Successfully");
        } else {
          toast.error(res?.error?.data?.message[0]);
        }
      });
    }
  };
  return (
    <div className="mt-28">
      <div className="px-5">
        <div className="flex items-center space-x-2">
          <BiArrowBack
            onClick={handleArrowClick}
            size={25}
            className="text-bg40"
          />
          <div className="text-base text-bg40 font-semibold">
            Select Jewellery
          </div>
        </div>
        <div className=" flex flex-col py-5 w-100%  h-64">
          {/* <img src="/images/qrcode.svg" className="w-f36" /> */}
          <div className="flex flex-col self-center px-4 pb-0 pt-[3px] bg-white h-[90%] w-[200px]">
            <QrScanner />
          </div>
        </div>
      </div>

      <div className="bg-white px-5">
        <div className="flex justify-end">
          <div className="text-bg40 text-base mt-3 border-b-bg40 border  font-semibold font-Montserrat text-end border-t-0 border-l-0 border-r-0">
            Store Catalogue {">"}
          </div>
        </div>

        <div className="text-bg40 text-base font-bold font-Montserrat mt-5">
          Scanned Jewellery
        </div>
        <div className="grid grid-cols-2 gap-4   mt-5 ">
          {selectJewelList?.results?.map((each, index) => (
            <div className="shadow-md rounded-md  mt-5   ">
              <div className="flex justify-center py-5 px-2">
                <img
                  onClick={() => handleExtimatePrice(each?.product)}
                  src={`${each?.product?.image}`}
                  key={index}
                  className="h-40 w-full object-cover"
                />
              </div>
              <div className="text-color5E font-semibold px-2 overtext">
                {each?.product?.title}
              </div>
              <div className="text-color5E font-semibold px-2 pt-1 flex items-center">
                <BiRupee />
                {each?.final_price}
              </div>
              <div className="text-[#6E6B7B] text-sm pt-1 px-2 overTextCart">
                {each?.product?.description}
              </div>

              <div className="flex w-full  items-center pt-3">
                <button
                  onClick={() => handleReject(each)}
                  className={`flex w-1/2 h-10 justify-center items-center rounded-md rounded-t-none rounded-r-none px-1 bg-[#D9D9D9] py-1 font-medium  ${
                    each?.status == "CART" ? "bg-[#0009]" : ""
                  } `}
                >
                  <RiDeleteBinLine size={18} className="text-bg40 mr-2" />
                  <h1 className="text-bg40 text-[13px]">Reject</h1>
                </button>

                <button
                  onClick={() => onHandleAddToCart(each)}
                  className={`flex w-1/2 h-10 justify-center items-center rounded-md rounded-t-none px-1  rounded-l-none bg-bg40 py-1 font-medium ${
                    each?.status == "CART"
                      ? "bg-[#0009] text-bg40"
                      : "text-white "
                  } `}
                >
                  <h1 className=" mr-3 text-[13px]">Add</h1>
                  <BsCart2 size={18} className="" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 py-10">
          <div className="bg-bg40 rounded-xl flex justify-between items-center px-6 py-2">
            <div className="flex ">
              {cartList?.results[0]?.products?.map((each, idx) => (
                <Fragment key={idx}>
                  {idx < 10 && (
                    <img
                      key={idx}
                      src={each?.product?.image}
                      className={`rounded-full w-8 h-8 bg-white z-20 object-cover relative ${
                        idx !== 0 && `right-${parseInt(idx) * 2}`
                      }`}
                    />
                  )}
                </Fragment>
              ))}
            </div>

            <button
              onClick={() => dispatch(openReviewVisitPopup())}
              className="text-white border-2 border-white px-5 py-1 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
