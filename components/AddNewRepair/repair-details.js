import { useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setNewJewleryRepairTab } from "../../store/slices/profileSlice";

export default function RepairDetails() {
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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="mb-3">
          <label
            htmlFor="jewelry-type"
            className="text-xs font-normal text-rep mb-1 "
          >
            Material Name
          </label>
          <select
            className="font-normal text-xs w-full outline-none h-[38px] border px-2 "
            {...register("Material_Name", { required: true })}
          >
            <option value="Chain">Chain</option>
            <option value="Necklace">Necklace</option>
            <option value="Ring">Ring</option>
            <option value="Earring">Earring</option>
            <option value="Bangle">Bangle</option>
          </select>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className=" mb-3 w-full mr-3">
            <label
              htmlFor="quantity"
              className="text-xs font-normal text-rep  mb-1"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              {...register("Quantity", { required: true })}
              className="rounded pl-3 py-2 border w-full text-xs font-normal text-position h-[38px]"
            />
          </div>

          <div className=" mb-3 w-full ">
            <label
              htmlFor="net-weight"
              className="text-xs font-normal text-rep  mb-1"
            >
              Net.Weight
            </label>
            <input
              type="number"
              id="net-weight"
              {...register("Net_Weight", { required: true })}
              className="rounded pl-3 py-2 border w-full text-xs font-normal text-position h-[38px]"
            />
          </div>
        </div>

        <div className=" mb-3 ">
          <label
            htmlFor="remarks"
            className="text-xs font-normal text-rep mb-1 "
          >
            Remarks
          </label>
          <textarea
            {...register("Remarks", { required: true })}
            id="remarks"
            placeholder=""
            className="rounded pl-3 py-2 pt-3 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position h-[105px]"
          />
        </div>

        <h1 className="self-end text-center font-semibold text-xs text-liveprice flex items-center">
          <AiOutlinePlus className="mr-1" /> Add More
        </h1>

        <div className="flex justify-between mt-3">
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
