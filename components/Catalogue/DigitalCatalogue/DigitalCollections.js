import { useRouter } from "next/router";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

export default function DigitalCollections() {
  const router = useRouter();

  const collection = [
    {
      id: "1",
      name: "Bridal Collections",
      image: 'bg-[url("/images/bidalcollection.svg")]',
      router: "BridalCollections",
    },
    {
      id: "2",
      name: "Men’s Collections",
      image: 'bg-[url("/images/menscollection.svg")]',
      router: "Men’sCollections",
    },
    {
      id: "3",
      name: "Women’s Collections",
      image: 'bg-[url("/images/womenscollection.svg")]',
      router: "Women’sCollections",
    },
  ];
  return (
    <div className="mt-28 px-4">
      <div className="flex items-center space-x-2 my-5">
        <BiArrowBack
          onClick={() => router.back()}
          size={25}
          className="text-bg40"
        />
        <div className="text-base text-bg40 font-semibold">Collections</div>
      </div>
      {collection?.map((c, index) => (
        <div
          className={` bg-white p-3  mt-4 rounded-2xl h-[146px] w-[307px]`}
          key={index}
          style={{
            boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div
            onClick={() => router.push(`/collections/${c.router}`)}
            className={`rounded-2xl h-full w-full flex flex-col justify-center items-center ${c.image}  bg-cover`}
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div
              className={`  text-center font-medium text-sm px-3 w-full text-white`}
            >
              {c.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
