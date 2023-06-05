import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsChatLeft } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { useRouter } from "next/router";
import { closeSideBarPopup } from "../../store/slices/headerSlice";
import { useDispatch } from "react-redux";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import {
  removeCustomerTokens,
  removeSalesRepTokens,
} from "../../store/slices/auth";
import { useHandleLogoutMutation } from "../../store/apis/restApi";
import { toast } from "react-toastify";
import { IoIosArrowForward } from "react-icons/io";
import { useViewportSize } from "@mantine/hooks";
export default function SideBar() {
  const { height: windowHeight } = useViewportSize();

  const router = useRouter();
  const dispatch = useDispatch();

  const accessToken = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );

  const checkinSlug = useSelector(
    (state) => state.auth.Customer?.user?.checkin_slug
  );

  const customerAccess = useSelector(
    (state) => state.auth.Customer?.accessToken
  );

  const [handleLogout] = useHandleLogoutMutation();
  const routing = [
    {
      id: 1,
      title: "Dashboards",
      route: "/",
      icon: <BiHomeAlt size={18} />,
    },
    // {
    //   id: 2,
    //   title: "Email",
    //   route: "/email",
    //   icon: <HiOutlineMail size={18} />,
    // },
    // {
    //   id: 3,
    //   title: "Chat",
    //   route: "/chat",
    //   icon: <BsChatLeft size={18} />,
    // },
    // {
    //   id: 4,
    //   title: "Reminder",
    //   route: "/reminder",
    //   icon: <AiOutlineBell size={18} />,
    // },
    // {
    //   id: 5,
    //   title: "Calender",
    //   route: "/calender",
    //   icon: <AiOutlineCalendar size={18} />,
    // },
  ];
  const handleSidebarRouting = (name) => {
    router.push(name);
    dispatch(closeSideBarPopup());
  };

  const handleSalesRepLogout = () => {
    const backendFormat = {
      slug: checkinSlug,
    };

    if (customerAccess) {
      if (checkinSlug === undefined) {
        dispatch(removeCustomerTokens());
        dispatch(closeSideBarPopup());
        router.push("/");
        toast.success("Customer Logout Successfull");
        return;
      }
      handleLogout(backendFormat).then((res) => {
        if (res.data) {
          dispatch(removeCustomerTokens());
          dispatch(closeSideBarPopup());
          router.push("/");
          toast.success("Customer Logout Successfull");
        } else {
          toast.error(res?.error?.data?.message);
        }
      });
    } else {
      dispatch(removeSalesRepTokens());
      router.push("/sales-login");
      dispatch(closeSideBarPopup());
      toast.success("SalesRep Logout Successfull");
    }
  };
  return (
    <div
      className="text-color5E space-y-5 px-5 font-medium flex flex-col justify-between "
      style={{ height: windowHeight }}
    >
      <div className="h-[200px]">
        <div className="py-5 flex justify-center ">
          <img src="/images/logo.svg" className="w-[111px] h-[95px] " />
        </div>
        {routing?.map((a, index) => (
          <>
            <div
              key={a.id}
              onClick={() => handleSidebarRouting(a.route)}
              className={`${
                router.pathname == `${a.route}`
                  ? "bg-[#690531] rounded-md py-2 text-white"
                  : ""
              } flex items-center space-x-2  px-2 mb-5`}
            >
              {a.icon}
              <div className="flex items-center w-full justify-between">
                {a.title}
                <IoIosArrowForward className="ml-2" />
              </div>
            </div>
            {/* {a.id == 1 && (
              <div className="text-xs text-[#B9B9C3] px-2 mb-4">APPS</div>
            )} */}
          </>
        ))}
      </div>
      <div className="ml-10 py-10 ">
        <div className="flex  items-end ">
          {!accessToken ? (
            <div
              onClick={() => handleSidebarRouting("/sales-login")}
              className={`flex items-center space-x-2 px-2 `}
            >
              <FiLogIn size={24} className="text-bg40" />
              <div className="text-bg40 font-semibold text-18">SignIn</div>
            </div>
          ) : (
            <div
              onClick={handleSalesRepLogout}
              className={`flex items-center space-x-2 px-2 `}
            >
              <FiLogOut size={24} className="text-bg40" />
              <div className="text-bg40 font-semibold text-18">Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
