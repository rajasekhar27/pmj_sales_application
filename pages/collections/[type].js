import { useRouter } from "next/router";
import React from "react";
import SelectCollections from "../../components/Catalogue/DigitalCatalogue/SelectCollections";

export default function collectionTypes() {
  const router = useRouter();

  const { type } = router.query;
  return (
    <div>
      <SelectCollections title={type} />
    </div>
  );
}
