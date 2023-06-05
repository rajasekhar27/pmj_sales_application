// import React from "react";
// import LivePrice from "../UI/LivePrice";
// import { FaUserCircle } from "react-icons/fa";
// import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
// import { AiFillGold, AiFillTool, AiOutlineTool } from "react-icons/ai";
// import {
//   openCustomerEnteyPopup,
//   closeCustomerEnteyPopup,
// } from "../../store/slices/customerCheckin";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/router";
// import { setRepCurrentTab } from "../../store/slices/profileSlice";
// import { useGetCustomerDetailsQuery } from "../../store/apis/restApi";
// export default function CustomerLoginHome({ details }) {
//   const entry = [
//     {
//       id: 1,
//       name: details?.user_profile?.name,
//       icon: details?.user_profile?.image ? (
//         <img
//           src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_BASE_URL}${details?.user_profile?.image}`}
//           className="h-[32px] w-[32px] rounded-full object-cover"
//         />
//       ) : (
//         <img
//           src="/images/user.svg"
//           className="h-[32px] w-[32px] rounded-full object-cover"
//         />
//       ),
//     },
//     {
//       id: 2,
//       name: "SELECT JEWELLERY",
//       icon: <img src="/images/selectJewel.svg" />,
//     },
//     {
//       id: 3,
//       name: "OBSERVED FEEDBACK",
//       icon: <img src="/images/observerFeedback.svg" />,
//     },
//     {
//       id: 4,
//       name: "INCENTIVES",
//       icon: <img src="/images/incentive.svg" />,
//     },
//     {
//       id: 5,
//       name: "CATALOGUE",
//       icon: <HiOutlineClipboardDocumentList color="white" size={25} />,
//     },
//     {
//       id: 6,
//       name: "SWB ",
//       icon: <img src="/images/SWB.svg" />,
//     },
//   ];
//   const order = [
//     {
//       id: 1,
//       name: "ORDER FORM",
//       icon: <img src="/images/orderform.svg" />,
//     },
//     {
//       id: 2,
//       name: "REPAIR",
//       icon: <AiOutlineTool color="white" size={32} />,
//     },
//     {
//       id: 3,
//       name: "CUSTOMER OLD GOLD",
//       icon: <AiFillGold color="white" size={25} />,
//     },
//     {
//       id: 4,
//       name: "BRAND COMMS.",
//       icon: <img src="/images/brandcomm.svg" />,
//     },
//   ];
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const handleEntryClick = (name) => {
//     console.log(name);
//     if (name == "SELECT JEWELLERY") {
//       router.push("/select-jewel");
//     } else if (name == "BRAND COMMS.") {
//       router.push("/brandcomm");
//     } else if (name == "OBSERVED FEEDBACK") {
//       router.push("/observed-feedback");
//     } else if (name == details?.user_profile?.name) {
//       router.push("/customer-profile");
//     } else if (name == "ORDER FORM") {
//       router.push("/jewel-orderform");
//     } else if (name == "REPAIR") {
//       router.push("/jewel-repair");
//     } else if (name == "INCENTIVES") {
//       router.push("/sales-profile");
//       dispatch(setRepCurrentTab(3));
//     }
//   };
//   return (
//     <div className="">
//       {/* <LivePrice /> */}
//       <div className="px-5">
//         <div className="grid grid-cols-2 justify-items-center gap-3">
//           {entry?.map((e) => (
//             <div
//               className={` bg-white p-2  rounded-xl h-[114px] w-[144px]`}
//               style={{
//                 boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
//               }}
//             >
//               <div
//                 onClick={() => handleEntryClick(e.name)}
//                 className={`rounded-md h-full w-full flex flex-col justify-center items-center bg-bg40`}
//                 style={{
//                   boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
//                 }}
//               >
//                 <div>{e.icon}</div>
//                 <div
//                   className={`${
//                     e.id === 1 && "overtext"
//                   } text-center font-semibold text-sm mt-2 px-3 text-white`}
//                 >
//                   {e.name}
//                 </div>
//                 {e.id == 1 && (
//                   <div>
//                     <img src="/images/userlogin.svg" />
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div
//           className="grid grid-cols-2 justify-items-center gap-3 py-2 mt-3 rounded-lg  "
//           style={{
//             boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
//           }}
//         >
//           {order?.map((e) => (
//             <div className={` bg-white p-2  rounded-xl h-[114px] w-[144px]`}>
//               <div
//                 onClick={() => handleEntryClick(e.name)}
//                 className={`${
//                   e.id !== order.length ? "bg-bg40" : "border-2 border-bg40 "
//                 }  rounded-md h-full w-full flex flex-col justify-center items-center `}
//                 style={{
//                   boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
//                 }}
//               >
//                 <div>{e.icon}</div>
//                 <div
//                   className={`${
//                     e.id == order.length ? "text-bg40" : "text-white"
//                   }  text-center font-semibold text-sm mt-2 px-3`}
//                 >
//                   {e.name}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { useGetCustomerDetailsQuery } from "../../store/apis/restApi";

export default function CustomerLoginHome() {
  const customerAccess = useSelector(
    (state) => state.auth.Customer?.user?.user_detail?.slug
  );

  const { data: details } = useGetCustomerDetailsQuery({
    slug: customerAccess,
  });

  const entry = [
    {
      id: 1,
      name: details?.user_profile?.name,
      icon: details?.user_profile?.image ? (
        <img
          src={`${process.env.NEXT_PUBLIC_SERVER_IMAGE_BASE_URL}${details?.user_profile?.image}`}
          className="h-[32px] w-[32px] rounded-full object-cover"
        />
      ) : (
        <img
          src="/images/user.svg"
          className="h-[32px] w-[32px] rounded-full object-cover"
        />
      ),
      router: "/customer-profile",
    },
    {
      id: 2,
      name: "Inventory Catalogue",
      icon: <img src="/images/selectJewel.svg" />,
      router: "/catalogue/all-category-products/inventory-catalogue",
    },
  ];

  const digital = [
    {
      id: 3,
      name: "Timeless Jewellery",
      icon: <img src="/images/selectJewel.svg" />,
      router: "/catalogue/product-listing/digital-catalogue/timeless-jewellery",
    },
    {
      id: 4,
      name: "Trending Jewellery",
      icon: <img src="/images/trandingjewel.svg" />,
      router: "/catalogue/product-listing/digital-catalogue/trending-products",
    },
    {
      id: 5,
      name: "Best Selling Jewellery",
      icon: <img src="/images/bestseller.svg" />,
      router: "/catalogue/product-listing/digital-catalogue/bestseller-product",
    },
    {
      id: 7,
      name: "Current Trending Jewellery",
      icon: <img src="/images/selectJewel.svg" />,
      router:
        "/catalogue/product-listing/digital-catalogue/current-trend-products",
    },
  ];

  const Others = [
    {
      id: 6,
      name: "SWB",
      icon: <img src="/images/SWB.svg" />,
      router: "/coming-soon",
      // router:"/select-jewel"
    },
    {
      id: 8,
      name: "Wishlist",
      icon: <img src="/images/selectJewel.svg" />,
      router: "/wishlist",
    },
    // {
    //   id: 9,
    //   name: "Digital Catalogue",
    //   icon: <img src="/images/selectJewel.svg" />,
    //   router: "/coming-soon",
    // },
  ];

  const router = useRouter();

  const handleEntryClick = (name) => {
    router.push(name);
  };

  return (
    <div className="px-5">
      <div className="grid grid-cols-2 justify-items-center gap-3">
        {entry?.map((e, index) => (
          <Fragment key={index}>
            {/* {e?.name === "Timeless JEWELLERY" && (
              <div className="mt-1 border-t border-bg40"></div>
            )} */}
            <div
              className={` bg-white p-2  rounded-xl h-[120px] w-full `}
              style={{
                boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                onClick={() => handleEntryClick(e.router)}
                className={`rounded-md h-full w-full flex flex-col justify-center items-center bg-bg40 relative`}
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div>{e.icon}</div>
                <div
                  className={`  ${
                    e.id === 1 && "overtext"
                  } text-center font-semibold text-sm mt-2 px-3 text-white`}
                >
                  {e.name}
                </div>
                {e.id == 1 && (
                  <div>
                    <img src="/images/userlogin.svg" />
                  </div>
                )}
                {e.id == 1 && (
                  <div className="absolute top-0 right-0">
                    <img src="/crosslines.svg" />
                  </div>
                )}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
      {/* //.......................................................................... */}
      <div className="mt-5 border-[2px] border-t border-bg40 bg-bg40"></div>

      <div className="grid grid-cols-2 justify-items-center gap-3 mt-3">
        {digital?.map((e, index) => (
          <Fragment key={index}>
            {/* {e?.name === "Timeless JEWELLERY" && (
              <div className="mt-1 border-t border-bg40"></div>
            )} */}
            <div
              className={` bg-white p-2  rounded-xl h-[120px] w-full`}
              key={index}
              style={{
                boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                onClick={() => handleEntryClick(e.router)}
                className={`rounded-md h-full w-full flex flex-col justify-center items-center bg-bg40`}
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div>{e.icon}</div>
                <div
                  className={`  ${
                    e.id === 1 && "overtext"
                  } text-center font-semibold text-sm mt-2 px-3 text-white`}
                >
                  {e.name}
                </div>
                {e.id == 1 && (
                  <div>
                    <img src="/images/userlogin.svg" />
                  </div>
                )}
              </div>
            </div>
          </Fragment>
        ))}
      </div>

      {/* //................................................................... */}

      <div className="mt-5 border-[2px] border-t border-bg40 bg-bg40"></div>

      <div className="grid grid-cols-2 justify-items-center gap-3 mt-3 mb-3">
        {Others?.map((e, index) => (
          <Fragment key={index}>
            {/* {e?.name === "Timeless JEWELLERY" && (
              <div className="mt-1 border-t border-bg40"></div>
            )} */}
            <div
              className={` bg-white p-2  rounded-xl h-[120px] w-full`}
              key={index}
              style={{
                boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                onClick={() => handleEntryClick(e.router)}
                className={`rounded-md h-full w-full flex flex-col justify-center items-center bg-bg40`}
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div>{e.icon}</div>
                <div
                  className={`  ${
                    e.id === 1 && "overtext"
                  } text-center font-semibold text-sm mt-2 px-3 text-white`}
                >
                  {e.name}
                </div>
                {e.id == 1 && (
                  <div>
                    <img src="/images/userlogin.svg" />
                  </div>
                )}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
