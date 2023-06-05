import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SelectJewel from "../../components/AfterCustomerLogin/SelectJewel";

// const NewFile = dynamic(() => import("../../components/NewFile"), {
//   ssr: false,
// });

export default function index() {
  const router = useRouter();
  const customerAccess = useSelector(
    (state) => state.auth.Customer?.accessToken
  );
  useEffect(() => {
    if (!customerAccess) {
      router.push("/sales-login");
    }
  }, [customerAccess]);
  return (
    <div>
      <SelectJewel />
    </div>
  );
}
