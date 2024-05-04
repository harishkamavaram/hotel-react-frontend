import { Outlet, useNavigate } from "react-router-dom";
import {  useDispatch,  } from "react-redux";
import Header from "./header";
import Sidebar from "./sidebar";
import CustomerLayout from "../customerComponents/Layout"
import { useEffect, useState } from "react";
import { setAuthenticated } from "../actionCreators/google";

// function Adminpanel({ children }) {
  
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user);
//   const userLocalStorageToken = window.localStorage.getItem('NiceHotel');
//  console.log("userLocalStorageToken.....>",userLocalStorageToken)
  
//  useEffect(() => {
    
//     if(userLocalStorageToken === null){
//       console.log("UR CUSTOMER");
//       navigate("/")
//     }

//   },[ dispatch,user,navigate,userLocalStorageToken])
  
//   return userLocalStorageToken === null ? <CustomerLayout /> : children;

  // if (user.isAuthenticated) {
  //   return children;
  // }
  // else {
  //   return <CustomerLayout />
  // }
// }

function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLocalStorageToken = window.localStorage.getItem('NiceHotel');
//  console.log("userLocalStorageToken.....>",userLocalStorageToken)
  const [loading,setLoading] = useState(true)
 useEffect(() => {
    
    if(userLocalStorageToken === null){
      console.log("UR CUSTOMER");
      navigate("/")
    } 
     else {
        if(loading) {
          const userLocalStorageToken = window.localStorage.getItem('NiceHotel');
          dispatch(setAuthenticated(userLocalStorageToken));
          setLoading(false)
        }
      }
   

  },[ navigate,userLocalStorageToken,dispatch,loading])
  
  return userLocalStorageToken === null ? <CustomerLayout /> : (
    <>
      
      <Header />
      <Sidebar />
      <Outlet />
   
    </>
  );
}


export default Layout;