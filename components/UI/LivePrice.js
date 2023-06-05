import React from "react";

export default function LivePrice() {
  return (
    <div className="flex justify-end space-x-2 py-2 px-5">
      <div className="bg-white flex  space-x-2 px-4 rounded-lg py-2">
        <img src="/gold.svg" width={22} height={22} />
        <div className="text-bg40 font-semibold text-sm ">CHECK LIVE PRICE</div>
      </div>
    </div>
  );
}
