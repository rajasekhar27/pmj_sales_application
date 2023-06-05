import React from "react";
import RepresentativeStats from "./representative-stats";
import SwarnabhishekamCustomer from "./swarnabhishekam-customer";
import TotlalProductsSold from "./total-products-sold";
import TotalEstimations from "./total-estimations";
import AverageSelling from "./average-selling";
import Profile from "./profile";

export default function About({ salesProfile }) {
  return (
    <div>
      {/* <RepresentativeStats />

      <div className="mt-5 flex ">
        <TotlalProductsSold />
        <SwarnabhishekamCustomer />
      </div>

      <AverageSelling />

      <TotalEstimations /> */}

      <Profile salesProfile={salesProfile} />
    </div>
  );
}
