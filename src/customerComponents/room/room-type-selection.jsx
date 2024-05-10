import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCustomerSelectedRooms } from "../../actionCreators/rooms";
import { useEffect } from "react";
import { Button } from "antd";
import { GET_SELECTED_ROOM } from "../../actionTypes";

export default function RoomTypeBooking() {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const rooms = useSelector((state) => state.rooms.customerSelectedRoom)
    // console.log("rooms.......>>>>>>", rooms);
    const roomsDetails = useSelector((state) => state.rooms.customerSelectedRoomDetails)
    // console.log("roomsDetails.......>>>>>>", roomsDetails);


    // if (rooms === null) {
    //     console.log(rooms)
    //     return <Rooms />
    // }else{


    useEffect(() => {
        if (rooms.length !== 0) {
            dispatch(getCustomerSelectedRooms(rooms));
        }
        else {
            // console.log("null >",rooms)
            navigate("/rooms")
        }
    }, [dispatch, rooms,navigate]);

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
                                    <Link to="/rooms">Rooms</Link>
                                    <span>Room Available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="rooms-section spad">
                <div class="container">
                    <div class="row">
                        {roomsDetails.length === 0 ? (
                            <>
                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", }}>
                                <h2 style={{ color: "#dfa974" }}> Rooms are <strong>FULL....!</strong>,      check Other Rooms</h2>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", }}>
                                 <Link to="/rooms" ><Button>GO BACK</Button></Link>
                                 </div>
                            </>
                        ) : (
                            roomsDetails.map((room2) => (
                                <div class="col-lg-6 col-md-6">
                                    <div class="room-item">
                                        <img src="img/room/room-3.jpg" alt="" />
                                        <div class="ri-text">
                                            <h4>Room No.{room2.RoomNumber} </h4>
                                            {/* <h3>₹ {room2.PricePerNight}<span>/Pernight</span></h3> */}
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="r-o">Size:</td>
                                                        <td>30 ft</td>
                                                    </tr>
                                                    {/* <tr>
                                <td class="r-o">Capacity:</td>
                                <td>Max persion {room2.Capacity}</td>
                            </tr> */}
                                                    <tr>
                                                        <td class="r-o">Bed:</td>
                                                        <td>King Beds</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="r-o">Services:</td>
                                                        <td>Wifi, Television, Bathroom,...</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <Link to="/selectedRoomNumber" class="primary-btn"
                                                onClick={(e) => {
                                                    // console.log("book room no.",room2.RoomNumber)
                                                    dispatch({ type: GET_SELECTED_ROOM, payload: room2.RoomNumber});
                                                }}
                                            >Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}