import {
  createApi,
  fetchBaseQuery,
  QueryStatus,
} from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const accountsApi = "accounts/api/client/v1";
const feedbackApi = "feedback/api/client/v1";
const incentiveApi = "orders/api/client/v1";
const selectJewel = "cart/api/client/v1";
const coreApi = "coreutils/api/client/v1";
const wishListApi = "wishlist/api/client/v2";
// const wishListApi = "wishlist/api/client/v1";
const jewelleryApi = "jewellery-category/api/client/v1";
const productApi = "products/api/client/v1";
// const productApi = "product/api/client/v1";
const storeApi = "store/api/client/v1";
const customClient = "customutils/api/client/v1";

const restApi = createApi({
  reducerPath: "restApi",

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const salesRepToken = getState()?.auth?.SalesRepresentative?.accessToken;
      const customerToken = getState()?.auth?.Customer.accessToken;

      if (salesRepToken) {
        headers.set("authorization", `Bearer ${salesRepToken}`);
      }

      if (customerToken) {
        headers.set("x-customer-token", `${customerToken}`);
      }

      return headers;
    },
  }),

  tagTypes: [
    "tags",
    "feedbacks",
    "CustomerProfile",
    "updateCustomerProfile",
    "selectJewellery",
    "cartProducts",
    "catalogueProducts",
    "allProducts",
    "wishlistList",
    "logout",
    "registration",
    "customerDetails",
    "updateStateList",
    "scannerProduct",
    "wishlistPdf",
  ],

  endpoints: (builder) => ({
    //SalesRepLogin
    salesRepLogin: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${accountsApi}/sales-person-login/`,
        method: "POST",
        body: data,
      }),
    }),

    //CustomerLogin
    customerLogin: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${accountsApi}/customer-login/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["customerDetails"],
    }),

    //CustomerRegistration
    customerRegistration: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${accountsApi}/customer-registration/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["registration"],
    }),

    //All Tags in Feedback
    getAllTags: builder.query({
      query: (data) => `${baseUrl}${feedbackApi}/tags/`,
      providesTags: ["tags"],
    }),

    //All Tags in Feedback
    getAllFeedbacks: builder.query({
      query: () => ({
        url: `${baseUrl}${feedbackApi}/feedbacks/`,
        method: "GET",
      }),

      providesTags: ["feedbacks"],
    }),

    //Tag Like
    tagLikeRequest: builder.mutation({
      query: ({ tag_slug, user_slug }) => ({
        url: `${baseUrl}${feedbackApi}/like-to-tag/${tag_slug}/`,
        method: "PUT",
        body: { user_slug: user_slug },
      }),
      invalidatesTags: ["tags"],
    }),

    //Feedback Like
    feedbackLikeRequest: builder.mutation({
      query: ({ feedback_slug }) => ({
        url: `${baseUrl}${feedbackApi}/like-to-feedback/${feedback_slug}/`,
        method: "PUT",
      }),
      invalidatesTags: ["feedbacks"],
    }),

    //Add New  Tag
    AddNewTag: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${feedbackApi}/tag-create/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["tags"],
    }),

    //Add New Feedback
    AddNewFeedback: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${feedbackApi}/feedback-create/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["feedbacks"],
    }),

    //All Incentives
    getAllIncentives: builder.query({
      query: (data) =>
        `${baseUrl}${incentiveApi}/sales-order-incentives/?status=${data.status}&limit=${data.limit}&offset=${data.offset}`,
    }),

    //All Select Jewel
    getAllSelectJewel: builder.query({
      query: () => `${baseUrl}${selectJewel}/customer-selected-product/`,
      providesTags: ["selectJewellery", "cartProducts"],
    }),

    //Reject Select Jewel
    rejectSelectJewel: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${selectJewel}/reject-selected-jewellery/${data.productSlug}/`,
        method: "PUT",
        body: {
          reason: data.reason,
        },
      }),
      invalidatesTags: ["selectJewellery"],
    }),

    // Select Jewel Extimateprice
    getExtimatePriceDetails: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/product-estimate-details/${data.slug}/`,
    }),

    //post  select Jewel EstimatePrice
    handleConditionEstimatePriceDetails: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${customClient}/estimate-pdf/`,
        method: "POST",
        body: data,
      }),
    }),

    // Add Select Jewel to Cart,
    addSelectJewelToCart: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${selectJewel}/selected-to-produts/${data.slug}/`,
        method: "PUT",
      }),
      invalidatesTags: ["cartProducts"],
    }),

    //logout
    handleLogout: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${accountsApi}/customer-checkout/${data.slug}/`,
        method: "GET",
      }),
      providesTags: ["logout"],
    }),

    //getAllCartProducts
    getCartProducts: builder.query({
      query: (data) => `${baseUrl}${selectJewel}/customer-cart-product/`,
      providesTags: ["cartProducts", "selectJewellery"],
    }),

    // create order
    createOrder: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${incentiveApi}/customer-order-create/`,
        method: "POST",
        body: data,
      }),
    }),

    //Countries
    getCountriesList: builder.query({
      query: () => `${baseUrl}${coreApi}/country/`,
    }),

    //All States
    getAllStateDetails: builder.query({
      query: () => `${baseUrl}${coreApi}/state/`,
      providesTags: ["updateStateList"],
    }),

    //All Cities
    getAllCityDetails: builder.query({
      query: (data) =>
        `${baseUrl}${coreApi}/city/?state_city=${data?.state_city_id}`,
      providesTags: ["updateStateList"],
    }),

    //All Cities
    getAllStateCityDetails: builder.query({
      query: (data) =>
        `${baseUrl}${coreApi}/city/?state_city=${data?.state_city_id}`,
      providesTags: ["updateStateList"],
    }),

    //catalogue Products Listing
    getAllCatalogueProducts: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/catalogue-products/?category=${
          data?.categoryId
        }&product_type=${data?.productTypeId}&sub_category=${
          data?.subCategoryId
        }&sub_sub_category=${data?.subSubCategoryId}&colour=${
          data?.metalColorId
        }&location=${data?.location}&gender=${data?.gender}&min_price=${
          data?.minPrice == undefined ? "" : data?.minPrice
        }&max_price=${data?.maxPrice == undefined ? "" : data?.maxPrice}&size=${
          data?.size
        }&classification=${data?.classification}&limit=${data?.limit}&offset=${
          data?.offset
        }&search=${data?.search}`,
      // providesTags: ["catalogueProducts"],
    }),

    //Add to WishList
    AddToWishList: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${wishListApi}/product-to-wishlist/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [
        "catalogueProducts",
        "lazyAllProducts",
        "allProducts",
        "wishlistList",
        "wishlistPdf",
      ],
    }),

    //Catalogue Products Details
    getCatalogueProductDetails: builder.query({
      query: (data) => `${baseUrl}${productApi}/product-details/${data?.slug}/`,
      providesTags: ["catalogueProducts"],
    }),

    //Lazy catalogue Product-Type
    getCatalogueProductTypeFilters: builder.query({
      query: (data) =>
        `${baseUrl}${jewelleryApi}/jewellery-product-type/?limit=${data?.limit}&offset=${data?.offset}`,
    }),

    //Lazy catalogue Category
    getCatalogueCategoryType: builder.query({
      query: (data) =>
        `${baseUrl}${jewelleryApi}/jewellery-category/?limit=${data?.limit}&offset=${data?.offset}&product_type=${data?.product_type_params}`,
    }),

    //Lazy catalogue sub-category
    getCatalogueSubCategoryType: builder.query({
      query: (data) =>
        `${baseUrl}${jewelleryApi}/jewellery-sub-category/?limit=${data?.limit}&offset=${data?.offset}&product_type=${data?.product_type_params}&category=${data?.category_type_params}`,
    }),

    //Lazy catalogue sub-sub-category
    getCatalogueSubSubCategoryType: builder.query({
      query: (data) =>
        `${baseUrl}${jewelleryApi}/jewellery-sub-sub-category/?limit=${data?.limit}&offset=${data?.offset}&product_type=${data?.product_type_params}&category=${data?.category_type_params}&sub_category=${data?.subcategory_type_params}`,
    }),

    // Lazy classification filters
    getClassificationFilters: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/product-classification/?limit=${data?.limit}&offset=${data?.offset}`,
    }),

    //metal-color-filter
    getMetalColorFilterType: builder.query({
      query: (data) => `${baseUrl}${productApi}/product-colors/?limit=100`,
    }),

    //Location-filters
    getLocationFilterType: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/product-locations/?limit=${data?.limit}&offset=${data?.offset}`,
    }),

    //Selected-Size
    getSelectedSize: builder.query({
      query: (data) => `${baseUrl}${productApi}/product-sizes/?limit=100`,
    }),

    //customer login Id's and Password
    getCustomerLoginDetails: builder.query({
      query: (data) =>
        `${baseUrl}${accountsApi}/get-all-customers/?is_customer=true&search=${data?.value}`,
      providesTags: ["registration"],
    }),

    //currentTrending
    getCurrentTrendingProducts: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/current-trending-product/?category=${
          data?.categoryId
        }&product_type=${data?.productTypeId}&sub_category=${
          data?.subCategoryId
        }&sub_sub_category=${data?.subSubCategoryId}&colour=${
          data?.metalColorId
        }&location=${data?.location}&gender=${data?.gender}&min_price=${
          data?.minPrice == undefined ? "" : data?.minPrice
        }&max_price=${data?.maxPrice == undefined ? "" : data?.maxPrice}&size=${
          data?.size
        }&classification=${data?.classification}&limit=${data?.limit}&offset=${
          data?.offset
        }&search=${data?.search}`,
    }),

    //catalogue Products
    // getCatalogueJewelleryProducts: builder.query({
    //   query: (data) =>
    //     `${baseUrl}${productApi}/catalogue-products/?category=${
    //       data?.categoryId
    //     }&product_type=${data?.productTypeId}&sub_category=${
    //       data?.subCategoryId
    //     }&sub_sub_category=${data?.subSubCategoryId}&colour=${
    //       data?.metalColorId
    //     }&location=${data?.location}&gender=${data?.gender}&min_price=${
    //       data?.minPrice == undefined ? "" : data?.minPrice
    //     }&max_price=${data?.maxPrice == undefined ? "" : data?.maxPrice}&size=${
    //       data?.size
    //     }&limit=${data?.limit}&offset=${data?.offset}`,
    // }),

    //trending-product
    getTrendingProducts: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/trending-product/?category=${
          data?.categoryId
        }&product_type=${data?.productTypeId}&sub_category=${
          data?.subCategoryId
        }&sub_sub_category=${data?.subSubCategoryId}&colour=${
          data?.metalColorId
        }&location=${data?.location}&gender=${data?.gender}&min_price=${
          data?.minPrice == undefined ? "" : data?.minPrice
        }&max_price=${data?.maxPrice == undefined ? "" : data?.maxPrice}&size=${
          data?.size
        }&classification=${data?.classification}&limit=${data?.limit}&offset=${
          data?.offset
        }&search=${data?.search}`,
    }),

    //best-seller-product
    getBestSellerProducts: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/best-seller-product/?category=${
          data?.categoryId
        }&product_type=${data?.productTypeId}&sub_category=${
          data?.subCategoryId
        }&sub_sub_category=${data?.subSubCategoryId}&colour=${
          data?.metalColorId
        }&location=${data?.location}&gender=${data?.gender}&min_price=${
          data?.minPrice == undefined ? "" : data?.minPrice
        }&max_price=${data?.maxPrice == undefined ? "" : data?.maxPrice}&size=${
          data?.size
        }&classification=${data?.classification}&limit=${data?.limit}&offset=${
          data?.offset
        }&search=${data?.search}`,
    }),

    //time-less-jewellery
    getTimeLessJewelleryProducts: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/timeless-jewellery/?category=${
          data?.categoryId
        }&product_type=${data?.productTypeId}&sub_category=${
          data?.subCategoryId
        }&sub_sub_category=${data?.subSubCategoryId}&colour=${
          data?.metalColorId
        }&location=${data?.location}&gender=${data?.gender}&min_price=${
          data?.minPrice == undefined ? "" : data?.minPrice
        }&max_price=${data?.maxPrice == undefined ? "" : data?.maxPrice}&size=${
          data?.size
        }&classification=${data?.classification}&limit=${data?.limit}&offset=${
          data?.offset
        }&search=${data?.search}`,
    }),

    //currentTrending
    getLimitCurrentTrending: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/current-trending-product/?category=${
          data?.categoryId
        }&product_type=${data?.productTypeId}&sub_category=${
          data?.subCategoryId
        }&sub_sub_category=${data?.subSubCategoryId}&colour=${
          data?.metalColorId
        }&location=${data?.location}&gender=${data?.gender}&min_price=${
          data?.minPrice == undefined ? "" : data?.minPrice
        }&max_price=${data?.maxPrice == undefined ? "" : data?.maxPrice}&size=${
          data?.size
        }&classification=${data?.classification}&limit=${data?.limit}&offset=${
          data?.offset
        }&search=${data?.search}`,
      providesTags: ["allProducts"],
    }),

    //trending-product
    getLimitTrendingProducts: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/trending-product/?category=${
          data?.categoryId
        }&product_type=${data?.productTypeId}&sub_category=${
          data?.subCategoryId
        }&sub_sub_category=${data?.subSubCategoryId}&colour=${
          data?.metalColorId
        }&location=${data?.location}&gender=${data?.gender}&min_price=${
          data?.minPrice == undefined ? "" : data?.minPrice
        }&max_price=${data?.maxPrice == undefined ? "" : data?.maxPrice}&size=${
          data?.size
        }&classification=${data?.classification}&limit=${data?.limit}&offset=${
          data?.offset
        }&search=${data?.search}`,
      providesTags: ["allProducts"],
    }),

    //best-seller-product
    getLimitBestSellerProducts: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/best-seller-product/?category=${
          data?.categoryId
        }&product_type=${data?.productTypeId}&sub_category=${
          data?.subCategoryId
        }&sub_sub_category=${data?.subSubCategoryId}&colour=${
          data?.metalColorId
        }&location=${data?.location}&gender=${data?.gender}&min_price=${
          data?.minPrice == undefined ? "" : data?.minPrice
        }&max_price=${data?.maxPrice == undefined ? "" : data?.maxPrice}&size=${
          data?.size
        }&classification=${data?.classification}&limit=${data?.limit}&offset=${
          data?.offset
        }&search=${data?.search}`,
      providesTags: ["allProducts"],
    }),

    //time-less-jewellery
    getLimitTimeLessJewelleryProducts: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/timeless-jewellery/?category=${
          data?.categoryId
        }&product_type=${data?.productTypeId}&sub_category=${
          data?.subCategoryId
        }&sub_sub_category=${data?.subSubCategoryId}&colour=${
          data?.metalColorId
        }&location=${data?.location}&gender=${data?.gender}&min_price=${
          data?.minPrice == undefined ? "" : data?.minPrice
        }&max_price=${data?.maxPrice == undefined ? "" : data?.maxPrice}&size=${
          data?.size
        }&classification=${data?.classification}&limit=${data?.limit}&offset=${
          data?.offset
        }&search=${data?.search}`,
      providesTags: ["allProducts"],
    }),

    //catalogue Products
    getLimitCatalogueJewelleryProducts: builder.query({
      query: (data) =>
        `${baseUrl}${productApi}/catalogue-products/?category=${
          data?.categoryId
        }&product_type=${data?.productTypeId}&sub_category=${
          data?.subCategoryId
        }&sub_sub_category=${data?.subSubCategoryId}&colour=${
          data?.metalColorId
        }&location=${data?.location}&gender=${data?.gender}&min_price=${
          data?.minPrice == undefined ? "" : data?.minPrice
        }&max_price=${data?.maxPrice == undefined ? "" : data?.maxPrice}&size=${
          data?.size
        }&classification=${data?.classification}&limit=${data?.limit}&offset=${
          data?.offset
        }`,
      providesTags: ["allProducts"],
    }),

    //.....................................................................................................

    //Customer Details
    getCustomerDetails: builder.query({
      query: (data) => `${baseUrl}${accountsApi}/customer-details/`,
      providesTags: ["CustomerProfile", "updateCustomerProfile"],
    }),

    //Customer Lazy visit store
    getCustomerVisitStore: builder.query({
      query: (data) =>
        `${baseUrl}${accountsApi}/customer-visited-history/?limit=${data?.limit}&offset=${data?.offset}`,
      providesTags: ["logout", "customerDetails"],
    }),

    //Customer visit store
    getLimitCustomerVisitStore: builder.query({
      query: (data) =>
        `${baseUrl}${accountsApi}/customer-visited-history/?limit=${data?.limit}&offset=${data?.offset}`,
      providesTags: ["logout", "customerDetails"],
    }),

    //customer profile update
    getCustomerProfileUpdate: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${accountsApi}/update-customer/${data.slug}/`,
        method: "PUT",
        body: data.data,
      }),
      invalidatesTags: ["updateCustomerProfile"],
    }),

    //Sales Person Details
    getSalesProfileDetails: builder.query({
      query: (data) => `${baseUrl}${accountsApi}/sales-person-details/`,
      providesTags: ["CustomerProfile"],
    }),

    //customer profile update
    addUpdateCustomer: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${accountsApi}/update-customer/${data.slug}/`,
        method: "PUT",
        body: data.data,
      }),
      invalidatesTags: ["updateCustomerProfile"],
    }),

    //All Customers
    getAllCustomerDetails: builder.query({
      query: (data) => `${baseUrl}${accountsApi}/customers-under-sales/`,
      providesTags: ["CustomerProfile"],
    }),

    //wishlist Listting
    getWishlistDetails: builder.query({
      query: (data) =>
        `${baseUrl}${wishListApi}/customer-wishlist/?date=${data?.date}&limit=${data?.limit}&offset=${data?.offset}`,
    }),

    //wishlist Listting
    getRecentWishlistDetails: builder.query({
      query: (data) =>
        `${baseUrl}${wishListApi}/customer-wishlist/?date=${data?.date}`,
      providesTags: ["wishlistList", "scannerProduct"],
    }),

    //wisthlist Datewise Lazy
    getWishlistDateWise: builder.query({
      query: (data) =>
        `${baseUrl}${wishListApi}/datewise-wishlist/?date=${data?.date}&limit=${data?.limit}&offset=${data?.offset}`,
      providesTags: ["wishlistList"],
    }),

    //wisthlist Datewise Lazy
    getAllWishlistDateWise: builder.query({
      query: (data) =>
        `${baseUrl}${wishListApi}/datewise-wishlist/?date=${data?.date}`,
      providesTags: ["scannerProduct"],
    }),

    //check Live Gold Price
    getLiveGoldPrice: builder.query({
      query: () => ({
        url: `https://www.goldapi.io/api/XAU/INR`,
        method: "GET",
        headers: {
          "x-access-token": "goldapi-2ra0tlcsuhtq5-io",
        },
      }),
    }),

    // productdetails pdf
    getProductDetailsPdf: builder.query({
      query: (data) =>
        `${baseUrl}${customClient}/product-details-pdf/${data?.slug}/`,
    }),

    // wishlist products pdf
    getWishlistProductsPdf: builder.query({
      query: (data) =>
        `${baseUrl}${customClient}/customer-wishlist-pdf/${data?.slug}/?date=${data?.date}`,
      providesTags: ["scannerProduct", "wishlistPdf"],
    }),

    //  handle wishlist qrcode
    handleWishlistBarcode: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}${wishListApi}/qrcode-product-to-wishlist/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["scannerProduct"],
    }),
  }),
});

