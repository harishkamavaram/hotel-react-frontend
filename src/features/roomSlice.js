import { GET_ALL_ROOMS} from "../actionTypes";

const initialState = {
  data: [],
 
};


const reducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_ALL_ROOMS:
      return {
        ...state,
       data: action.payload,
      }
    
    default:
      return state;
  }
}

export default reducer;
