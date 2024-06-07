import {  GET_ALL_GUESTS, GET_GUEST_ID, GET_ONE_GUEST_DETAILS} from "../actionTypes";

const initialState = {
  data: [],
  pagination: [],
  allGuests: [],
  oneGuest: [],
};


const reducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_GUEST_ID:
      return {
        ...state,
       data: action.payload,
       
      } 
      case GET_ALL_GUESTS:
        return {
          ...state,
          allGuests: action.payload.data,
          pagination: action.payload.pagination
        }
        case GET_ONE_GUEST_DETAILS:
          return {
            ...state,
            oneGuest: action.payload,
          }
    default:
      return state;
  }
}

export default reducer;
