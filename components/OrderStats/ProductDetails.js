import React from "react";

export default function ProductDetails() {
  return (
    <div className="py-5">
      <div className="flex justify-between px-10 py-5">
        <img
          src="/profile.svg"
          className="h-16 w-16 object-cover rounded-md bg-indigo-300"
        />
        <div>
          <div>Premtej jakka</div>
          <img src="/images/userlogin2.svg" />
        </div>
      </div>
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">
          Required product
        </div>
        <div className="text-[#333333] text-sm font-medium">Premtej akka</div>
      </div>
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">
          No of Pices to be manufactured
        </div>
        <div className="text-[#333333] text-sm font-medium">9123456984 </div>
      </div>{" "}
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Size</div>
        <div className="text-[#333333] text-sm font-medium">32 </div>
      </div>{" "}
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">
          Approx Net .Weight{" "}
        </div>
        <div className="text-[#333333] text-sm font-medium">32</div>
      </div>{" "}
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">
          Approx Gross Weight{" "}
        </div>
        <div className="text-[#333333] text-sm font-medium">32 </div>
      </div>{" "}
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Bangle Clasp </div>
        <div className="text-[#333333] text-sm font-medium">1233455 </div>
      </div>{" "}
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">metal purity </div>
        <div className="text-[#333333] text-sm font-medium">18K</div>
      </div>{" "}
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Screw </div>
        <div className="text-[#333333] text-sm font-medium">Bombay</div>
      </div>
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium"> Gold Color</div>
        <div className="text-[#333333] text-sm font-medium">White </div>
      </div>
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium"> Polish</div>
        <div className="text-[#333333] text-sm font-medium">18K </div>
      </div>
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Setting</div>
        <div className="text-[#333333] text-sm font-medium">open </div>
      </div>
      <div className="flex justify-between border-b mx-2 py-2">
        <div className="text-[#6E6B7B] text-sm font-medium">Rhodlum</div>
        <div className="text-[#333333] text-sm font-medium">Full </div>
      </div>
    </div>
  );
}
