import { ImUserTie } from "react-icons/im";
import { BsArchive } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setNewJewleryRepairTab } from "../../store/slices/profileSlice";
import Details from "./details";
import RepairDetails from "./repair-details";
import Review from "./review";

export default function NewRepairTabs() {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.profile.newRepair.currentTab);
  return (
    <div className="bg-white  rounded-md px-5 py-5">
      <div className="flex justify-between items-start">
        <button
          onClick={() => dispatch(setNewJewleryRepairTab(1))}
          className="flex flex-col justify-center items-center"
        >
          <h1
            className={`${
              currentTab === 1 ? "bg-liveprice text-white" : "bg-order text-rep"
            } h-[38px] w-[38px]  flex justify-center items-center rounded-md mb-3`}
          >
            <ImUserTie size={20} className="" />
          </h1>
          <h1
            className={`${
              currentTab === 1 ? "text-liveprice " : " text-rep"
            } font-semibold text-sm text-left`}
          >
            Details
          </h1>
        </button>

        <button
          onClick={() => dispatch(setNewJewleryRepairTab(2))}
          className="flex flex-col justify-center items-center"
        >
          <h1
            className={`${
              currentTab === 2 ? "bg-liveprice text-white" : "bg-order text-rep"
            } h-[38px] w-[38px]  flex justify-center items-center rounded-md mb-3`}
          >
            <BsArchive size={20} className="" />
          </h1>
          <h1
            className={`${
              currentTab === 2 ? "text-liveprice " : " text-rep"
            } font-semibold text-sm text-left`}
          >
            Repair
            <br />
            Details
          </h1>
        </button>

        <button
          onClick={() => dispatch(setNewJewleryRepairTab(3))}
          className="flex flex-col justify-center items-center"
        >
          <h1
            className={`${
              currentTab === 3 ? "bg-liveprice text-white" : "bg-order text-rep"
            } h-[38px] w-[38px]  flex justify-center items-center rounded-md mb-3`}
          >
            <BsArchive size={20} className="" />
          </h1>
          <h1
            className={`${
              currentTab === 3 ? "text-liveprice " : " text-rep"
            } font-semibold text-sm text-left`}
          >
            Review
          </h1>
        </button>
      </div>

      <hr className="mt-5" />

      {currentTab === 1 && <Details />}
      {currentTab === 2 && <RepairDetails />}
      {currentTab === 3 && <Review />}
    </div>
  );
}
