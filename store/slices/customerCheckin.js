import { createSlice } from "@reduxjs/toolkit";
import { IoConstructOutline } from "react-icons/io5";

const initial = {
  customerEntey: false,
  selectJewel: false,
  magaDiscount: false,
  reject: false,
  reviewVisit: false,
  referenceID: false,
  observedFeedback: false,
  newcustomer: false,
  oldcustomer: false,
  hashTag: "",
  feedbackTitle: "",
  review: false,
  rejectJewel: "",
  rejectedImage: "",
  extimateSlug: "",
  customerRegistration: "",
  customerMobileNo: "",
  isWishlistChanged: false,
};

const customerCheckIn = createSlice({
  name: "customer",
  initialState: initial,
  reducers: {
    openCustomerEnteyPopup(state, action) {
      state.customerEntey = true;
    },
    closeCustomerEnteyPopup(state, action) {
      state.customerEntey = false;
    },

    openSelectJewelPopup(state, action) {
      state.selectJewel = true;
    },
    closeSelectJewelPopup(state, action) {
      state.selectJewel = false;
    },

    openMagaDiscountPopup(state, action) {
      state.magaDiscount = true;
    },
    closeMagaDiscountPopup(state, action) {
      state.magaDiscount = false;
    },

    openRejectPopup(state, action) {
      state.reject = true;
    },
    closeRejectPopup(state, action) {
      state.reject = false;
    },

    openReviewVisitPopup(state, action) {
      state.reviewVisit = true;
    },
    closeReviewVisitPopup(state, action) {
      state.reviewVisit = false;
    },

    openReferenceIDPopup(state, action) {
      state.referenceID = true;
    },
    closeReferenceIDPopup(state, action) {
      state.referenceID = false;
    },

    openObservedFeedbackPopup(state, action) {
      state.observedFeedback = true;
    },
    closeObservedFeedbackPopup(state, action) {
      state.observedFeedback = false;
    },

    newCustomerEntry(state, action) {
      state.newcustomer = true;
    },
    oldCustomerEntry(state, action) {
      state.oldcustomer = true;
    },
    setHashTag(state, action) {
      state.hashTag = action.payload;
    },

    setHashTagEmpty(state, action) {
      state.hashTag = "";
    },

    setFeedbackTag(state, action) {
      state.feedbackTitle = action.payload;
    },
    setFeedbackTagEmpty(state, action) {
      state.feedbackTitle = "";
    },
    openReviewPopup(state, action) {
      state.review = true;
    },
    closeReviewPopup(state, action) {
      state.review = false;
    },
    setRejectJewel(state, action) {
      state.rejectJewel = action.payload;
    },
    setRejectImage(state, action) {
      state.rejectedImage = action.payload;
    },
    setExtimateSlug(state, action) {
      state.extimateSlug = action.payload;
    },
    setcustomerRegistration(state, action) {
      state.customerRegistration = action.payload;
    },
    setCustomerMobileNo(state, action) {
      state.customerMobileNo = action.payload;
    },
    setIsWishlistChanged(state, action) {
      state.isWishlistChanged = !state.isWishlistChanged;
    },
  },
});

export const {
  openCustomerEnteyPopup,
  closeCustomerEnteyPopup,
  closeSelectJewelPopup,
  openSelectJewelPopup,
  closeMagaDiscountPopup,
  openMagaDiscountPopup,
  closeRejectPopup,
  openRejectPopup,
  closeReferenceIDPopup,
  closeReviewVisitPopup,
  openReferenceIDPopup,
  openReviewVisitPopup,
  closeObservedFeedbackPopup,
  openObservedFeedbackPopup,
  newCustomerEntry,
  oldCustomerEntry,
  setHashTag,
  setFeedbackTag,
  setFeedbackTagEmpty,
  openReviewPopup,
  closeReviewPopup,
  setRejectJewel,
  setHashTagEmpty,
  setRejectImage,
  setExtimateSlug,
  setcustomerRegistration,
  setCustomerMobileNo,
  setIsWishlistChanged,
} = customerCheckIn.actions;

export default customerCheckIn.reducer;
