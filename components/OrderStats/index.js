import React from "react";
import { useSelector } from "react-redux";
import JewelleryOrderedForm from "../JewelleryOrderedForm";
import CheckLivePrice from "../SalesRepresentativeProfile/check-live-price";
import Header from "../SalesRepresentativeProfile/header";
import OrderStatsCard from "./order-stats";
import OrderStatsTable from "./order-stats-table";
import OrderDeliveryStatus from "./OrderDeliveryStatus";

export default function OrderStats() {
  const select = useSelector((state) => state.popup);
  return (
    <div className="flex flex-col py-5 bg-mainbg min-h-screen px-4 font-Montserrat ">
      {/* <OrderDeliveryStatus /> */}
      {!select?.addorderform ? (
        <>
          <OrderStatsCard />
          <OrderStatsTable />
        </>
      ) : (
        <JewelleryOrderedForm />
      )}
    </div>
  );
}
