import { SET_AUTHENTICATED_USER, SET_SESSION_EXPIRE } from "../actionTypes";

const initialState = {
  userId: null,
  email: null,
  name: null,
  picture: null,
};


const reducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_AUTHENTICATED_USER:
      return {
        ...state,
       ...action.payload
      }
    case SET_SESSION_EXPIRE:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
