import { createSlice } from "@reduxjs/toolkit";

const initial = {
  repProfile: {
    currentTab: 1,
  },
  customerProfile: {
    currentTab: 1,
  },
  jewleryOrder: {
    currentTab: 1,
  },
  newRepair: {
    currentTab: 1,
  },
  customerDetails: {
    currentTab: 1,
  },
};

const profileSlice = createSlice({
  name: "Profile",
  initialState: initial,
  reducers: {
    setRepCurrentTab(state, action) {
      state.repProfile.currentTab = action.payload;
    },
    setCustomerCurrentTab(state, action) {
      state.customerProfile.currentTab = action.payload;
    },

    setJewleryOrderTab(state, action) {
      state.jewleryOrder.currentTab = action.payload;
    },
    setNewJewleryRepairTab(state, action) {
      state.newRepair.currentTab = action.payload;
    },

    setJewelOrderStatus(state, action) {
      state.customerDetails.currentTab = action.payload;
    },
  },
});

export const {
  setRepCurrentTab,
  setCustomerCurrentTab,
  setJewleryOrderTab,
  setNewJewleryRepairTab,
  setJewelOrderStatus,
} = profileSlice.actions;

export default profileSlice.reducer;
