import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRoomTypes } from "../../actionCreators/rooms";
import { useEffect } from "react";
import { GET_SELECTED_ROOM } from "../../actionTypes";

 export default function Rooms(){
    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms.roomTypes)
    // console.log("rooms.......>>>>>>", rooms);
    useEffect(() => {

                dispatch(getRoomTypes()); 
                
            }
    , [
        
        dispatch,
    ]);
    return(
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
            {/* {rooms.map((room2)=>
                <div class="col-lg-4 col-md-6">
                    <div class="room-item">
                        <img src="img/room/room-1.jpg" alt=""/>
                        <div class="hr-text">
                                        <h3>{room2.Name} Room</h3>
                                        <h2>₹ {room2.PricePerNight}<span>/Pernight</span></h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="r-o">Size:</td>
                                                    <td>30 ft</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Capacity:</td>
                                                    <td>Max persion {room2.Capacity}</td>
                                                </tr>
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
                                        {/* <Link to="#" class="primary-btn">More Details</Link> */}
                                    {/* </div>
                    </div>
                </div>)}  */}
               {rooms.map((room2)=>
                  <div class="col-lg-3 col-md-6">
                    <div class="room-item">
                        <img src="img/room/room-3.jpg" alt=""/>
                        <div class="ri-text">
                            <h4>{room2.Name} Room</h4>
                            <h3>₹ {room2.PricePerNight}<span>/Pernight</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td class="r-o">Capacity:</td>
                                        <td>Max <strong>{room2.Capacity}</strong> </td>
                                    </tr>
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
                            <Link to="/selectedRoomtype" class="primary-btn" 
                            onClick={(e)=>{
                                // console.log(room2.TypeID)
                                dispatch({ type: GET_SELECTED_ROOM, payload: room2.TypeID});
                            }}
                            >Select Room Type</Link>
                         </div>
                    </div>
                </div>   )}
                {/* <div class="col-lg-4 col-md-6">
                    <div class="room-item">
                        <img src="img/room/room-4.jpg" alt=""/>
                        <div class="ri-text">
                            <h4>Single Room</h4>
                            <h3>₹ 1999<span>/Pernight</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td class="r-o">Capacity:</td>
                                        <td>Max persion 1</td>
                                    </tr>
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
                            {/* <Link to="#" class="primary-btn">More Details</Link> */}
                        {/* </div>
                    </div>
                </div>  */}
                {/* <div class="col-lg-4 col-md-6">
                    <div class="room-item">
                        <img src="img/room/room-5.jpg" alt=""/>
                        <div class="ri-text">
                            <h4>Room With View</h4>
                            <h3>159$<span>/Pernight</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td class="r-o">Capacity:</td>
                                        <td>Max persion 1</td>
                                    </tr>
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
                            <Link to="#" class="primary-btn">More Details</Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="room-item">
                        <img src="img/room/room-6.jpg" alt=""/>
                        <div class="ri-text">
                            <h4>Small View</h4>
                            <h3>159$<span>/Pernight</span></h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="r-o">Size:</td>
                                        <td>30 ft</td>
                                    </tr>
                                    <tr>
                                        <td class="r-o">Capacity:</td>
                                        <td>Max persion 2</td>
                                    </tr>
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
                            <Link to="#" class="primary-btn">More Details</Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="room-pagination">
                        <Link to="#">1</Link>
                        <Link to="#">2</Link>
                        <Link to="#">Next <i class="fa fa-long-arrow-right"></i></Link>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
        </>
    )
 }