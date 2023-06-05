import { useRouter } from "next/router";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import ComingSoon from "../../components/AfterCustomerLogin/ComingSoon";

export default function index() {
  const router = useRouter();
  return (
    <div className="px-4">
      <BiArrowBack
        onClick={() => router.push("/")}
        size={30}
        className="text-liveprice mt-[100px]  mb-4"
      />
      <ComingSoon />
    </div>
  );
}
