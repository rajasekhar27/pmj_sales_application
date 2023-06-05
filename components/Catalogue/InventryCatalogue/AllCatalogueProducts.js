import React from "react";
import BestSellerProducts from "./BestSellerProducts";
import CurrentTrendsProducts from "./CurrentTrendsProducts";
import TimelessJewellery from "./TimelessJewellery";
import TrendingProducts from "./TrendingProducts";

export default function index() {
  return (
    <div>
      <TrendingProducts />
      {/* <BestSellerProducts />
      <CurrentTrendsProducts />
      <TimelessJewellery /> */}
    </div>
  );
}
