import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsClipboard, BsWhatsapp } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function WhatsAppUpdatePopup() {
  const [copy, setCopy] = useState(false);
  const [copyvalue, setCopyValue] = useState("");
  if (copy) {
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  }
  return (
    <div className="py-10 px-5">
      <div className="text-base text-center font-semibold text-bg40">
        SOCIAL MEDIA UPDATES
      </div>
      <div className="flex justify-center">
        <img
          src="/images/shareimages.svg"
          className="rounded-md w-[208px] h-[198px]"
        />
      </div>
      <div className="flex flex-col mt-6 relative">
        <input
          type="text"
          value={copyvalue}
          className="border border-black text-sm rounded-md h-9 px-5 mt-3"
          placeholder="https://ssr.srkprojects.com/a........"
          //   {...register("password", {
          //     required: true,
          //   })}
          onChange={(e) => setCopyValue(e.target.value)}
        />
        <CopyToClipboard
          className="absolute right-3 top-5"
          text={copyvalue}
          onCopy={() => setCopy(true)}
        >
          <span>
            <BsClipboard size={20} />
          </span>
        </CopyToClipboard>
        {copy ? (
          <span
            style={{ color: "" }}
            className="absolute right-0 -top-4 bg-bg40 opacity-20 text-white rounded-full px-1 "
          >
            Copied
          </span>
        ) : null}
      </div>
      <div className="space-y-4 mt-5">
        <button className="flex py-2 justify-center rounded-md items-center w-full text-white bg-bg40 font-semibold">
          <BsWhatsapp size={25} /> Whatsapp Share
        </button>
        <button className="flex py-2 justify-center rounded-md items-center w-full text-white bg-bg40 font-semibold">
          <AiOutlineInstagram size={25} /> Instagram Share
        </button>
      </div>
    </div>
  );
}
