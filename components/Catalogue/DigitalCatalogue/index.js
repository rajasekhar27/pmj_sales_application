import { useRouter } from "next/router";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { openCatalogueFilterPopup } from "../../../store/slices/catalogue";

export default function DigitalCatalogue() {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleFullDigitalCatalogue = () => {
    // dispatch(openCatalogueFilterPopup());
    router.push("/catalogue/catalogue-filter");
  };
  return (
    <div className="mt-28 px-4">
      <div className="flex items-center space-x-2 my-5">
        <BiArrowBack
          onClick={() => router.back()}
          size={25}
          className="text-bg40"
        />
        <div className="text-base text-bg40 font-semibold">Catalogue</div>
      </div>

      <div
        className={` bg-white p-3  rounded-2xl h-[246px] w-[307px]`}
        style={{
          boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        onClick={handleFullDigitalCatalogue}
      >
        <div
          //   onClick={() => handleEntryClick(e.name)}
          className={`rounded-2xl h-full w-full flex flex-col justify-center items-center bg-bg40`}
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div>
            <img src="/images/selectJewel.svg" className="w-12 h-12" />
          </div>
          <div
            className={`  text-center font-semibold text-24 mt-2 px-3 w-40 text-white`}
          >
            Full Digital Catalogue
          </div>
        </div>
      </div>

      <div
        className={` bg-white p-3  mt-4 rounded-2xl h-[146px] w-[307px]`}
        style={{
          boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          onClick={() => router.push("/collections")}
          className={`rounded-2xl h-full w-full flex flex-col justify-center items-center bg-[url('/images/catalogueCollections.svg')] bg-cover`}
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div>
            <img src="/images/cataloguesvg.svg" className="w-12 h-12" />
          </div>
          <div
            className={`  text-center font-medium text-sm mt-2 px-3 w-40 text-white`}
          >
            Collections
          </div>
        </div>
      </div>
    </div>
  );
}
