import { GET_ALL_ROOMS, GET_ALL_ROOM_TYPES, GET_AVAILABLE_ROOMS, GET_ONE_ROOM, GET_ONE_ROOMTYPE, GET_SELECTED_ROOM, GET_SELECTED_ROOM_DETAILS } from "../actionTypes";

const initialState = {
  data: [],
  roomTypes: [],
  oneRoomType: [],
  oneRoom: [],
  availableRooms: [],
  customerSelectedRoom: [],
  customerSelectedRoomDetails: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ROOMS:
      return {
        ...state,
        data: action.payload,
      }
    case GET_ALL_ROOM_TYPES:
      return {
        ...state,
        roomTypes: action.payload,
      }
    case GET_ONE_ROOMTYPE:
      return {
        ...state,
        oneRoomType: action.payload,
      }
    case GET_ONE_ROOM:
      return {
        ...state,
        oneRoom: action.payload,
      }
    case GET_AVAILABLE_ROOMS:
      return {
        ...state,
        availableRooms: action.payload,
      }     
    case GET_SELECTED_ROOM:
      return {
        ...state,
        customerSelectedRoom: action.payload,
      }
      case GET_SELECTED_ROOM_DETAILS:
        return {
          ...state,
          customerSelectedRoomDetails: action.payload,
        }
    default:
      return state;
  }
}

export default reducer;
