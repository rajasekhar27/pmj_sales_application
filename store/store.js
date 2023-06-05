import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import restApi from "./apis/restApi";

import headerSlice from "./slices/headerSlice";
import customerCheckin from "./slices/customerCheckin";
import brandcomm from "./slices/brandcomm";
import profileSlice from "./slices/profileSlice";
import popupSlice from "./slices/popupSlice";
import AuthReducer from "./slices/auth";
import catalogue from "./slices/catalogue";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    navbar: headerSlice,
    customerIn: customerCheckin,
    brand: brandcomm,
    profile: profileSlice,
    popup: popupSlice,
    catalogue: catalogue,
    [restApi.reducerPath]: restApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(restApi.middleware);
  },
});

setupListeners(store.dispatch);

export default store;
