import { createSlice } from "@reduxjs/toolkit";

const initial = {
  sideBar: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState: initial,
  reducers: {
    openSideBarPopup(state, action) {
      state.sideBar = true;
    },
    closeSideBarPopup(state, action) {
      state.sideBar = false;
    },
  },
});

export const { openSideBarPopup, closeSideBarPopup } = headerSlice.actions;

export default headerSlice.reducer;
