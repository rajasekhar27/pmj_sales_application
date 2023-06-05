import { createSlice } from "@reduxjs/toolkit";

const initial = {
  whatsapp: false,
};

const brandComm = createSlice({
  name: "brand",
  initialState: initial,
  reducers: {
    openWhatappPopup(state, action) {
      state.whatsapp = true;
    },
    closeWhatappPopup(state, action) {
      state.whatsapp = false;
    },
  },
});

export const { closeWhatappPopup, openWhatappPopup } = brandComm.actions;

export default brandComm.reducer;
