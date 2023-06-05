import { useRouter } from "next/router";
import React from "react";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DigitalCatalogue from ".";
import {
  useAddToWishListMutation,
  useGetCatalogueProductDetailsQuery,
} from "../../../store/apis/restApi";
import {
  openDigitalOutOfStockPopup,
  openEstimatePriceDetailsPopup,
  openPriceDetailsPopup,
} from "../../../store/slices/catalogue";
import DigitalCatalogueOrders from "./DigitalCatalogueOrders";
import { WhatsappShareButton } from "react-share";
import ParticularsTable from "../../SalesRepresentativeProfile/datatable";

import { Loader } from "../../UI/Loader";

const columns = [
  {
    name: "BILL OF MATERIAL",
    minWidth: "200px",
    selector: (row) => (
      <div className="text-[#0096D1] font-semibold text-sm">
        {row.bom_varient_name}
      </div>
    ),
  },

  {
    name: "PIECES",
    minWidth: "0px",
    maxWidth: "80px",
    selector: (row) => (
      <div className="text-[#5E5873] font-medium text-sm ">
        {row.stone_pieces}
      </div>
    ),
  },
  {
    name: "WEIGHT",
    minWidth: "90px",
    maxWidth: "100px",
    selector: (row) => (
      <div className="text-[#5E5873] font-medium text-sm">
        {row.stone_weight}
      </div>
    ),
  },
  {
    name: "RATE",
    selector: (row) => (
      <div className="text-[#5E5873] font-medium text-sm">{row.stone_rate}</div>
    ),
  },
];

