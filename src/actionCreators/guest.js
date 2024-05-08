import { GET_ALL_GUESTS, GET_GUEST_ID } from "../actionTypes";
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
         console.log(response)   
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