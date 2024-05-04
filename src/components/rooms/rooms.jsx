import { useEffect, useState } from "react";
import { getAllRooms } from "../../actionCreators/rooms";
import { useDispatch, useSelector } from "react-redux";
import { Tag } from "antd";
import { Link } from "react-router-dom";


export default function Room() {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const rooms = useSelector((state) => state.rooms.data)
    console.log("rooms0>>>>>>", rooms);
    useEffect(() => {

        setTimeout(() => {
            if (loading) {
                dispatch(getAllRooms());
                setLoading(false);
            }
        }, 100);
    }, [
        loading,
        dispatch,
        setLoading,
    ]);

    return (
        <div>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Rooms Data Table</h1>
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
                             
                              <Link to="/admin/rooms/addroom" >
                                 <button
                                    className="btn btn-primary col-2 "
                                    style={{ margin: "1vmin",marginLeft:"60vw" }}
                                >
                                    Add Room
                                </button>
                                </Link>
                 


                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"> All Rooms</h5>

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
                                                    Room No.
                                                </th>
                                                <th width="20%" className="sort-table" id="sort_name">
                                                    Room TypeID
                                                </th>
                                                <th
                                                    width="20%"
                                                    className="sort-table"
                                                    id="sort_room_type"
                                                >
                                                    Room Type
                                                </th>
                                                <th
                                                    width="20%"
                                                    className="sort-table"
                                                    id="sort_members"
                                                >
                                                    Total Members
                                                </th>
                                                <th width="20%" className="sort-table" id="sort_date">
                                                    Price
                                                </th>
                                                <th width="20%" className="sort-table" id="sort_date">
                                                    Status
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
                                                <td>&nbsp;</td>
                                            </tr>
                                            {rooms.map((room) => (
                                                <tr key={room.RoomNumber}>
                                                    <td>{room.RoomNumber}</td>
                                                    <td>{room.TypeID}</td>
                                                    <td>{room.TypeName}</td>
                                                    <td>{room.Capacity}</td>
                                                    <td>{room.PricePerNight}</td>
                                                    <td>
                                                        {room.Status === "Available" ? (
                                                            <Tag color="#87d068">{room.Status}</Tag>
                                                        ) : (
                                                            <Tag color="#f50">{room.Status}</Tag>
                                                        )}
                                                    </td>
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