export default function DigitalOutOfStock() {
  const router = useRouter();
  const productSlug = router?.query?.id;
  const dispatch = useDispatch();
  // const [viewAll, setViewAll] = useState(false);
  // const [filteredStoneDiamondDetails, setFilteredStoneDiamondDetails] =
  //   useState([]);
  const salesRepAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );
  const { data: catalogueProductDetails, isFetching: fetching } =
    useGetCatalogueProductDetailsQuery(
      { slug: productSlug },
      { skip: salesRepAccess && productSlug ? false : true }
    );
  const [addToWishList] = useAddToWishListMutation();

  const handleWishlist = (slug) => {
    const backendFormat = {
      product: slug,
    };
    addToWishList(backendFormat).then((res) => {
      if (res.data) {
        toast.success(res?.data?.message);
      }
      if (res.error) {
        toast.error(JSON.stringify(res?.error?.data?.message));
      }
    });
  };

  // useEffect(() => {
  //   if (catalogueProductDetails?.stone_diamond?.length > 3) {
  //     let dummyFileredArray = catalogueProductDetails?.stone_diamond?.filter(
  //       (each, idx) => idx < 3
  //     );

  //     setFilteredStoneDiamondDetails(dummyFileredArray);
  //   } else {
  //     setFilteredStoneDiamondDetails(catalogueProductDetails?.stone_diamond);
  //   }
  // }, [catalogueProductDetails]);

  if (fetching) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <Loader />
      </div>
    );
  }

  const handleShare = async () => {
    const response = await fetch(catalogueProductDetails?.cdn_images?.[0]);
    // here image is url/location of image
    const blob = await response.blob();
    const file = new File([blob], "image.jpg", { type: blob.type });
    const files = [file];
    if (navigator.canShare({ files })) {
      try {
        await navigator.share({
          files: files,
          title: "Images",
          text: `${`Product: ${catalogueProductDetails?.product_code}
\Price: ₹${parseInt(catalogueProductDetails?.attribute?.total_style_value)}`}`,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(`Your system doesn't support sharing these files.`);
    }
  };

  return (
    <div className=" mt-28">
      <div className="flex items-center space-x-2 my-5 px-4">
        <BiArrowBack
          onClick={() => router.back()}
          size={25}
          className="text-bg40"
        />

        <div className="text-base text-bg40 font-semibold overtext">
          {catalogueProductDetails?.title}
        </div>
      </div>

      <div>
        <div className=" flex justify-center">
          {catalogueProductDetails?.images.length !== 0 ? (
            <img
              src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_BASE_URL}${catalogueProductDetails?.image?.[0]}`}
              className="w-full   object-cover"
            />
          ) : catalogueProductDetails?.cdn_images?.length !== 0 ? (
            <img
              src={catalogueProductDetails?.cdn_images?.[0]}
              className="w-full   object-cover"
            />
          ) : (
            <img src="/not-found.png" className="w-full   object-cover" />
          )}
        </div>
        <div className="mt-5 px-4">
          <div className="flex justify-between items-start">
            <div className="text-20 font-medium text-bg40 overtext mr-2">
              {catalogueProductDetails?.title}
            </div>
            {catalogueProductDetails?.is_wishlist ? (
              <button
                onClick={() => handleWishlist(router.query.id)}
                className=" rounded "
              >
                <AiFillHeart size={24} color="#CF0606" />
              </button>
            ) : (
              <button
                onClick={() => handleWishlist(router.query.id)}
                className="   rounded "
              >
                <AiOutlineHeart size={24} color="#daa520" />
              </button>
            )}
          </div>
          {/* <div className="text-bg40 text-16 font-semibold pt-2">
            PMJ Exclusive Ring set in 22Kt Yellow Gold (9.57gm).
          </div> */}
        </div>
        <div className="flex items-center justify-between mt-2 px-4">
          <div className="text-[#EA5455] text-24 font-semibold font-Montserrat">
            ₹ {parseInt(catalogueProductDetails?.attribute?.total_style_value)}{" "}
            <span className="text-16">
              Out of Stock
              {/* ({catalogueProductDetails?.attribute?.quantity}) */}
            </span>
          </div>
          {/* <button
            onClick={() => dispatch(openPriceDetailsPopup())}
            className="bg-bg40 px-2 py-1 rounded-md flex items-center w-20 text-white"
          >
            <AiOutlineEye className="text-white " size={20} /> <div>View</div>
          </button> */}
        </div>
        <div className="text-bg40 text-16 font-semibold mt-2 px-4">
          Exclusive of all taxes
        </div>
        <div className="text-bg40 text-sm mt-2 px-4">
          Manufacturing Time{" "}
          <span className="text-bg40 font-semibold ">15 Days .</span>
        </div>

        {/* <div className="mt-2 border-t border-bg40"></div> */}
        {/* <div className="my-5">
          <div className="flex justify-between">
            <button
              onClick={() => dispatch(openDigitalOutOfStockPopup())}
              className="px-5 w-full bg-bg40 text-white rounded-lg py-2"
            >
              Order
            </button>
          </div>
        </div> */}

        {/* <div className="px-4">
          <DigitalCatalogueOrders />
        </div> */}
        <div className="mt-1 border-t border-bg40 mx-4"></div>

        <div className="my-5 px-4">
          <div className="flex justify-between">
            <button
              onClick={() => dispatch(openEstimatePriceDetailsPopup())}
              className="px-5 bg-bg40 text-white rounded py-1"
            >
              Estimation
            </button>
            {/* <WhatsappShareButton
              url={`${process.env.NEXT_PUBLIC_AUTH_URL}${router?.asPath}`} */}
            <button
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                border: "2px solid #400120",
                borderRadius: "4px",
              }}
              className=" flex items-center text-liveprice  text-base font-semibold "
              type="button"
              onClick={handleShare}
            >
              <AiOutlineWhatsApp className="mr-2  " />
              <p>Share</p>
            </button>
            {/* </WhatsappShareButton> */}
            {/* <button
              // onClick={() => dispatch(openEstimatePriceDetailsPopup())}
              className="px-5 flex items-center text-liveprice rounded py-1 border border-liveprice text-base font-semibold"
            >
              <AiOutlineWhatsApp className="mr-2 h-[24px] w-[24px] " />
              Share
            </button> */}
          </div>
        </div>

        <div className="mt-1 border-t border-bg40 mx-4"></div>

        <div className="text-20 text-bg40 font-medium px-4 mt-2">Colour</div>

        <div className="flex space-x-3 py-2 px-4">
          {/* {catalogueProductDetails?.available_colors?.map((each) => (
            <div
              className={`w-4 h-4 rounded-full `}
              style={{ backgroundColor: `${each?.unique_code}` }}
            ></div>
          ))} */}

          <div
            className={`w-4 h-4 rounded-full border border-black `}
            style={{
              backgroundColor: `${
                catalogueProductDetails?.attribute?.colour === "ROSE"
                  ? "#F2C2A4"
                  : catalogueProductDetails?.attribute?.colour === "YELLOW"
                  ? "#EAC786"
                  : catalogueProductDetails?.attribute?.colour === "YELLOW-ROSE"
                  ? "#daa520"
                  : "#D5D1D1"
              }`,
            }}
          ></div>

          {/* <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
          <div className="w-5 h-5 rounded-full bg-yellow-500"></div> */}
        </div>

        <div className="my-2 border-t border-bg40 mx-4"></div>
        <div className="text-bg40 text-20 font-medium font-Montserrat  mb-2 px-4">
          Product Description
        </div>
        {/* <div className="text-[#333333] text-sm pt-2 mb-5 px-4">
          {catalogueProductDetails?.attribute?.varient_name}
        </div> */}

        <div className="mx-4  bg-white drop-shadow-md mt-[20px]  border-[1px] border-t-[#400120] border-l-[#400120] border-r-[#400120]  rounded-xl">
          <div className=" pt-[0.5px] pl-[0.5px] pr-[0.5px] ">
            <div className="h-[53px] bg-[#F7F2F4] flex flex-col justify-center rounded-t-xl ">
              <h1 className="font-bold text-sm text-[#5E5873] pl-4">
                {catalogueProductDetails?.attribute?.varient_name}
              </h1>
            </div>
            <div className=" flex flex-col   justify-around  pr-2">
              <div className="flex items-center pl-4 mt-4">
                <h1 className="font-semibold text-sm text-[#0096D1] mr-3">
                  GROSS WEIGHT
                </h1>
                <h1 className="font-semibold text-sm text-[#5E5873] ">
                  {catalogueProductDetails?.metal_data?.gross_weight}
                </h1>
              </div>
              <div className="flex items-center pl-4 mt-4  mb-1">
                <h1 className="font-semibold text-sm text-[#0096D1] mr-8 ">
                  NET WEIGHT
                </h1>
                <h1 className="font-semibold text-sm text-[#5E5873] ">
                  {catalogueProductDetails?.metal_data?.net_weight}
                </h1>
              </div>

              <div className="flex items-start pl-4 mt-4  mb-5">
                <h1 className="font-semibold text-sm text-[#0096D1] mr-12 ">
                  LOCATION
                </h1>
                <h1 className="font-semibold text-sm text-[#5E5873] overtext">
                  {catalogueProductDetails?.location}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 mb-[30px] flex flex-col mt-[30px] ">
          <ParticularsTable
            columns={columns}
            ordersData={catalogueProductDetails?.stone_diamond}
            isFetching={fetching}
          />
        </div>

        {/* <div className="mx-4   drop-shadow-md  relative mb-[30px]">
          <img src={`/images/box-border.svg`} className="w-full " />
          <div className="absolute right-[2px] left-[2px] top-[2px] ">
            <div className="h-[53px] bg-[#F7F2F4] flex flex-col justify-center rounded-t-md">
              <h1 className="font-bold text-sm text-[#5E5873] pl-4">
                LOCATIONS
              </h1>
            </div>
            <div className=" flex flex-col  bg-[white] ">
              <div className="flex pl-4 mt-2 pr-1">
                <p className="text-xs font-medium text-[#5E5873]">
                  {catalogueProductDetails?.location}
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="text-bg40 text-20 font-medium font-Montserrat py-2">
          Product Customization
        </div>
        <div className="text-[#333333] text-sm pt-2">
          <input
            type={"text"}
            placeholder="Enter Text......."
            className="bg-transparent border  rounded h-[38px] w-full px-2"
            style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)" }}
          />
        </div>

        <div className="flex items-center justify-around my-10">
          <button className="bg-bg40 px-[10px] py-[5px]  rounded-md flex items-center  text-white">
            Cancel
          </button>

          <div className="text-bg40  font-medium font-Montserrat border-bg40 border px-2 py-1 rounded-md">
            Submit
          </div>
        </div> */}
      </div>
    </div>
  );
}
