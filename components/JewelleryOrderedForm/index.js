import React from "react";
import CheckLivePrice from "../SalesRepresentativeProfile/check-live-price";
import Header from "../SalesRepresentativeProfile/header";
import OrderedFormTabs from "./order-form-tabs";

export default function JewelleryOrderedForm() {
  return (
    <div className="flex flex-col py-5 bg-mainbg min-h-screen  font-Montserrat ">
      <OrderedFormTabs />
    </div>
  );
}
