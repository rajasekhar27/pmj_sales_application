import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export default function SelectCollections({ title }) {
  const router = useRouter();

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

  const dispatch = useDispatch();

  const handleProductList = () => {
    router.push("/catalogue/product-listing");
    // dispatch(backToProductList());
  };

  return (
    <div className="mt-28 px-4">
      <div className="flex items-center space-x-2 my-5">
        <BiArrowBack
          onClick={() => router.back()}
          size={25}
          className="text-bg40"
        />
        <div className="text-base text-bg40 font-semibold">{title}</div>
      </div>

      <Carousel
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <img
          src="/images/bidal.svg"
          className="h-[186px] w-[307px] rounded-2xl"
        />

        <img
          src="/images/collectionslide.svg"
          className="h-[186px] w-[307px] rounded-2xl object-cover"
        />

        <img
          src="/images/collectionSlide2.svg"
          className="h-[186px] w-[307px] rounded-2xl object-cover"
        />
      </Carousel>
      <div className={`  mt-4  `}>
        <div className="text-bg40 text-sm mt-3">
          Lorem ipsum dolor sit amet, consead ipiscing elit. Sapien sollicitudin
          pretium ultrices risus fermentum justo nibh. Tinc idunt lectus
          Sultrices risus ferm en tum justo nibh. Tincidunt lectus
        </div>
      </div>
      <div className="text-bg40 text-sm my-4 font-semibold">
        Watch To Know More
      </div>
      <div className="rounded-lg p-3 bg-white mt-5 shadow">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=8ZiRCcD65Ts"}
          width="100%"
          height="100%"
          className="rounded-lg"
          style={{ borderRadius: "100px" }}
        />
        <div className="text-sm py-2 font-semibold text-bg40">
          Vows of Eternal Love I Bejewelled Tales of a Bride I Flagship store,
          Hyderabad
        </div>
        <div className="text-[#959595] text-[8px] text-end">22/10/2022</div>
      </div>

      <div className="rounded-lg p-3 bg-white mt-5 shadow">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=8ZiRCcD65Ts"}
          width="100%"
          height="100%"
          className="rounded-lg"
          style={{ borderRadius: "100px" }}
        />
        <div className="text-sm py-2 font-semibold text-bg40">
          Vows of Eternal Love I Bejewelled Tales of a Bride I Flagship store,
          Hyderabad
        </div>
        <div className="text-[#959595] text-[8px] text-end">22/10/2022</div>
      </div>

      <div className="text-bg40 text-20 my-4 font-medium">Bridal Products</div>

      <div className="grid grid-cols-2  justify-items-center   gap-6">
        {product_listing?.map((a, index) => (
          <div className="width" onClick={handleProductList} key={index}>
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
