import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Dashboard from "./components/dashboard";
import Login from "./componentsAll/login";
import Googlecallback from "./componentsAll/Googlecallback";
import ErrorPage from "./componentsAll/error-page";
import Profile from "./components/profile";
import Bookings from "./components/booking/bookings";
import Addbooking from "./components/booking/add-booking";
import Customers from "./components/customers";
import CustomerLayout from "./customerComponents/Layout";
import Customer from "./customerComponents/customer-page";
import Contactus from "./customerComponents/contact";
import Rooms from "./customerComponents/room/rooms";
import AboutUs from "./customerComponents/about-us";
import AllRoom from "./components/rooms/allRooms";
import Staff from "./components/staff";
import AddRoomType from "./components/rooms/add-roomType";
import Room from "./components/rooms/rooms";
import AddRoom from "./components/rooms/add-room";
import RoomType from "./components/rooms/roomType";
import RoomTypeBooking from "./customerComponents/room/room-type-selection";
import GuestRegistration from "./customerComponents/room/room-number-selction";
import RoomBooking from "./customerComponents/room/room-booking";
import Invioce from "./componentsAll/invioce-customer";




function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<Customer />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="selectedRoomtype" element={<RoomTypeBooking />} />
          <Route path="selectedRoomNumber" element={<GuestRegistration />} />
          <Route path="roomBooking" element={<RoomBooking />} />
          <Route path="aboutus" element={<AboutUs />} />
          
          
        </Route>

      
        <Route path="/admin/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="components/profile" element={<Profile />} />
          <Route path="bookings/allbookings" element={<Bookings />} />
          <Route path="bookings/addbookings" element={<Addbooking />} />
          <Route path="customers/allcustomers" element={<Customers />} />
          <Route path="rooms/allrooms" element={<AllRoom/>} />
          <Route path="rooms/room" element={<Room />} />
          <Route path="rooms/addroom" element={<AddRoom />} />
          <Route path="rooms/roomType" element={<RoomType />} />
          <Route path="rooms/addroomtype" element={<AddRoomType />} />

          <Route path="staff/allstaff" element={<Staff />} />
        </Route>

        
        <Route path="invoice" element={<Invioce />} />
        <Route path="users/login" element={<Login />} />
        <Route path="users/googlecb" element={<Googlecallback />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
