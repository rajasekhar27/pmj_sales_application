import { useDispatch, useSelector } from "react-redux";
import { closeLivePrice } from "../../store/slices/popupSlice";
import Modal from "../Modal";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillTriangleFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import { useGetLiveGoldPriceQuery } from "../../store/apis/restApi";

const TimeRatio = dynamic(() => import("./time-ratio"), { ssr: false });

export default function LivePriceModal() {
  const dispatch = useDispatch();
  const priceStatus = useSelector((state) => state.popup.livePrice);

  const { data } = useGetLiveGoldPriceQuery();

  return (
    <Modal
      isOpen={priceStatus}
      modalOuterClick={() => dispatch(closeLivePrice())}
      parentClases="bottom-0 flex justify-center items-center popBgTransparent"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col font-poppins rounded-md bg-white relative w-10/12 "
      >
        <div className="flex flex-col bg-white py-4 rounded-[5px] w-full">
          <div className=" flex justify-between items-center w-full px-4">
            <div className="flex items-center">
              <div className=" flex flex-col justify-center items-center bg-live h-[36px] w-[36px] rounded-full mr-3">
                <img src="/liveprice.svg" className="text-white h-4 w-6 " />
              </div>
              <h1 className="text-liveprice font-semibold text-base tracking-wide ">
                GOLD RATE
              </h1>
            </div>
            <button onClick={() => dispatch(closeLivePrice())}>
              <div className=" flex justify-center items-center  h-6 w-6 ">
                <AiOutlineClose />
              </div>
            </button>
          </div>

          <hr className="h-[2px] bg-liveprice mt-4 mb-3" />

          <div className="flex  px-2 items-center">
            <h1 className="text-sm font-semibold text-live w-96 mr-1">
              GOLD 24K - 1G
            </h1>

            <TimeRatio color={"#28C76F"} />

            <div className="flex flex-col justify-center items-center w-80 ml-1">
              <h1 className="text-sm font-semibold text-rep">
                {`RS. ${data?.price_gram_24k.toFixed(2)}`}
              </h1>
              <h1 className="text-revenue flex justify-center items-center ">
                <BsFillTriangleFill size={12} className="mr-1" />{" "}
                <span className="text-xs font-medium">+2.00%</span>
              </h1>
            </div>
          </div>
          <div className="flex  px-2 items-center">
            <h1 className="text-sm font-semibold text-live w-96 mr-1">
              GOLD 22K - 1G
            </h1>

            <TimeRatio color={"#28C76F"} />

            <div className="flex flex-col justify-center items-center w-80 ml-1">
              <h1 className="text-sm font-semibold text-rep">
                {`RS. ${data?.price_gram_22k.toFixed(2)}`}
              </h1>
              <h1 className="text-revenue flex justify-center items-center ">
                <BsFillTriangleFill size={12} className="mr-1" />{" "}
                <span className="text-xs font-medium">+2.00%</span>
              </h1>
            </div>
          </div>
          <div className="flex  px-2 items-center">
            <h1 className="text-sm font-semibold text-live w-96 mr-1">
              GOLD 18K - 1G
            </h1>

            <TimeRatio color={"#EA5455"} />

            <div className="flex flex-col justify-center items-center w-80 ml-1">
              <h1 className="text-sm font-semibold text-rep">
                {`RS. ${data?.price_gram_18k.toFixed(2)}`}
              </h1>
              <h1 className="text-notification flex justify-center items-center ">
                <BsFillTriangleFill size={12} className="mr-1 rotate-180" />{" "}
                <span className="text-xs font-medium">-2.00%</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
