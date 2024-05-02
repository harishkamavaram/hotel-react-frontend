import { GET_ONE_EMPLOYEE} from "../actionTypes";

const initialState = {
  data: [],
 
};


const reducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_ONE_EMPLOYEE:
      return {
        ...state,
       data: action.payload
      }
    
    default:
      return state;
  }
}

export default reducer;
