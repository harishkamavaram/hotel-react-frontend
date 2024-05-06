import { useEffect, useState } from "react";
import { deleteRoom, getAllRooms } from "../../actionCreators/rooms";
import { useDispatch, useSelector } from "react-redux";
// import { Button, Form, InputNumber, Select, Tag } from "antd";
import { Link } from "react-router-dom";
import {DeleteOutlined,  } from "@ant-design/icons"
import { Tag } from "antd";

export default function Room() {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const rooms = useSelector((state) => state.rooms.data)
    // console.log("rooms0>>>>>>", rooms);
    // const oneRoom = useSelector((state) => state.rooms.oneRoom)
    //   console.log("oneRoom ... >",oneRoom);
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
                            {/* <button
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
                            </button> */}
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
                              {/* <div className="modal-dialog modal-lg modal-dialog-centered">
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
                                  <Form
                       
                        variant="filled"
                        style={{
                            maxWidth: 600,
                        }}
                        // onFinish={co}
                    >
                        <Form.Item
                            label="Room number"
                            name="RoomNumber"
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please Enter Room number!',
                            //     },
                            // ]}
                        >
                            <InputNumber    
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Room Type"
                            name="TypeID"
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please select a room type!',
                            //     },
                            // ]}
                        >
                            <Select>
                                {rooms.map((room) => (
                                    <Select.Option key={room.TypeID} value={room.TypeID}>
                                        {room.Name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Status"
                            name="Status"
                            // rules={[
                            //     {
                            //         required: true,
                            //         message: 'Please Select Status!',
                            //     },
                            // ]}
                        >
                            <Select
                                options={[
                                    {
                                        value: 'Available',
                                        label: 'Available',
                                    },
                                    {
                                        value: 'Booked',
                                        label: 'Booked',
                                    }
                                ]}
                            />
                        </Form.Item>



                        <Form.Item
                            wrapperCol={{
                                offset: 17,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
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
                                    //   onClick={() => {
                                    //     dispatch(
                                    //         updateRoomType(room.TypeID, {
                                    //         typeID : typeID,
                                    //         name: name,
                                    //         description: description,
                                    //         pricePerNight : pricePerNight,
                                    //         capacity : capacity
                                    //       })
                                    //     );
                                    //     // setName("");
                                    //     // setDepartment("");

                                    //     setLoading(true);
                                    //   }}
                                    >
                                      Save changes
                                    </button>
                                  </div>
                                </div>
                              </div> */}
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
