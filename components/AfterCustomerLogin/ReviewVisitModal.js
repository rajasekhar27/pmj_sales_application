import React from "react";
import { BiRupee } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useCreateOrderMutation,
  useGetCartProductsQuery,
} from "../../store/apis/restApi";
import {
  closeRejectPopup,
  openRejectPopup,
  setRejectImage,
  setRejectJewel,
} from "../../store/slices/customerCheckin";

export default function ReviewVisit() {
  const dispatch = useDispatch();
  const customerToken = useSelector(
    (state) => state.auth.Customer?.accessToken
  );
  const { data: cartList } = useGetCartProductsQuery(
    {},
    { skip: customerToken ? false : true }
  );

  const [createOrder] = useCreateOrderMutation();

  const handleCreateOrder = () => {
    const backendFormat = {};
    createOrder(backendFormat).then((res) => {
      if (res.data) {
        toast.success("Order Placed Successfully");
        dispatch(closeRejectPopup());
      } else {
        toast.error(res?.error?.data?.message);
      }
    });
  };

  const handleReject = (value) => {
    dispatch(setRejectJewel(value.slug));
    dispatch(setRejectImage(value?.product?.image));
    dispatch(openRejectPopup());
  };

  return (
    <div className="px-5 py-5 ">
      <div className="text-color5E text-2xl text-center font-medium">
        Review visit
      </div>
      {cartList?.results[0].products.length !== 0 ? (
        cartList?.results[0].products?.map((each, index) => (
          <div
            className="h-[265px] mt-5 flex flex-col justify-between"
            key={index}
            style={{ boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="flex ">
              <img
                src={each?.product?.image}
                className="w-full h-[132px] object-cover"
              />
            </div>
            <div className=" ">
              <div className="flex justify-between mt-5 px-3 text-color5E">
                <div className=" text-[#5E5873] font-medium overtextreview ">
                  {each?.product?.title}
                </div>
                <div className=" text-color5E font-medium flex items-center">
                  <BiRupee />
                  {each?.final_price}
                </div>
              </div>
              <div className="text-color6E px-3 text-sm overTextCartDesc">
                {each?.product?.description}
              </div>
              <div className="flex justify-end mt-[10px]">
                <div
                  onClick={() => handleReject(each)}
                  className="flex w-1/2 h-10 items-center justify-center rounded-md rounded-b-none space-x-1 rounded-r-none px-1 bg-[#D9D9D9] py-1 font-medium  "
                >
                  <RiDeleteBinLine className="text-bg40 " />
                  <button className="text-bg40">Reject</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="h-full flex justify-center items-center mt-64">
          <h1 className="text-red-500 font-bold">No Products</h1>
        </div>
      )}

      <div className="mt-10 flex justify-around ">
        <button
          onClick={handleCreateOrder}
          className="px-10 h-9 bg-bg40 rounded-md text-white flex items-center space-x-2 fixed bottom-5 "
        >
          Submit
        </button>
      </div>
    </div>
  );
}
