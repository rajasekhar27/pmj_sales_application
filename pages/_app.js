import Header from "../components/Header";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../store/store";
import "../styles/globals.css";
// import "@fullcalendar/common/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
import UploadPhoto from "../components/CustomerProfile/upload-photo";
import EditProfile from "../components/CustomerProfile/edit-profile-form";
import LivePriceModal from "../components/SalesRepresentativeProfile/live-price-modal";
import FilterForm from "../components/OrderStats/filterForm";
import ComposePopup from "../components/EmailChatCalendar/Email/compose-popup";
import ModelComponent from "../components/ModelComponent";
import InboxMessage from "../components/EmailChatCalendar/InboxMessage";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import {
  addCustomerTokens,
  addSalesRepTokens,
  removeCustomerTokens,
  removeSalesRepTokens,
} from "../store/slices/auth";
import {
  useGetCustomerDetailsQuery,
  useHandleLogoutMutation,
} from "../store/apis/restApi";
import jwt from "jsonwebtoken";
import { useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import moment from "moment/moment";
import BarcodeScanner from "../components/WishlistProductListing/barcodescanner";
import {
  setMountingMaxPriceFilter,
  setMountingMinPriceFilter,
  setStoreCategoryFilterId,
  setStoreSelectedFilterOptions,
} from "../store/slices/catalogue";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const customerAccessSlug = useSelector((state) => state.auth.Customer);
  const defaultSavedFilters = useSelector(
    (state) => state.catalogue?.savedFilters
  );

  const [events, setEvents] = useState([
    "click",
    "load",
    "scroll",
    // "mousemove",
    "keypress",
  ]);

  const [second, setSecond] = useState(0);
  const [handleLogout] = useHandleLogoutMutation();
  let timeStamp;
  let warningInactiveInterval = useRef();
  let startTimerInterval = useRef();

  const { data: details } = useGetCustomerDetailsQuery({
    slug: customerAccessSlug.user?.user_detail?.slug,
  });

  useEffect(() => {
    const salesRepData = localStorage.getItem("salesRep");
    const customerData = localStorage.getItem("customer");

    {
      salesRepData
        ? dispatch(addSalesRepTokens(JSON.parse(salesRepData)))
        : dispatch(removeSalesRepTokens());
    }
    {
      customerData
        ? dispatch(addCustomerTokens(JSON.parse(customerData)))
        : dispatch(removeCustomerTokens());
    }
  }, []);

  // Token Expired Code

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("salesRep"))?.accessToken;

    if (jwt.decode(token)?.exp < Date.now() / 1000) {
      localStorage.clear();
      router.push("/sales-login");
    }
  }, []);

  //Timer Logout

  // start inactive check
  let timeChecker = () => {
    const customerData = JSON.parse(localStorage.getItem("customer"));
    startTimerInterval.current = setTimeout(() => {
      let storedTimeStamp = localStorage.getItem("lastTimeStamp");
      customerData && warningInactive(storedTimeStamp);
    }, 1000);
  };

  // reset interval timer
  let resetTimer = useCallback(() => {
    clearTimeout(startTimerInterval.current);
    clearInterval(warningInactiveInterval.current);
    timeStamp = moment();
    localStorage.setItem("lastTimeStamp", timeStamp);
    timeChecker();
  }, []);

  // warning timer
  let warningInactive = (timeString) => {
    const customerData = localStorage.getItem("customer");
    clearTimeout(startTimerInterval.current);
    warningInactiveInterval.current = setInterval(() => {
      const maxTime = 10; // Maximum ideal time given before logout
      const popTime = 10; // remaining time (notification) left to logout.
      const diff = moment.duration(moment()?.diff(moment(timeString)));
      const minPast = diff.minutes();
      const leftSecond = 60 - diff.seconds();
      // console.log(maxTime, minPast, leftSecond, "amigo");
      if (minPast === popTime) {
        setSecond(leftSecond);
      }

      if (minPast === maxTime) {
        const backendFormat = {
          slug: customerData?.user?.checkin_slug,
        };

        handleLogout(backendFormat).then((res) => {
          if (res.data) {
            clearInterval(warningInactiveInterval.current);
            localStorage.removeItem("lastTimeStamp");
            localStorage.removeItem("customer");
            window.location.reload();
            toast.success("Customer Logout Successfully ");
            return;
          } else {
            toast.error(res?.error?.data?.message);
          }
        });
      }
    }, 1000);
  };

  // Life cycle hook
  useEffect(() => {
    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });
    timeChecker();
    return () => {
      clearTimeout(startTimerInterval.current);
    };
  }, [resetTimer, events, timeChecker]);

  useEffect(() => {
    const localSavedFilters = JSON.parse(
      localStorage.getItem("localSavedFilters")
    );

    const localFilterOptions = JSON.parse(
      localStorage.getItem("localFilterOptions")
    );

    localSavedFilters?.map((eachStateFilter) => {
      dispatch(setStoreCategoryFilterId(eachStateFilter));
      dispatch(setStoreSelectedFilterOptions(eachStateFilter));
    });
    dispatch(setMountingMaxPriceFilter(localFilterOptions?.maxPrice));
    dispatch(setMountingMinPriceFilter(localFilterOptions?.minPrice));
  }, []);

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="md:hidden">
        {router.pathname !==
          "/catalogue/catalogue-filter/inventory-catalogue/[id]" &&
          router.pathname !==
            "/catalogue/catalogue-filter/digital-catalogue/[id]" &&
          router.pathname !==
            "/catalogue/product-listing/inventory-catalogue/[id]" &&
          router.pathname !==
            "/catalogue/product-listing/digital-catalogue/[id]" &&
          router.pathname !== "/catalogue/catalogue-filter/inventory" &&
          router.pathname !== "/sales-login" &&
          router.pathname !== "/catalogue/all-category-products/[id]" &&
          router.pathname !== "/wishlist" &&
          router.pathname !== "/wishlist-product-listing/[id]" &&
          router.pathname !== "/catalogue/product-listing" && <Header />}

        <UploadPhoto />
        <BarcodeScanner />
        <EditProfile />
        <LivePriceModal />
        <FilterForm />
        <ComposePopup />
        <ModelComponent />
        <InboxMessage />

        <Component {...pageProps} />
      </div>

      <div className="hidden md:flex flex-col justify-center items-center h-screen w-full bg-liveprice text-white ">
        <p className="desktop-version">OPEN IN MOBILE VERSION</p>
      </div>
    </>
  );
}

function App(props) {
  return (
    <Provider store={store}>
      <MyApp {...props} />
    </Provider>
  );
}

export default App;
