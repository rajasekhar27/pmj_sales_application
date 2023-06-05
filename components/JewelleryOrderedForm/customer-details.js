import { useForm } from "react-hook-form";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setJewleryOrderTab } from "../../store/slices/profileSlice";

export default function CustomerDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(setJewleryOrderTab(2));
  };
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <div className="mb-5 mr-2">
            <label
              htmlFor="date"
              className="text-xs font-medium text-rep  mb-1"
            >
              Date:
            </label>
            <input
              type="date"
              id="date"
              {...register("Date", { required: true })}
              className="rounded pl-3 border  text-xs font-normal text-position h-[38px] w-full"
            />
          </div>

          <div className=" mb-5 ml-2">
            <label
              htmlFor="order"
              className="text-xs font-normal text-rep mb-1 "
            >
              City
            </label>
            <input
              {...register("Order", { required: true })}
              type="text"
              id="order"
              placeholder="0123"
              className="rounded pl-3 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position h-[38px]"
            />
          </div>
        </div>
        <div className="flex  items-center">
          <div className=" flex mr-5 ">
            <label
              htmlFor="diamond"
              className="text-sm font-medium text-liveprice mb-1 mr-1"
            >
              Diamond Order :{" "}
            </label>
            <input
              {...register("Diamond", { required: true })}
              type="radio"
              id="diamond"
              name="orders"
              className=" boder border-liveprice h-[18px] "
            />
          </div>

          <div className=" flex ">
            <label
              htmlFor="gold-order"
              className="text-sm font-medium text-liveprice mb-1 mr-1"
            >
              Gold Order :{" "}
            </label>
            <input
              {...register("Gold", { required: true })}
              type="radio"
              id="gold-order"
              name="orders"
              className=" boder border-liveprice h-[18px] "
            />
          </div>
        </div>
         
        <div className=" mb-5 ">
          <label htmlFor="name" className="text-xs font-normal text-rep mb-1 ">
            Name :{" "}
          </label>
          <input
            {...register("Name", { required: true })}
            type="text"
            id="name"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-5 ">
          <label htmlFor="phone" className="text-xs font-normal text-rep mb-1 ">
            Phone Number :{" "}
          </label>
          <input
            {...register("Phone", { required: true })}
            type="number"
            id="phone"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-5 ">
          <label htmlFor="Recd" className="text-xs font-normal text-rep mb-1 ">
            Order Recd. By :{" "}
          </label>
          <input
            {...register("OrderRecd", { required: true })}
            type="text"
            id="Recd"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-5 ">
          <label
            htmlFor="approved"
            className="text-xs font-normal text-rep mb-1 "
          >
            Approved By :{" "}
          </label>
          <input
            {...register("Approved", { required: true })}
            type="text"
            id="approved"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-5 ">
          <label
            htmlFor="Reffered"
            className="text-xs font-normal text-rep mb-1 "
          >
            Reffered By :{" "}
          </label>
          <input
            {...register("Reffered", { required: true })}
            type="text"
            id="Reffered"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-5 ">
          <label
            htmlFor="Remarks"
            className="text-xs font-normal text-rep mb-1 "
          >
            Remarks :{" "}
          </label>
          <input
            {...register("Remarks", { required: true })}
            type="text"
            id="Remarks"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-5 ">
          <label htmlFor="Email" className="text-xs font-normal text-rep mb-1 ">
            E-mail :{" "}
          </label>
          <input
            {...register("Email", { required: true })}
            type="email"
            id="Email"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-5 ">
          <label
            htmlFor="Receipt"
            className="text-xs font-normal text-rep mb-1 "
          >
            Receipt No :{" "}
          </label>
          <input
            {...register("Receipt", { required: true })}
            type="text"
            id="Receipt"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-5 ">
          <label
            htmlFor="Advance"
            className="text-xs font-normal text-rep mb-1 "
          >
            Advance Paid :{" "}
          </label>
          <input
            {...register("Advance", { required: true })}
            type="textl"
            id="Advance"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-5 ">
          <label
            htmlFor="Scheme"
            className="text-xs font-normal text-rep mb-1 "
          >
            Scheme No :{" "}
          </label>
          <input
            {...register("Scheme", { required: true })}
            type="number"
            id="Scheme"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-5 ">
          <label
            htmlFor="DiamondPrice"
            className="text-xs font-normal text-rep mb-1 "
          >
            Diamond Price :{" "}
          </label>
          <input
            {...register("DiamondPrice", { required: true })}
            type="number"
            id="DiamondPrice"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-5 ">
          <label htmlFor="Gross" className="text-xs font-normal text-rep mb-1 ">
            Gross Wt :{" "}
          </label>
          <div className="relative">
            <input
              {...register("Gross", { required: true })}
              type="number"
              id="Gross"
              placeholder=""
              className=" h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
            />
            <h1 className="absolute  right-4 bottom-3 text-xs font-normal text-position  ">
              .gm
            </h1>
          </div>
        </div>
        <div className=" mb-5 ">
          <label
            htmlFor="OldRecord"
            className="text-xs font-normal text-rep mb-1 "
          >
            Old gold Recd. from Customer, if any (Optional) :{" "}
          </label>
          <input
            {...register("OldRecord", { required: false })}
            type="text"
            id="OldRecord"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-5 ">
          <label
            htmlFor="goldPrice"
            className="text-xs font-normal text-rep mb-1 "
          >
            24K Gold Price :{" "}
          </label>
          <input
            {...register("Gold", { required: true })}
            type="number"
            id="goldPrice"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
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
