import { Outlet, useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import Header from "./header";
import Sidebar from "./sidebar";
import CustomerLayout from "../customerComponents/Layout"
import { useEffect, useState } from "react";

function Adminpanel({ children }) {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const userLocalStorageToken = window.localStorage.getItem('NiceHotel');

  useEffect(() => {
    
    if(userLocalStorageToken === null){
      console.log("UR CUSTOMER");
      navigate("/")
    }

  },[ dispatch,user,navigate,userLocalStorageToken,children])
  
  return userLocalStorageToken === null ? <CustomerLayout /> : children;

  // if (user.isAuthenticated) {
  //   return children;
  // }
  // else {
  //   return <CustomerLayout />
  // }
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