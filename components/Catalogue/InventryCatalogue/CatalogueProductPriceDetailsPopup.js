import React from "react";
export default function CatalogueProductPriceDetailsPopup() {
  return (
    <div className="px-4 py-5 ">
      <div className="py-2 text-20   text-bg40 font-semibold text-center">
        Price Details
      </div>
      <div className="border-2 rounded-xl border-black text-center">
        <table className="w-full text-[10px]">
          <thead className="border-b  border-black ">
            <tr className="text-center text-bg40 px-2">
              <th className="text-center py-2 mr-2">Product</th>
              <th className="text-center py-2 mr-2">Weight</th>
              <th className="text-center py-2 mr-2">Today’s Rate per gram</th>
              <th className="text-center py-2">Total Amount</th>
            </tr>
          </thead>
          <tbody className="text-center  text-xs ">
            <tr>
              <td className="text-[#82868B] font-normal py-8">Bangles</td>
              <td className="text-[#82868B] font-normal py-8">26.2 g</td>
              <td className="text-[#82868B] font-normal py-8">₹ 5,076</td>
              <td className="text-[#82868B] font-normal py-8">₹ 1,30,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
