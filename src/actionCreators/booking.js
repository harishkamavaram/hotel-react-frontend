import instance from "./axios-instance";
import {
    GET_ALL_BOOKINGS,
} from "../actionTypes";
import { notification } from "antd";
// import { notification } from "antd";

export function getAllBookings() {
    return (dispatch) => {
        instance.get(`/bookings/find-all`)
        .then((axiosResponse) => {
            const response = axiosResponse.data;
            // console.log("create response:", axiosResponse);
            // console.log("res  >",response);
          
            if (response.success) {
                dispatch({ type: GET_ALL_BOOKINGS, payload: response.data});
                // dispatch(findOneGuest(response.data.GuestID))
                // console.log("gusestID:",response.data.GuestID);
            }
        });
    };
}

export function createBooking(booking) {
    return (dispatch) => {
      instance.post(`/bookings/createBooking`, { booking })
      .then((axiosResponse) => {
        const response = axiosResponse.data;
        // console.log("res  >",response);

        if (response.success) {

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
    console.log("booking...>0",booking);
    return (dispatch) => {
      instance.post(`/bookings/createGuestBooking`, { booking })
      .then((axiosResponse) => {
        const response = axiosResponse.data;
        // console.log("res  >",response);

        if (response.success) {

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
// export function findOneGuest(employeeId) {
//     return (dispatch) => {
//       instance
//         .get(`/guest/find-one/${employeeId}`, { employeeId })
//         .then((axiosResponse) => {
//         //   console.log("axiosResponse >",axiosResponse.status);
//           const response = axiosResponse;
//           console.log(response);
  
//           if (response.success) {
//             // console.log("innn3333",response.data.position);
//             // dispatch({ type: GET_ALL_BOOKINGS, payload: response.data });
//             // console.log("......>",response.data );
//           }
//         })
        
//     };
//   }