import { useEffect, useState } from "react";
import {  deleteRoomType, findOneRoomType, getRoomTypes, updateRoomType } from "../../actionCreators/rooms";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";


export default function RoomType() {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const rooms = useSelector((state) => state.rooms.roomTypes)
    // console.log("roomstypes", rooms);
    const oneRoomType = useSelector((state) => state.rooms.oneRoomType)
//   console.log("oneRoomType ... >",oneRoomType);
  const [typeID,setTypeID] = useState("");
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [pricePerNight,setPricePerNight] = useState("");
  const [capacity,setCapacity] = useState("");
    useEffect(() => {

        setTimeout(() => {
            if (loading) {
                dispatch(getRoomTypes());
                setLoading(false);
            }
        }, 100);
    },
     [
        loading,
        dispatch,
        setLoading,
    ]);
    useEffect(() => {
        setTypeID(oneRoomType.TypeID)
        setName(oneRoomType.Name)
        setDescription(oneRoomType.Description)
        setPricePerNight(oneRoomType.PricePerNight)
        setCapacity(oneRoomType.Capacity)
      }, [oneRoomType]);

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
                                                <th width="16.66%" className="sort-table" id="sort_id">
                                                   TypeID
                                                </th>
                                                <th width="16.66%" className="sort-table" id="sort_name">
                                                    Room Name
                                                </th>
                                                <th
                                                    width="16.66%"
                                                    className="sort-table"
                                                    id="sort_room_type"
                                                >
                                                    Description
                                                </th>
                                                <th
                                                    width="16.66%"
                                                    className="sort-table"
                                                    id="sort_members"
                                                >
                                                    Price 
                                                </th>
                                                <th width="16.66%" className="sort-table" id="sort_date">
                                                    Capacity
                                                </th>
                                                <th width="16.66%" className="sort-table" id="sort_date">
                                                    Actions
                                                </th>
                                                

                                            </tr>
                                        </thead>
                                        <tbody id="data-rows">
                                            <tr>
                                                <td >&nbsp;</td>
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
                                                    <td>
                                                    <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target={`#deleteEmployee-${room.TypeID}`}
                              style={{
                                margin: "0.5vmin",
                                // width: "4.2vmin",
                                // paddingLeft: "1vmin",
                              }}
                            >
                             <DeleteOutlined />
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target={`#editEmployee-${room.TypeID}`}
                              onClick={(e) => {
                                dispatch(findOneRoomType(room.TypeID));
                              }}
                              style={{
                                margin: "0.5vmin",
                                // width: "4.2vmin",
                                // paddingLeft: "1vmin",
                              }}
                            >
                              <EditOutlined />
                            </button>
                            <div
                              className="modal fade"
                              id={`deleteEmployee-${room.TypeID}`}
                              tabIndex="-1"
                            >
                              <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">
                                      Delete Employee - {room.TypeID}
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <form>
                                      <p>
                                        <h2>Confirm to delete</h2>
                                      </p>
                                    </form>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary "
                                      data-bs-dismiss="modal"
                                      onClick={() => {
                                        // if (numberOfEmployees.itemCount < 12) {
                                        // //   setCurrentPage(1);
                                        // //   setLoading(true);
                                        //   // console.log('less than 10');
                                        // }
                                        dispatch(deleteRoomType(room.TypeID));
                                        setLoading(true);
                                        // console.log('done');
                                        // console.log(numberOfEmployees.itemCount)
                                      }}
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="modal fade"
                              id={`editEmployee-${room.TypeID}`}
                              tabIndex="-1"
                            >
                              <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">
                                      Edit Employee - {room.Name}
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <form>

                                      {/* <div className="row mb-3">
                                        <label
                                          htmlFor="inputText"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Room TypeID
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="employee-name"
                                            value={typeID}
                                           
                                            onChange={(e) =>
                                              setTypeID(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div> */}
                                      <div className="row mb-3">
                                        <label
                                          htmlFor="inputText"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Room Name
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="employee-name"
                                            value={name}
                                            onChange={(e) =>
                                              setName(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          htmlFor="inputText"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Description
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="employee-name"
                                            value={description}
                                            onChange={(e) =>
                                              setDescription(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="row mb-3">
                                        <label
                                          htmlFor="inputText"
                                          className="col-sm-4 col-form-label"
                                        >
                                         Price
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="employee-name"
                                            value={pricePerNight}
                                            onChange={(e) =>
                                              setPricePerNight(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="row mb-3">
                                        <label
                                          htmlFor="inputText"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Capacity
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="employee-department"
                                            value={capacity}
                                            onChange={(e) =>
                                              setCapacity(e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-dismiss="modal"
                                      onClick={() => {
                                        dispatch(
                                            updateRoomType(room.TypeID, {
                                            typeID : typeID,
                                            name: name,
                                            description: description,
                                            pricePerNight : pricePerNight,
                                            capacity : capacity
                                          })
                                        );
                                        // setName("");
                                        // setDepartment("");

                                        setLoading(true);
                                      }}
                                    >
                                      Save changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
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
