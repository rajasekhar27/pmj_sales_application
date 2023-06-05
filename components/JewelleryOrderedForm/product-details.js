import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function ProductDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (values) => {};
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mb-3 ">
          <label
            htmlFor="required-product"
            className="text-xs font-normal text-rep mb-3 "
          >
            Required Product :{" "}
          </label>
          <input
            {...register("Required_Product", { required: true })}
            type="text"
            id="required-product"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-3 ">
          <label
            htmlFor="manufactured"
            className="text-xs font-normal text-rep mb-3 "
          >
            No.of pices to be manufactured :{" "}
          </label>
          <input
            {...register("Manufactured", { required: true })}
            type="text"
            id="manufactured"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-3 ">
          <label
            htmlFor="bracelet"
            className="text-xs font-normal text-rep mb-3 "
          >
            Bracelet/Bangle/Ring size :{" "}
          </label>
          <input
            {...register("Bracelet", { required: true })}
            type="text"
            id="bracelet"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-3 ">
          <label
            htmlFor="length"
            className="text-xs font-normal text-rep mb-3 "
          >
            Length(necklace/pendent/belt + backchain with hook) :{" "}
          </label>
          <input
            {...register("Length", { required: true })}
            type="text"
            id="length"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-3 ">
          <label
            htmlFor="approx-gross-weight"
            className="text-xs font-normal text-rep mb-3 "
          >
            Approx. Gross Weight :{" "}
          </label>
          <input
            {...register("Approx_Gross_Weight", { required: true })}
            type="text"
            id="Approx-Gross-Weight"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>
        <div className=" mb-3 ">
          <label
            htmlFor="approx-net-weight"
            className="text-xs font-normal text-rep mb-3 "
          >
            Approx. Net Weight :{" "}
          </label>
          <input
            {...register("Approx_Net_Weight", { required: true })}
            type="text"
            id="approx-net-weight"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>

        <div className="flex justify-between pt-2">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-rep mb-2 ">
              Bangle Clasp :{" "}
            </label>
            <div className="flex  items-center">
              <div className=" flex mr-2 ">
                <label
                  htmlFor="with"
                  className="text-xs font-medium text-liveprice mb-1 mr-1"
                >
                  With :{" "}
                </label>
                <input
                  {...register("Bangle_Clasp_With", { required: true })}
                  type="radio"
                  id="with"
                  name="clasps"
                  className=" boder border-liveprice h-[18px] accent-liveprice"
                />
              </div>

              <div className=" flex ">
                <label
                  htmlFor="without"
                  className="text-xs font-medium text-liveprice mb-1 mr-1"
                >
                  Without :{" "}
                </label>
                <input
                  {...register("Bangle_Clasp_Without", { required: true })}
                  type="radio"
                  id="without"
                  name="clasps"
                  className=" boder border-liveprice h-[18px] accent-liveprice"
                />
              </div>
            </div>
             
          </div>

          <hr className="h-[43px] w-[1px] bg-name" />

          <div className="flex flex-col">
            <label className="text-sm font-medium text-rep mb-2 ">
              Metal Purity :{" "}
            </label>
            <div className="flex  items-center">
              <div className=" flex  mr-2 ">
                <label
                  htmlFor="18K"
                  className="text-xs font-medium text-liveprice mb-1 mr-1"
                >
                  18K :{" "}
                </label>
                <input
                  {...register("Metal_Purity_18K", { required: true })}
                  type="radio"
                  id="18K"
                  name="purity"
                  className=" boder border-liveprice h-[18px] accent-liveprice"
                />
              </div>

              <div className=" flex ">
                <label
                  htmlFor="22K"
                  className="text-xs font-medium text-liveprice mb-1 mr-1 "
                >
                  22K :{" "}
                </label>
                <input
                  {...register("Metal_Purity_22K", { required: true })}
                  type="radio"
                  id="22K"
                  name="purity"
                  className=" boder border-liveprice h-[18px] accent-liveprice "
                />
              </div>
            </div>
             
          </div>
        </div>

        <hr className="-mt-3" />

        <div className="flex flex-col mt-3">
          <label className="text-sm font-medium text-rep mb-2 ">
            Gold Color :{" "}
          </label>
          <div className="flex  items-center">
            <div className=" flex  mr-3 ">
              <label
                htmlFor="yellow"
                className="text-xs font-medium text-liveprice mb-1 mr-1"
              >
                Yellow :{" "}
              </label>
              <input
                {...register("Yellow", { required: true })}
                type="radio"
                id="yellow"
                name="gold-color"
                className=" boder border-liveprice h-[18px] accent-liveprice"
              />
            </div>

            <div className=" flex mr-3 ">
              <label
                htmlFor="white"
                className="text-xs font-medium text-liveprice mb-1 mr-1 "
              >
                White :{" "}
              </label>
              <input
                {...register("White", { required: true })}
                type="radio"
                id="white"
                name="gold-color"
                className=" boder border-liveprice h-[18px] accent-liveprice "
              />
            </div>

            <div className=" flex ">
              <label
                htmlFor="others"
                className="text-xs font-medium text-liveprice mb-1 mr-1 "
              >
                Others :{" "}
              </label>
              <input
                {...register("Others", { required: true })}
                type="radio"
                id="others"
                name="gold-color"
                className=" boder border-liveprice h-[18px] accent-liveprice "
              />
            </div>
          </div>
           
        </div>

        <hr className="-mt-3" />

        <div className="flex flex-col mt-3">
          <label className="text-sm font-medium text-rep mb-2 ">
            Screw/Findings :{" "}
          </label>
          <div className="flex  items-center">
            <div className=" flex  mr-3 ">
              <label
                htmlFor="yellow"
                className="text-xs font-medium text-liveprice mb-1 mr-1"
              >
                Madras :{" "}
              </label>
              <input
                {...register("madras", { required: true })}
                type="radio"
                id="madras"
                name="screw-findings"
                className=" boder border-liveprice h-[18px] accent-liveprice"
              />
            </div>

            <div className=" flex mr-3 ">
              <label
                htmlFor="bombay"
                className="text-xs font-medium text-liveprice mb-1 mr-1 "
              >
                Bombay :{" "}
              </label>
              <input
                {...register("Bombay", { required: true })}
                type="radio"
                id="bombay"
                name="screw-findings"
                className=" boder border-liveprice h-[18px] accent-liveprice "
              />
            </div>

            <div className=" flex ">
              <label
                htmlFor="jhook"
                className="text-xs font-medium text-liveprice mb-1 mr-1 "
              >
                j hook :{" "}
              </label>
              <input
                {...register("JHook", { required: true })}
                type="radio"
                id="jhook"
                name="screw-findings"
                className=" boder border-liveprice h-[18px] accent-liveprice "
              />
            </div>
          </div>
           
        </div>

        <hr className="-mt-3" />

        <div className="flex flex-col mt-3">
          <label className="text-sm font-medium text-rep mb-2 ">
            Polish :{" "}
          </label>
          <div className="flex  flex-wrap">
            <div className=" flex  mr-3 ">
              <label
                htmlFor="polish-18K"
                className="text-xs font-medium text-liveprice mb-1 mr-1"
              >
                18K :{" "}
              </label>
              <input
                {...register("polish_18K", { required: true })}
                type="radio"
                id="polish-18K"
                name="Polish"
                className=" boder border-liveprice h-[18px] accent-liveprice"
              />
            </div>

            <div className=" flex mr-3 ">
              <label
                htmlFor="polish-22K"
                className="text-xs font-medium text-liveprice mb-1 mr-1 "
              >
                22K :{" "}
              </label>
              <input
                {...register("polish_22K", { required: true })}
                type="radio"
                id="polish-22K"
                name="Polish"
                className=" boder border-liveprice h-[18px] accent-liveprice "
              />
            </div>

            <div className=" flex mr-3 ">
              <label
                htmlFor="Antique"
                className="text-xs font-medium text-liveprice mb-1 mr-1 "
              >
                Antique :{" "}
              </label>
              <input
                {...register("Antique", { required: true })}
                type="radio"
                id="Antique"
                name="Polish"
                className=" boder border-liveprice h-[18px] accent-liveprice "
              />
            </div>

            <div className=" flex mr-3 ">
              <label
                htmlFor="Semi Antique"
                className="text-xs font-medium text-liveprice mb-1 mr-1 "
              >
                Semi Antique :{" "}
              </label>
              <input
                {...register("Semi_Antique", { required: true })}
                type="radio"
                id="Semi Antique"
                name="Polish"
                className=" boder border-liveprice h-[18px] accent-liveprice "
              />
            </div>
          </div>
           
        </div>

        <hr className="-mt-3" />

        <div className="flex flex-col mt-3">
          <label className="text-sm font-medium text-rep mb-2 ">
            Setting :{" "}
          </label>
          <div className="flex  items-center">
            <div className=" flex  mr-3 ">
              <label
                htmlFor="Open"
                className="text-xs font-medium text-liveprice mb-1 mr-1"
              >
                Open :{" "}
              </label>
              <input
                {...register("Open", { required: true })}
                type="radio"
                id="Open"
                name="Setting"
                className=" boder border-liveprice h-[18px] accent-liveprice"
              />
            </div>

            <div className=" flex  ">
              <label
                htmlFor="Close"
                className="text-xs font-medium text-liveprice mb-1 mr-1 "
              >
                Close :{" "}
              </label>
              <input
                {...register("Close", { required: true })}
                type="radio"
                id="Close"
                name="Setting"
                className=" boder border-liveprice h-[18px] accent-liveprice "
              />
            </div>
          </div>
           
        </div>

        <hr className="-mt-3" />

        <div className="flex flex-col mt-3">
          <label className="text-sm font-medium text-rep mb-2 ">
            Rhodium :{" "}
          </label>
          <div className="flex  flex-wrap">
            <div className=" flex  mr-3 ">
              <label
                htmlFor="Full"
                className="text-xs font-medium text-liveprice mb-1 mr-1"
              >
                Full :{" "}
              </label>
              <input
                {...register("Full", { required: true })}
                type="radio"
                id="Full"
                name="Rhodium"
                className=" boder border-liveprice h-[18px] accent-liveprice"
              />
            </div>

            <div className=" flex mr-3 ">
              <label
                htmlFor="Only on Prongs"
                className="text-xs font-medium text-liveprice mb-1 mr-1 "
              >
                Only on Prongs :{" "}
              </label>
              <input
                {...register("Only_on_Prongs", { required: true })}
                type="radio"
                id="Only on Prongs"
                name="Rhodium"
                className=" boder border-liveprice h-[18px] accent-liveprice "
              />
            </div>

            <div className=" flex mr-3 ">
              <label
                htmlFor="No Rhodium"
                className="text-xs font-medium text-liveprice mb-1 mr-1 "
              >
                No Rhodium :{" "}
              </label>
              <input
                {...register("No_Rhodium", { required: true })}
                type="radio"
                id="jhook"
                name="No Rhodium"
                className=" boder border-liveprice h-[18px] accent-liveprice "
              />
            </div>
          </div>
           
        </div>

        <h1 className="font-medium text-base text-liveprice ">
          Additionsal Details :{" "}
        </h1>

        <div className="flex flex-col mt-3">
          <label className="text-sm font-medium text-rep mb-2 ">
            Details of Sample(s) :{" "}
          </label>
          <div className="flex  items-center">
            <div className=" flex  mr-3 ">
              <label
                htmlFor="Customer Sample"
                className="text-xs font-medium text-liveprice mb-1 mr-1"
              >
                Customer Sample :{" "}
              </label>
              <input
                {...register("Customer_Sample", { required: true })}
                type="radio"
                id="Customer Sample"
                name="Details-of-Sample"
                className=" boder border-liveprice h-[18px] accent-liveprice"
              />
            </div>

            <div className=" flex  ">
              <label
                htmlFor="Stock-item-Sample"
                className="text-xs font-medium text-liveprice mb-1 mr-1 "
              >
                Stock-item Sample :{" "}
              </label>
              <input
                {...register("Stock_item_Sample", { required: true })}
                type="radio"
                id="Stock-item-Sample"
                name="Details-of-Sample"
                className=" boder border-liveprice h-[18px] accent-liveprice "
              />
            </div>
          </div>
           
        </div>

        <div className=" -mt-3 ">
          <label
            htmlFor="PMJ Tag"
            className="text-xs font-normal text-rep mb-1 "
          >
            PMJ Tag :{" "}
          </label>
          <input
            {...register("PMJ_Tag", { required: true })}
            type="number"
            id="PMJ Tag"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>

        <div className=" mt-3 ">
          <label
            htmlFor="R.O.No"
            className="text-xs font-normal text-rep mb-1 "
          >
            R.O.No :{" "}
          </label>
          <input
            {...register("R.O.No", { required: true })}
            type="number"
            id="R.O.No"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>

        <div className=" mt-3 ">
          <label
            htmlFor="G.I.No"
            className="text-xs font-normal text-rep mb-1 "
          >
            G.I.No :{" "}
          </label>
          <input
            {...register("G.I.No", { required: true })}
            type="number"
            id="G.I.No"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>

        <div className=" mt-3 ">
          <label
            htmlFor="Item name"
            className="text-xs font-normal text-rep mb-1 "
          >
            Item name :{" "}
          </label>
          <input
            {...register("Item_Name", { required: true })}
            type="number"
            id="Item name"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>

        <div className=" mt-3 ">
          <label
            htmlFor="Item Qty"
            className="text-xs font-normal text-rep mb-1 "
          >
            Item Qty :{" "}
          </label>
          <input
            {...register("Item_Qty", { required: true })}
            type="number"
            id="Item Qty"
            placeholder=""
            className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position"
          />
        </div>

        <div className=" mt-3 ">
          <label
            htmlFor="Item Gross Wt"
            className="text-xs font-normal text-rep mb-1 "
          >
            Item Gross Wt :{" "}
          </label>
          <input
            {...register("Item_Gross_Wt", { required: true })}
            type="number"
            id="Item Gross Wt"
            placeholder=""
            className="rounded pl-3 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position h-[38px] text-position"
          />
        </div>

        <div className="mt-3">
          <label htmlFor="qty" className="text-xs font-normal text-rep mb-1 ">
            Diamond Details :{" "}
          </label>

          <div className="flex justify-between items-center mt-1">
            <div className="mr-2">
              <input
                type="number"
                id="qty"
                {...register("Qty", { required: true })}
                className="rounded pl-3 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position h-[38px] text-position"
              />
            </div>

            <div className=" ">
              <input
                {...register("Ct", { required: true })}
                type="text"
                id="ct"
                placeholder=""
                className="rounded pl-3 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position h-[38px] text-position"
              />
            </div>
          </div>
        </div>

        <div className=" mt-3 ">
          <label
            htmlFor="Color Stone Details"
            className="text-xs font-normal text-rep mb-1 "
          >
            Color Stone Details :{" "}
          </label>
          <input
            {...register("Color_Stone_Details", { required: true })}
            type="text"
            id="Color Stone Details"
            placeholder=""
            className="rounded pl-3 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position h-[38px] text-position"
          />
        </div>

        <div className=" mt-3 ">
          <label
            htmlFor="Purpose of Sample"
            className="text-xs font-normal text-rep mb-1 "
          >
            Purpose of Sample :{" "}
          </label>
          <input
            {...register("Purpose_of_Sample", { required: true })}
            type="text"
            id="Purpose of Sample"
            placeholder=""
            className="rounded pl-3 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position h-[38px] text-position"
          />
        </div>

        <div className="flex justify-between mt-5">
          <button className="border border-back self-center mb-5 mt-5 rounded-md h-[37px] w-full py-3 flex justify-center items-center font-medium text-sm text-position mr-5">
            <RiArrowLeftSLine size={14} className="mr-2" /> Back
          </button>
          <button
            type="submit"
            className="self-center mb-5 mt-5 rounded-md h-[37px] w-full py-3 flex justify-center bg-liveprice items-center font-medium text-sm text-white"
          >
            Proceed <RiArrowRightSLine size={14} className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
}
