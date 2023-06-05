import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineCube } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCustomerEnteyPopup,
  newCustomerEntry,
  setCustomerMobileNo,
  setcustomerRegistration,
} from "../../store/slices/customerCheckin";
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import { useRouter } from "next/router";
import {
  useCustomerRegistrationMutation,
  useGetAllCityDetailsQuery,
  useGetAllStateDetailsQuery,
  useGetCountriesListQuery,
} from "../../store/apis/restApi";
import { toast } from "react-toastify";
import { IoIosArrowForward } from "react-icons/io";
import { DatePicker } from "reactstrap-date-picker";
import moment from "moment/moment";
import { addCustomerTokens } from "../../store/slices/auth";
import { useEffect } from "react";

const Enums = [
  { id: "SOCIAL_MEDIA", title: "Social Media" },
  { id: "WEBSITE", title: "Website" },
  { id: "RESEARCH", title: "Research" },
  { id: "MARKETING", title: "Marketing" },
];

export default function NewCustomerEntry({ setNewCustomer }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  let [knowAboutUsEnums, setKnowAboutUsEnums] = useState(Enums);
  const customerAccess = useSelector(
    (state) => state.auth.Customer?.accessToken
  );
  const [customer, setCustomer] = useState(true);
  const [customerRegistration] = useCustomerRegistrationMutation();
  const [birthday, setBirthday] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const registrationDetails = useSelector(
    (state) => state.customerIn.customerRegistration
  );

  const customerMobileNo = useSelector(
    (state) => state.customerIn?.customerMobileNo
  );

  const { data: countriesList } = useGetCountriesListQuery();
  const { data: statesList } = useGetAllStateDetailsQuery();
  const { data: citiesList } = useGetAllCityDetailsQuery({
    state_city_id: "",
  });

  const onSubmit = () => {
    const backendFormat = {
      phone_number: registrationDetails?.phone_number,
      profile: {
        name: registrationDetails?.profile?.name,
        date_of_birth: registrationDetails?.profile.date_of_birth,
        gender: registrationDetails?.profile?.gender,
        Known_about_us: selectedOption,
      },
      address: {
        Address: registrationDetails?.address?.Address,
        pincode: registrationDetails?.address?.pincode,
        state: registrationDetails?.address?.state,
        city: registrationDetails?.address?.city,
        country: registrationDetails?.address?.country,
      },
    };
    customerRegistration(backendFormat).then((res) => {
      if (res.data) {
        const customer = {
          accessToken: res.data.access,
          refreshToken: res.data.refresh,
          user: res.data,
        };
        toast.success("Registration  Successfull");
        setCustomer(false);
        dispatch(closeCustomerEnteyPopup());
        dispatch(addCustomerTokens(customer));
        router.push("/");
      } else {
        toast.error(JSON.stringify(res.error?.data?.message));
      }
    });
  };

  const handleBack = () => {
    setCustomer(true);
    if (customer) {
      setNewCustomer(true);
    }
  };

  const handleNext = (values) => {
    const backendFormat = {
      phone_number: values.number,
      profile: {
        name: values.name,
        date_of_birth:
          birthday?.length !== 0
            ? moment(new Date(birthday && birthday)).format("YYYY-MM-DD")
            : null,
        gender: values?.gender?.length !== 0 ? values.gender : undefined,
        Known_about_us: "",
      },
      address: {
        Address: values.address,
        pincode: values?.pincode?.length !== 0 ? values.pincode : null,
        state: values.state,
        city: values.city,
        country: values.country,
      },
    };
    setCustomer(false);
    dispatch(setcustomerRegistration(backendFormat));
  };

  const handleSearchButton = () => {
    // const [filterOption] = watch(["knowAboutUs"]);
    const result = Enums?.filter((each) =>
      each?.title?.toLowerCase().includes(searchData?.toLowerCase())
    );

    result?.length !== 0
      ? setKnowAboutUsEnums(result)
      : setKnowAboutUsEnums(Enums);
  };

  // const handleSearch = (e) => {
  //   if (e?.target?.value?.length === 0) {
  //     const result = Enums?.filter((each) =>
  //       each?.title?.toLowerCase().includes(e?.target?.value?.toLowerCase())
  //     );

  //     result.length !== 0
  //       ? setKnowAboutUsEnums(result)
  //       : setKnowAboutUsEnums(Enums);
  //   }
  // };

  useEffect(() => {
    if (searchData.length === 0) {
      handleSearchButton();
    }
  }, [searchData]);

  return (
    <div className="px-5 text-color5E  rounded-lg py-5 h-full overflow-y-scroll">
      <div className="text-[28px] text-center font-medium">New Customer</div>

      <div className="flex items-center mt-5">
        <div className="flex flex-col justify-center items-center w-1/2 space-y-1">
          <div
            className={`${
              !customer ? "bg-[#BABFC71F]" : "bg-bg40"
            } w-[38px] h-[38px]  rounded-md flex justify-center items-center`}
          >
            <FaRegFileAlt
              size={20}
              className={`${customer ? "text-white" : "text-color5E"}`}
            />
          </div>
          <div
            className={`${
              !customer ? "text-color5E" : "text-bg40"
            }  font-semibold text-base text-center `}
          >
            Enter Details
          </div>
          <div className="text-[#B9B9C3] text-center h-10 text-xs font-normal">
            Enter username
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
            Brand Identified
          </div>
          <div className="text-[#B9B9C3] text-center h-10 text-xs font-normal">
            How did you get to know about us ?
          </div>
        </div>
      </div>

      {customer ? (
        <form onSubmit={handleSubmit(handleNext)} className="overflow-y-scroll">
          <div className="flex flex-col mt-7">
            <label htmlFor="" className="text-color5E text-sm">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              title="letters only"
              pattern="[A-Za-z ]{1,50}"
              className="border rounded-md h-9 px-3 mt-1 placeholder:text-xs placeholder:font-normal"
              {...register("name", {
                required: true,
              })}
              placeholder="name"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="" className="text-color5E text-sm ">
              Mobile Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              pattern="[1-9]{1}[0-9]{9}"
              minLength={10}
              maxLength={10}
              className="border rounded-md h-9 px-3 mt-1 placeholder:text-xs placeholder:font-normal"
              placeholder="mobile number"
              {...register("number", {
                required: true,
              })}
              onChange={(e) => dispatch(setCustomerMobileNo(e.target.value))}
              value={customerMobileNo}
            />
          </div>

          <div className="flex  items-center w-full">
            <div className="flex flex-col  w-1/2 mr-5 mt-4">
              <label htmlFor="" className="text-color5E text-sm ">
                DOB
                {/* <span className="text-red-500">*</span> */}
              </label>
              <div className="border h-10 flex justify-center items-center w-full rounded   text-xs font-normal text-position  mt-1 bg-white ">
                <Flatpickr
                  options={{ minDate: "", maxDate: new Date() }}
                  className="pl-2 h-full text-sm placeholder:text-sm bg-white w-full"
                  onChange={(e) => setBirthday(e)}
                  value={moment(new Date(birthday && birthday)).format(
                    "YYYY-MM-DD"
                  )}
                />
              </div>
              {/* <input
                type="date"
                id="date"
                placeholder=""
                {...register("birthday", {
                  required: true,
                })}
                className="rounded pl-3  border text-xs font-normal text-position h-10 mt-1 bg-white w-full"
              /> */}
            </div>
            {/* <div className="flex flex-col mt-6 w-full pr-5">
                <label htmlFor="" className="text-color5E text-sm ">
                  DOB
                </label>
                <input
                  type="date"
                  className="h-10 mt-3 border rounded-md bg-white w-full pl-2"
                  placeholder="mobile number"
                  {...register("birthday", {
                    required: true,
                  })}
                />
              </div> */}

            <div className="flex flex-col mt-4  w-1/2">
              <label htmlFor="" className="text-color5E text-sm ">
                Gender
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select
                defaultValue={""}
                {...register("gender", { required: false })}
                className="h-10 mt-1 border rounded-md bg-white w-full pl-2 text-xs font-normal "
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHERS">Others</option>
              </select>
            </div>
          </div>

          <div className="flex items-center w-full">
            <div className="flex flex-col mt-4 w-full mr-5">
              <label htmlFor="" className="text-color5E text-sm ">
                Country
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select
                defaultValue={""}
                {...register("country", { required: false })}
                className="h-10 mt-1 border rounded-md bg-white w-full pl-2  text-xs font-normal"
              >
                <option value="" disabled>
                  Select
                </option>
                {countriesList?.results?.map((each, idx) => (
                  <option key={idx} value={each?.id}>
                    {each?.country}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col mt-4 w-full ">
              <label htmlFor="" className="text-color5E text-sm ">
                State
                {/* <span className="text-red-500">*</span> */}
              </label>
              <select
                defaultValue={""}
                {...register("state", { required: false })}
                className="h-10 mt-1 border rounded-md bg-white w-full pl-2  text-xs font-normal"
              >
                <option value="" disabled>
                  Select
                </option>
                {statesList?.results?.map((each, idx) => (
                  <option key={idx} value={each?.id}>
                    {each?.states}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center w-full">
            <div className="flex flex-col mt-4 w-full mr-5">
              <label htmlFor="" className="text-color5E text-sm ">
                City
                <span className="text-red-500">*</span>
              </label>
              <select
                defaultValue={""}
                {...register("city", { required: true })}
                className="h-10 mt-1 border rounded-md bg-white w-full pl-2  text-xs font-normal"
              >
                <option value="" disabled>
                  Select
                </option>
                {citiesList?.results?.map((each, idx) => (
                  <option key={idx} value={each?.id}>
                    {each?.city}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col mt-4 w-full">
              <label htmlFor="" className="text-color5E text-sm ">
                Pincode
                {/* <span className="text-red-500">*</span> */}
              </label>
              <input
                type="text"
                pattern="[0-9]{6}"
                minLength={6}
                maxLength={6}
                className="border rounded-md h-9 px-3 mt-1 w-full placeholder:text-xs placeholder:font-normal "
                placeholder="pincode"
                {...register("pincode", {
                  required: false,
                })}
              />
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="" className="text-color5E text-sm ">
              Address
              {/* <span className="text-red-500">*</span> */}
            </label>

            <textarea
              cols={6}
              rows={3}
              className="border rounded-md  px-2 mt-1 pt-1  text-xs font-normal "
              {...register("address", {
                required: false,
              })}
            />
          </div>

          <div className="mt-6  flex flex-col justify-between ">
            <button
              className="px-5 h-9 bg-bg40 rounded-lg text-white mb-3 self-end flex items-center"
              type="submit"
            >
              {"Add"}
              <IoIosArrowForward className="ml-2" />
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div className="">
            <div className="flex items-center   mb-5 border h-[38px] rounded-l-none rounded-lg">
              <input
                type="search"
                className="border-none rounded-md h-9   outline-none pl-2 mr-1 placeholder:text-xs placeholder:font-normal w-full"
                onChange={(e) => setSearchData(e.target.value)}
                placeholder="Enter text"
              />
              <button
                type="button"
                onClick={() => handleSearchButton()}
                className="  h-full text-base  bg-bg40 rounded-l-none rounded-lg text-white px-2"
              >
                Search
              </button>
            </div>

            <div className="grid grid-cols-2  w-full gap-2">
              {knowAboutUsEnums?.map((each) => (
                <div className=" flex items-center" key={each.id}>
                  <input
                    value={each.id}
                    type="radio"
                    id={each.id}
                    checked={each.id == selectedOption ? true : false}
                    name="aboutUs"
                    // {...register("socialMedia")}
                    onChange={() => setSelectedOption(each.id)}
                  />
                  <label
                    htmlFor={each.id}
                    className="text-color5E text-sm font-normal ml-2"
                  >
                    {each.title}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex justify-between  absolute bottom-0 right-0 left-0 mx-4">
              <button
                onClick={handleBack}
                className="px-5 h-9 border rounded-lg text-color5E border-[#82868B] mb-3 text-sm font-medium flex items-center"
              >
                <IoIosArrowForward className="mr-2 rotate-180" />
                Back
              </button>

              <button
                type="submit"
                className="px-5 h-9 bg-bg40 rounded-lg text-white mb-3 text-sm font-medium flex items-center"
              >
                {"Proceed "}
                <IoIosArrowForward className="ml-2" />
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
