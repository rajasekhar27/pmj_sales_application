import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
// import { toast } from 'react-toastify'
import { closeEditProfile } from "../../store/slices/popupSlice";
import Modal from "../Modal";
import {
  useAddUpdateCustomerMutation,
  useGetAllCitiesQuery,
  useGetAllCityDetailsQuery,
  useGetAllStateDetailsQuery,
  useGetCountriesListQuery,
  useGetCustomerDetailsQuery,
  useLazyGetAllStateCityDetailsQuery,
} from "../../store/apis/restApi";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import moment from "moment/moment";
// import { useUpdateProfileDetailsMutation } from '../store/apis/restapi'
// import { closeEditProfile } from '../store/slices/popup'
export default function EditProfile() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    watch,
  } = useForm();

  const profession = [
    { value: "LAWYER", label: "LAWYER " },
    { value: "TEACHER", label: "TEACHER " },
    { value: "BUSINESS", label: "BUSINESS " },
    { value: "DOCTOR", label: "DOCTOR " },
    { value: "ENGINEER", label: "ENGINEER " },
    { value: "OTHERS", label: "OTHERS " },
  ];
  const [stateCityId, setStateCityId] = useState("");
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [wedding_anniversary, setWeddingAnniversary] = useState("");
  const [marital, setMarital] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [profess, setProfession] = useState("");
  const uploadStatus = useSelector((state) => state.popup.editProfile);
  const [updateUserDetails] = useAddUpdateCustomerMutation();
  const customerAccess = useSelector((state) => state.auth.Customer);

  const { data: details } = useGetCustomerDetailsQuery({
    slug: customerAccess.user?.user_detail?.slug,
  });

  const customer = useSelector((state) => state.auth.Customer?.accessToken);

  const { data: countriesList } = useGetCountriesListQuery(
    {},
    { skip: customer ? false : true }
  );
  const { data: statesList } = useGetAllStateDetailsQuery(
    {},
    { skip: customer ? false : true }
  );
  const { data: citiesList } = useGetAllCityDetailsQuery(
    { state_city_id: stateCityId },
    { skip: customer ? false : true }
  );

  const [updateStateCityList, dataList] = useLazyGetAllStateCityDetailsQuery();
  const onSubmitForm = (e) => {
    const stateIndex = statesList?.results?.findIndex(
      (each) => each?.states === state
    );

    const cityIndex = citiesList?.results?.findIndex(
      (each) => each?.city === city
    );

    const stateId = statesList?.results?.[stateIndex]?.id;
    const cityId = citiesList?.results?.[cityIndex]?.id;

    const backendFormat = {
      phone_number: e.Mobile,
      email: e.Email?.length !== 0 ? e.Email : "",
      user_profile: {
        name: e.Name ? e.Name : details?.user_profile?.name,
        date_of_birth: dob === "Invalid date" ? null : dob,
        Marital_status:
          e.Marital_Status?.length === 0 ? undefined : e.Marital_Status,
        wedding_anniversary: wedding_anniversary
          ? wedding_anniversary
          : details?.profile?.wedding_anniversary,
        Known_about_us:
          e.Known_about_us?.length !== 0 ? e.Known_about_us : undefined,
        profession: e.Profession?.length !== 0 ? e.Profession : "",
        gender: e.gender?.length !== 0 ? e.gender : undefined,
      },
      address: {
        Address: e.Address?.length !== 0 ? e.Address : "",
        pincode: e.Pin?.length !== 0 ? e.Pin : null,
        city: cityId,
        country: e.country?.length !== 0 ? e.country : undefined,
        state: stateId?.length !== 0 ? stateId : undefined,
      },
    };

    updateUserDetails({
      data: backendFormat,
      slug: customerAccess.user?.user_detail?.slug,
    }).then((res) => {
      if (res.data) {
        toast.success("successfully updated User Details");
        dispatch(closeEditProfile());
        reset();
      }
      if (res.error) {
        toast.error(JSON.stringify(res.error.data));
      }
    });
  };

  useEffect(() => {
    setName(details?.user_profile?.name);
    setPhone(details?.phone_number);
    setDOB(details?.user_profile?.date_of_birth);
    setPinCode(details?.address?.pincode);
    setCity(details?.address?.city);
    setCountry(details?.address?.country);
    setState(details?.address?.state);
    setAddress(details?.address?.Address);
    setWeddingAnniversary(details?.user_profile?.wedding_anniversary);
    setProfession(details?.user_profile?.profession);
    setEmail(details?.email);
    setMarital(details?.user_profile?.Marital_status);
    setGender(details?.user_profile?.gender);
  }, [details]);

  useEffect(() => {
    setName(details?.user_profile?.name);
    setPhone(details?.phone_number);
    setDOB(details?.user_profile?.date_of_birth);
    setPinCode(details?.address?.pincode);
    setCity(details?.address?.city);
    setCountry(details?.address?.country);
    setState(details?.address?.state);
    setAddress(details?.address?.Address);
    setWeddingAnniversary(details?.user_profile?.wedding_anniversary);
    setProfession(details?.user_profile?.profession);
    setEmail(details?.email);
    setMarital(details?.user_profile?.Marital_status);
    setGender(details?.user_profile?.gender);
  }, [uploadStatus]);

  const handleState = (e) => {
    const stateIndex = statesList?.results?.findIndex(
      (each) => each?.states === e.target.value
    );

    setStateCityId(statesList?.results?.[stateIndex]?.id);
    setState(e.target.value);
    setCity("");
  };

  useEffect(() => {
    if (uploadStatus === false) {
      const stateIndex = statesList?.results?.findIndex(
        (each) => each?.states === details?.address?.state
      );
      setStateCityId(statesList?.results[stateIndex]?.id);
      updateStateCityList({
        state_city_id: statesList?.results[stateIndex]?.id,
      });
    }
  }, [uploadStatus]);

  useEffect(() => {
    const stateIndex = statesList?.results?.findIndex(
      (each) => each?.states === details?.address?.state
    );
    setStateCityId(statesList?.results[stateIndex]?.id);
    updateStateCityList({
      state_city_id: statesList?.results[stateIndex]?.id,
    });
  }, [details]);

  return (
    <Modal
      isOpen={uploadStatus}
      modalOuterClick={() => dispatch(closeEditProfile())}
      parentClases=" flex justify-center items-center popBgBlack"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="font-poppins bg-white rounded-md pt-5 px-1 relative w-10/12 h-[90%] "
      >
        <button onClick={() => dispatch(closeEditProfile())}>
          <div className="bg-white flex justify-center items-center absolute -top-4 -right-3 h-8 w-8 rounded-lg border">
            <AiOutlineClose />
          </div>
        </button>
        <form
          className=" flex flex-col h-[90%] overflow-y-scroll mb-5 "
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <h1 className="mx-3  mt-1 flex justify-center items-center font-medium text-rep text-2xl font-poppins">
            <FiEdit size={24} className="mr-1" />
            Edit Profile
          </h1>
          <div className="mx-3 mb-5 pt-5">
            <label
              htmlFor="name"
              className="text-xs font-normal text-rep mb-1 "
            >
              Change Name
            </label>
            <input
              {...register("Name", { required: true })}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Customer Name"
              className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position bg-white"
            />
          </div>

          <div className="mx-3 mb-5 ">
            <label
              htmlFor="mobile"
              className="text-xs font-normal text-rep mb-1 "
            >
              Change Mobile Number
            </label>
            <input
              {...register("Mobile")}
              type="text"
              pattern="[1-9]{1}[0-9]{9}"
              minLength={10}
              maxLength={10}
              id="mobile"
              onChange={(e) => setPhone(e.target.value)}
              disabled
              value={phone}
              placeholder="Enter Mobile Number"
              className="h-[38px] rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position bg-white"
            />
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="mx-3 mb-5 w-full">
              <label
                htmlFor="city"
                className="text-xs font-normal text-rep mb-1 "
              >
                Country
              </label>

              <select
                defaultValue={
                  countriesList?.results?.[
                    countriesList?.results?.findIndex(
                      (each) => each?.country === country
                    )
                  ]?.id
                }
                {...register("country")}
                className="rounded pl-3 py-2 border  text-xs placeholder:text-position  w-full h-[38px] bg-white"
                onChange={(e) => setCountry(e.target.value)}
                id="country"
              >
                {/* <option value="" className="text-xs font-normal ">
                  Select
                </option> */}
                {countriesList?.results?.map((each, idx) => (
                  <option
                    key={each?.id}
                    value={each?.id}
                    className="text-xs font-normal "
                  >
                    {each?.country}
                  </option>
                ))}
              </select>
            </div>
            <div className="mx-3 mb-5 w-full">
              <label
                htmlFor="state"
                className="text-xs font-normal text-rep mb-1 "
              >
                State
              </label>

              <select
                defaultValue={state}
                // {...register("state", { required: false })}
                className="rounded pl-3 py-2 border  text-xs placeholder:text-position w-full h-[38px] bg-white"
                onChange={(e) => handleState(e)}
                id="state"
              >
                {/* <option value="" className="text-xs font-normal ">
                  Select
                </option> */}
                {statesList?.results?.map((each) => (
                  <option
                    key={each?.states}
                    value={each?.states}
                    className="text-xs font-normal "
                  >
                    {each?.states}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="mx-3 mb-5 w-full">
              <label
                htmlFor="city"
                className="text-xs font-normal text-rep mb-1 "
              >
                City
              </label>

              <select
                defaultValue={
                  city === undefined || city.length === 0
                    ? details?.address?.city
                    : city
                }
                required
                // {...register("city", { required: true })}
                className="rounded pl-3 py-2 border w-full text-xs placeholder:text-position h-[38px] bg-white"
                onChange={(e) => setCity(e.target.value)}
                id="city"
              >
                <option value="" className="text-xs font-normal ">
                  Select
                </option>
                {citiesList?.results?.map((each) => (
                  <option
                    key={each?.city}
                    value={each?.city}
                    className="text-xs font-normal "
                  >
                    {each?.city}
                  </option>
                ))}
              </select>
            </div>

            <div className="mx-3 mb-5 w-full flex flex-col">
              <label
                htmlFor="date"
                className="text-xs font-normal text-rep  mb-1"
              >
                DOB
              </label>
              <div className=" border h-10 flex justify-center items-center w-full rounded   text-xs font-normal placeholder:text-position  mt-1 bg-white ">
                <Flatpickr
                  options={{ minDate: "", maxDate: new Date() }}
                  onChange={(e) =>
                    setDOB(moment(new Date(e)).format("YYYY-MM-DD"))
                  }
                  value={dob}
                  className="pl-2 h-full text-sm placeholder:text-sm bg-white w-full outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="mx-3 mb-5 flex flex-col items-start">
              <label
                htmlFor="pin"
                className="text-xs font-normal text-rep mb-1 "
              >
                Pincode
              </label>
              <input
                {...register("Pin")}
                type="text"
                pattern="[0-9]{6}"
                minLength={6}
                maxLength={6}
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                placeholder="Pincode"
                className={`rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position h-[38px] bg-white`}
              />
            </div>
            <div className="mx-3 mb-5 flex flex-col">
              <label
                htmlFor="address"
                className="text-xs font-normal text-rep mb-1dob "
              >
                Address
              </label>
              <input
                {...register("Address")}
                type="text"
                value={address}
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                className="rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position h-[38px] bg-white"
              />
            </div>
          </div>

          <div className="mx-3 mb-5">
            <label
              htmlFor="marital"
              className="text-xs font-normal text-rep mb-1 "
            >
              Marital Status
            </label>
            <select
              {...register("Marital_Status")}
              className="rounded pl-3 py-2 border w-full text-xs placeholder:text-position h-[38px] bg-white"
              id="marital"
              value={
                marital?.length === 0
                  ? details?.user_profile?.Marital_status
                  : marital
              }
              onChange={(e) => setMarital(e.target.value)}
            >
              <option value="">Select</option>
              <option
                value={true}
                defaultValue
                className="text-xs font-normal "
              >
                Married
              </option>
              <option
                value={false}
                defaultValue
                className="text-xs font-normal "
              >
                un-Married
              </option>
            </select>
          </div>

          {marital === true ||
          marital === "true" ||
          (marital?.length === 0 &&
            details?.user_profile?.Marital_status === true) ? (
            <div className="mx-3 mb-5 flex flex-col ">
              <label
                htmlFor="anniversary"
                className="text-xs font-normal text-rep  mb-1"
              >
                Wedding Anniversary Date
              </label>

              <div className=" border h-10 flex justify-center items-center w-full rounded   text-xs font-normal placeholder:text-position  mt-1 bg-white ">
                <Flatpickr
                  options={{
                    minDate:
                      dob?.length === 0 || dob === null ? "" : new Date(dob),
                    maxDate: new Date(),
                  }}
                  onChange={(e) =>
                    setWeddingAnniversary(
                      moment(new Date(e)).format("YYYY-MM-DD")
                    )
                  }
                  value={
                    wedding_anniversary?.length === 0 ||
                    wedding_anniversary === null
                      ? ""
                      : wedding_anniversary
                  }
                  className="pl-2 h-full text-sm placeholder:text-sm bg-white w-full outline-none"
                />
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="mx-3 mb-5 ">
            <label
              htmlFor="marital"
              className="text-xs font-normal text-rep mb-1"
            >
              Gender
            </label>

            <select
              {...register("gender")}
              className="rounded pl-3 py-2 border  text-xs placeholder:text-position w-full h-[38px] bg-white"
              id="marital"
              value={
                gender?.length === 0 ? details?.user_profile?.gender : gender
              }
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option
                value={"MALE"}
                defaultValue
                className="text-xs font-normal "
              >
                Male
              </option>
              <option
                value={"FEMALE"}
                defaultValue
                className="text-xs font-normal "
              >
                Female
              </option>
              <option
                value={"OTHERS"}
                defaultValue
                className="text-xs font-normal "
              >
                Others
              </option>
            </select>
          </div>

          <div className="mx-3 mb-5">
            <label
              htmlFor="email"
              className="text-xs font-normal text-rep mb-1"
            >
              Change Email
            </label>
            <input
              {...register("Email")}
              type="text"
              id="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Customer Email"
              className="rounded pl-3 py-2 border w-full placeholder:text-xs placeholder:font-normal placeholder:text-position h-[38px] bg-white"
            />
          </div>
          <div className="mx-3 mb-5">
            <label
              htmlFor="profession"
              className="text-xs font-normal text-rep mb-1"
            >
              Profession
            </label>

            <select
              className="rounded pl-3 py-2 border w-full text-xs placeholder:text-position h-[38px] bg-white"
              {...register("Profession")}
              defaultValue={profess}
              onChange={(e) => setProfession(e.target.value)}
            >
              <option value={""}>Select</option>
              {profession?.map((a, index) => (
                <option
                  key={index}
                  value={`${a.value}`}
                  className="text-xs font-normal "
                >
                  {a.value}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="self-center mb-5 mt-5 rounded-md h-[38px] w-44 py-3 flex justify-center bg-liveprice items-center font-semibold text-md text-white"
          >
            Update{" "}
          </button>
        </form>
      </div>
    </Modal>
  );
}
