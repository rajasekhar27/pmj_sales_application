import { BsThreeDotsVertical } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { closeChatSidebar } from "../../../store/slices/popupSlice";

export default function ChatSidebarPopup() {
  const dispatch = useDispatch();

  return (
    <div className="absolute  z-20  bg-[#000000b3] w-full h-full flex">
      <div className="bg-white w-9/12 email">
        {/* <div className="mt-28  bg-white min-h-screen"> */}
        <div className="flex mb-5 px-5 pt-3">
          <div>
            <div className="relative h-38 w-38">
              <img
                src="/profile.svg"
                className="h-38 w-38 object-cover rounded-full bg-indigo-300"
              />
              <div className="absolute -right-1 bottom-0 bg-online h-3 w-3 rounded-full border border-white" />
            </div>
          </div>
          <div className="border-2 w-full mx-2 rounded-full flex items-center text-position px-2 py-2">
            <label htmlFor="chat" className="text-position mr-2">
              <IoSearchSharp className="h-[16px] w-[16px]" />
            </label>
            <input
              id="chat"
              type="search"
              placeholder="Search or Start..."
              className="w-full text-rep text-sm font-medium placeholder:text-xs placeholder:font-normal bg-transparent outline-none"
            />
          </div>
        </div>

        <hr />

        <div className="mt-5 ">
          <h1 className="text-liveprice font-medium text-md mb-3 px-4">
            Chats
          </h1>

          <div className="flex items-start py-2 px-4">
            <div>
              <div className="relative h-[38px] w-[38px]">
                <img
                  src="/email-profile.svg"
                  className="h-[38px] w-[38px] object-cover rounded-full bg-emailProfile"
                />
                <div className="absolute -right-1 bottom-0 bg-online h-3 w-3 rounded-full border border-white" />
              </div>
            </div>
            <div className="flex flex-col w-full overflow-hidden ml-3">
              <div className="flex items-start justify-between w-full">
                <div className="overflow-hidden text-ellipsis mr-2">
                  <h1 className="font-medium text-base text-rep whitespace-nowrap">
                    Bernice Underwood
                  </h1>
                </div>
                <div className="flex flex-col items-start w-14">
                  <h1 className="font-normal text-xs text-position self-end">
                    09:27AM
                  </h1>
                </div>
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="overflow-hidden text-ellipsis mr-2">
                  <h1 className="font-normal text-sm text-name  mt-1 whitespace-nowrap ">
                    Decorate For Less With Art positionsincounter
                  </h1>
                </div>
                <div className="flex flex-col items-start w-28">
                  <div className="self-end h-[20px] w-[20px] rounded-full flex justify-center items-center bg-red-500">
                    <h1 className="font-semibold text-xs text-white ">0</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start hero-pattern py-2 px-4 rounded-r-md">
            <div>
              <div className="relative h-[38px] w-[38px]">
                <img
                  src="/email-profile.svg"
                  className="h-[38px] w-[38px] object-cover rounded-full bg-emailProfile"
                />
                <div className="absolute -right-1 bottom-0 bg-online h-3 w-3 rounded-full border border-white" />
              </div>
            </div>

            <div className="flex flex-col w-full overflow-hidden ml-3">
              <div className="flex items-start justify-between w-full">
                <div className="overflow-hidden text-ellipsis mr-2">
                  <h1 className="font-medium text-base text-white whitespace-nowrap">
                    Bernice Underwood
                  </h1>
                </div>
                <div className="flex flex-col items-start w-14">
                  <h1 className="font-normal text-xs text-white self-end">
                    09:27AM
                  </h1>
                </div>
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="overflow-hidden text-ellipsis mr-2">
                  <h1 className="font-normal text-sm text-white  mt-1 whitespace-nowrap ">
                    Decorate For Less With Art positionsincounter
                  </h1>
                </div>
                <div className="flex flex-col items-start w-28">
                  {/* <div className="self-end h-[20px] w-[20px] rounded-full flex justify-center items-center bg-red-500">
                           <h1 className='font-semibold text-xs text-white '>0</h1>
                        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <button
        onClick={() => dispatch(closeChatSidebar())}
        className="w-1/4 "
      ></button>
    </div>
  );
}
