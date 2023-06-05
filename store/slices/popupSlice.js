import { createSlice } from "@reduxjs/toolkit";

const initial = {
  editProfileImage: false,
  editProfile: false,
  livePrice: false,
  filter: false,
  compose: false,
  emailSidebar: false,
  calenderpopup: false,
  inboxMessage: false,
  addorderform: false,
  addNewRepair: false,
  chatSidebar: false,
  orderStatus: false,
  barcodeStatus: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState: initial,
  reducers: {
    openEditProfileImage(state, action) {
      state.editProfileImage = true;
    },
    closeEditProfileImage(state, action) {
      state.editProfileImage = false;
    },
    openEditProfile(state, action) {
      state.editProfile = true;
    },
    closeEditProfile(state, action) {
      state.editProfile = false;
    },
    openLivePrice(state, action) {
      state.livePrice = true;
    },
    closeLivePrice(state, action) {
      state.livePrice = false;
    },

    openFilterForm(state, action) {
      state.filter = true;
    },
    closeFilterForm(state, action) {
      state.filter = false;
    },

    openComposeForm(state, action) {
      state.compose = true;
    },
    closeComposeForm(state, action) {
      state.compose = false;
    },
    openEmailSideBar(state, action) {
      state.emailSidebar = true;
    },
    closeEmailSideBar(state, action) {
      state.emailSidebar = false;
    },
    openInboxMessage(state, action) {
      state.inboxMessage = true;
    },
    closeInboxMessage(state, action) {
      state.inboxMessage = false;
    },
    openCalenderSideBar(state, action) {
      state.calenderpopup = true;
    },
    closeCalenderSideBar(state, action) {
      state.calenderpopup = false;
    },
    openInboxMessage(state, action) {
      state.inboxMessage = true;
    },
    closeInboxMessage(state, action) {
      state.inboxMessage = false;
    },

    addorderformstatus(state, action) {
      state.addorderform = true;
    },

    addNewRepairFormOpen(state, action) {
      state.addNewRepair = true;
    },
    addNewRepairFormClose(state, action) {
      state.addNewRepair = false;
    },
    openChatSidebar(state, action) {
      state.chatSidebar = true;
    },
    closeChatSidebar(state, action) {
      state.chatSidebar = false;
    },

    customerOrderStatusPopupOpen(state, action) {
      state.orderStatus = true;
    },
    customerOrderStatusPopupClose(state, action) {
      state.orderStatus = false;
    },
    openBarcodePopup(state, action) {
      state.barcodeStatus = true;
    },
    closeBarcodePopup(state, action) {
      state.barcodeStatus = false;
    },
  },
});

export const {
  openEditProfileImage,
  closeEditProfileImage,
  openEditProfile,
  closeEditProfile,
  openLivePrice,
  closeLivePrice,
  openFilterForm,
  closeFilterForm,
  openComposeForm,
  closeComposeForm,
  openEmailSideBar,
  closeEmailSideBar,
  openInboxMessage,
  closeInboxMessage,
  closeCalenderSideBar,
  openCalenderSideBar,
  addorderformstatus,
  addNewRepairFormClose,
  addNewRepairFormOpen,
  openChatSidebar,
  closeChatSidebar,
  customerOrderStatusPopupClose,
  customerOrderStatusPopupOpen,
  openBarcodePopup,
  closeBarcodePopup,
} = popupSlice.actions;

export default popupSlice.reducer;
