import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import SignIn from "../../components/CustomerCheckIn/SignIn";

export default function Home() {
  const router = useRouter();
  const customerAccess = useSelector(
    (state) => state.auth.Customer?.accessToken
  );
  const salesRepAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );

  useEffect(() => {
    if (salesRepAccess && customerAccess) {
      router.push(" /");
      return;
    }
    if (salesRepAccess && !customerAccess) {
      router.push("/customer-login");
      return;
    }
  }, [salesRepAccess]);

  return (
    <>
      <SignIn />
    </>
  );
}
