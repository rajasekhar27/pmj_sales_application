import { useSelector } from "react-redux";
import AddNewRepair from "../AddNewRepair";
import RepairStatsCard from "./repair-stats";
import RepairStatsTable from "./repair-stats-table";

export default function JewelleryRepair() {
  const selector = useSelector((state) => state.popup);

  return (
    <div className="flex flex-col py-5 bg-mainbg min-h-screen px-4 font-Montserrat mt-20">
      {!selector.addNewRepair ? (
        <>
          <RepairStatsCard />
          <RepairStatsTable />
        </>
      ) : (
        <AddNewRepair />
      )}
    </div>
  );
}
