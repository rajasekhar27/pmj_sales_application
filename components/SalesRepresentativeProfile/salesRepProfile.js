import { useRouter } from "next/router";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useGetSalesProfileDetailsQuery } from "../../store/apis/restApi";
import About from "./about";
import CheckLivePrice from "./check-live-price";
import CustomerCards from "./customer-cards";
import Header from "./header";
import Incentives from "./incentives";
import RepProfile from "./rep-profile";
import Setting from "./Setting";
import SWB from "./SWB";

export default function SalesRepProfile() {
  const router = useRouter();
  const currentTab = useSelector(
    (state) => state.profile.repProfile.currentTab
  );

  const salesSlug = useSelector((state) => state.auth.SalesRepresentative);

  const salesAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );

  const { data: salesProfile } = useGetSalesProfileDetailsQuery(
    {
      slug: salesSlug.user?.user_detail?.slug,
    },
    { skip: salesAccess ? false : true }
  );

  return (
    <div className="flex flex-col py-5 bg-mainbg mt-16 px-4 font-Montserrat ">
      {/* <Header/> */}

      {/* <CheckLivePrice /> */}
      <BiArrowBack
        onClick={() => router.push("/")}
        size={30}
        className="text-liveprice mt-3"
      />

      <RepProfile salesProfile={salesProfile} />

      {currentTab === 1 && <About salesProfile={salesProfile} />}
      {/* {currentTab === 2 && <CustomerCards />}
      {currentTab === 3 && <Incentives />}
      {currentTab === 4 && <SWB />}
      {currentTab === 5 && <Setting />} */}
    </div>
  );
}
