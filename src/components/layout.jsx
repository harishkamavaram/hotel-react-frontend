import { Outlet, useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import Header from "./header";
import Sidebar from "./sidebar";
import CustomerLayout from "../customerComponents/Layout"
import { setAuthenticated } from "../actionCreators/google";
import { useEffect, useState } from "react";

function Adminpanel({ children }) {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  
 
  const userLocalStorageToken = window.localStorage.getItem('NiceHotel');
  // console.log("user.......>",userLocalStorageToken);
  useEffect(() => {
    
    if(userLocalStorageToken === null){
      // console.log("ur customer");
      navigate("/")
     
    }
    
    if(user.isAuthenticated) {
      console.log("already logged in ....");
      navigate("/admin");
    } else {
      if(loading) {
        const userLocalStorageToken = window.localStorage.getItem('NiceHotel');
        // console.log("userLocalStorageToken >",userLocalStorageToken);
        dispatch(setAuthenticated(userLocalStorageToken));
        setLoading(false)
      }
    }
  },[loading, dispatch,user,navigate,userLocalStorageToken])
  
  
  if (user.isAuthenticated) {
    
    return children;
    
  }
  else {
    return <CustomerLayout />
  }
}

function Layout() {
  return (
    <Adminpanel>
      <Header />
      <Sidebar />
      <Outlet />
    </Adminpanel>
  );
}


export default Layout;