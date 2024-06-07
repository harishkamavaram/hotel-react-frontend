import { useEffect, useState } from "react";
import { deleteRoom, findOneRoom, getAllRooms, getRoomTypes, updateRoom } from "../../actionCreators/rooms";
import { useDispatch, useSelector } from "react-redux";
// import { Button, Form, InputNumber, Select, Tag } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined, } from "@ant-design/icons"
import {  Tag } from "antd";

export default function Room() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const room = useSelector((state) => state.rooms)
  const rooms = room.data
  // console.log("rooms.rooms>>>>>>", rooms);
  // const oneRoomType = useSelector((state) => state.rooms.roomTypes)
  // console.log("oneRoomType",oneRoomType);
  const oneRoom = useSelector((state) => state.rooms.oneRoom)
  // console.log("oneRoom ... >", oneRoom);
  const [roomID, setRoomID] = useState("");
  const [roomType, setRoomType] = useState('');
  const [status, setStatues] = useState('')
  useEffect(() => {

    setTimeout(() => {
      if (loading) {
        dispatch(getAllRooms());
        dispatch(getRoomTypes())
        setLoading(false);
      }
    }, 100);
  }, [
    loading,
    dispatch,
    setLoading,
  ]);
  useEffect(() => {
    setRoomID(oneRoom.RoomNumber)
    setRoomType(oneRoom.Name)
    setStatues(oneRoom.Status)

  }, [oneRoom]);
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
                  style={{ margin: "1vmin", marginLeft: "60vw" }}
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
                  <h5 className="card-title">Rooms</h5>

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
                        <th width="14%" className="sort-table" id="sort_id">
                          Room No.
                        </th>
                        <th width="14%" className="sort-table" id="sort_name">
                          Room TypeID
                        </th>
                        <th
                          width="14%"
                          className="sort-table"
                          id="sort_room_type"
                        >
                          Room Type
                        </th>
                        <th
                          width="14%"
                          className="sort-table"
                          id="sort_members"
                        >
                          Total Members
                        </th>
                        <th width="14%" className="sort-table" id="sort_date">
                          Price
                        </th>
                        <th width="14%" className="sort-table" id="sort_date">
                          Status
                        </th>
                        <th width="14%" className="sort-table" id="sort_date">
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
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target={`#deleteEmployee-${room.RoomNumber}`}
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
                              data-bs-target={`#editEmployee-${room.RoomNumber}`}
                              onClick={(e) => {
                                dispatch(findOneRoom(room.RoomNumber));
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
                              id={`deleteEmployee-${room.RoomNumber}`}
                              tabIndex="-1"
                            >
                              <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">
                                      Delete Employee - {room.RoomNumber}
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
                                        dispatch(deleteRoom(room.RoomNumber));
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
                              id={`editEmployee-${room.RoomNumber}`}
                              tabIndex="-1"
                            >
                              <div className="modal-dialog modal-lg modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">
                                      Edit Employee - {room.RoomNumber}
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
                                      {/* {rooms.map((room) => (
                                            <Select.Option key={room.TypeID} value={room.TypeID}>
                                              {room.Name} */}
                                      {/* <div className="row mb-3">
                                        <label
                                          htmlFor="inputText"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Room Number
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="employee-name"
                                            value={roomID}

                                            onChange={(e) =>
                                              setRoomID(e.target.value)
                                            }
                                          />
                                        </div>




                                      </div> */}
                                      {/* <div className="row mb-3">
                                        <label
                                          htmlFor="inputText"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Room TypeID
                                        </label>
                                        <div className="col-sm-8">
                                          <select class="form-select" aria-label="Default select example"
                                           onChange={(e) =>
                                            //  console.log(e);
                                            setRoomType(e.target.value)
                                           
                                          }>
                                            
                                            <option selected>{roomType}</option>
                                            {oneRoomType.map((room) => (
                                              <option key={room.TypeID} value={room.TypeID}>
                                               
                                                {room.Name}
                                              </option>
                                               
                                            ))}
                                          </select>
                                        </div>




                                      </div> */}
                                      <div className="row mb-3">
                                        <label
                                          htmlFor="inputText"
                                          className="col-sm-4 col-form-label"
                                        >
                                          Room TypeID
                                        </label>
                                        <div className="col-sm-8">
                                          <select class="form-select" aria-label="Default select example"
                                          onChange={(e) =>
                                            //  console.log(e);
                                            setStatues(e.target.value)
                                           
                                          }>
                                             {/* <option  selected></option>  */}
                                             <option value="Booked" >Booked</option>
                                             <option value="Available">Available</option>
                                             
                                                
                                             
                                               
                                              
                                          </select>
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
                                          updateRoom(room.TypeID, {
                                            RoomNumber : roomID,
                                            roomType: roomType,
                                            status: status,
                                            
                                          })
                                        );
                                        setStatues("");
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
