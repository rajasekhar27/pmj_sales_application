import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useAddToWishListMutation,
  useGetAllCatalogueProductsQuery,
  useGetLimitTimeLessJewelleryProductsQuery,
  useGetLimitTrendingProductsQuery,
  useGetTrendingProductsQuery,
  useLazyGetAllCatalogueProductsQuery,
} from "../../../store/apis/restApi";
import {
  backToProductList,
  closeCatalogueFilterPopup,
  openCatalogueFilterPopup,
  setCategoryFilterId,
  setClearFilters,
  setClearMaxPrice,
  setClearMinPrice,
  setProductSlug,
  setSelectedFilterOptions,
} from "../../../store/slices/catalogue";
export default function TrendingProducts() {
  // const trending = "trending-products";
  const dispatch = useDispatch();
  const router = useRouter();
  const timeless = "timeless-jewellery";

  const salesRepAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );
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

  const savedFilters = useSelector((state) => state.catalogue?.savedFilters);
  // let categoryFilterParams = "";
  // categoryFilterIdList?.map(
  //   (each) =>
  //     (categoryFilterParams += `productAttributeMainModel_product__category=${each}&`)
  // );
  // let backendQueryParams =
  //   "?" + categoryFilterParams.substring(0, categoryFilterParams.length - 1);
  const { data: catalogueProducts } =
    // useGetLimitTrendingProductsQuery
    useGetLimitTimeLessJewelleryProductsQuery(
      {
        categoryId: categoryFilterIdList,
        productTypeId: productTypeFilterIdList,
        subCategoryId: subCategoryFilterIdList,
        subSubCategoryId: subsubCategoryFilterIdList,
        metalColorId: metalColorFilterIdList,
        location: locationFilterIdList,
        gender: genderFilterIdList,
        minPrice: minPriceFilterIdList,
        maxPrice: maxPriceFilterIdList,
        size: sizeFilterIdList,
        limit: 4,
        offset: 0,
      },
      { skip: salesRepAccess ? false : true }
    );
  const [AddToWishList] = useAddToWishListMutation();
  const handleProductList = (values) => {
    router.push(
      `/catalogue/product-details/${router?.query?.id}/${values.slug}`
    );
  };
  const handleWishlist = (values) => {
    const backendFormat = {
      product: values?.slug,
    };
    AddToWishList(backendFormat).then((res) => {
      if (res.data) {
        toast.success(res?.data?.message);
      }
      if (res.error) {
        toast.error(JSON.stringify(res?.error?.data?.message));
      }
    });
  };

  const handleFilterCancel = () => {
    dispatch(setClearFilters());
    // router.push(`/catalogue/product-listing/${mideQueryParams}/${queryParams}`);
  };

  const handleCheckboxClick = (e, type) => {
    dispatch(setCategoryFilterId([e.id, type]));
    dispatch(setSelectedFilterOptions([e, type]));
  };

  return (
    <div className="  ">
      <div className="fixed z-20 top-0 left-0 right-0 flex flex-col bg-white ">
        <div className="flex  justify-between items-center mt-5   bg-[url('/images/backdots.svg')] bg-no-repeat bg-cover rounded h-[62px]  space-x-2 mb-2 mx-4">
          <div className="flex">
            <BiArrowBack
              onClick={() => router.push("/")}
              size={24}
              className="text-white ml-2"
            />
            <div className="text-base text-white font-semibold text-center ml-2">
              Inventory
            </div>
          </div>
          <div className="w-1/5 ">
            <div className="border ml-4 border-white p-1 w-7 rounded">
              <FiFilter
                onClick={() =>
                  router.push(`/catalogue/catalogue-filter/inventory`)
                }
                className="text-white "
              />
            </div>
          </div>
        </div>
        {savedFilters?.length !== 0 && (
          <div className="mt-1 mb-2 border-[1px] border-t border-bg40 mx-4"></div>
        )}
        {(savedFilters?.length !== 0 ||
          (minPriceFilterIdList !== undefined &&
            minPriceFilterIdList?.length !== 0) ||
          (maxPriceFilterIdList !== undefined &&
            maxPriceFilterIdList?.length !== 0)) && (
          <div className="flex mx-4 overflow-x-scroll pb-3">
            <>
              {savedFilters?.map((eachFilter, index) => (
                <div
                  className="flex border-2 border-liveprice mr-2 items-center text-sm pl-2 pr-1 rounded "
                  key={index}
                >
                  {typeof eachFilter[0]?.description === "number"
                    ? eachFilter[0]?.description
                    : eachFilter[0]?.description?.toLowerCase().split(" ")[0]}
                  <button
                    onClick={() =>
                      handleCheckboxClick(eachFilter[0], eachFilter[1])
                    }
                  >
                    <GrFormClose className="ml-1 text-liveprice mt-[2px]" />
                  </button>
                </div>
              ))}

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
                <div className="flex items-center">
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
      </div>

      <div className="mt-2 ">
        <div
          className={`flex justify-between items-center  mt-[100px] px-4 ${
            savedFilters.length !== 0 ? "mt-[147px]" : " mt-[100px]"
          }`}
        >
          <div className="text-[18px] text-bg40 font-semibold">
            {/* Trending Jewellery */}
            Inventory
          </div>
          <div>
            <button
              onClick={() =>
                // router.push(
                //   `/catalogue/product-listing/${router?.query?.id}/${trending}`
                // )
                router.push(
                  `/catalogue/product-listing/${router?.query?.id}/${timeless}`
                )
              }
              className="text-end flex flex-col items-center justify-center  rounded-md h-[33px] text-sm bg-bg40 text-white w-[92px] ml-1"
            >
              <p>View All</p>
            </button>
          </div>
        </div>
        {catalogueProducts?.results?.length !== 0 ? (
          <div className="grid grid-cols-2 mt-5 gap-6 overflow-y-scroll  px-4 pb-2">
            {catalogueProducts?.results?.slice(0, 4).map((each) => (
              <div
                key={each?.id}
                className="width rounded-md bg-white p-2 "
                style={{
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="relative w-full flex">
                  <div
                    className="h-[160px] w-full "
                    onClick={() => handleProductList(each)}
                  >
                    {each?.images.length !== 0 ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_BASE_URL}${each?.image?.[0]}`}
                        className="h-full w-full rounded-md  object-cover"
                      />
                    ) : each?.cdn_images?.length !== 0 ? (
                      <img
                        src={each?.cdn_images?.[0]}
                        className="h-full w-full rounded-md drop-shadow-md object-cover"
                      />
                    ) : (
                      <img
                        src="/not-found.png"
                        className="h-full w-full rounded-md drop-shadow-md object-cover"
                      />
                    )}
                  </div>
                  {each?.is_wishlist ? (
                    <button onClick={() => handleWishlist(each)}>
                      <AiFillHeart
                        size={25}
                        color="#CF0606"
                        className={`absolute right-2  top-2 z-10`}
                      />
                    </button>
                  ) : (
                    <button onClick={() => handleWishlist(each)}>
                      <AiOutlineHeart
                        size={25}
                        color="#daa520"
                        className={`absolute right-2  top-2 z-10`}
                      />
                    </button>
                  )}

                  <div className="h-5 px-2 bg-liveprice absolute right-0 bottom-0 z-10 flex justify-center items-center rounded-tl-md">
                    <p className="text-white font-normal text-xs">Trending</p>
                  </div>
                </div>
                <div onClick={() => handleProductList(each)}>
                  <div className="flex justify-between items-center mt-3">
                    <div className="overTextCart text-base overTextCart font-semibold text-black">
                      {each?.title}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="text-15 text-start font-Montserrat text-[#989898] mt-0">
                      ₹ {parseInt(each?.attribute?.total_style_value)}
                    </div>
                    {/* <div className="flex space-x-1">
                      {each?.available_colors?.map((each) => (
                        <div
                          className={`w-2 h-2 rounded-full `}
                          style={{ backgroundColor: `${each?.unique_code}` }}
                        ></div>
                      ))}
                      
                    </div> */}
                    <div
                      className={`w-3 h-3 rounded-full `}
                      style={{
                        backgroundColor: `${
                          each?.color === "ROSE"
                            ? "#FF007F"
                            : each?.color === "YELLOW"
                            ? "#FFFF00"
                            : "#ffffff"
                        }`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center my-10">No Data</div>
        )}
      </div>
      <div className="flex justify-center mt-5">
        <p className="h-2 w-2 bg-liveprice self-center text-center rounded-full mr-1"></p>
        <p className="h-2 w-2 bg-liveprice self-center text-center rounded-full mr-1"></p>
        <p className="h-2 w-2 bg-liveprice self-center text-center rounded-full"></p>
      </div>
    </div>
  );
}
