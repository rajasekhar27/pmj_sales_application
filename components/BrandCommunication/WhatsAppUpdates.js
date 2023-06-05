import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";
import { openWhatappPopup } from "../../store/slices/brandcomm";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

export default function WhatsAppUpdates() {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="px-5">
      <div className="bg-white py-2 mt-5 px-3 rounded-md">
        <div className="flex items-center space-x-2 my-5">
          <BiArrowBack
            onClick={() => router.back()}
            size={25}
            className="text-bg40"
          />
          <div className="text-base text-bg40 font-semibold">
            Whatsapp Share
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex items-center justify-end  space-x-1 bg-bg40 px-3 py-2 rounded-lg">
            <div>
              <FiCalendar size={24} className="text-white" />
            </div>

            <div className="text-base font-semibold text-white">Filter</div>
          </div>
        </div>

        <div className="text-base font-semibold text-bg40">13/11/2022</div>

        <div className=" grid grid-cols-2 gap-5 mt-2">
          <div
            onClick={() => dispatch(openWhatappPopup())}
            className="relative"
          >
            <img src="/images/pmjshare.svg" className="absolute z-10 right-0" />
            <img src="/images/shareimages.svg" className="rounded-md" />
          </div>
          <div className="relative">
            <img src="/images/pmjshare.svg" className="absolute z-10 right-0" />
            <img src="/images/shareimages.svg" className="rounded-md" />
          </div>
          <div className="relative">
            <img src="/images/pmjshare.svg" className="absolute z-10 right-0" />
            <img src="/images/shareimages.svg" className="rounded-md" />
          </div>
          <div className="relative">
            <img
              className="absolute z-10 right-0 t"
              src="/images/pmjshare.svg"
            />
            <img src="/images/shareimages.svg" className="rounded-md" />
          </div>
        </div>

        <div className="text-base font-semibold text-bg40 mt-5">13/11/2022</div>

        <div className=" grid grid-cols-2 gap-5 mt-2">
          <div className="relative">
            <img src="/images/pmjshare.svg" className="absolute z-10 right-0" />
            <img src="/images/shareimages.svg" className="rounded-md" />
          </div>
          <div className="relative">
            <img src="/images/pmjshare.svg" className="absolute z-10 right-0" />
            <img src="/images/shareimages.svg" className="rounded-md" />
          </div>
          <div className="relative">
            <img src="/images/pmjshare.svg" className="absolute z-10 right-0" />
            <img src="/images/shareimages.svg" className="rounded-md" />
          </div>
          <div className="relative">
            <img
              className="absolute z-10 right-0 t"
              src="/images/pmjshare.svg"
            />
            <img src="/images/shareimages.svg" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
