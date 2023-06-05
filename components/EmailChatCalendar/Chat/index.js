import { AiFillAudio } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CgImage } from "react-icons/cg";
import { FaTelegramPlane } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { openChatSidebar } from "../../../store/slices/popupSlice";
import ChatSidebarPopup from "./chat-sidebar";

export default function Chat() {
  const dispatch = useDispatch();
  const ChatSidebar = useSelector((state) => state.popup.chatSidebar);

  return (
    <div className="min-h-screen  mx-4 bg-[url('/chat-bg.svg')] ">
      <div className="h-24 bg-mainbg"></div>
      <div className="relative h-screen">
        {ChatSidebar && <ChatSidebarPopup />}
        <div className=" bg-white  rounded-t-md py-5 fixed right-0 left-0 mx-4">
          <div className="flex justify-between items-center px-4 ">
            <div className="flex items-center">
              <button
                onClick={() => dispatch(openChatSidebar())}
                className="text-rep h-5 w-5 mr-2"
              >
                <GiHamburgerMenu />
              </button>
              <div className="relative mr-2">
                <img
                  src="/profile.svg"
                  className="h-38 w-38 object-cover rounded-full bg-indigo-300"
                />
                <div className="absolute -right-1 bottom-0 bg-online h-3 w-3 rounded-full border border-white" />
              </div>
              <h1>Carrie Hawkins</h1>
            </div>
            <div>
              <button className="">
                <BsThreeDots className="" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-20 bg-mainbg"></div>

        <div className="  w-full bg-cover  py-5 overflow-y-scroll h-[70%] flex flex-col">
          <div className="flex items-start px-5 mt-5 self-end">
            <div className="hero-pattern p-2 rounded-md mr-3">
              <h1 className="font-normal text-sm text-white">
                How can we help? We're here for you!{" "}
              </h1>
            </div>

            <img
              src="/profile.svg"
              className="h-38 w-38 object-cover rounded-full bg-indigo-300"
            />
          </div>

          <div className="flex items-start px-5 mt-5 ">
            <img
              src="/profile.svg"
              className="h-38 w-38 object-cover rounded-full bg-indigo-300 mr-3"
            />
            <div className="bg-white p-2 rounded-md ">
              <h1 className="font-normal text-sm text-name">
                How can we help? We're here for you!{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-4 fixed bottom-0 right-0 left-0  ">
          <div className="bg-white py-2 px-1 flex w-full items-center mt-3 ">
            <div className="w-full mr-3">
              <div className="border px-2 py-3 flex ">
                <button>
                  <AiFillAudio className="h-[17px] w-[17px] mr-2" />
                </button>
                <input
                  type="search"
                  className="w-full outline-none text-xs font-normal placeholder:text-position"
                  placeholder="Type your message or..."
                />
                <button>
                  <CgImage className="h-[17px] w-[17px]" />
                </button>
              </div>
            </div>
            <button className="text-white px-2 py-2 bg-liveprice rounded-md">
              <FaTelegramPlane className="h-[20px] w-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
