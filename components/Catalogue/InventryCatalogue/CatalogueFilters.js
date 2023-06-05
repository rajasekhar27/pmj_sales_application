import React, { Fragment, useEffect } from "react";
import { BiArrowBack, BiChevronRight } from "react-icons/bi";
//headless
import { Tab } from "@headlessui/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import {
  setCategoryFilterId,
  setClearFilters,
  setFilterMaxPrice,
  setFilterMinPrice,
  setSelectedFilterOptions,
} from "../../../store/slices/catalogue";
import {
  useGetCatalogueCategoryTypeQuery,
  useGetCatalogueSubCategoryTypeQuery,
  useGetCatalogueSubSubCategoryTypeQuery,
  useLazyGetCatalogueCategoryTypeQuery,
  useLazyGetCatalogueProductTypeFiltersQuery,
  useLazyGetCatalogueSubCategoryTypeQuery,
  useLazyGetCatalogueSubSubCategoryTypeQuery,
  useLazyGetClassificationFiltersQuery,
  useLazyGetLocationFilterTypeQuery,
} from "../../../store/apis/restApi";
import { toast } from "react-toastify";
import { useState } from "react";
import { useViewportSize } from "@mantine/hooks";
import InfiniteScrollComponent from "../../UI/InfiniteScrollComponent2";

const ringSize = [
  { slug: "ringSize4", id: 4, value: 4, description: 4, title: 4 },
  { slug: "ringSize6", id: 6, value: 6, description: 6, title: 6 },
  { slug: "ringSize8", id: 8, value: 8, description: 8, title: 8 },
  { slug: "ringSize10", id: 10, value: 10, description: 10, title: 10 },
  { slug: "ringSize12", id: 12, value: 12, description: 12, title: 12 },
  { slug: "ringSize14", id: 14, value: 14, description: 14, title: 14 },
  { slug: "ringSize16", id: 16, value: 16, description: 16, title: 16 },
  { slug: "ringSize18", id: 18, value: 18, description: 18, title: 18 },
  { slug: "ringSize20", id: 20, value: 20, description: 20, title: 20 },
  { slug: "ringSize22", id: 22, value: 22, description: 22, title: 22 },
  { slug: "ringSize24", id: 24, value: 24, description: 24, title: 24 },
  { slug: "ringSize26", id: 26, value: 26, description: 26, title: 26 },
  { slug: "ringSize28", id: 28, value: 28, description: 28, title: 28 },
  { slug: "ringSize30", id: 30, value: 30, description: 30, title: 30 },
];

const bangleSize = [
  { id: 1.4, value: 1.4, description: 1.4 },
  { id: 2.0, value: 2.0, description: 2.0 },
  { id: 2.2, value: 2.2, description: 2.2 },
  { id: 2.4, value: 2.4, description: 2.4 },
  { id: 2.6, value: 2.6, description: 2.6 },
  { id: 2.8, value: 2.8, description: 2.8 },
  { id: 3.0, value: 3.0, description: 3.0 },
  { id: 3.2, value: 3.2, description: 3.2 },
  { id: 3.4, value: 3.4, description: 3.4 },
  { id: 3.6, value: 3.6, description: 3.6 },
  { id: 3.8, value: 3.8, description: 3.8 },
  { id: 4.0, value: 4.0, description: 4.0 },
];

const chainSize = [
  { id: 16, value: 16, description: 16 },
  { id: 18, value: 18, description: 18 },
  { id: 20, value: 20, description: 20 },
  { id: 22, value: 22, description: 22 },
];
const barceletsize = [
  { id: 9, value: 9, description: 9 },
  { id: 10, value: 10, description: 10 },
  { id: 11, value: 11, description: 11 },
];

