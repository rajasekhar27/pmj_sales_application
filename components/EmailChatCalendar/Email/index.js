import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCalenderSideBar,
  closeEmailSideBar,
} from "../../../store/slices/popupSlice";
import CheckLivePrice from "../../SalesRepresentativeProfile/check-live-price";
import Header from "../../SalesRepresentativeProfile/header";
import Message from "./message";

export default function Email() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col py-5 bg-mainbg min-h-screen px-4 font-Montserrat mt-16">
      {/* <Header/> */}
      {/* <CheckLivePrice/> */}
      <Message />
    </div>
  );
}
