// import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
// import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from "@fullcalendar/list";
// import interactionPlugin from "@fullcalendar/interaction";
import events from "./events";
import { BiMenu } from "react-icons/bi";
import {
  closeCalenderSideBar,
  openCalenderSideBar,
} from "../../store/slices/popupSlice";
import { useDispatch, useSelector } from "react-redux";

const Calendar = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const calendarOptions = {
    events: events,
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: "dayGridMonth",
    height: 885,
    headerToolbar: {
      start: "sidebarToggle, prev,next, title",
      end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
    },

    /*
      Enable dragging and resizing event
      ? Docs: https://fullcalendar.io/docs/editable
    */
    editable: true,

    /*
      Enable resizing event from start
      ? Docs: https://fullcalendar.io/docs/eventResizableFromStart
    */
    eventResizableFromStart: true,

    /*
      Automatically scroll the scroll-containers during event drag-and-drop and date selecting
      ? Docs: https://fullcalendar.io/docs/dragScroll
    */
    dragScroll: true,

    /*
      Max number of events within a given day
      ? Docs: https://fullcalendar.io/docs/dayMaxEvents
    */
    dayMaxEvents: 2,

    /*
      Determines if day names and week names are clickable
      ? Docs: https://fullcalendar.io/docs/navLinks
    */
    navLinks: true,

    // eventClassNames({ event: calendarEvent }) {
    //   // eslint-disable-next-line no-underscore-dangle
    //   const colorName =
    //     calendarsColor[calendarEvent._def.extendedProps.calendar];

    //   return [
    //     // Background Color
    //     `bg-light-${colorName}`,
    //   ];
    // },

    // eventClick({ event: clickedEvent }) {
    //   dispatch(selectEvent(clickedEvent));
    //   handleAddEventSidebar();

    //   // * Only grab required field otherwise it goes in infinity loop
    //   // ! Always grab all fields rendered by form (even if it get `undefined`) otherwise due to Vue3/Composition API you might get: "object is not extensible"
    //   // event.value = grabEventDataFromEventApi(clickedEvent)

    //   // eslint-disable-next-line no-use-before-define
    //   // isAddNewEventSidebarActive.value = true
    // },

    customButtons: {
      sidebarToggle: {
        text: <BiMenu className="d-xl-none d-block" />,
        click() {
          dispatch(openCalenderSideBar());
        },
      },
    },

    // dateClick(info) {
    //   const ev = blankEvent;
    //   ev.start = info.date;
    //   ev.end = info.date;
    //   dispatch(selectEvent(ev));
    //   handleAddEventSidebar();
    // },

    /*
      Handle event drop (Also include dragged event)
      ? Docs: https://fullcalendar.io/docs/eventDrop
      ? We can use `eventDragStop` but it doesn't return updated event so we have to use `eventDrop` which returns updated event
    */
    // eventDrop({ event: droppedEvent }) {
    //   dispatch(updateEvent(droppedEvent));
    //   toast.success(
    //     <ToastComponent
    //       title="Event Updated"
    //       color="success"
    //       icon={<Check />}
    //     />,
    //     {
    //       icon: false,
    //       autoClose: 2000,
    //       hideProgressBar: true,
    //       closeButton: false,
    //     }
    //   );
    // },

    /*
      Handle event resize
      ? Docs: https://fullcalendar.io/docs/eventResize
    */
    // eventResize({ event: resizedEvent }) {
    //   dispatch(updateEvent(resizedEvent));
    //   toast.success(
    //     <ToastComponent
    //       title="Event Updated"
    //       color="success"
    //       icon={<Check />}
    //     />,
    //     {
    //       icon: false,
    //       autoClose: 2000,
    //       hideProgressBar: true,
    //       closeButton: false,
    //     }
    //   );
    // },

    // ref: calendarRef,

    // Get direction from app state (store)
    // direction: isRtl ? "rtl" : "ltr",
  };
  return (
    <div className=" mt-28 ">
      <div className="px-4  ">
        <FullCalendar
          {...calendarOptions}
          // viewClassNames={"bg-red-500"}
        />
      </div>
    </div>
  );
};

export default Calendar;

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
