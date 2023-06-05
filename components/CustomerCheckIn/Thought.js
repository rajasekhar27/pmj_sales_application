import React, { useState } from "react";
import { BsEmojiSmile, BsFillEmojiSmileFill } from "react-icons/bs";
import LivePrice from "../UI/LivePrice";
import CustomerEntry from "./CustomerEntry";

export default function Thought() {
  const [niceday, setNiceDay] = useState(true);

  return (
    <>
      {niceday ? (
        <div className="mt-5 px-5">
          <LivePrice />

          <div className="h-[416px] bg-white mx-4">
            <div>
              <img src="/images/chain.svg" />
            </div>
            <div className="flex justify-center flex-col items-center  bg-[url('/images/bgpmj.svg')] bg-top">
              <div className="text-22 text-bg40 text-center w-10/12 font-normal">
                TODAY’S THOUGHT OF THE DAY
              </div>
              <div className="text-xl text-bg40 text-center mt-5 font-normal font-Colgent">
                Lorem ipsum dolor sit amet consectetur. Risus praesent turpis
                vitae in nisi proin felis. Tincidunt.
              </div>
            </div>
            <div className="px-2" onClick={() => setNiceDay(false)}>
              <div className="bg-bg40 flex justify-around   rounded h-10 items-center mt-7">
                <div className=" text-white text-center text-sm font-semibold">
                  THANKS AND HAVE A NICE DAY
                </div>
                <BsFillEmojiSmileFill color="white" size={20} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CustomerEntry />
      )}
    </>
  );
}
