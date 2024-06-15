import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllAvailableRooms } from "../../actionCreators/rooms";
import { useEffect } from "react";
import { Button } from "antd";
import {  RESET_CHECK_AVAILABLE_ROOMS } from "../../actionTypes";
import { notification } from "antd";


export default function AfterRoomtypeSelected() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const roomTypeID = useSelector((state) => state.rooms.customerSelectedRoom)
    // console.log("roomTypeID.......>>>>>>", roomTypeID);
    const selectedDates = useSelector((state) => state.rooms.customerSelecteddates)
    // console.log("selectedDates.......>>>>>>", selectedDates);
    const checkTotalRooms = useSelector((state) => state.rooms.checkTotalRooms)
    // console.log("checkTotalRooms.......>>>>>>", checkTotalRooms);
    const checkAvailableRooms = useSelector((state) => state.rooms.checkAvailableRooms)
    // console.log("checkAvailableRooms.......>>>>>>", checkAvailableRooms);

    const numberOfAvailableBookings = checkTotalRooms - checkAvailableRooms;
    console.log("numberOfAvailableBookings   >", numberOfAvailableBookings);

    useEffect(() => {
        if (roomTypeID.length !== 0 && selectedDates.length !== 0) {

            dispatch(getAllAvailableRooms({ roomTypeID, selectedDates }));
        } else {
            notification.error({
                message: `Notification `,
                description: <h5>Please Enter The Date</h5>,
                placement: "bottomRight",
              });
            console.log("redirecting")
            navigate("/")
        }
      if(numberOfAvailableBookings > 0){
        navigate("/selectedRoomNumber")
        setTimeout(() => {
            dispatch({ type: RESET_CHECK_AVAILABLE_ROOMS});
          }, 2000);
        
      }
    }
        , [dispatch, roomTypeID, selectedDates, navigate,numberOfAvailableBookings
        ]);

    
    return (
        <>
            <div class="breadcrumb-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-text">
                                <h2>Our Rooms</h2>
                                <div class="bt-option">
                                    <Link to="/">Home</Link>
                                    <span>Rooms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="rooms-section spad">
                <div class="container">
                    <div class="row">

                    <div style={{ display: "flex", justifyContent: "center", alignContent: "center", }}>
                                <h2  
                                //   style={{ color: "#dfa974" }}
                                 > Rooms are <strong >FULL....!</strong>,      check Other Rooms</h2>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", }}>
                                 <Link to="/rooms"><Button >GO BACK</Button></Link>
                                 </div>
                    </div>
                </div>
            </section>
        </>
    )
}