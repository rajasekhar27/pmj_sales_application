import { useRouter } from "next/router";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";

export default function DigitalProductList() {
  const product_listing = [
    {
      id: "1",
      title: "Exclusive Ring",
      price: "₹ 5,254",
    },
    {
      id: "2",
      title: "Exclusive Ring",
      price: "₹ 5,254",
    },
    {
      id: "3",
      title: "Exclusive Ring",
      price: "₹ 5,254",
    },
    {
      id: "4",
      title: "Exclusive Ring",
      price: "₹ 5,254",
    },
    {
      id: "5",
      title: "Exclusive Ring",
      price: "₹ 5,254",
    },
    {
      id: "6",
      title: "Exclusive Ring",
      price: "₹ 5,254",
    },
  ];

  const router = useRouter();

  return (
    <div className="px-4 mt-28">
      <div className="flex items-center justify-between  bg-[url('/images/backdots.svg')] bg-no-repeat bg-cover rounded h-[62px] w-full space-x-2 mb-2">
        <BiArrowBack
          onClick={() => router.back()}
          size={30}
          className="text-white w-1/5"
        />

        <div className="text-sm text-white w-3/5 font-semibold text-center">
          Rings (35,000 items)
        </div>
        <div className="w-1/5 ">
          <div className="border ml-4 border-white p-1 w-7 rounded">
            <FiFilter className="text-white " />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2  justify-items-center   gap-6">
        {product_listing?.map((a, index) => (
          <div className="width" key={index}>
            <div className="relative w-full ">
              <div className="h-[160px] w-full">
                <img
                  src="/images/productlist.svg"
                  className="h-full w-full rounded-md shadow-xl object-cover"
                />
              </div>

              <div>
                <AiOutlineHeart
                  size={25}
                  color="red"
                  className={`absolute right-2  top-2`}
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-5">
              <div className="text-sm ">{a?.title}</div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-[#D5D1D1]"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              </div>
            </div>

            <div className="text-15 text-start font-Montserrat text-[#989898] mt-3">
              {a?.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
