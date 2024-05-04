import instance from "./axios-instance";
import {
    GET_ALL_ROOMS,
    GET_ALL_ROOM_TYPES,
} from "../actionTypes";
import { notification } from "antd";
// import { notification } from "antd";

export function getAllRooms() {
    return (dispatch) => {
        instance.get(`/rooms/find-all`)
        .then((axiosResponse) => {
            const response = axiosResponse.data;
            // console.log("create response:", axiosResponse);
            // console.log("res  >",response);
          
            if (response.success) {
                dispatch({ type: GET_ALL_ROOMS, payload: response.data});
                
            }
        });
    };
}

export function createRoom(room) {
    return (dispatch) => {
      instance.post(`/rooms/create`, { room })
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


export function getRoomTypes() {
    return (dispatch) => {
        instance.get(`/rooms/roomTypes`)
        .then((axiosResponse) => {
            const response = axiosResponse.data;
            // console.log("create response:", axiosResponse);
            // console.log("res  >",response);
          
            if (response.success) {
                dispatch({ type: GET_ALL_ROOM_TYPES, payload: response.data});
                
            }
        });
    };
}
export function createRoomType(room) {
    return (dispatch) => {
      instance.post(`/rooms/createRoomType`, { room })
      .then((axiosResponse) => {
        const response = axiosResponse.data;
        console.log("res  >",response);

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