import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SalesRepProfile from "../../components/SalesRepresentativeProfile/salesRepProfile";

export default function index() {
  const router = useRouter();
  const salesRepAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );
  useEffect(() => {
    if (!salesRepAccess) {
      router.push("/sales-login");
    }
  }, [salesRepAccess]);
  return (
    <div>
      <SalesRepProfile />
    </div>
  );
}
