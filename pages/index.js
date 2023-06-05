import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import AfterCustomerLogin from "../components/AfterCustomerLogin";

export default function index() {
  const router = useRouter();

  const customerAccess = useSelector(
    (state) => state.auth.Customer?.accessToken
  );

  const salesRepAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );

  useEffect(() => {
    if (!salesRepAccess && !customerAccess) {
      router.push("/sales-login");
      return;
    }
    if (salesRepAccess && !customerAccess) {
      router.push("/customer-login");
      return;
    }
  }, [customerAccess, salesRepAccess]);
  return (
    <div>
      <AfterCustomerLogin />
    </div>
  );
}
