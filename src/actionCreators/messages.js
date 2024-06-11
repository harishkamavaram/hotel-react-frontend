import { GET_ALL_MESSAGES } from "../actionTypes";
import instance from "./axios-instance";

export function getAllMessages(currentPage,
    itemsPerPage,
    sortDirection,
    sortBy) {
    return (dispatch) => {
      instance.get(`/messages/find-all`, {
        params: {
          currentPage,
          itemsPerPage,
          sortDirection,
          sortBy
        }
      })
        .then((axiosResponse) => {
          const response = axiosResponse.data;
          // console.log("create response:", axiosResponse);
          console.log("res  >",response);
  
          if (response.success) {
            dispatch({ type: GET_ALL_MESSAGES, payload: response });
            // dispatch(findOneGuest(response.data.GuestID))
            // console.log("gusestID:",response.data.GuestID);
          }
        });
    };
  }