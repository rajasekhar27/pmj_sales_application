import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openWhatappPopup } from "../../store/slices/brandcomm";

export default function BrandHome() {
  const dispatch = useDispatch();

  const router = useRouter();

  return (
    <div className="px-5 mt-28">
      <div className="flex items-center space-x-2 my-5">
        <BiArrowBack
          onClick={() => router.back()}
          size={25}
          className="text-bg40"
        />
        <div className="text-base text-bg40 font-semibold">
          Brand Communication
        </div>
      </div>

      <div
        className="bg-white p-2 rounded-xl"
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="border-2 border-bg40 rounded-md p-2 ">
          <div className="grid grid-cols-3 justify-items-center place-items-center gap-5">
            <img src="/images/brand1.svg" />
            <img src="/images/brand2.svg" />
            <img src="/images/brand1.svg" />
            <img src="/images/brand2.svg" />

            <div className="text-base font-semibold text-bg40 col-span-2 w-2/3 text-center">
              NEW COLLECTION
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white p-2 rounded-xl mt-5"
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="bg-bg40 p-2 rounded-xl ">
          <div className="border-2 border-bg40 rounded-md  ">
            <div className="grid grid-cols-3 justify-items-center place-items-center gap-5">
              <div onClick={() => dispatch(openWhatappPopup())}>
                <img src="/images/brand1.svg" />
                <div className="text-sm font-semibold text-white p-1">
                  22/02/22
                </div>
              </div>

              <div>
                <img src="/images/brand2.svg" />
                <div className="text-sm font-semibold text-white p-1">
                  22/02/22
                </div>
              </div>

              <div>
                <img src="/images/brand1.svg" />
                <div className="text-sm font-semibold text-white p-1">
                  22/02/22
                </div>
              </div>

              <div>
                <img src="/images/brand2.svg" />
                <div className="text-sm font-semibold text-white p-1">
                  22/02/22
                </div>
              </div>

              <div className="text-base font-semibold text-bg40 col-span-2 text-center">
                <Link href="/whatsapp-updates">
                  <div>
                    <div className="text-sm font-semibold text-white p-1">
                      SOCIAL MEDIA UPDATES
                    </div>

                    <div className="flex justify-center space-x-2">
                      <FaWhatsapp color="white" size={21} />

                      <AiOutlineInstagram color="white" size={21} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-items-center gap-3 mt-3 rounded-lg  ">
        <div
          className={` bg-white p-1  rounded-xl h-[114px] w-[144px]`}
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Link href="/brand-sop-videos">
            <div
              className={` rounded-md h-full w-full flex flex-col justify-center items-center border-2 bg-bg40 `}
              style={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div>
                <img src="/images/brandsop.svg" />
              </div>
              <div
                className={` text-center font-semibold text-sm mt-2 px-3 text-white`}
              >
                BRAND SOP & VIDEOS
              </div>
            </div>
          </Link>
        </div>

        <div
          className={` bg-white p-1  rounded-xl h-[114px] w-[144px]`}
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Link href="/brandnews">
            <div
              className={` rounded-md h-full w-full flex flex-col justify-center items-center border-2 bg-bg40 `}
            >
              <div>
                <img src="/images/brandsop.svg" />
              </div>
              <div
                className={` text-center font-semibold text-sm mt-2 px-3 text-white`}
              >
                NEWS EVENTS UPDATES
              </div>
            </div>
          </Link>
        </div>

        <div
          className={` bg-white p-1  rounded-xl h-[114px] w-[144px]`}
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Link href="/thoughtday">
            <div
              className={` rounded-md h-full w-full  flex flex-col justify-center items-center border-2 bg-bg40 `}
            >
              <div>
                <img src="/images/brandsop.svg" />
              </div>
              <div
                className={` text-center font-semibold text-sm mt-2 px-3 text-white`}
              >
                THOUGHT OF THE DAY
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