export const {
  //SalesRepLogin
  useSalesRepLoginMutation,
  //CustomerLogin
  useCustomerLoginMutation,
  //CustomerRegistration
  useCustomerRegistrationMutation,
  //All Tags
  useGetAllTagsQuery,
  //All Feedbacks
  useGetAllFeedbacksQuery,
  //All Incentives
  useGetAllIncentivesQuery,
  //Add New Tag
  useAddNewTagMutation,
  //tagLike
  useTagLikeRequestMutation,
  //feedback Like
  useFeedbackLikeRequestMutation,
  //Add New Feedback
  useAddNewFeedbackMutation,
  //get Select Jewel
  useGetAllSelectJewelQuery,
  //Delete Select Jewel
  useRejectSelectJewelMutation,
  // Select Jewel Extimateprice
  useGetExtimatePriceDetailsQuery,
  // post  Estimate Price Details
  useHandleConditionEstimatePriceDetailsMutation,
  // Add Select Jewel to Cart
  useAddSelectJewelToCartMutation,
  //getAllCartProducts
  useGetCartProductsQuery,
  //handleLogout
  useHandleLogoutMutation,
  //create order
  useCreateOrderMutation,
  //Countries
  useGetCountriesListQuery,
  //cities
  useGetAllCityDetailsQuery,
  //lazy state-city
  useLazyGetAllStateCityDetailsQuery,
  //states
  useGetAllStateDetailsQuery,
  //catalogue Products Listing
  useLazyGetAllCatalogueProductsQuery,
  // useGetAllCatalogueProductsQuery,
  //catalogue details page
  useGetCatalogueProductDetailsQuery,
  //catalogue product Type Filter
  useLazyGetCatalogueProductTypeFiltersQuery,
  //catalogue Category type
  useLazyGetCatalogueCategoryTypeQuery,
  useGetCatalogueCategoryTypeQuery,
  //catalog subcategory type
  useLazyGetCatalogueSubCategoryTypeQuery,
  useGetCatalogueSubCategoryTypeQuery,
  //catalogue sub sub category type
  useLazyGetCatalogueSubSubCategoryTypeQuery,
  useGetCatalogueSubSubCategoryTypeQuery,
  //Add to wishList
  useAddToWishListMutation,
  //classification filters
  useLazyGetClassificationFiltersQuery,
  //Metal Color filter Type
  useGetMetalColorFilterTypeQuery,
  //Store Location Filter Type
  useLazyGetLocationFilterTypeQuery,
  //get Selected size Filters,
  useGetSelectedSizeQuery,
  //customer login Id's and Password
  // useGetCustomerLoginDetailsQuery,
  useLazyGetCustomerLoginDetailsQuery,
  //timeLessJewellery,
  useLazyGetTimeLessJewelleryProductsQuery,
  //best Seller products
  useLazyGetBestSellerProductsQuery,
  //Trending Products
  useLazyGetTrendingProductsQuery,
  //Current Trending Products
  useLazyGetCurrentTrendingProductsQuery,
  //timeLessJewellery,
  useGetLimitTimeLessJewelleryProductsQuery,
  //best Seller products
  useGetLimitBestSellerProductsQuery,
  //Trending Products
  useGetLimitTrendingProductsQuery,
  //Current Trending Products
  useGetLimitCurrentTrendingQuery,
  //catalogue Products
  useGetLimitCatalogueJewelleryProductsQuery,
  //Lazy catalogue Products
  // useLazyGetCatalogueJewelleryProductsQuery,

  //......................................................................................

  useAddUpdateCustomerMutation,
  useGetAllCustomerDetailsQuery,
  useGetCustomerDetailsQuery,
  useGetCustomerProfileUpdateMutation,

  // Customer Lazy visit store,
  useLazyGetCustomerVisitStoreQuery,

  //customer limit visit Store
  useGetLimitCustomerVisitStoreQuery,

  useGetSalesProfileDetailsQuery,
  //wishlist listing
  // useGetWishlistDetailsQuery,
  useLazyGetWishlistDetailsQuery,
  //wishlist Date Wise
  useGetAllWishlistDateWiseQuery,
  useLazyGetWishlistDateWiseQuery,
  useGetRecentWishlistDetailsQuery,
  //get gold Live price,
  useGetLiveGoldPriceQuery,
  //productDetails pdf
  useGetProductDetailsPdfQuery,
  //wishlist products pdf
  useGetWishlistProductsPdfQuery,
  //handle wishlist barcode
  useHandleWishlistBarcodeMutation,
} = restApi;

export default restApi;
