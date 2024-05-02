import instance from "./axios-instance";
import { SET_AUTHENTICATED_USER, SET_SESSION_EXPIRE } from "../actionTypes";
import { findOneEmployee } from "./employee"; 
export function getUrl() {
  return () => {
    // console.log("innnn......1");
    instance
      .get(`/users/get-google-login-uri`)
      .then((axiosResponse) => {
        // console.log("innn2222");
        const response = axiosResponse.data;
        // console.log("res:" ,response);
        const uri = response;
        // console.log("3333")
        if (uri !== "error") {
          window.location.href = uri;
          // console.log("444444")
        }
      });
  };
}

//for setting token for first time
export function verifyGoogleToken(code, cb) {
  return (dispatch) => {
    // console.log("innnn......1");
    instance
      .post(`/users/googlecb`, { code: code })
      .then((axiosResponse) => {
        const response = axiosResponse.data;
        // console.log("googlecallback response:", response);
        if (response.success) {
          window.localStorage.setItem("NiceHotel", response.data.token);
          dispatch({ type: SET_AUTHENTICATED_USER, payload: response.data });
          cb(null);
        }
      });
  };
}


//if user refreshs when token already set and expire of token also gets reset
export function setAuthenticated(token) {
  return (dispatch) => {
    instance
      .post(`/users/verify-user-token`, { token: token })
      .then((axiosResponse) => {
        const response = axiosResponse.data;
        // console.log("token verify response:", response);
        if (response.success) {
          window.localStorage.setItem("NiceHotel", response.data.token);
          dispatch({ type: SET_AUTHENTICATED_USER, payload: response.data });
          // console.log(response.data.userId)
            // dispatch(findOneEmployee(response.data.userId))
        }
      });
  };
}


//to remove token
export function setSessionExpire(token) {
  return (dispatch) => {
    instance
      .post(`/users/remove-user-token`, { token: token })
      .then((axiosResponse) => {
        // console.log("innnExpire11111")
        const response = axiosResponse.data;
        // console.log("token expire response:", response);
        if (response.success) {
          // console.log("innnExpire222222")
          window.localStorage.removeItem("NiceHotel", response.data.token);

          dispatch({ type: SET_SESSION_EXPIRE });
        }
      });
  };
}
