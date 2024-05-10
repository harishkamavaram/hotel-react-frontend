import { GET_ALL_GUESTS, GET_GUEST_ID, GET_ONE_GUEST_DETAILS } from "../actionTypes";
import instance from "./axios-instance";
import { notification } from "antd";

export function getAllCustomers() {
  return (dispatch) => {
      instance.get(`/guest/find-all`)
      .then((axiosResponse) => {
          const response = axiosResponse.data;
          // console.log("create response:", axiosResponse);
          console.log("res  >",response);
        
          if (response.success) {
              dispatch({ type: GET_ALL_GUESTS, payload: response.data});
              
          }
      });
  };               
}  

export function createGuest(guest) {
    return (dispatch) => {
      instance.post(`/guest/create`, { guest })
      .then((axiosResponse) => {
        const response = axiosResponse.data;
        //  console.log(response)   
        if (response.success) {
            dispatch({ type: GET_GUEST_ID, payload: response.guestID});
        
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
  export function findOneGuest(GuestID) {
    return (dispatch) => {
      instance
        .get(`/guest/find-one/${GuestID}`, { GuestID })
        .then((axiosResponse) => {
        //   console.log("axiosResponse >",axiosResponse.status);
          const response = axiosResponse.data;
          // console.log( response);
  
          if (response.success) {
            // console.log("innn3333",response.data);
            dispatch({ type: GET_ONE_GUEST_DETAILS, payload: response.data});
            // console.log("......>",response.data );
          }
        })
        
    };
  }

  export function updateGuest(GuestID, guest) {
    return (dispatch) => {
      // console.log(GuestID);
      // console.log(guest);
      instance
        .put(`/guest/updateGuest/${GuestID}`, { GuestID, guest })
  
        .then((axiosResponse) => {
          const response = axiosResponse.data;
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