// import React from "react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { MdOutlineKeyboardVoice } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";
// import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import {
//   useAddNewTagMutation,
//   useGetTagEnumsQuery,
// } from "../../../store/apis/restApi";
// import { closeObservedFeedbackPopup } from "../../../store/slices/customerCheckin";

// export default function AddTagPopup() {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     watch,
//     reset,
//   } = useForm();
//   const [tag, setTag] = useState("");
//   const [tagSlug, setTagSlug] = useState("");
//   const accessToken = useSelector(
//     (state) => state.auth.SalesRepresentative?.accessToken
//   );
//   const salesRepSlug = useSelector(
//     (state) => state.auth.SalesRepresentative?.user?.user_detail?.slug
//   );

//   const { data: Enums } = useGetTagEnumsQuery(
//     {},
//     { skip: accessToken ? false : true }
//   );

//   const [addNewTag] = useAddNewTagMutation();

//   const SubmitNewTag = () => {
//     const [description] = watch(["tag_description"]);
//     const backendFormat = {
//       tag: tag,
//       title: description,
//       tag_slug: tagSlug,
//       user_slug: salesRepSlug,
//     };
//     console.log(backendFormat, "alsdfjl");
//     addNewTag(backendFormat).then((res) => {
//       if (res.data) {
//         toast.success(JSON.stringify(res?.data?.msg));
//         dispatch(closeObservedFeedbackPopup());
//       } else {
//         toast.error(JSON.stringify(res.error?.data));
//       }
//     });
//   };

//   const setTagFunction = (tagInfo) => {
//     setTag(tagInfo.tag);
//     setTagSlug(tagInfo.slug);
//   };
//   return (
//     <div className="px-5 py-5">
//       <div className="text-2xl font-medium text-color5E text-center">
//         Add a New #Tag
//       </div>
//       <div className="flex flex-col mt-3 relative ">
//         <input
//           type="text"
//           className="border rounded-md h-9 px-3 mt-3"
//           {...register("tag_description", {
//             required: true,
//           })}
//           placeholder="Enter text"
//         />
//         {/* <MdOutlineKeyboardVoice
//           className="absolute right-[88px] top-5 text-bg40"
//           size={18}
//         /> */}
//         {/* <button className="w-[84px] absolute right-0 top-[13px] text-base h-[33.5px] bg-bg40 rounded-l-none rounded-lg text-white">
//           Submit
//         </button> */}
//       </div>

//       <div className="mt-10">Edit Tag</div>

//       <div className="text-[#28C76F]  text-xs font-semibold grid grid-cols-3 gap-3 mt-5 text-center ">
//         {Enums?.results?.map((each) => (
//           <button
//             onClick={() => setTagFunction(each)}
//             className={`w-20 flex items-center border border-black px-2 rounded-full ${
//               tagSlug === each.slug
//                 ? "bg-bg40 text-white"
//                 : "bg-customerProfileBg text-bg40 "
//             }`}
//           >
//             <div> {each.tag} </div>
//             <div
//               className={` ${
//                 tagSlug === each.slug ? " text-white" : "text-[#333333]"
//               }`}
//             >
//               <RxCross2 />{" "}
//             </div>
//           </button>
//         ))}

//         {/* <button
//           className="w-20 flex items-center border border-black px-2 rounded-full"
//           style={{ backgroundColor: "rgba(64, 1, 32, 0.12)" }}
//         >
//           <div className="text-bg40"> Design </div>
//           <div className="text-[#333333]">
//             <RxCross2 />{" "}
//           </div>
//         </button>

//         <button
//           className="w-20 flex items-center border border-black px-2 rounded-full"
//           style={{ backgroundColor: "rgba(64, 1, 32, 0.12)" }}
//         >
//           <div className="text-bg40"> Design </div>
//           <div className="text-[#333333]">
//             <RxCross2 />{" "}
//           </div>
//         </button>

//         <button
//           className="w-20 flex items-center border border-black px-2 rounded-full"
//           style={{ backgroundColor: "rgba(64, 1, 32, 0.12)" }}
//         >
//           <div className="text-bg40"> Design </div>
//           <div className="text-[#333333]">
//             <RxCross2 />{" "}
//           </div>
//         </button>

//         <button
//           className="w-20 flex items-center border border-black px-2 rounded-full"
//           style={{ backgroundColor: "rgba(64, 1, 32, 0.12)" }}
//         >
//           <div className="text-bg40"> Design </div>
//           <div className="text-[#333333]">
//             <RxCross2 />{" "}
//           </div>
//         </button> */}
//       </div>

//       <div className="mt-3 flex justify-between ">
//         <button
//           onClick={SubmitNewTag}
//           className="px-5 h-9 bg-bg40 rounded-lg text-white"
//         >
//           Confirm
//         </button>
//         <button
//           //   onClick={handleBack}
//           className="px-5 h-9 border rounded-lg text-color5E border-[#82868B]"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useAddNewTagMutation,
  useGetTagEnumsQuery,
} from "../../../store/apis/restApi";
import {
  closeObservedFeedbackPopup,
  setHashTagEmpty,
} from "../../../store/slices/customerCheckin";

export default function AddTagPopup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const [addNewTag] = useAddNewTagMutation();
  const hashTagText = useSelector((state) => state.customerIn.hashTag);

  const customerSlug = useSelector(
    (state) => state.auth.Customer?.user?.user_detail?.slug
  );

  const SubmitNewTag = () => {
    const backendFormat = {
      title: hashTagText,
    };

    addNewTag(backendFormat).then((res) => {
      if (res.data) {
        toast.success(JSON.stringify(res?.data?.msg));
        dispatch(closeObservedFeedbackPopup());
        dispatch(setHashTagEmpty());
      } else {
        toast.error(JSON.stringify(res.error?.data?.message));
      }
    });
  };

  const handleCancel = () => {
    dispatch(setHashTagEmpty());
    dispatch(closeObservedFeedbackPopup());
  };

  return (
    <div className="px-5 py-5">
      <div className="text-2xl font-medium text-color5E text-center">
        Review
      </div>

      <div className="text-bg40 font-medium">Entered Feedback</div>
      <div
        className="border p-2 text-sm text-[#B9B9C3] rounded-md mt-1 "
        style={{ minHeight: "100px" }}
      >
        {hashTagText}
      </div>

      <div className="mt-10 flex justify-between ">
        <button
          onClick={SubmitNewTag}
          className="px-5 h-9 bg-bg40 rounded-lg text-white mr-2"
        >
          Confirm
        </button>
        <button
          onClick={handleCancel}
          className="px-5 h-9 border rounded-lg text-color5E border-[#82868B]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
