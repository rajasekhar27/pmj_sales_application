import {
  AiOutlineArrowsAlt,
  AiOutlineItalic,
  AiOutlineMinus,
  AiOutlineUnderline,
} from "react-icons/ai";
import { BiText, BiTrashAlt } from "react-icons/bi";
import { FiBold, FiLink2 } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { GrTextAlignLeft } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { closeComposeForm } from "../../../store/slices/popupSlice";
import Modal from "../../Modal";
import { MdOutlineAttachment } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function ComposePopup() {
  const dispatch = useDispatch();
  const composeStatus = useSelector((state) => state.popup.compose);
  return (
    <Modal
      isOpen={composeStatus}
      modalOuterClick={() => dispatch(closeComposeForm())}
      parentClases="bottom-5 flex justify-center items-end "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="font-poppins bg-white relative w-10/12 drop-shadow-md rounded-md"
      >
        <div className="flex justify-between items-center w-full pb-3 pt-3 bg-compose px-2 rounded-t-md">
          <h1 className="text-rep font-medium text-[15px]">New Message</h1>
          <div className="flex  items-center w-20 justify-between">
            <button>
              <AiOutlineMinus className="h-5 w-5" />
            </button>
            <button>
              <AiOutlineArrowsAlt className="h-5 w-5" />
            </button>
            <button onClick={() => dispatch(closeComposeForm())}>
              <IoCloseOutline className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex  justify-between pt-3 pb-3 px-2 ">
          <div className="flex ">
            <label
              htmlFor="toSearch"
              className="mr-2 font-normal text-sm text-position"
            >
              To:
            </label>
            <input
              id="toSearch"
              type="search"
              className=" w-full font-normal text-sm text-position outline-none"
            />
          </div>
          <h1 className="flex items-center ml-2 font-normal text-sm text-position">
            Cc <span className="ml-2">Bcc</span>
          </h1>
        </div>

        <hr />
        <div className="pt-3 pb-3 px-2">
          <div className="flex ">
            <label
              htmlFor="subject"
              className="mr-2 font-normal text-sm text-position"
            >
              Subject:
            </label>
            <input
              id="subject"
              type="search"
              className=" w-full font-normal text-sm outline-none placeholder:text-rep text-rep "
            />
          </div>
        </div>

        <hr />

        <div className="pt-3 pb-3 px-2 ">
          <textarea
            placeholder="Type message..."
            className="w-full h-20 outline-none text-position font-normal text-xs"
          />
        </div>

        <hr />

        <div className="pt-3 pb-3 px-2 flex justify-between w-7/12">
          <button className="text-position">
            <FiBold className="h-4 w-4" />
          </button>
          <button className="text-position">
            <AiOutlineItalic className="h-4 w-4" />
          </button>
          <button className="text-position">
            <AiOutlineUnderline className="h-4 w-4" />
          </button>
          <button className="text-position">
            <BiText className="h-4 w-4" />
          </button>
          <button className="text-position">
            <GrTextAlignLeft className="h-4 w-4" />
          </button>
          <button className="text-position">
            <FiLink2 className="h-4 w-4" />
          </button>
        </div>

        <hr />

        <div className="pt-3 pb-3 px-2 flex justify-between items-center w-full">
          <div className="flex ">
            <button className="mr-2 w-full mb-5 mt-5 rounded-md h-[38px] px-4 flex justify-center bg-liveprice items-center font-semibold text-md text-white">
              Send
            </button>
            <button className="text-rep self-center">
              <MdOutlineAttachment className="h-4 w-4 -rotate-45" />
            </button>
          </div>
          <div className="flex justify-between items-center w-10">
            <button className="">
              <BsThreeDotsVertical className="h-[18px] w-[18px]" />
            </button>
            <button className="">
              <BiTrashAlt className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
