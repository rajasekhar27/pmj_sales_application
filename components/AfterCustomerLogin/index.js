import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetCustomerDetailsQuery } from "../../store/apis/restApi";
import CustomerLoginHome from "./CustomerLoginHome";

export default function AfterCustomerLogin() {
  const customerAccess = useSelector((state) => state.auth.Customer);

  const { data: details } = useGetCustomerDetailsQuery({
    slug: customerAccess.user?.user_detail?.slug,
  });

  return (
    <div className="mt-24">
      <CustomerLoginHome details={details} />
    </div>
  );
}
