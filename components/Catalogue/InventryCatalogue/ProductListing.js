import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { FiFilter, FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GrFormClose } from "react-icons/gr";
import {
  useAddToWishListMutation,
  useLazyGetAllCatalogueProductsQuery,
  useLazyGetBestSellerProductsQuery,
  useLazyGetCurrentTrendingProductsQuery,
  useLazyGetTimeLessJewelleryProductsQuery,
  useLazyGetTrendingProductsQuery,
} from "../../../store/apis/restApi";
import { useViewportSize } from "@mantine/hooks";

import InfiniteScrollComponent from "../../UI/InfiniteScrollComponent";
import {
  setCategoryFilterId,
  setClearFilters,
  setClearMaxPrice,
  setClearMetalColourFilters,
  setClearMinPrice,
  setSelectedFilterOptions,
} from "../../../store/slices/catalogue";
import { Loader } from "../../UI/Loader";

export default function ProductListing() {
  const router = useRouter();
  let midQuery = router.pathname.split("/");
  let mideQueryParams = midQuery[midQuery.length - 2];
  const [querySlug, setQuerySlug] = useState(router?.query?.id);
  const { height: windowHeight } = useViewportSize();
  const [searchJewellery, setSearchJewellery] = useState("");
  const dispatch = useDispatch();

  const salesRepAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );
  const savedFilters = useSelector((state) => state.catalogue?.savedFilters);

  const categoryFilterIdList = useSelector(
    (state) => state.catalogue?.filterOptions?.categoryId
  );
  const productTypeFilterIdList = useSelector(
    (state) => state.catalogue?.filterOptions?.productTypeId
  );
  const subCategoryFilterIdList = useSelector(
    (state) => state.catalogue?.filterOptions?.subCategoryId
  );
  const subsubCategoryFilterIdList = useSelector(
    (state) => state.catalogue?.filterOptions?.subsubCategoryId
  );
  const metalColorFilterIdList = useSelector(
    (state) => state.catalogue?.filterOptions?.metalColorId
  );
  const locationFilterIdList = useSelector(
    (state) => state.catalogue?.filterOptions?.location
  );
  const classificationFilterList = useSelector(
    (state) => state.catalogue?.filterOptions?.classification
  );
  const genderFilterIdList = useSelector(
    (state) => state.catalogue?.filterOptions?.gender
  );
  const minPriceFilterIdList = useSelector(
    (state) => state.catalogue?.filterOptions?.minPrice
  );
  const maxPriceFilterIdList = useSelector(
    (state) => state.catalogue?.filterOptions?.maxPrice
  );
  const sizeFilterIdList = useSelector(
    (state) => state.catalogue?.filterOptions?.size
  );
  const token = useSelector((state) => state.auth.Customer.accessToken);

  useEffect(() => {
    setQuerySlug(router?.query?.id);
  }, [router?.query?.id]);

  const handleFilterCancel = () => {
    dispatch(setClearFilters());
    // router.push(`/catalogue/product-listing/${mideQueryParams}/${queryParams}`);
  };

  const handleCheckboxClick = (e, type) => {
    dispatch(setCategoryFilterId([e.id, type]));
    dispatch(setSelectedFilterOptions([e, type]));
  };

  const handleMetalColourClose = (e, type) => {
    dispatch(setClearMetalColourFilters([e, type]));
  };

  return (
    <div className="  mt-5 ">
      <div className="fixed z-20 top-5 left-0 right-0 flex flex-col bg-white">
        <div className="flex items-center  justify-between  bg-[url('/images/backdots.svg')] bg-no-repeat bg-cover rounded h-[62px]  space-x-2 mb-2 mx-4">
          <div className="flex items-center">
            <BiArrowBack
              onClick={() =>
                mideQueryParams == "digital-catalogue"
                  ? router.push("/")
                  : router.push(
                      "/catalogue/all-category-products/inventory-catalogue"
                    )
              }
              size={24}
              className="text-white ml-2 mr-2"
            />

            <div className="text-base text-white  font-semibold text-left">
              {querySlug == "current-trend-products"
                ? "Digital Catalogue"
                : querySlug == "trending-products"
                ? "Digital Catalogue"
                : querySlug == "bestseller-product"
                ? "Digital Catalogue"
                : querySlug == "timeless-jewellery"
                ? "Digital Catalogue"
                : querySlug == "inventory" && "Inventory Catalogue"}
            </div>
          </div>
          <div className="w-1/5 ">
            <button
              onClick={() =>
                router.push(
                  `/catalogue/catalogue-filter/${mideQueryParams}/${querySlug}`
                )
              }
              className="border ml-4 border-white p-1 w-7 rounded"
            >
              <FiFilter className="text-white " />
            </button>
          </div>
        </div>
        {(savedFilters?.length !== 0 ||
          (maxPriceFilterIdList !== undefined &&
            maxPriceFilterIdList?.length !== 0)) && (
          <div className="mt-1 mb-2 border-[1px] border-t border-bg40 mx-4"></div>
        )}
        {(savedFilters?.length !== 0 ||
          (minPriceFilterIdList !== undefined &&
            minPriceFilterIdList?.length !== 0) ||
          (maxPriceFilterIdList !== undefined &&
            maxPriceFilterIdList?.length !== 0)) && (
          <div className="flex mx-4  overflow-x-scroll pb-3">
            <>
              {savedFilters?.map((eachFilter, index) =>
                eachFilter[1] === "Metal Colour" ? (
                  <div
                    className="flex border-2 border-liveprice mr-2 items-center text-sm pl-2 pr-1 rounded "
                    key={index}
                  >
                    {typeof eachFilter[0]?.description === "number"
                      ? eachFilter[0]?.description
                      : eachFilter[0]?.description?.toUpperCase().split(" ")[0]}
                    <button
                      onClick={() =>
                        handleMetalColourClose(eachFilter[0], eachFilter[1])
                      }
                    >
                      <GrFormClose className="ml-1 text-liveprice mt-[2px]" />
                    </button>
                  </div>
                ) : (
                  <div
                    className="flex border-2 border-liveprice mr-2 items-center text-sm pl-2 pr-1 rounded "
                    key={index}
                  >
                    {typeof eachFilter[0]?.description === "number"
                      ? eachFilter[0]?.description
                      : eachFilter[0]?.description?.toUpperCase().split(" ")[0]}
                    <button
                      onClick={() =>
                        handleCheckboxClick(eachFilter[0], eachFilter[1])
                      }
                    >
                      <GrFormClose className="ml-1 text-liveprice mt-[2px]" />
                    </button>
                  </div>
                )
              )}

              {minPriceFilterIdList !== undefined &&
              minPriceFilterIdList?.length !== 0 ? (
                <div className="flex border-2 border-liveprice mr-2 items-center text-sm pl-2 pr-1 rounded ">
                  {`min(Rs.${minPriceFilterIdList})`}
                  <button onClick={() => dispatch(setClearMinPrice())}>
                    <GrFormClose className="ml-1 text-liveprice mt-[2px]" />
                  </button>
                </div>
              ) : (
                ""
              )}

              {maxPriceFilterIdList !== undefined &&
              maxPriceFilterIdList?.length !== 0 ? (
                <div className="flex border-2 border-liveprice mr-2 items-center text-sm pl-2 pr-1 rounded ">
                  {`max(Rs.${maxPriceFilterIdList})`}
                  <button onClick={() => dispatch(setClearMaxPrice())}>
                    <GrFormClose className="ml-1 text-liveprice mt-[2px]" />
                  </button>
                </div>
              ) : (
                ""
              )}

              {savedFilters[0] !== [] && (
                <div className="flex items-center ">
                  <button
                    className="border-2 border-liveprice text-red-500 w-20 text-sm rounded "
                    onClick={() => handleFilterCancel()}
                  >
                    Clear All
                  </button>
                </div>
              )}
            </>
          </div>
        )}

        {querySlug == "current-trend-products" ||
        querySlug == "trending-products" ||
        querySlug == "bestseller-product" ||
        querySlug == "timeless-jewellery" ||
        querySlug == undefined ? (
          ""
        ) : (
          <div className="border-2 border-[#400120] flex items-center self-end mx-4 px-1 mb-2 rounded-md">
            <FiSearch className="text-[#6E6B7B] mr-1" size={20} />
            <input
              type={"search"}
              placeholder="Search"
              className="border-none outline-none w-20 h-8 placeholder:text-[#6E6B7B] placeholder:font-normal placeholder:text-sm"
              onChange={(e) => setSearchJewellery(e.target.value)}
              onKeyUp={(e) => setSearchJewellery(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* <div className="grid grid-cols-2  justify-items-center mt-[100px]  gap-6 overflow-y-scroll pb-[20px]"> */}
      {token && querySlug && (
        <InfiniteScrollComponent
          lazyHook={
            querySlug == "current-trend-products"
              ? useLazyGetCurrentTrendingProductsQuery
              : querySlug == "inventory"
              ? useLazyGetAllCatalogueProductsQuery
              : querySlug == "trending-products"
              ? useLazyGetTrendingProductsQuery
              : querySlug == "bestseller-product"
              ? useLazyGetBestSellerProductsQuery
              : querySlug == "timeless-jewellery" &&
                useLazyGetTimeLessJewelleryProductsQuery
          }
          height={windowHeight - 30}
          hookParams={{
            categoryId: categoryFilterIdList,
            productTypeId: productTypeFilterIdList,
            subCategoryId: subCategoryFilterIdList,
            subSubCategoryId: subsubCategoryFilterIdList,
            metalColorId: metalColorFilterIdList,
            location: locationFilterIdList,
            classification: classificationFilterList,
            gender: genderFilterIdList,
            minPrice: minPriceFilterIdList,
            maxPrice: maxPriceFilterIdList,
            size: sizeFilterIdList,
            search: searchJewellery,
          }}
          parentClasses={`grid grid-cols-2 ${
            savedFilters.length !== 0 ||
            maxPriceFilterIdList?.length !== 0 ||
            minPriceFilterIdList?.length !== 0
              ? querySlug === "inventory"
                ? "mt-[170px]"
                : "mt-[130px]"
              : querySlug === "inventory"
              ? "mt-[120px]"
              : "mt-[80px]"
          }  `}
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
          <ProductListingPage />
        </InfiniteScrollComponent>
      )}
    </div>
    // </div>
  );
}

const ProductListingPage = ({ data, clearData }) => {
  const router = useRouter();
  const [addToWishList] = useAddToWishListMutation();
  const routerSlug = router?.query?.id;
  const [showAddingWishlist, setShowAddingToWishist] = useState("");
  let midQuery = router.pathname.split("/");
  let mideQueryParams = midQuery[midQuery.length - 2];

  const handleProductList = (values) => {
    router.push(`/catalogue/product-details/${mideQueryParams}/${values.slug}`);
  };

  const handleWishlist = (values) => {
    const backendFormat = {
      product: values?.slug,
    };

    addToWishList(backendFormat).then((res) => {
      if (res.data) {
        toast.success(res?.data?.message);
        setShowAddingToWishist(res?.data?.message);
        // clearData();
      }
      if (res.error) {
        toast.error(JSON.stringify(res?.error?.data?.message));
      }
    });
  };

  return (
    <div key={data?.id} className="prodList px-4 mb-10  ">
      <div
        className="w-full p-2 rounded-md bg-white"
        style={{
          boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="relative w-full flex ">
          <div
            className=" w-full h-[150px]"
            onClick={() => handleProductList(data)}
          >
            {/* <img
            src={data?.image}
            className="h-full w-full rounded-md drop-shadow-md object-cover"
          /> */}

            {data?.images.length !== 0 ? (
              <img
                src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_BASE_URL}${data?.image?.[0]}`}
                className="h-full w-full rounded-md drop-shadow-md object-cover"
              />
            ) : data?.cdn_images?.length !== 0 ? (
              <img
                src={data?.cdn_images?.[0]}
                className="h-full w-full rounded-md drop-shadow-md object-cover"
              />
            ) : (
              <img
                src="/not-found.png"
                className="h-full w-full rounded-md drop-shadow-md object-cover"
              />
            )}
          </div>

          {showAddingWishlist.length === 0 ? (
            data?.is_wishlist ? (
              <button onClick={() => handleWishlist(data)}>
                <AiFillHeart
                  size={25}
                  color="#CF0606"
                  className={`absolute right-2  top-2 z-10`}
                />
              </button>
            ) : (
              <button onClick={() => handleWishlist(data)}>
                <AiOutlineHeart
                  size={25}
                  color="#daa520"
                  className={`absolute right-2  top-2 z-10`}
                />
              </button>
            )
          ) : showAddingWishlist === "Product Added to Wishlist" ? (
            <button onClick={() => handleWishlist(data)}>
              <AiFillHeart
                size={25}
                color="#CF0606"
                className={`absolute right-2  top-2 z-10`}
              />
            </button>
          ) : (
            <button onClick={() => handleWishlist(data)}>
              <AiOutlineHeart
                size={25}
                color="#daa520"
                className={`absolute right-2  top-2 z-10`}
              />
            </button>
          )}

          <div className="h-5 px-2 bg-liveprice absolute right-0 bottom-0 z-10 flex justify-center items-center rounded-tl-md">
            <p className="text-white font-normal text-xs">
              {routerSlug === "trending-products"
                ? "Trending"
                : routerSlug === "bestseller-product"
                ? "BestSelling"
                : routerSlug === "inventory"
                ? "Trending"
                : routerSlug === "current-trend-products"
                ? "CurrentTrending"
                : routerSlug === "timeless-jewellery" && "Timeless"}
            </p>
          </div>
        </div>
        <div onClick={() => handleProductList(data)} className="w-full">
          <div className="flex justify-between items-center mt-3 w-full">
            <div className="text-base overTextCart font-semibold text-gray-600 w-full">
              <p className="overtext">{data?.title}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="text-15 text-start font-Montserrat  text-black font-semibold">
              ₹ {parseInt(data?.attribute?.total_style_value)}
            </div>
            {/* <div className="flex space-x-1">
              {data?.available_colors?.map((data) => (
                <div
                  className={`w-2 h-2 rounded-full `}
                  style={{ backgroundColor: `${data?.unique_code}` }}
                ></div>
              ))}
            </div> */}

            <div
              className={`w-3 h-3 rounded-full border border-black`}
              style={{
                backgroundColor: `${
                  data?.attribute?.colour === "ROSE"
                    ? "#F2C2A4"
                    : data?.attribute?.colour === "YELLOW"
                    ? "#EAC786"
                    : data?.attribute?.colour === "YELLOW-ROSE"
                    ? "#daa520"
                    : "#D5D1D1"
                }`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
