import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import DigitalOutOfStock from "../../../../components/Catalogue/DigitalCatalogue/DigitalOutOfStock";

export default function index() {
  const router = useRouter();

  useEffect(() => {
    const customerAccess = JSON.parse(
      localStorage.getItem("customer")
    )?.accessToken;

    const salesRepAccess = JSON.parse(
      localStorage.getItem("salesRep")
    )?.accessToken;

    if (!salesRepAccess && !customerAccess) {
      router.push("/sales-login");
      return;
    }
    if (salesRepAccess && !customerAccess) {
      router.push("/customer-login");
      return;
    }
  }, []);
  return (
    <div>
      <DigitalOutOfStock />
    </div>
  );
}
