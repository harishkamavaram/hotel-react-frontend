import { Outlet } from "react-router-dom";
import CustomerHeader from "../customerComponents/Header";
import CustomerFooter from "../customerComponents/footer";


// function CustomerPanel({ children }) {

//  const navigate = useNavigate();
//   const userLocalStorageToken = window.localStorage.getItem('NiceHotel');

//   useEffect(() => {

//   if (userLocalStorageToken != null) {
//     console.log("UR ADMIN");
//     // navigate("/admin");
//   }

// },[navigate,userLocalStorageToken,children])

//   return userLocalStorageToken != null ? <Layout /> : children;
// }
export default function CustomerLayout() {
  // const userLocalStorageToken = window.localStorage.getItem('NiceHotel');
  // console.log(">",userLocalStorageToken);
  return (
    <>
      {/* <CustomerPanel> */}
        <CustomerHeader />
        <Outlet />
        <CustomerFooter />
      {/* </CustomerPanel> */}
    </>
  )
}