import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdAttach } from "react-icons/io";
import { useDispatch } from "react-redux";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { setJewleryOrderTab } from "../../store/slices/profileSlice";

export default function ProductSummary() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imgTitle, setTitle] = useState("");
  const [imgSrc, setSrc] = useState("");
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const fileRef = useRef();
  // const [updateProfileImage] = useUpdateProfileImageMutation()
  // const profileData = useSelector((state) => state.auth.user)
  // const uploadStatus = useSelector(state => state.popup.editProfileImage)

  const handleFileUpload = (e) => {
    e.preventDefault();
    const file = e?.target?.files[0];
    setFile(e?.target?.files[0]);
    setTitle(file?.name);
    {
      file && setSrc(URL.createObjectURL(file));
    }
  };
  const onSubmit = (e) => {
    dispatch(setJewleryOrderTab(3));
  };
  return (
    <div className=" py-5">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 ">
          <label
            htmlFor="productsummary"
            className="text-xs font-medium text-rep  mb-3"
          >
            Product Summary :
          </label>
          <textarea
            id="productsummary"
            value={imgTitle}
            {...register("ProductSummary", { required: true })}
            className="rounded pl-3 border pt-3 text-xs font-normal text-rep h-[115px] w-full"
          />
        </div>
        <div className="flex flex-col">
          <button
            onClick={() => fileRef.current.click()}
            className="self-end border border-position  mb-5  rounded-md h-[37px] px-5 flex justify-center items-center font-medium text-sm text-position "
          >
            {" "}
            Attach File <IoMdAttach size={20} className="ml-2" />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileRef}
            className="hidden"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>

        <div className="mb-5 ">
          <label
            htmlFor="instructions"
            className="text-xs font-medium text-rep  mb-3"
          >
            Special Instructions :
          </label>
          <textarea
            id="instructions"
            {...register("instructions", { required: true })}
            className="rounded pl-3 border pt-3 text-xs font-normal text-rep h-[115px] w-full"
          />
        </div>

        <div className="flex justify-between">
          <button className="border border-back self-center mb-5 mt-5 rounded-md h-[37px] w-full py-3 flex justify-center items-center font-medium text-sm text-position mr-5">
            <RiArrowLeftSLine size={14} className="mr-2" /> Back
          </button>
          <button
            type="submit"
            className="self-center mb-5 mt-5 rounded-md h-[37px] w-full py-3 flex justify-center bg-liveprice items-center font-medium text-sm text-white"
          >
            Continue <RiArrowRightSLine size={14} className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
}
