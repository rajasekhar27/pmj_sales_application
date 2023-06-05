import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { closeFilterForm } from "../../store/slices/popupSlice";
import Modal from "../Modal";
export default function FilterForm() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();
  const filterStatus = useSelector((state) => state.popup.filter);

  const onSubmitForm = (e) => {
    dispatch(closeFilterForm());
    reset();

    //   updateUserDetails({

    //       first_name:e.FirstName,
    //       middle_name:e.MiddleName,
    //       last_name:e.LastName,
    //       gender:e.Gender,
    //       date_of_birth:e.Date_Of_Birth,
    //       email:e.Email,

    //   }).then((res) => {
    //     if (res.data) {
    //       toast.success("successfully updated User Details");
    //       dispatch(closeEditProfile())
    //     }

    //     if (res.error) {
    //       toast.error(JSON.stringify(res.error.data));
    //     }
    //   })
  };

  return (
    <Modal
      isOpen={filterStatus}
      modalOuterClick={() => dispatch(closeFilterForm())}
      parentClases="bottom-0 flex justify-center items-center popBgBlack"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="font-poppins bg-white relative w-10/12 rounded-md"
      >
        <button onClick={() => dispatch(closeFilterForm())}>
          <div className="bg-white flex justify-center items-center absolute -top-2 -right-2 h-7 w-7 rounded-lg border">
            <AiOutlineClose />
          </div>
        </button>

        <form
          className=" flex flex-col overflow-y-scroll mb-5"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <h1 className="mx-3  mt-5 flex justify-center items-center font-medium text-rep text-[25px] font-poppins">
            Filter
          </h1>
          <label
            htmlFor="jewelry-status"
            className="text-xs font-normal text-rep mb-1 px-3"
          >
            Date
          </label>

          <div className=" mb-5 flex justify-between mx-3">
            <div className="w-1/2 pr-2">
              <input
                type={"date"}
                placeholder="form date"
                className="w-full border rounded"
                {...register("from", { required: true })}
              />
            </div>

            <div className="w-1/2">
              <input
                type={"date"}
                placeholder="form date"
                className="border w-full rounded"
                {...register("to", { required: true })}
              />
            </div>
          </div>

          <div className="mx-3 mb-5 pt-5">
            <label
              htmlFor="jewelry-type"
              className="text-xs font-normal text-rep mb-1 "
            >
              Jewellery Type
            </label>
            <select
              className="font-normal text-xs w-full outline-none h-[38px] bg-white rounded border px-2 "
              {...register("Jewelry_Type", { required: true })}
            >
              <option value="status">status</option>
              <option value="Completed" className="text-green-500 font-medium">
                {" "}
                Completed
              </option>
              <option
                value="Processing"
                className="text-orange-500 font-medium"
              >
                Processing
              </option>
              <option value="Pending" className="text-red-500 font-medium">
                Pending
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="self-center mb-5 mt-5 rounded-md h-[38px] w-36 py-3 flex justify-center bg-liveprice items-center font-semibold text-md text-white"
          >
            Done
          </button>
        </form>
      </div>
    </Modal>
  );
}
