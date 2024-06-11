import instance from "./axios-instance";
import {
  GET_ALL_BOOKINGS,
  GET_ALL_CUSTOMER_BOOKINGS,
  GET_BOOKING_ID,
  GET_BOOKING_ID_DETAILS,
} from "../actionTypes";
import { notification } from "antd";
// import { notification } from "antd";

export function getAllBookings(currentPage,
  itemsPerPage,
  searchBookingId,
  searchName,
  searchRoomNo,
  searchCheckIn,
  searchCheckOut,
  sortDirection,
  sortBy) {
  return (dispatch) => {
    instance.get(`/bookings/find-all`, {
      params: {
        currentPage,
        itemsPerPage,
        searchBookingId,
        searchName,
        searchRoomNo,
        searchCheckIn,
        searchCheckOut,
        sortDirection,
        sortBy
      }
    })
      .then((axiosResponse) => {
        const response = axiosResponse.data;
        // console.log("create response:", axiosResponse);
        // console.log("res  >",response);

        if (response.success) {
          dispatch({ type: GET_ALL_BOOKINGS, payload: response });
          // dispatch(findOneGuest(response.data.GuestID))
          // console.log("gusestID:",response.data.GuestID);
        }
      });
  };
}
export function getCustomerBookings() {
  return (dispatch) => {
    instance.get(`/bookings/find-customerBooking`)
      .then((axiosResponse) => {
        const response = axiosResponse.data;
        // console.log("create response:", axiosResponse);
        // console.log("res  >",response);

        if (response.success) {
          dispatch({ type: GET_ALL_CUSTOMER_BOOKINGS, payload: response });
          // dispatch(findOneGuest(response.data.GuestID))
          // console.log("gusestID:",response.data.GuestID);
        }
      });
  };
}

export function createBooking(booking) {
  // console.log("booking",booking);
  return (dispatch) => {
    instance.post(`/bookings/createBooking`, { booking })
      .then((axiosResponse) => {
        const response = axiosResponse.data;
        // console.log("res  >",response);

        if (response.success) {
          dispatch({ type: GET_BOOKING_ID, payload: response.bookingID });
          notification.success({
            message: `Notification `,
            description: response.message,
            placement: "bottomRight",
          });
        } else {
          notification.error({
            message: `Notification `,
            description: response.message,
            placement: "bottomRight",
          });
        }
      });
  };
}

export function createGuestBooking(booking) {
  // console.log("booking...>0", booking);
  return (dispatch) => {
    instance.post(`/bookings/createGuestBooking`, { booking })
      .then((axiosResponse) => {
        const response = axiosResponse.data;
        // console.log("res  >",response);

        if (response.success) {
          dispatch({ type: GET_BOOKING_ID, payload: response.bookingID });
          notification.success({
            message: `Notification `,
            description: response.message,
            placement: "bottomRight",
          });
        } else {
          notification.error({
            message: `Notification `,
            description: response.message,
            placement: "bottomRight",
          });
        }
      });
  };
}
export function findOneBooking(bookingID) {
  return (dispatch) => {
    instance
      .get(`/bookings/find-one/${bookingID}`, { bookingID })
      .then((axiosResponse) => {
        //   console.log("axiosResponse >",axiosResponse.status);
        const response = axiosResponse.data;
        // console.log( response);

        if (response.success) {
          // console.log("innn3333",response.data);
          dispatch({ type: GET_BOOKING_ID_DETAILS, payload: response.data });
          // console.log("......>",response.data );
        }
      })

  };
}

export function masterBooking(booking) {
  console.log("booking...>0", booking);
  return (dispatch) => {
    instance.post(`/bookings/masterBooking`, { booking })
      .then((axiosResponse) => {
        const response = axiosResponse.data;
        // console.log("res  >",response);

        // if (response.success) {
        //   dispatch({ type: GET_BOOKING_ID, payload: response.bookingID });
        //   notification.success({
        //     message: `Notification `,
        //     description: response.message,
        //     placement: "bottomRight",
        //   });
        // } else {
        //   notification.error({
        //     message: `Notification `,
        //     description: response.message,
        //     placement: "bottomRight",
        //   });
        // }
      });
  };
}
export function mastercustomerBooking(booking) {
  console.log("booking...>0", booking);
  return (dispatch) => {
    instance.post(`/bookings/mastercustomerBooking`, { booking })
      .then((axiosResponse) => {
        const response = axiosResponse.data;
        // console.log("res  >",response);

        // if (response.success) {
        //   dispatch({ type: GET_BOOKING_ID, payload: response.bookingID });
        //   notification.success({
        //     message: `Notification `,
        //     description: response.message,
        //     placement: "bottomRight",
        //   });
        // } else {
        //   notification.error({
        //     message: `Notification `,
        //     description: response.message,
        //     placement: "bottomRight",
        //   });
        // }
      });
  };
}