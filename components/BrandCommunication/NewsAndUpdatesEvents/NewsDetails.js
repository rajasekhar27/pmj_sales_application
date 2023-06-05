import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
export default function NewsDetails() {
  const router = useRouter();

  return (
    <div className="px-5 mt-5">
      <div className="bg-white py-1 px-3 rounded-md">
        <div className="flex items-center space-x-2 my-5">
          <BiArrowBack
            onClick={() => router.back()}
            size={25}
            className="text-bg40"
          />

          <div className="text-base text-bg40 font-semibold">
            News Updated And Events
          </div>
        </div>

        <div>
          <div>
            <img src="/images/golddetail.svg" />
          </div>
          <div className="flex justify-between items-center py-2">
            <div className="text-white bg-bg40 px-3 font-semibold text-sm rounded-lg">
              NEWS
            </div>
            <div className="text-[#959595] font-medium">22/10/2022</div>
          </div>

          <div>
            <div className="text-base text-bg40 font-semibold">
              Gold rate today: Yellow metal trades flat ahead of inflation data;
              silver holds Rs 61,000
            </div>
            <div className="text-sm text-bg40 font-medium mt-2">
              Gold prices traded in a narrow range on Thursday as cautious
              investors stayed on the sidelines.
              <br /> <br /> The price of ten grams of 22-carat gold in Delhi,
              Bengaluru, and Chennai was Rs 47,460, Rs 47,410, and Rs 48,200,
              respectively. <br /> <br />
              The price of ten grams of 22-carat gold in Mumbai was at par with
              the price of gold in Kolkata and Hyderabad, with the yellow metal
              trading at Rs 47,360. <br /> <br /> The price of ten grams of
              24-carat gold in Delhi, Bengaluru and Chennai was Rs 51,770, Rs
              51,720, and Rs 52,580, respectively.
            </div>{" "}
            <div className="text-sm text-bg40 font-medium mt-2">
              Gold prices traded in a narrow range on Thursday as cautious
              investors stayed on the sidelines.
              <br /> <br /> The price of ten grams of 22-carat gold in Delhi,
              Bengaluru, and Chennai was Rs 47,460, Rs 47,410, and Rs 48,200,
              respectively. <br /> <br />
              The price of ten grams of 22-carat gold in Mumbai was at par with
              the price of gold in Kolkata and Hyderabad, with the yellow metal
              trading at Rs 47,360. <br /> <br /> The price of ten grams of
              24-carat gold in Delhi, Bengaluru and Chennai was Rs 51,770, Rs
              51,720, and Rs 52,580, respectively.
            </div>{" "}
          </div>
        </div>

        <div className="mt-5">
          <div className="my-5">
            <img src="/images/finegold.svg" />
          </div>

          <div>
            <div className="text-base text-bg40 font-semibold">
              PMJ Jewels - Last week Golder Jublie Meet
            </div>
            <div className="text-sm text-bg40 font-medium mt-2">
              Gold prices traded in a narrow range on Thursday as cautious
              investors stayed on the sidelines.
              <br /> <br /> The price of ten grams of 22-carat gold in Delhi,
              Bengaluru, and Chennai was Rs 47,460, Rs 47,410, and Rs 48,200,
              respectively. <br /> <br />
              The price of ten grams of 22-carat gold in Mumbai was at par with
              the price of gold in Kolkata and Hyderabad, with the yellow metal
              trading at Rs 47,360. <br /> <br /> The price of ten grams of
              24-carat gold in Delhi, Bengaluru and Chennai was Rs 51,770, Rs
              51,720, and Rs 52,580, respectively.
            </div>{" "}
            <div className="text-sm text-bg40 font-medium mt-2">
              Gold prices traded in a narrow range on Thursday as cautious
              investors stayed on the sidelines.
              <br /> <br /> The price of ten grams of 22-carat gold in Delhi,
              Bengaluru, and Chennai was Rs 47,460, Rs 47,410, and Rs 48,200,
              respectively. <br /> <br />
              The price of ten grams of 22-carat gold in Mumbai was at par with
              the price of gold in Kolkata and Hyderabad, with the yellow metal
              trading at Rs 47,360. <br /> <br /> The price of ten grams of
              24-carat gold in Delhi, Bengaluru and Chennai was Rs 51,770, Rs
              51,720, and Rs 52,580, respectively.
            </div>{" "}
          </div>
        </div>

        <div className="mt-5">
          <div className="my-5">
            <img src="/images/gold3.svg" />
          </div>

          <div className="text-sm text-bg40 font-medium mt-2">
            Gold prices traded in a narrow range on Thursday as cautious
            investors stayed on the sidelines.
            <br /> <br /> The price of ten grams of 22-carat gold in Delhi,
            Bengaluru, and Chennai was Rs 47,460, Rs 47,410, and Rs 48,200,
            respectively. <br /> <br />
            The price of ten grams of 22-carat gold in Mumbai was at par with
            the price of gold in Kolkata and Hyderabad, with the yellow metal
            trading at Rs 47,360. <br /> <br /> The price of ten grams of
            24-carat gold in Delhi, Bengaluru and Chennai was Rs 51,770, Rs
            51,720, and Rs 52,580, respectively.
          </div>
        </div>

        <div className="border-t-2 border-bg40 mt-5 py-5">
          <div className="text-base text-bg40 font-semibold">More News</div>

          <div className="flex justify-between items-center mt-3">
            <img src="/images/silver.svg" />

            <div className=" px-2">
              <div className="flex justify-between items-center ">
                <div className="text-white bg-bg40 px-3 font-semibold text-sm rounded-lg">
                  NEWS
                </div>
                <div className="text-[#959595] font-medium text-sm">
                  22/10/2022
                </div>
              </div>
              <div className="text-base text-bg40 font-semibold">
                PMJ Jewels - Last week Golder Jublie Meet
              </div>
              <div className="text-sm text-bg40 font-medium ">
                Gold prices traded in a narrow range on Thursday.....
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
