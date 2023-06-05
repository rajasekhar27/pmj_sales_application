import React from "react";
import CheckLivePrice from "../SalesRepresentativeProfile/check-live-price";
import Header from "../SalesRepresentativeProfile/header";
import NewRepairTabs from "./new-repair-tabs";

export default function AddNewRepair() {
  return (
    <div className="flex flex-col bg-mainbg min-h-screen  font-Montserrat ">
      <NewRepairTabs />
    </div>
  );
}
