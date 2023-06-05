import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineCube } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { RiDeleteBinLine } from "react-icons/ri";
import moment from "moment";
import { GoSearch } from "react-icons/go";
import {
  closeCustomerEnteyPopup,
  oldCustomerEntry,
  setCustomerMobileNo,
} from "../../store/slices/customerCheckin";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useCustomerLoginMutation,
  useGetLimitCustomerVisitStoreQuery,
  useLazyGetCustomerLoginDetailsQuery,
} from "../../store/apis/restApi";
import { addCustomerTokens } from "../../store/slices/auth";
import { useRouter } from "next/router";
import { FiLogIn, FiSearch } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect } from "react";
import { useViewportSize } from "@mantine/hooks";

export default function OldCustomerEntry({ setNewCustomer }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const [customer, setCustomer] = useState(true);
  const [userName, setUserName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const customerAccess = useSelector((state) => state.auth.Customer);
  const salesRepAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );

  const [callbackFunction, customerLoginDetails] =
    useLazyGetCustomerLoginDetailsQuery();

  const [customerLogin] = useCustomerLoginMutation();

  const handleBack = () => {
    setCustomer(true);
  };

  const handleNext = () => {
    dispatch(setCustomerMobileNo(text));

    const backendFormat = {
      phone_number: text,
    };

    customerLogin(backendFormat).then((res) => {
      if (res.data) {
        const customer = {
          accessToken: res.data.access,
          refreshToken: res.data.refresh,
          user: res.data,
        };
        dispatch(addCustomerTokens(customer));
        setCustomer(false);
        toast.success("Customer Logged Successfully");
        router.push("/");
      }
      if (res.error) {
        setNewCustomer(true);
      }
    });
  };
  const handleProceed = () => {
    customer ? "" : dispatch(oldCustomerEntry());
    customer ? "" : dispatch(closeCustomerEnteyPopup());
  };

  //................................................

  const onTextChange = (e) => {
    const val = e.target.value;

    if (val.length !== 0) {
      callbackFunction({ value: val });
    }

    setText(val);
  };

  useEffect(() => {
    if (text.length > 0) {
      const results = customerLoginDetails?.currentData?.results?.map(
        (each, idx) => ({
          id: idx,
          number: each?.phone_number,
          name: each?.name,
        })
      );
      setItems(results);
    } else {
      setItems([]);
    }

    if (text.length <= 0) {
      setUserName("");
    }
  }, [text, customerLoginDetails]);

  const suggestionSelected = (value) => {
    setUserName(value?.name);
    setText(value?.number);
    setSuggestions([]);
  };

  const renderSuggestions = () => {
    if (items?.length === 0) {
      return null;
    }

    return (
      <ul
        style={{
          backgroundColor: "white",
        }}
        className=" "
      >
        {items?.map((item, index) => (
          <div
            onClick={() => suggestionSelected(item)}
            className=" "
            key={index}
          >
            <li className="leading-3 mt-2  px-2">{item?.number}</li>
            <li className=" px-2">{item?.name}</li>
            <hr className="mt-1" />
          </div>
        ))}
      </ul>
    );
  };

  //................................................

  return (
    <form onSubmit={handleSubmit(handleNext)} className="h-full">
      <div className=" text-color5E pt-5 h-full rounded-md flex flex-col ">
        <div className="text-[28px] text-center font-medium px-5">
          Enter Customer Details
        </div>
        <div className="flex items-center mt-5 px-5">
          <div className="flex flex-col justify-center items-center w-1/2 space-y-1">
            <div
              className={`${
                !customer ? "bg-[#BABFC71F]" : "bg-bg40"
              } w-[38px] h-[38px]  rounded-md flex justify-center items-center`}
            >
              <FiLogIn
                size={20}
                className={`${customer ? "text-white" : "text-color5E"}`}
              />
            </div>
            <div
              className={`${
                !customer ? "text-color5E" : "text-bg40"
              }  font-semibold text-base text-center `}
            >
              Login
            </div>
            <div className="text-[#B9B9C3] text-center h-10 text-xs font-normal">
              Enter Mobile No
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 space-y-1">
            <div
              className={`${
                customer ? "bg-[#BABFC71F]" : "bg-bg40"
              } w-[38px] h-[38px]  rounded-md flex justify-center items-center`}
            >
              <HiOutlineCube
                size={20}
                className={`${!customer ? "text-white" : "text-color5E"}`}
              />
            </div>
            <div
              className={`${
                customer ? "text-color5E" : "text-bg40"
              } font-semibold text-base text-center `}
            >
              Review
            </div>
            <div className="text-[#B9B9C3] text-center h-10 text-xs font-normal">
              Customer Review
            </div>
          </div>
        </div>
        {customer ? (
          <div className="px-5">
            <div className="flex flex-col mt-6">
              <label htmlFor="mobile" className="text-color5E text-sm ">
                Enter Mobile Number
              </label>
              <div className="flex border rounded-md h-[40px] mt-1 w-full pt-[1px] relative items-center pr-2">
                <input
                  type="search"
                  {...register("phone", { required: true })}
                  onChange={onTextChange}
                  value={text}
                  pattern="[1-9]{1}[0-9]{9}"
                  title="Invalid Mobile No."
                  minLength={10}
                  maxLength={10}
                  className="h-full outline-none pl-2  w-full placeholder:font-400 placeholder:text-xs rounded-none"
                  placeholder="Search Mobile No"
                />

                <FiSearch size={24} className="text-[#B9B9C3]  ml-2" />
              </div>
            </div>
            <div className="relative">
              <div
                className={` absolute top-0 right-0 left-0 min-h-[50px] max-h-[100px] z-30 overflow-y-scroll ${
                  suggestions?.length > 0 && "shadow"
                }`}
              >
                {renderSuggestions()}
              </div>
            </div>
            <div className="flex flex-col mt-7">
              {userName.length !== 0 && (
                <label htmlFor="" className="text-color5E text-sm">
                  Name
                </label>
              )}
              <h1 className="font-medium text-base text-liveprice mt-2">
                {userName}
              </h1>
            </div>
          </div>
        ) : (
          <CustomerVisitedHistory />
        )}
        <div className="   w-full flex flex-col absolute bottom-0 left-0 -right-5 mr-5">
          {customer ? (
            <button
              type="submit"
              className="px-5 h-9 bg-bg40 rounded-lg text-white mt-20 self-end flex items-center mr-5 mb-5"
            >
              {"Next "}
              <IoIosArrowForward className="ml-2" />
            </button>
          ) : (
            <div className="w-full flex flex-col  bg-white self-end">
              <button
                onClick={handleProceed}
                className="px-5 h-9 bg-bg40 rounded-lg text-white  my-3 flex items-center self-end mr-5"
              >
                {"Proceed "}
                <IoIosArrowForward className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

const CustomerVisitedHistory = () => {
  const { height: windowHeight } = useViewportSize();
  const customerAccess = useSelector((state) => state.auth.Customer);
  const { data: customerVisits } = useGetLimitCustomerVisitStoreQuery(
    { limit: 3, offset: 0 },
    { skip: customerAccess ? false : true }
  );

  return (
    <div
      className="px-5  overflow-y-scroll pb-20"
      style={{ height: `${windowHeight - 42 - 110}` }}
    >
      {customerVisits?.results?.map((data, index) => (
        <div className="mb-3" key={index}>
          <div className="text-lg mt-2 font-normal ">
            Visit :{" "}
            <span className="font-semibold">
              {moment(data?.check_in).format("D/MM/YY")}
            </span>{" "}
          </div>
          <div className="flex flex-col">
            <div className="h-[126px] mt-1 border-bg40 border rounded-md ">
              <div className="p-2 border-b-bg40 border">
                <div className="text-base font-normal">
                  Store{" "}
                  <span className="font-extrabold text-base">
                    {data?.store?.title}
                  </span>
                </div>
                <div className="text-base font-normal">
                  Store Code{" "}
                  <span className="font-extrabold text-base">
                    {data?.store?.code}
                  </span>
                </div>
              </div>

              <div className="p-2 flex justify-between mt-2">
                <div className="flex   self-center  items-center  w-[48%] ">
                  <div className="flex   justify-between items-center mr-2">
                    <div className=" text-left text-xs font-normal">
                      Check in{" "}
                    </div>
                  </div>

                  <div className="font-semibold text-xs">
                    {moment(data?.check_in).format("hh:mm a")}
                  </div>
                </div>
                <div className="flex flex-col w-[51%] ">
                  <div className="flex self-end   items-center  ">
                    <div className="flex items-center  justify-between mr-2">
                      <div className=" text-left text-xs font-normal">
                        Check Out{" "}
                      </div>
                    </div>

                    <div className="font-semibold text-xs">
                      {" "}
                      {data?.check_out !== null
                        ? moment(data?.check_out).format("hh:mm a")
                        : "- - : - -"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
