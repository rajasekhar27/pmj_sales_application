import React from "react";
import moment from "moment/moment";
import { useRouter } from "next/router";
import { useGetCatalogueProductDetailsQuery } from "../../../store/apis/restApi";
import { useSelector } from "react-redux";

export default function ProductDetailsPopup() {
  const router = useRouter();
  const productSlug = router.query.id;
  // const productSlug = useSelector((state) => state.catalogue?.productSlug);

  const salesRepAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );
  const { data: catalogueProductDetails } = useGetCatalogueProductDetailsQuery(
    { slug: productSlug },
    { skip: salesRepAccess ? false : true }
  );

  const createdDate = moment(catalogueProductDetails?.created_at).format(
    "DD-MM-YYYY"
  );
  const oldDate = new Date(createdDate);
  const currDate = new Date();

  const time_diff = currDate.getTime() - oldDate.getTime();
  const days_diff = time_diff / (1000 * 60 * 60 * 24);
  return (
    <div className=" py-5 pb-20">
      <div className="text-center font-semibold text-16 py-2 text-bg40">
        Product Details
      </div>

      <div className="border-t border-bg40"></div>

      <div className="border-2 mx-3 border-bg40 rounded-xl p-3 mt-5">
        <div className="flex ">
          <div className="text-[#5E5873] w-3/5">
            Required Manufacturing Time
          </div>
          <div>:</div>
          <div className="text-bg40 w-1/3 text-end">15 Days</div>
        </div>

        <div className="flex pt-2">
          <div className="text-[#5E5873] w-3/5">Product Age </div>
          <div>:</div>
          <div className="text-bg40 w-1/3 text-end">
            {days_diff ? days_diff : 0} Days
          </div>
        </div>
      </div>
    </div>
  );
}
