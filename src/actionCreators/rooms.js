import instance from "./axios-instance";
import {
    GET_ALL_ROOMS,
} from "../actionTypes";
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