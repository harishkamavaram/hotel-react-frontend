import {  GET_ALL_GUESTS, GET_GUEST_ID} from "../actionTypes";

const initialState = {
  data: [],
  allGuests: [],
 
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
          allGuests: action.payload,
        }
    default:
      return state;
  }
}

export default reducer;
