import instance from "./axios-instance";
import {
    GET_ALL_ROOMS,
    GET_ALL_ROOM_TYPES,
    GET_AVAILABLE_ROOMS,
    GET_ONE_ROOM,
    GET_ONE_ROOMTYPE,
    GET_SELECTED_ROOM_DETAILS,
    SET_SESSION_EXPIRE,
} from "../actionTypes";
import { notification } from "antd";

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


export function getAvailableRooms() {
  return (dispatch) => {
      instance.get(`/rooms/find-Available`)
      .then((axiosResponse) => {
          const response = axiosResponse.data;
          // console.log("create response:", axiosResponse);
          // console.log("res  >",response);
        
          if (response.success) {
              dispatch({ type: GET_AVAILABLE_ROOMS, payload: response.data});
              
          }
      });
  };               
}

export function getCustomerSelectedRooms(roomTypeId) {
  return (dispatch) => {
    // console.log("roomTypeId >",roomTypeId);
      instance.get(`/rooms/customer-selected-room/${roomTypeId}`,{roomTypeId})
      .then((axiosResponse) => {
          const response = axiosResponse.data;
          // console.log("create response:", axiosResponse);
          
          // console.log("res  >",response);
        
          if (response.success) {
              dispatch({ type: GET_SELECTED_ROOM_DETAILS, payload: response.data});
              
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
  export function deleteRoom(roomId) {
    return (dispatch) => {
      // console.log(roomId);
      instance
        .delete(`/rooms/delete/${roomId}`, { roomId })
  
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


  export function updateRoom(roomId, room) {
    return (dispatch) => {
      // console.log(roomId);
      console.log(room.status);
      instance
        .put(`/rooms/updateRoom/${roomId}`, { roomId, room })
  
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
  export function findOneRoom(roomId) {
    return (dispatch) => {
      instance
        .get(`/rooms/find-one-room/${roomId}`, { roomId })
        .then((axiosResponse) => {
          // console.log("axiosResponse >",axiosResponse.status);
          const response = axiosResponse.data;
          // console.log(response);
  
          if (response.success) {
            // console.log("innn3333",response.data.position);
            dispatch({ type: GET_ONE_ROOM, payload: response.data });
            // console.log("......>",response.data );
          }else {
            notification.error({
              message: `Notification `,
              description: response.message,
              placement: "bottomRight",
            });
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            dispatch({ type: SET_SESSION_EXPIRE });
          }
        });
    };
  }



  //FOR ROOM TYPES

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

 

  export function deleteRoomType(roomTypeId) {
    return (dispatch) => {
      // console.log(roomTypeId);
      instance
        .delete(`/rooms/deleteRoomType/${roomTypeId}`, { roomTypeId })
  
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


  export function updateRoomType(roomTypeId, roomType) {
    return (dispatch) => {
      // console.log(roomTypeId);
      // console.log(roomType);
      instance
        .put(`/rooms/update/${roomTypeId}`, { roomTypeId, roomType })
  
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
  export function findOneRoomType(roomTypeId) {
    return (dispatch) => {
      instance
        .get(`/rooms/find-one/${roomTypeId}`, { roomTypeId })
        .then((axiosResponse) => {
          // console.log("axiosResponse >",axiosResponse.status);
          const response = axiosResponse.data;
          // console.log(response);
  
          if (response.success) {
            // console.log("innn3333",response.data.position);
            dispatch({ type: GET_ONE_ROOMTYPE, payload: response.data });
            // console.log("......>",response.data );
          }else {
            notification.error({
              message: `Notification `,
              description: response.message,
              placement: "bottomRight",
            });
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            dispatch({ type: SET_SESSION_EXPIRE });
          }
        });
    };
  }