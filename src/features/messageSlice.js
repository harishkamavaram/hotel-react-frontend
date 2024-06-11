import { GET_ALL_MESSAGES } from "../actionTypes";


const initialState = {
  data: [],
  pagination: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      return {
        ...state,
        data: action.payload.data,
        pagination: action.payload.pagination
      }
    
    default:
      return state;
  }
}

export default reducer;
