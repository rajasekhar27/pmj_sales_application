import { useForm } from "react-hook-form";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setNewJewleryRepairTab } from "../../store/slices/profileSlice";

export default function Details() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(setNewJewleryRepairTab(2));
  };
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mb-3 ">
          <label htmlFor="name" className="text-xs font-normal text-rep mb-1 ">
            Name
          </label>
          <input
            {...register("Name", { required: true })}
            type="text"
            id="name"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>

        <div className=" mb-3 ">
          <label
            htmlFor="mobile"
            className="text-xs font-normal text-rep mb-1 "
          >
            Mobile Number
          </label>
          <input
            {...register("Mobile", { required: true })}
            type="number"
            id="mobile"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>

        <div className="flex justify-between items-center w-full">
          <div className=" mb-3 w-full mr-3">
            <label
              htmlFor="date"
              className="text-xs font-normal text-rep  mb-1"
            >
              DOB
            </label>
            <input
              type="date"
              id="date"
              {...register("Date_Of_Birth", { required: true })}
              className="rounded pl-3 py-2 border w-full text-xs font-normal text-position h-[38px]"
            />
          </div>

          <div className=" mb-3 w-full ">
            <label
              htmlFor="city"
              className="text-xs font-normal text-rep mb-1 "
            >
              City
            </label>
            <select
              className="font-normal text-xs outline-none h-[38px] border px-2 w-full text-position"
              id="city"
              {...register("City", { required: true })}
            >
              <option value="Hyderabad">Hyderabad</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>
        </div>

        <div className=" mb-5 ">
          <label
            htmlFor="address"
            className="text-xs font-normal text-rep mb-1 "
          >
            Address
          </label>
          <textarea
            {...register("Address", { required: true })}
            id="address"
            placeholder=""
            className="rounded pl-3 py-2 pt-3 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position h-[105px]"
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
