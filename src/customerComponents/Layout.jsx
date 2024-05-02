import { Outlet } from "react-router-dom";
import CustomerHeader from "../customerComponents/Header";
import CustomerFooter from "../customerComponents/footer";


export default function CustomerLayout(){
  return(
    <>
       <CustomerHeader />
        <Outlet />
        <CustomerFooter />
    </>
  )
}