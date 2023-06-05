import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CustomerEntry from "../../components/CustomerCheckIn/CustomerEntry";
import CustomerCheckin from "../../store/slices/customerCheckin";

export default function index() {
  const router = useRouter();
  const customerAccess = useSelector(
    (state) => state.auth.Customer?.accessToken
  );
  const salesRepAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );

  useEffect(() => {
    {
      !salesRepAccess && router.push("/sales-login");
      salesRepAccess && customerAccess && router.push("/");
    }
  }, [salesRepAccess]);

  return (
    <div>
      <CustomerEntry />
    </div>
  );
}
