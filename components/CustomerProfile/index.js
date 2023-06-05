import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useGetCustomerDetailsQuery } from "../../store/apis/restApi";
import About from "./about";
import Profile from "./profile";
import VistitHistory from "./visit-history";

export default function CustomerProfile() {
  const router = useRouter();
  const currentTab = useSelector(
    (state) => state.profile.customerProfile.currentTab
  );

  const customerAccess = useSelector((state) => state.auth.Customer);

  const { data: details } = useGetCustomerDetailsQuery({
    slug: customerAccess.user?.user_detail?.slug,
  });

  return (
    <div className="flex flex-col py-5 bg-mainbg font-Montserrat mt-16 ">
      <BiArrowBack
        onClick={() => router.push("/")}
        size={30}
        className="text-liveprice mx-4 mt-3"
      />
      <Profile details={details} />
      {currentTab === 1 && <About details={details} />}
      {currentTab === 2 && <VistitHistory />}
    </div>
  );
}
