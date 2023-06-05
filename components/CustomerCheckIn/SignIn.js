import React from "react";

import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { useRouter } from "next/router";
import ComposePopup from "../EmailChatCalendar/Email/compose-popup";

import { useDispatch } from "react-redux";
import { addSalesRepTokens } from "../../store/slices/auth";
import { useSalesRepLoginMutation } from "../../store/apis/restApi";
import { BiArrowBack } from "react-icons/bi";

export default function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();
  const [SalesRepLogin] = useSalesRepLoginMutation();

  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const backendFormat = {
      employee_id: values.id.toUpperCase(),
      password: values.password,
    };

    SalesRepLogin(backendFormat).then((res) => {
      if (res.data) {
        const salesRep = {
          accessToken: res.data.access,
          refreshToken: res.data.refresh,
          user: res.data,
        };

        dispatch(addSalesRepTokens(salesRep));
        toast.success("SalesRep Logged Successfully");

        router.push("/customer-login");
      }
      if (res.error) {
        toast.error(JSON.stringify(res?.error?.data?.message[0]));
      }
    });
  };

  return (
    <div className="bg-[#D9D9D9] flex flex-col justify-center h-screen relative">
      <div className="h-[259px] absolute bg-bg40 w-[246.2px] opacity-10 -left-36 rounded-xl top-16  "></div>

      <div className="mx-5">
        <div className="px-5 rounded-md bg-white h-[597px] pt-10 z-10 relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center">
              <img src="/images/logo.svg" className="w-[127px] h-[109px]" />
            </div>
            <div className="text-color5E font-semibold text-lg mt-10">
              Welcome!
            </div>

            <div className="flex flex-col mt-7">
              <label htmlFor="id" className="text-color5E text-sm">
                Employee ID
              </label>
              <input
                type="text"
                id="id"
                className="border rounded-md h-9 px-3 mt-2 placeholder:text-sm placeholder:font-normal"
                {...register("id", {
                  required: true,
                })}
                placeholder="Ex: SR002307"
              />
            </div>

            <div className="flex flex-col mt-6">
              <label htmlFor="password" className="text-color5E text-sm ">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="border rounded-md h-9 px-3 mt-2 placeholder:text-sm placeholder:font-normal"
                placeholder="Enter Password"
                {...register("password", {
                  required: true,
                })}
              />
            </div>

            {/* <div className="mt-5 flex items-center">
              <input
                type={"checkbox"}
                {...register("checked", {})}
                className="accent-liveprice"
                id="checkbox"
              />
              <label
                htmlFor="checkbox"
                className="text-color5E ml-2 text-base font-normal"
              >
                Keep me logged
              </label>
            </div> */}

            <div className="mt-16">
              <button className="w-full h-9 bg-bg40 rounded-lg text-white ">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="h-[303px] w-[159px] absolute border-2 right-0  bottom-0 opacity-10 border-r-0 rounded-r-none rounded-b-none border-bg40  border-dashed border-b-0 rounded-xl">
        <div className="h-[227px] absolute bg-bg40 w-[120px]  right-0  rounded-xl rounded-r-none rounded-b-none bottom-0"></div>
      </div>
    </div>
  );
}
