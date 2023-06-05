import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeInboxMessage } from "../../../store/slices/popupSlice";
import Modal from "../../Modal";
import CheckLivePrice from "../../SalesRepresentativeProfile/check-live-price";
import Header from "../../SalesRepresentativeProfile/header";
import InboxMailDetails from "./inbox-mail-details";
import EmailNavigations from "./navigations";

export default function InboxMessage() {
  const dispatch = useDispatch();
  const inboxMessageStatus = useSelector((state) => state.popup.inboxMessage);
  return (
    <Modal
      isOpen={inboxMessageStatus}
      // modalOuterClick={() => dispatch(closeInboxMessage())}
      parentClases=" bottom-0  popBgBlack "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="font-poppins bg-white relative w-full "
      >
        <div className="flex flex-col py-5 bg-mainbg h-screen px-4 font-Montserrat overflow-y-auto cart">
          <Header />

          {/* <CheckLivePrice/> */}
          <div className="mt-16">
            <EmailNavigations />
            <InboxMailDetails />
          </div>
        </div>
      </div>
    </Modal>
  );
}
