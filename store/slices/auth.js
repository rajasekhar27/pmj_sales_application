import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SalesRepresentative: {
    refreshToken: null,
    accessToken: null,
    user: null,
  },
  Customer: {
    refreshToken: null,
    accessToken: null,
    user: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    addSalesRepTokens(state, action) {
      localStorage.setItem("salesRep", JSON.stringify(action.payload));
      state.SalesRepresentative.accessToken = action.payload?.accessToken;
      state.SalesRepresentative.refreshToken = action.payload?.refreshToken;
      state.SalesRepresentative.user = action.payload?.user;
    },

    removeSalesRepTokens(state, action) {
      localStorage.setItem("salesRep", null);
      state.SalesRepresentative.refreshToken = null;
      state.SalesRepresentative.accessToken = null;
      state.SalesRepresentative.user = null;
    },

    addCustomerTokens(state, action) {
      localStorage.setItem("customer", JSON.stringify(action.payload));
      if (
        JSON.parse(localStorage.getItem("localSelectedFilters")) === null ||
        JSON.parse(localStorage.getItem("localSelectedFilters")).length === 0
      ) {
        localStorage.setItem("localSelectedFilters", JSON.stringify([]));
      }

      if (
        JSON.parse(localStorage.getItem("localSavedFilters")) === null ||
        JSON.parse(localStorage.getItem("localSavedFilters")).length === 0
      ) {
        localStorage.setItem("localSavedFilters", JSON.stringify([]));
      }

      localStorage.setItem(
        "localFilterOptions",
        JSON.stringify({
          categoryId:
            JSON.parse(localStorage.getItem("localFilterOptions"))
              ?.categoryId === undefined ||
            JSON.parse(localStorage.getItem("localFilterOptions"))?.categoryId
              ?.length === 0
              ? []
              : JSON.parse(localStorage.getItem("localFilterOptions"))
                  ?.categoryId,

          productTypeId:
            JSON.parse(localStorage.getItem("localFilterOptions"))
              ?.productTypeId === undefined ||
            JSON.parse(localStorage.getItem("localFilterOptions"))
              ?.productTypeId?.length === 0
              ? []
              : JSON.parse(localStorage.getItem("localFilterOptions"))
                  ?.productTypeId,
          subCategoryId:
            JSON.parse(localStorage.getItem("localFilterOptions"))
              ?.subCategoryId === undefined ||
            JSON.parse(localStorage.getItem("localFilterOptions"))
              ?.subCategoryId?.length === 0
              ? []
              : JSON.parse(localStorage.getItem("localFilterOptions"))
                  ?.subCategoryId,
          subsubCategoryId:
            JSON.parse(localStorage.getItem("localFilterOptions"))
              ?.subsubCategoryId === undefined ||
            JSON.parse(localStorage.getItem("localFilterOptions"))
              ?.subsubCategoryId?.length === 0
              ? []
              : JSON.parse(localStorage.getItem("localFilterOptions"))
                  ?.subsubCategoryId,
          classification:
            JSON.parse(localStorage.getItem("localFilterOptions"))
              ?.classification === undefined ||
            JSON.parse(localStorage.getItem("localFilterOptions"))
              ?.classification?.length === 0
              ? []
              : JSON.parse(localStorage.getItem("localFilterOptions"))
                  ?.classification,
          metalColorId:
            JSON.parse(localStorage.getItem("localFilterOptions"))
              ?.metalColorId === undefined ||
            JSON.parse(localStorage.getItem("localFilterOptions"))?.metalColorId
              ?.length === 0
              ? []
              : JSON.parse(localStorage.getItem("localFilterOptions"))
                  ?.metalColorId,
          location:
            JSON.parse(localStorage.getItem("localFilterOptions"))?.location ===
              undefined ||
            JSON.parse(localStorage.getItem("localFilterOptions"))?.location
              ?.length === 0
              ? []
              : JSON.parse(localStorage.getItem("localFilterOptions"))
                  ?.location,
          gender:
            JSON.parse(localStorage.getItem("localFilterOptions"))?.gender ===
              undefined ||
            JSON.parse(localStorage.getItem("localFilterOptions"))?.gender
              ?.length === 0
              ? []
              : JSON.parse(localStorage.getItem("localFilterOptions"))?.gender,
          maxPrice:
            JSON.parse(localStorage.getItem("localFilterOptions"))?.maxPrice ===
              undefined ||
            JSON.parse(localStorage.getItem("localFilterOptions"))?.maxPrice
              ?.length === 0
              ? ""
              : JSON.parse(localStorage.getItem("localFilterOptions"))
                  ?.maxPrice,
          minPrice:
            JSON.parse(localStorage.getItem("localFilterOptions"))?.minPrice ===
              undefined ||
            JSON.parse(localStorage.getItem("localFilterOptions"))?.minPrice
              ?.length === 0
              ? ""
              : JSON.parse(localStorage.getItem("localFilterOptions"))
                  ?.minPrice,
          size:
            JSON.parse(localStorage.getItem("localFilterOptions"))?.size ===
              undefined ||
            JSON.parse(localStorage.getItem("localFilterOptions"))?.size
              ?.length === 0
              ? []
              : JSON.parse(localStorage.getItem("localFilterOptions"))?.size,
        })
      );
      state.Customer.accessToken = action.payload?.accessToken;
      state.Customer.refreshToken = action.payload?.refreshToken;
      state.Customer.user = action.payload?.user;
    },

    removeCustomerTokens(state, action) {
      localStorage.setItem("customer", null);
      state.Customer.refreshToken = null;
      state.Customer.accessToken = null;
      state.Customer.user = null;
    },
  },
});

export const {
  addSalesRepTokens,
  removeSalesRepTokens,
  addSalesRepUserData,
  addCustomerTokens,
  removeCustomerTokens,
  addCustomerUserData,
} = authSlice.actions;
export default authSlice.reducer;
