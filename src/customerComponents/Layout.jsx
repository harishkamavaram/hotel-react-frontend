import { Outlet, useNavigate } from "react-router-dom";
import CustomerHeader from "../customerComponents/Header";
import CustomerFooter from "../customerComponents/footer";
import { Layout } from "antd";
import { useEffect } from "react";

function CustomerPanel({ children }) {

 const navigate = useNavigate();
  const userLocalStorageToken = window.localStorage.getItem('NiceHotel');

  useEffect(() => {

  if (userLocalStorageToken != null) {
    console.log("UR ADMIN");
    navigate("/admin");
  }

},[navigate,userLocalStorageToken,children])

  return userLocalStorageToken != null ? <Layout /> : children;
}
export default function CustomerLayout() {
  return (
    <>
      <CustomerPanel>
        <CustomerHeader />
        <Outlet />
        <CustomerFooter />
      </CustomerPanel>
    </>
  )
}