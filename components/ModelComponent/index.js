import React from "react";
import Modal from "../Modal/index";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../CustomerCheckIn/SideBar";
import { closeSideBarPopup } from "../../store/slices/headerSlice";
import CustomerEntryModal from "../CustomerCheckIn/CustomerEntryModal";
import {
  closeCustomerEnteyPopup,
  closeSelectJewelPopup,
  closeMagaDiscountPopup,
  closeRejectPopup,
  closeReviewVisitPopup,
  closeReferenceIDPopup,
  closeObservedFeedbackPopup,
  openReviewPopup,
  closeReviewPopup,
  setFeedbackTagEmpty,
  setHashTagEmpty,
} from "../../store/slices/customerCheckin";
import {
  closeCalenderSideBar,
  closeEmailSideBar,
  customerOrderStatusPopupClose,
} from "../../store/slices/popupSlice";
import EstimatePrice from "../AfterCustomerLogin/EstimatePrice";
import SecretCode from "../AfterCustomerLogin/SecretCode";
import RejectedItemModal from "../AfterCustomerLogin/RejectedItemModal";
import ReviewVisit from "../AfterCustomerLogin/ReviewVisitModal";
import ReferenceIdModal from "../AfterCustomerLogin/ReferenceIdModal";
import WhatsAppUpdatePopup from "../BrandCommunication/WhatsAppUpdatePopup";
import { closeWhatappPopup } from "../../store/slices/brandcomm";
import AddTagPopup from "../AfterCustomerLogin/ObservedFeedBack/AddTagPopup";
import CalenderSideBar from "../Calender/CalenderSidebar";
import Modal2 from "../Modal/modal2";
import EmailSideBar from "../EmailChatCalendar/Email/email-sidebar";
import OrderDeliveryStatus from "../OrderStats/OrderDeliveryStatus";
import ReviewPopup from "../AfterCustomerLogin/ObservedFeedBack/ReviewPopup";
import CatalogueFilters from "../Catalogue/InventryCatalogue/CatalogueFilters";
import ProductListing from "../Catalogue/InventryCatalogue/ProductListing";
import CatalogueProductPriceDetailsPopup from "../Catalogue/InventryCatalogue/CatalogueProductPriceDetailsPopup";
import ProductDetailsPopup from "../Catalogue/InventryCatalogue/ProductDetailsPopup";
import DigitalCatalogueOrders from "../Catalogue/DigitalCatalogue/DigitalCatalogueOrders";
import {
  closeDigitalOutOfStockPopup,
  closeEstimatePriceDetailsPopup,
  closePriceDetailsPopup,
  closeProductDetailsPopup,
} from "../../store/slices/catalogue";
import { GrFormClose } from "react-icons/gr";