export default function CatalogueFilters() {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    watch,
  } = useForm();
  const router = useRouter();
  let midQuery = router.pathname.split("/");
  let mideQueryParams = midQuery[midQuery.length - 2];
  let lastQueryParams = midQuery[midQuery.length - 1];
  const [validation, setValidation] = useState(false);
  const [tempFilters, setTempFilters] = useState([]);
  const [moreFilters, setMoreFilters] = useState(false);

  const { height: windowHeight } = useViewportSize();
  let customHeight = windowHeight - 102 - 73.6 - 40;
  const dispatch = useDispatch();
  const queryParams = router?.query?.id;
  const salesRepAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );
  const customerAccess = useSelector(
    (state) => state.auth.Customer?.accessToken
  );

  const selectedFilters = useSelector(
    (state) => state.catalogue?.selectedFilters
  );

  const max_price = useSelector(
    (state) => state.catalogue?.filterOptions?.maxPrice
  );
  const min_price = useSelector(
    (state) => state.catalogue?.filterOptions?.minPrice
  );

  // Category Filter Logic
  let productTypeStore = useSelector(
    (state) => state.catalogue?.filterOptions?.productTypeId
  );

  let unpackedProductTypeFilters = tempFilters.filter(
    (each) => each[1] === "Product Type"
  );

  let requiredProductTypeFilters = unpackedProductTypeFilters.map(
    (each) => each[0]?.id
  );

  // sub category Filter Logic

  let categoryTypeStore = useSelector(
    (state) => state.catalogue?.filterOptions.categoryId
  );

  let unpackedProductTypeAndCategoryFilters = tempFilters.filter(
    (each) => each[1] === "Category"
  );

  let requiredProductTypeAndCategoryTypeFilters =
    unpackedProductTypeAndCategoryFilters.map((each) => each[0]?.id);

  // sub sub category Filter Logic
  let subCatagoryTypeStore = useSelector(
    (state) => state.catalogue?.filterOptions?.subCategoryId
  );

  let unpackedProductTypeAndCategoryTypeAndSubCategoryFilters =
    tempFilters.filter((each) => each[1] === "Sub-Category");

  let requiredSubCategoryFilters =
    unpackedProductTypeAndCategoryTypeAndSubCategoryFilters.map(
      (each) => each[0]?.id
    );

  // Hide Filters When No Data is Found

  const { data: categoryCheck } = useGetCatalogueCategoryTypeQuery(
    {
      product_type_params: [...productTypeStore, ...requiredProductTypeFilters],
    },
    { skip: salesRepAccess ? false : true }
  );

  const { data: subCategoryCheck } = useGetCatalogueSubCategoryTypeQuery(
    {
      product_type_params: [...productTypeStore, ...requiredProductTypeFilters],
      category_type_params: [
        ...categoryTypeStore,
        ...requiredProductTypeAndCategoryTypeFilters,
      ],
    },
    { skip: salesRepAccess ? false : true }
  );

  const { data: subSubCategoryCheck } = useGetCatalogueSubSubCategoryTypeQuery(
    {
      product_type_params: [...productTypeStore, ...requiredProductTypeFilters],
      category_type_params: [
        ...categoryTypeStore,
        ...requiredProductTypeAndCategoryTypeFilters,
      ],
      subcategory_type_params: [
        ...subCatagoryTypeStore,
        ...requiredSubCategoryFilters,
      ],
    },
    { skip: salesRepAccess ? false : true }
  );

  // Filters Data
  const filterJewel = [
    {
      id: "1",
      title: "Classification",
    },
    {
      id: "2",
      title: "Product Type",
    },
    {
      id: "3",
      title: "Category",
    },
    {
      id: "4",
      title: "Sub-Category",
    },
    {
      id: "5",

      title: "Price Range",
      data: [
        { id: "1", description: "Min Price" },
        { id: "2", description: "Max Price" },
      ],
    },
    {
      id: "6",
      title: "Sub-Sub-Category",
    },
    {
      id: "7",
      title: "Metal Colour",
      data: [
        {
          slug: "yellow",
          id: "YELLOW",
          description: "YELLOW",
          title: "YELLOW",
        },
        { slug: "rose", id: "ROSE", description: "ROSE", title: "ROSE" },
        { slug: "white", id: "WHITE", description: "WHITE", title: "WHITE" },
        {
          slug: "yellow-rose",
          id: "YELLOW-ROSE",
          description: "YELLOW-ROSE",
          title: "YELLOW-ROSE",
        },
      ],
    },

    {
      id: "8",
      title: "Gender",
      data: [
        { slug: "men", id: "MEN", description: "MEN", title: "MEN" },
        {
          slug: "women",
          id: "WOMEN",
          description: "WOMEN",
          title: "WOMEN",
        },
        {
          slug: "baby",
          id: "BABY",
          description: "BABY",
          title: "BABY",
        },
      ],
    },

    {
      id: "9",
      title: "Selected Size",
      data: ringSize,
    },

    {
      id: "10",
      title: "Location",
    },
    // {
    //   id: "11",

    //   title: "Detachable",
    //   data: [
    //     { id: "1", title: "Min" },
    //     { id: "2", title: "Max" },
    //   ],
    // },
  ];

  const handleCheckboxClick = (e, type) => {
    if (tempFilters.length === 0) {
      setTempFilters([...tempFilters, [e, type]]);
      return;
    }

    if (type !== "Metal Colour") {
      const index = tempFilters.findIndex(
        (eachFilter) => eachFilter[0].id + eachFilter[1] === e.id + type
      );

      if (index === -1) {
        setTempFilters([...tempFilters, [e, type]]);
      } else {
        setTempFilters([
          ...tempFilters.slice(0, index),
          ...tempFilters.slice(index + 1, tempFilters.length),
        ]);
      }
    } else {
      const colorIndex = tempFilters.findIndex(
        (eachFilter) => eachFilter[1] === type
      );

      if (colorIndex === -1) {
        setTempFilters([...tempFilters, [e, type]]);
      } else {
        setTempFilters([
          ...tempFilters.slice(0, colorIndex),
          ...tempFilters.slice(colorIndex + 1, tempFilters.length),
          [e, type],
        ]);
      }
    }
  };

  const onSubmit = () => {
    const [max_price, min_price] = watch(["Max Price", "Min Price"]);
    if (
      (min_price == undefined && max_price == undefined) ||
      (min_price == "" && max_price == "") ||
      parseInt(max_price) > parseInt(min_price) ||
      min_price == undefined ||
      min_price == "" ||
      max_price == "" ||
      max_price == undefined
    ) {
      dispatch(setFilterMaxPrice(max_price));
      dispatch(setFilterMinPrice(min_price));

      {
        lastQueryParams !== "inventory"
          ? router.push(
              `/catalogue/product-listing/${mideQueryParams}/${queryParams}`
            )
          : router.push(`/catalogue/all-category-products/inventory-catalogue`);
      }
    } else {
      setValidation(true);
    }

    tempFilters.map((eachStateFilter) => {
      dispatch(setCategoryFilterId(eachStateFilter));
      dispatch(setSelectedFilterOptions(eachStateFilter));
    });
  };

  const handleFilterCancel = () => {
    dispatch(setClearFilters());
    {
      lastQueryParams !== "inventory"
        ? router.push(
            `/catalogue/product-listing/${mideQueryParams}/${queryParams}`
          )
        : router.push(`/catalogue/all-category-products/inventory-catalogue`);
    }
  };

  // Default Selection Checkbox logic
  let defaultSelectionFilters = selectedFilters;
  if (tempFilters.length !== 0) {
    let selectedTemporary = tempFilters?.map((each) => {
      if (!selectedFilters.includes(each[0]?.slug)) {
        return each[0]?.slug;
      } else {
        return "";
      }
    });

    defaultSelectionFilters = [...selectedFilters, ...selectedTemporary];
  }

  return (
    <div className=" bg-white h-screen w-full flex flex-col justify-between">
      <form onSubmit={handleSubmit(onSubmit)} className="h-full">
        <div className="mx-4 ">
          <div className="flex items-center justify-center  bg-[url('/images/backdots.svg')] bg-no-repeat bg-cover rounded h-[62px] w-full space-x-2 my-5">
            <BiArrowBack
              onClick={() => router.back()}
              size={30}
              className="text-white w-1/5"
            />
            <div className="w-3/5">
              <div className="text-[24px] text-white font-semibold text-center">
                Filter
              </div>
            </div>
            <div className="w-1/5"></div>
          </div>
        </div>

        <Tab.Group>
          <div
            className="flex  justify-around text-22 px-4  overflow-y-scroll"
            style={{ height: `${customHeight}px` }}
          >
            <Tab.List className="overflow-y-scroll w-1/2">
              <div className="flex justify-between items-baseline ">
                <div className="w-full">
                  {filterJewel?.map((filter, i) => {
                    return (
                      <div
                        key={filter.id}
                        className={`${
                          (filter?.title === "Category" &&
                            categoryCheck?.results?.length === 0) ||
                          (filter?.title === "Sub-Category" &&
                            subCategoryCheck?.results?.length === 0) ||
                          (filter?.title === "Sub-Sub-Category" &&
                            subSubCategoryCheck?.results?.length === 0)
                            ? `hidden`
                            : ""
                        } ${!moreFilters && (i > 4 ? "hidden" : "")}`}
                      >
                        <Tab as={Fragment} key={filter.id}>
                          {({ selected }) => (
                            <button
                              //   onClick={(e) => handleFind(f.id)}
                              className={
                                selected
                                  ? "font-medium flex justify-between items-center w-full border-black bg-bg40 text-white rounded-md px-1 text-16  outline-none py-1"
                                  : "font-medium flex justify-between items-center w-full text-[#5E5873] text-16   outline-none py-1 px-1"
                              }
                            >
                              <div className="text-start">{filter.title}</div>
                              <BiChevronRight size={35} className="text-end" />
                            </button>
                          )}
                        </Tab>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={`flex flex-col mx-4 mt-2 `}>
                <button
                  className="flex items-center text-base text-[#400120] font-semibold self-end px-1"
                  type="button"
                  onClick={() => setMoreFilters(!moreFilters)}
                >
                  {moreFilters && (
                    <img
                      src="/images/view-all.svg"
                      className="mr-1 rotate-180"
                    />
                  )}
                  {!moreFilters ? "More Filters" : "Less Filters"}
                  {!moreFilters && (
                    <img src="/images/view-all.svg" className="ml-1" />
                  )}
                </button>
              </div>
            </Tab.List>
            <div className=" w-1 border-l mx-2 border-bg40"></div>
            <Tab.Panels className="w-1/2 ">
              {filterJewel?.map((filter, i) => (
                <Tab.Panel
                  className="overflow-y-scroll"
                  key={i}
                  style={{ height: `${customHeight}px` }}
                >
                  <div
                    className={
                      filter.title == "Price Range"
                        ? "flex overflow-y-scroll "
                        : "overflow-y-scroll "
                    }
                  >
                    {filter?.title === "Category" ||
                    filter?.title === "Product Type" ||
                    filter?.title === "Sub-Category" ||
                    filter?.title === "Sub-Sub-Category" ||
                    filter?.title === "Classification" ||
                    filter?.title === "Location" ? (
                      salesRepAccess && (
                        <InfiniteScrollComponent
                          lazyHook={
                            filter?.title === "Category"
                              ? useLazyGetCatalogueCategoryTypeQuery
                              : filter?.title === "Product Type"
                              ? useLazyGetCatalogueProductTypeFiltersQuery
                              : filter?.title === "Sub-Category"
                              ? useLazyGetCatalogueSubCategoryTypeQuery
                              : filter?.title === "Sub-Sub-Category"
                              ? useLazyGetCatalogueSubSubCategoryTypeQuery
                              : filter?.title === "Classification"
                              ? useLazyGetClassificationFiltersQuery
                              : filter?.title === "Location" &&
                                useLazyGetLocationFilterTypeQuery
                          }
                          height={customHeight}
                          hookParams={{
                            product_type_params: filter?.title !==
                              "Product Type" && [
                              ...productTypeStore,
                              ...requiredProductTypeFilters,
                            ],
                            category_type_params: (filter?.title ===
                              "Sub-Category" ||
                              filter?.title === "Sub-Sub-Category") && [
                              ...categoryTypeStore,
                              ...requiredProductTypeAndCategoryTypeFilters,
                            ],
                            subcategory_type_params: filter?.title ===
                              "Sub-Sub-Category" && [
                              ...subCatagoryTypeStore,
                              ...requiredSubCategoryFilters,
                            ],
                          }}
                          parentClasses={` `}
                          customLoader={
                            <p
                              style={{
                                textAlign: "center",
                                fontSize: "10px",
                              }}
                            >
                              <b>loading....</b>
                            </p>
                          }
                        >
                          <FilterComponent
                            filter={filter}
                            handleTemporaryState={handleCheckboxClick}
                            temporaryFilters={tempFilters}
                            selectedFilters={selectedFilters}
                          />
                        </InfiniteScrollComponent>
                      )
                    ) : filter?.title === "Metal Colour" ? (
                      <>
                        {filter?.data?.map((data, index) => (
                          <div
                            className="flex items-center py-2"
                            key={data?.slug}
                          >
                            <input
                              type="radio"
                              name="name"
                              id={data?.slug}
                              value={data?.title}
                              defaultChecked={defaultSelectionFilters.includes(
                                data?.slug
                              )}
                              className="accent-liveprice mt-1"
                              onClick={() =>
                                handleCheckboxClick(data, filter?.title)
                              }
                            />
                            <div className="text-sm text-left ml-2 text-[#5E5873]">
                              {data?.description.toUpperCase()}
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      filter?.data?.map((data, index) => (
                        <div
                          className="flex items-center py-2 w-full "
                          key={index}
                        >
                          {data.description == "Max Price" && (
                            <div className="pt-5 px-1">-</div>
                          )}
                          {data.description == "Min Price" ||
                          data.description == "Max Price" ? (
                            <div className="flex flex-col justify-between">
                              <div className="text-[10px] text-start w-full  text-[#5E5873]">
                                {data.description}
                              </div>
                              <input
                                defaultValue={`${
                                  data?.description === "Max Price"
                                    ? max_price
                                    : min_price
                                }`}
                                type="number"
                                {...register(`${data.description}`)}
                                className={`w-full border rounded text-sm pl-1 ${
                                  data.description == "Max Price" &&
                                  validation &&
                                  "border-2 border-red-500"
                                }`}
                              />
                            </div>
                          ) : (
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-start">
                                <input
                                  type={"checkbox"}
                                  defaultChecked={
                                    selectedFilters?.findIndex(
                                      (each) => each === data?.slug
                                    ) !== -1
                                  }
                                  value={
                                    filter?.title == "Selected Size"
                                      ? data?.value
                                      : data?.title
                                  }
                                  {...register(`${data?.slug}`)}
                                  className="accent-liveprice mt-1"
                                  onClick={() =>
                                    handleCheckboxClick(data, filter?.title)
                                  }
                                />
                                <div className="text-sm text-left ml-2 text-[#5E5873]">
                                  {filter?.title == "Location"
                                    ? data?.location
                                    : filter?.title == "Selected Size"
                                    ? data?.value // data?.value + data?.description
                                    : data?.description.toUpperCase()}
                                </div>
                              </div>

                              {filter?.title == "Metal Colour" && (
                                <div
                                  className={`w-4 h-4 rounded-full ml-1`}
                                  style={{
                                    backgroundColor: `${data?.unique_code}`,
                                  }}
                                ></div>
                              )}
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>

                  {validation && filter?.title == "Price Range" && (
                    <p className="text-red-500 text-[9px] leading-3">
                      *max price should be greater than min price
                    </p>
                  )}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>

        <div className="h-10"></div>
        <div
          style={{
            boxShadow: "4px 0px 16px rgba(0, 0, 0, 0.35)",
          }}
          className=" py-5 bg-white "
        >
          <div className="flex justify-around">
            <button
              type="button"
              onClick={handleFilterCancel}
              className="px-5 flex items-center border-bg40 border text-bg40 rounded py-1"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-5 bg-bg40 text-white rounded py-1"
            >
              Apply
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

const FilterComponent = ({
  data,
  filter,
  handleTemporaryState,
  temporaryFilters,
  selectedFilters,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    watch,
  } = useForm();
  const router = useRouter();

  const max_price = useSelector(
    (state) => state.catalogue?.filterOptions?.maxPrice
  );
  const min_price = useSelector(
    (state) => state.catalogue?.filterOptions?.minPrice
  );

  // Default Selection Checkbox logic
  let defaultSelectionFilters = selectedFilters;
  if (temporaryFilters.length !== 0) {
    let selectedTemporary = temporaryFilters?.map((each) => {
      if (!selectedFilters.includes(each[0]?.slug)) {
        return each[0]?.slug;
      } else {
        return "";
      }
    });

    defaultSelectionFilters = [...selectedFilters, ...selectedTemporary];
  }

  return (
    <>
      <div className="flex items-center py-2 w-full ">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-start">
            <div>
              <input
                type={"checkbox"}
                defaultChecked={
                  defaultSelectionFilters?.findIndex(
                    (each) => each === data?.slug
                  ) !== -1
                }
                value={data?.title}
                {...register(`${data?.slug}`)}
                className="accent-liveprice mt-1"
                onClick={() => handleTemporaryState(data, filter?.title)}
              />
            </div>
            <div className="text-sm text-left ml-2 text-[#5E5873]">
              {data?.description.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
