import { Pagination } from "antd";
import { GET_ALL_BOOKINGS, GET_ALL_CUSTOMER_BOOKINGS, GET_BOOKING_ID, GET_BOOKING_ID_DETAILS } from "../actionTypes";

const initialState = {
  data: [],
  pagination: [],
  bookingID: [],
  bookingIdDetails: [],
  customerBooking: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKINGS:
      return {
        ...state,
        data: action.payload.data,
        pagination: action.payload.pagination
      }
    case GET_BOOKING_ID:
      return {
        ...state,
        bookingID: action.payload,
      }
    case GET_BOOKING_ID_DETAILS:
      return {
        ...state,
        bookingIdDetails: action.payload,
      }
    case GET_ALL_CUSTOMER_BOOKINGS:
      return {
        ...state,
        customerBooking: action.payload.data
      }
    default:
      return state;
  }
}

export default reducer;
