import { useEffect, useState } from "react";
import {  getRoomTypes } from "../../actionCreators/rooms";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function RoomType() {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const rooms = useSelector((state) => state.rooms.roomTypes)
    // console.log("roomstypes", rooms);
    useEffect(() => {

        // setTimeout(() => {
            if (loading) {
                dispatch(getRoomTypes());
                setLoading(false);
            }
        // }, 100);
    },
     [
        loading,
        dispatch,
        setLoading,
    ]);

    return (
        <div>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Room Types Data Table</h1>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-8">
                            <select
                                id="pagesize"
                                style={{ marginRight: "10" }}

                            >
                                <option value="10" selected>
                                    Default: 10
                                </option>
                                <option value="5">5</option>
                            </select>{' '}
                            entries per page
                             
                              <Link to="/admin/rooms/addroomtype" >
                                 <button
                                    className="btn btn-primary col-3 "
                                    style={{ margin: "1vmin",marginLeft:"60vw" }}
                                >
                                Add Room Type
                                </button>
                                </Link>
                 


                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Room Types</h5>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "right",
                                            marginRight: "7vmin",
                                        }}
                                    >


                                    </div>

                                    <table className="table table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th width="20%" className="sort-table" id="sort_id">
                                                   TypeID
                                                </th>
                                                <th width="20%" className="sort-table" id="sort_name">
                                                    Room Name
                                                </th>
                                                <th
                                                    width="20%"
                                                    className="sort-table"
                                                    id="sort_room_type"
                                                >
                                                    Description
                                                </th>
                                                <th
                                                    width="20%"
                                                    className="sort-table"
                                                    id="sort_members"
                                                >
                                                    Price 
                                                </th>
                                                <th width="20%" className="sort-table" id="sort_date">
                                                    Capacity
                                                </th>
                                                

                                            </tr>
                                        </thead>
                                        <tbody id="data-rows">
                                            <tr>
                                                <td >&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                                
                                            </tr>
                                            {rooms.map((room) => (
                                                <tr key={room.TypeID}>
                                                    
                                                    <td>{room.TypeID}</td>
                                                    <td>{room.Name}</td>
                                                    <td>{room.Description}</td>
                                                    <td>{room.PricePerNight}</td>
                                                    <td>{room.Capacity}</td>
                                                    
                                                   
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >

                </div>
            </main>
        </div>
    );
}
