import { GET_ALL_EMPLOYEES} from "../actionTypes";

const initialState = {
  data: [],
  itemCount: []
 
};


const reducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_ALL_EMPLOYEES:
      return {
        ...state,
       data: action.payload.data,
       itemCount:action.payload.pagination
      }
    
    default:
      return state;
  }
}

export default reducer;
