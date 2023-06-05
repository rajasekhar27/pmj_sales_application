import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useHandleWishlistBarcodeMutation } from "../../store/apis/restApi";
import { setIsWishlistChanged } from "../../store/slices/customerCheckin";
import { closeBarcodePopup } from "../../store/slices/popupSlice";
import Modal from "../Modal";
import { Loader } from "../UI/Loader";

const Barcode = dynamic(() => import("./BarCode"), {
  ssr: false,
  // suspense: true,
});

export default function BarcodeScanner() {
  const dispatch = useDispatch();
  const barcodeStatus = useSelector((state) => state.popup?.barcodeStatus);

  const [scanning, setScanning] = useState(true);
  const [results, setResults] = useState("");

  const childFuncOn = React.useRef(null);
  const childFuncOff = React.useRef(null);

  const [handleWishlistBarcode] = useHandleWishlistBarcodeMutation();

  // const scan = () => {
  //   setScanning(!scanning);
  //   console.log("scanning", scanning);
  // };

  const onDetected = (result) => {
    setResults(result.codeResult.code);
    childFuncOff.current();
    setScanning(false);
  };

  const handleCloseModal = () => {
    childFuncOff.current();
    dispatch(closeBarcodePopup());
    setResults("");
    setScanning(true);
  };

  useEffect(() => {
    const backendFormat = {
      product: results,
    };
    if (results) {
      handleWishlistBarcode(backendFormat).then((res) => {
        if (res.data) {
          toast.success(res?.data?.message);
          dispatch(setIsWishlistChanged());
          handleCloseModal();
        } else {
          toast.error(res.error?.data?.message[0]);
          handleCloseModal();
        }
      });
    }
  }, [results]);

  return (
    <Modal
      isOpen={barcodeStatus}
      modalOuterClick={handleCloseModal}
      parentClases={"place-items-center grid bg-[#000000b3]"}
    >
      <div className="relative w-4/5 ">
        <button
          onClick={handleCloseModal}
          className="absolute w-[34px] font-sans text-center cursor-pointer h-[34px] text-black bg-white rounded-md -right-2 shadow-xl -top-2 z-10"
        >
          X
        </button>

        <div
          onClick={(e) => e.stopPropagation()}
          className=" rounded-md  bg-white drop-shadow-lg  flex flex-col justify-center items-center "
        >
          <p className="text-bg40 text-base font-bold mt-3">Barcode Scanner</p>
          <div className="h-[400px] w-[200px] mt-5 flex flex-col  ">
            <button
              className="bg-bg40 text-white px-3 py-1 rounded-md mb-5 self-center"
              onClick={() => childFuncOn.current()}
            >
              Start / Stop
            </button>

            {scanning ? (
              <Barcode
                onDetected={onDetected}
                childFuncOff={childFuncOff}
                childFuncOn={childFuncOn}
              />
            ) : (
              <div className="flex flex-col justify-center items-center h-full">
                {" "}
                <Loader />
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