export default function ModelComponent() {
  const select = useSelector((state) => state.navbar);

  const selectCustomer = useSelector((state) => state.customerIn);

  const selector = useSelector((state) => state);

  const emailSidebarStatus = useSelector((state) => state.popup.emailSidebar);

  const dispatch = useDispatch();

  const outerClick = () => {
    dispatch(closeSideBarPopup());
  };

  const calenderOuterClick = () => {
    dispatch(closeCalenderSideBar());
    dispatch(closeEmailSideBar());
  };
  const handleReviewPopup = () => {
    dispatch(setFeedbackTagEmpty());
    dispatch(closeReviewPopup());
  };

  const handleTagPopup = () => {
    dispatch(setHashTagEmpty());
    dispatch(closeObservedFeedbackPopup());
  };
  return (
    <div>
      <Modal
        isOpen={select.sideBar}
        parentClases={`justify-items-start grid bg-[#0009]`}
        modalOuterClick={outerClick}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`h-full w-[260px]  bg-white drop-shadow-lg  sidebar
           `}
        >
          <SideBar />
        </div>
      </Modal>

      <Modal
        isOpen={selectCustomer?.customerEntey}
        parentClases={"flex justify-center items-center  bg-[#0009]"}
      >
        <div className="relative  w-11/12  h-[75%] ">
          <button
            // onClick={() => dispatch(closeAppoinmentPopup())}
            onClick={() => dispatch(closeCustomerEnteyPopup())}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-3 shadow-xl -top-4 z-10"
          >
            X
          </button>

          <CustomerEntryModal />
        </div>
      </Modal>

      <Modal
        isOpen={selectCustomer?.selectJewel}
        parentClases={`flex flex-col justify-center bg-[#0009] `}
        modalOuterClick={() => dispatch(closeSelectJewelPopup())}
      >
        <div className="relative cart self-center ">
          <button
            onClick={() => dispatch(closeSelectJewelPopup())}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md right-2 shadow-xl top-0 z-10 flex justify-center items-center"
          >
            <GrFormClose className="self-center mt-1" size={25} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="  overflow-y-auto  h-[700px] bg-white drop-shadow-lg  "
          >
            <EstimatePrice />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selectCustomer?.magaDiscount}
        parentClases={"place-items-center grid bg-[#0009]"}
      >
        <div className="relative  ">
          <button
            onClick={() => dispatch(closeMagaDiscountPopup())}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-2 shadow-xl -top-2 z-10"
          >
            X
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className=" overflow-y-auto  h-[700px] rounded-md  bg-white drop-shadow-lg  "
          >
            <SecretCode />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selectCustomer?.reject}
        parentClases={"place-items-center grid bg-[#000000b3]"}
      >
        <div className="relative  h-10/12 w-11/12 ">
          <button
            onClick={() => dispatch(closeRejectPopup())}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-2 shadow-xl -top-2 z-10"
          >
            X
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className=" overflow-y-auto   h-[700px] rounded-md  bg-white drop-shadow-lg  "
          >
            <RejectedItemModal />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selectCustomer?.reviewVisit}
        parentClases={"place-items-center grid bg-[#000000b3]"}
      >
        <div className="relative  h-10/12 w-11/12 ">
          <button
            onClick={() => dispatch(closeReviewVisitPopup())}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-2 shadow-xl -top-2 z-10"
          >
            X
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className=" overflow-y-auto   h-[700px] rounded-md  bg-white drop-shadow-lg  "
          >
            <ReviewVisit />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selectCustomer?.referenceID}
        parentClases={"place-items-center grid "}
      >
        <div className="relative  h-10/12 w-11/12 ">
          <button
            onClick={() => dispatch(closeReferenceIDPopup())}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-2 shadow-xl -top-2 z-10"
          >
            X
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className=" overflow-y-auto   h-[700px] rounded-md  bg-white drop-shadow-lg  "
          >
            <ReferenceIdModal />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selector?.brand.whatsapp}
        parentClases={"place-items-center grid bg-[#000000b3]"}
      >
        <div className="relative   ">
          <button
            onClick={() => dispatch(closeWhatappPopup())}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-2 shadow-xl -top-2 z-10"
          >
            X
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className=" rounded-md  bg-white drop-shadow-lg  "
          >
            <WhatsAppUpdatePopup />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selectCustomer?.observedFeedback}
        modalOuterClick={handleTagPopup}
        parentClases={"place-items-center grid bg-[#000000b3]"}
      >
        <div className="relative w-4/5 ">
          <button
            onClick={handleTagPopup}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-2 shadow-xl -top-2 z-10"
          >
            X
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className=" rounded-md  bg-white drop-shadow-lg  "
          >
            <AddTagPopup />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selectCustomer?.review}
        modalOuterClick={handleReviewPopup}
        parentClases={"place-items-center grid bg-[#000000b3]"}
      >
        <div className="relative w-4/5 ">
          <button
            onClick={handleReviewPopup}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-2 shadow-xl -top-2 z-10"
          >
            X
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className=" rounded-md  bg-white drop-shadow-lg  "
          >
            <ReviewPopup />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selector?.popup?.orderStatus}
        parentClases={"place-items-center grid bg-[#000000b3]"}
      >
        <div className="relative w-11/12 ">
          <button
            onClick={() => dispatch(customerOrderStatusPopupClose())}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-2 shadow-xl -top-2 z-10"
          >
            X
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className=" rounded-md  bg-white drop-shadow-lg  overflow-y-auto  h-[700px]"
          >
            <OrderDeliveryStatus />
          </div>
        </div>
      </Modal>

      {/* //........................................................................................................................ */}

      <Modal isOpen={selector?.catalogue?.filters}>
        <div className="relative">
          <div
            onClick={(e) => e.stopPropagation()}
            className="  overflow-y-auto   bg-white drop-shadow-lg  "
          >
            <CatalogueFilters />
          </div>
        </div>
      </Modal>

      <Modal isOpen={selector?.catalogue?.productList}>
        <div className="relative   ">
          <div
            onClick={(e) => e.stopPropagation()}
            className="  overflow-y-auto   bg-white drop-shadow-lg  "
          >
            <ProductListing />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selector?.catalogue?.estimatePrice}
        parentClases={"flex justify-center items-center  bg-[#0009]"}
      >
        <div className="relative  w-11/12  h-[95%] ">
          <button
            onClick={() => dispatch(closeEstimatePriceDetailsPopup())}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md right-2 shadow-xl top-0 z-10 flex  justify-center items-center"
          >
            <GrFormClose className="self-center mt-1" size={25} />
          </button>

          <div className="py-10  flex flex-col rounded-md bg-white drop-shadow-lg  overflow-y-scroll h-full">
            <EstimatePrice />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selector?.catalogue?.priceDetails}
        parentClases={"place-items-center grid bg-[#000000b3]"}
      >
        <div className="relative    w-11/12">
          <button
            onClick={() => dispatch(closePriceDetailsPopup())}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-2 shadow-xl -top-2 z-10"
          >
            X
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className=" rounded-md  bg-white drop-shadow-lg "
          >
            <CatalogueProductPriceDetailsPopup />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selector?.catalogue?.productDetails}
        parentClases={"place-items-center grid bg-[#000000b3]"}
      >
        <div className="relative    w-11/12">
          <button
            onClick={() => dispatch(closeProductDetailsPopup())}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-2 shadow-xl -top-2 z-10"
          >
            X
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className=" rounded-md  bg-white drop-shadow-lg "
          >
            <ProductDetailsPopup />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={selector?.catalogue?.digitalOutOfStock}
        parentClases={"place-items-center grid bg-[#000000b3]"}
      >
        <div className="relative    w-11/12">
          <button
            onClick={() => dispatch(closeDigitalOutOfStockPopup())}
            className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-2 shadow-xl -top-2 z-10"
          >
            X
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className=" rounded-md  bg-white drop-shadow-lg "
          >
            <DigitalCatalogueOrders />
          </div>
        </div>
      </Modal>

      {/* //.............................................................................................................................. */}

      <div className="relative  mx-5">
        {selector?.popup.calenderpopup && (
          <CalenderSideBar modalOuterClick={calenderOuterClick} />
        )}
      </div>
    </div>
  );
}
