import { GET_ALL_ROOMS, GET_ALL_ROOM_TYPES, GET_ONE_ROOM, GET_ONE_ROOMTYPE} from "../actionTypes";

const initialState = {
  data: [],
 roomTypes: [],
 oneRoomType: [],
 oneRoom: [],
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
      case GET_ONE_ROOMTYPE:
      return{
        ...state,
        oneRoomType:  action.payload,
      }
      case GET_ONE_ROOM:
        return{
          ...state,
          oneRoom:  action.payload,
        }
    default:
      return state;
  }
}

export default reducer;
