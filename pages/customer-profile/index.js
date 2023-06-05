import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CustomerProfile from "../../components/CustomerProfile";

export default function index() {
  const router = useRouter();
  const customerAccess = useSelector(
    (state) => state.auth?.Customer?.accessToken
  );

  // useEffect(() => {

  // if (!customerAccess) {
  //   router.push("/customer-login");
  // }
  // }, [customerAccess]);

  return (
    <div>
      <CustomerProfile />
    </div>
  );
}
