import { useForm } from "react-hook-form";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  openObservedFeedbackPopup,
  setHashTag,
} from "../../../store/slices/customerCheckin";

export default function TagForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onTagSubmit = () => {
    const [hashtag] = watch(["hashTag"]);
    dispatch(setHashTag(hashtag));
    dispatch(openObservedFeedbackPopup());
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onTagSubmit)}>
      <div className="flex flex-col mt-3 relative ">
        <input
          type="text"
          className="border rounded-md h-9 px-3 mt-3"
          {...register("hashTag", {
            required: true,
          })}
          placeholder="Enter text"
        />
        <MdOutlineKeyboardVoice
          className="absolute right-[88px] top-5 text-bg40"
          size={18}
        />
        <button
          type="submit"
          className="w-[84px] absolute right-0 top-[13px] text-base h-[33.5px] bg-bg40 rounded-l-none rounded-lg text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
