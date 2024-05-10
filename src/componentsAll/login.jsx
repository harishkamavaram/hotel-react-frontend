import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import Cookie from "js-cookie";
import {
  getUrl, 
  setAuthenticated
} from "../actionCreators/google"

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  // console.log("user.>",user.isAuthenticated);
  // const handleLoginWithGoogle = () => {
  //   window.location.href = 'http://localhost:10800/users/googlecb'; // Redirect to your server endpoint for Google authentication
  // };

  useEffect(() => {
    
    // console.log("....-",Cookie.get("token"));
    
    if(user.isAuthenticated) {
      // console.log("already logged in ....");
      navigate("/admin");
    } else {
      if(loading) {
        const userLocalStorageToken = window.localStorage.getItem('NiceHotel');
        // console.log("userLocalStorageToken >",userLocalStorageToken);
        dispatch(setAuthenticated(userLocalStorageToken));
        setLoading(false)
      }
    }
  },[loading, dispatch,user,navigate])
  
  return (
    <div >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:"80vh" }} >
       <button style={{border:0}}>
         <Link to="">
          <img
            id="btn_google"
            src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
            className="mx-auto d-block"
            alt="login button"
            style={{ height: 50 }}
            onClick={getUrl()}
          />
        </Link>
        </button> 
      </div>
      {/* <p>login......</p> */}

    </div>
  );
}

export default Login;
