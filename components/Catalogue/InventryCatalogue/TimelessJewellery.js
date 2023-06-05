import { useRouter } from "next/router";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useAddToWishListMutation,
  useGetAllCatalogueProductsQuery,
  useGetLimitTimeLessJewelleryProductsQuery,
  useGetTimeLessJewelleryProductsQuery,
} from "../../../store/apis/restApi";
export default function TimelessJewellery() {
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
  const { data: catalogueProducts } = useGetLimitTimeLessJewelleryProductsQuery(
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
  return (
    <div className="px-4  mt-5 mb-5">
      <>
        <div className="flex justify-between items-center  ">
          <div className="text-[18px] text-bg40 font-semibold">
            Timeless Jewellery
          </div>
          <div>
            <button
              onClick={() =>
                router.push(
                  `/catalogue/product-listing/${router?.query?.id}/${timeless}`
                )
              }
              className="text-end flex flex-col items-center justify-center  rounded-md h-[33px] text-sm bg-bg40 text-white w-[92px] ml-1"
            >
              <div>View All</div>
            </button>
          </div>
        </div>
        {catalogueProducts?.results?.length !== 0 ? (
          <div className="grid grid-cols-2 mt-5 gap-6 overflow-y-scroll pb-2 ">
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
                        className="h-full w-full rounded-md drop-shadow-md object-cover"
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
                        color="#000000"
                        className={`absolute right-2  top-2 z-10`}
                      />
                    </button>
                  )}

                  <div className="h-5 px-2 bg-liveprice absolute right-0 bottom-0 z-10 flex justify-center items-center rounded-tl-md">
                    <p className="text-white font-normal text-xs">Timeless</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div className="text-base overTextCart font-semibold text-black overTextCart">
                    {each?.title}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3">
                  <div className="text-15 text-start font-Montserrat text-[#989898] ">
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
            ))}
          </div>
        ) : (
          <div className="text-center my-10">No Data</div>
        )}
      </>

      <div className="flex justify-center mt-5">
        <p className="h-2 w-2 bg-liveprice self-center text-center rounded-full mr-1"></p>
        <p className="h-2 w-2 bg-liveprice self-center text-center rounded-full mr-1"></p>
        <p className="h-2 w-2 bg-liveprice self-center text-center rounded-full"></p>
      </div>
    </div>
  );
}
