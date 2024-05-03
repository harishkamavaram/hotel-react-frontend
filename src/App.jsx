import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Googlecallback from "./components/Googlecallback";
import ErrorPage from "./components/error-page";
import Profile from "./components/profile";
import Bookings from "./components/bookings";
import Addbooking from "./components/add-booking";
import Customers from "./components/customers";
import CustomerLayout from "./customerComponents/Layout";
import Customer from "./customerComponents/customer-page";
import Contactus from "./customerComponents/contact";
import Rooms from "./customerComponents/rooms";
import AboutUs from "./customerComponents/about-us";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<Customer />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>

      
        <Route path="/admin/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="components/profile" element={<Profile />} />
          <Route path="bookings/allbookings" element={<Bookings />} />
          <Route path="bookings/addbookings" element={<Addbooking />} />
          <Route path="customers/allcustomers" element={<Customers />} />
        </Route>

        

        <Route path="users/login" element={<Login />} />
        <Route path="users/googlecb" element={<Googlecallback />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
