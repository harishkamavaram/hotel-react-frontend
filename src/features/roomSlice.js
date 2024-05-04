import { GET_ALL_ROOMS, GET_ALL_ROOM_TYPES} from "../actionTypes";

const initialState = {
  data: [],
 roomTypes: []
};


const reducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_ALL_ROOMS:
      return {
        ...state,
       data: action.payload,
      }
    case GET_ALL_ROOM_TYPES:
      return{
        ...state,
        roomTypes:  action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
