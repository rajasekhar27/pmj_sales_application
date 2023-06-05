import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import CatalogueProductDetails from "../../components/Catalogue/InventryCatalogue/CatalogueProductDetails";

export default function () {
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
      <CatalogueProductDetails />
    </div>
  );
}
