import { GET_ALL_BOOKINGS} from "../actionTypes";

const initialState = {
  data: [],
//   itemCount: []
 
};


const reducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_ALL_BOOKINGS:
      return {
        ...state,
       data: action.payload,
    //    itemCount:action.payload.pagination
      }
    
    default:
      return state;
  }
}

export default reducer;
