import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCalenderSideBar,
  closeEmailSideBar,
  openInboxMessage,
} from "../../../store/slices/popupSlice";
import EmailSideBar from "./email-sidebar";

export default function AllMessages() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(openInboxMessage())}
        className="bg-white  pb-5 pt-5 w-full"
      >
        <div className="flex items-start px-4   ">
          <img
            src="/email-profile.svg"
            className="h-[46px] w-[46px] rounded-full object-cover  bg-emailProfile mr-3"
          />
          <div className="flex flex-col w-full overflow-hidden text-ellipsis">
            <div className="flex items-center justify-between w-full ">
              <div className="overflow-hidden text-ellipsis">
                <h1 className="font-medium text-base text-rep whitespace-nowrap">
                  Bernice Underwoodadfasf
                </h1>
              </div>
              <div className="flex items-center ml-2">
                <div className="h-[10px] w-[10px] bg-online rounded-full mr-2"></div>
                <h1 className="font-normal text-xs text-position ">09:27AM</h1>
              </div>
            </div>

            <h1 className="font-normal text-sm text-name  mt-1 whitespace-nowrap ">
              Decorate For Less With Art positionsincounter
            </h1>
          </div>
        </div>
        <div className="flex items-center px-4 text-position mt-2 overflow-hidden text-ellipsis ">
          <input
            type="checkbox"
            className="h-[18px] w-[18px] mr-2 accent-liveprice "
          />
          {false ? (
            <button>
              <AiTwotoneStar className={`h-[20px] w-[20px] mr-3 text-live`} />
            </button>
          ) : (
            <button>
              <AiOutlineStar className={`h-[20px] w-[20px] mr-3 `} />
            </button>
          )}
          <div className="overflow-hidden text-ellipsis">
            <h1 className="whitespace-nowrap text-sm font-normal">
              What is your attitude as a small{" "}
            </h1>
          </div>
        </div>
      </button>

      <div className="bg-selectedBg  pb-5 pt-5">
        <div className="flex items-start px-4   ">
          <img
            src="/email-profile.svg"
            className="h-[46px] w-[46px] rounded-full object-cover  bg-customer mr-3"
          />
          <div className="flex flex-col w-full overflow-hidden text-ellipsis">
            <div className="flex items-center justify-between w-full">
              <div className="overflow-hidden text-ellipsis">
                <h1 className="font-medium text-base text-rep whitespace-nowrap">
                  Bernice Underwoodadfasf
                </h1>
              </div>
              <div className="flex items-center  ml-2">
                <div className="h-[10px] w-[10px] bg-customer rounded-full mr-2"></div>
                <h1 className="font-normal text-xs text-position ">09:27AM</h1>
              </div>
            </div>
            <h1 className="font-normal text-sm text-name overflow-hidden mt-1 whitespace-nowrap">
              Decorate For Less With Art positionsincounter
            </h1>
          </div>
        </div>
        <div className="flex items-center px-4 text-position mt-2">
          <input
            type="checkbox"
            className="h-[18px] w-[18px] mr-2 accent-liveprice "
          />
          {true ? (
            <button>
              <AiTwotoneStar className={`h-[20px] w-[20px] mr-3 text-live`} />
            </button>
          ) : (
            <button>
              <AiOutlineStar className={`h-[20px] w-[20px] mr-3 `} />
            </button>
          )}
          <div className="overflow-hidden text-ellipsis">
            <h1 className="whitespace-nowrap text-sm font-normal">
              What is your attitude as a small{" "}
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white  pb-5 pt-5">
          <div className="flex items-start px-4   ">
            <img
              src="/email-profile.svg"
              className="h-[46px] w-[46px] rounded-full object-cover  bg-emailProfile mr-3"
            />
            <div className="flex flex-col w-full overflow-hidden text-ellipsis">
              <div className="flex items-center justify-between w-full">
                <div className="overflow-hidden text-ellipsis">
                  <h1 className="font-medium text-base text-rep whitespace-nowrap">
                    Bernice Underwoodadfasf
                  </h1>
                </div>
                <div className="flex items-center  ml-2">
                  <div className="h-[10px] w-[10px] bg-online rounded-full mr-2"></div>
                  <h1 className="font-normal text-xs text-position ">
                    09:27AM
                  </h1>
                </div>
              </div>
              <h1 className="font-normal text-sm text-name overflow-hidden mt-1 whitespace-nowrap">
                Decorate For Less With Art positionsincounter
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center px-4 text-position mt-2">
          <input
            type="checkbox"
            className="h-[18px] w-[18px] mr-2 accent-liveprice "
          />
          {false ? (
            <button>
              <AiTwotoneStar className={`h-[20px] w-[20px] mr-3 text-live`} />
            </button>
          ) : (
            <button>
              <AiOutlineStar className={`h-[20px] w-[20px] mr-3 `} />
            </button>
          )}
          <div className="overflow-hidden text-ellipsis">
            <h1 className="whitespace-nowrap text-sm font-normal">
              What is your attitude as a small{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
