import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCustomerSelectedRooms } from "../../actionCreators/rooms";
import { useEffect } from "react";
import { Button, Flex } from "antd";
import {
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
} from 'antd';
import { createGuest } from "../../actionCreators/guest";

export default function GuestRegistration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { RangePicker } = DatePicker;
    const rooms = useSelector((state) => state.rooms.customerSelectedRoom)
    console.log("rooms.......>>>>>>", rooms);
    // const roomsDetails = useSelector((state) => state.rooms.customerSelectedRoomDetails)
    // console.log("roomsDetails.......>>>>>>", roomsDetails);
  

    useEffect(() => {
        if (rooms.length !== 0) {
            dispatch(getCustomerSelectedRooms(rooms));
        }
        else {
            console.log("null >", rooms)
            navigate("/rooms")
        }
    }, [dispatch, rooms, navigate]);

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
                                    <Link to="/selectedRoomtype">Room Available</Link>
                                    <span>Room Booking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="rooms-section spad">
                <div class="container">
                    <div class="row">
                        <div style={{ display: "flex", justifyContent: "center", width: "100vw" }}>
                            <Form
                                // {...formItemLayout}
                                // variant="filled"
                                style={{
                                    maxWidth: 600,
                                }}
                                onFinish={(e) => {
                                    console.log(e);
                                    dispatch(createGuest(e));
                                    setTimeout(() => {
                                        navigate("/roomBooking");
                                    }, 200);
                                    
                                }}
                            >
                                <Form.Item
                                    label="First Name"
                                    name="firstName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please your First Name !',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Last Name"
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your Last Name!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Date Of Birth"
                                    name="DOB"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your Date Of Birth !',
                                        },
                                    ]}
                                >
                                    <DatePicker />
                                </Form.Item>

                                <Form.Item
                                    label="Address"
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your Address!',
                                        },
                                    ]}
                                >
                                    <Input.TextArea />
                                </Form.Item>

                                <Form.Item
                                    label="Phone No."
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your Phone Number!',
                                        },
                                    ]}
                                >
                                    <InputNumber
                                        style={{
                                            width: '100%',
                                        }}
                                    />
                                </Form.Item>


                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please enter your E-mail!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>





                                <Form.Item
                                    wrapperCol={{
                                        offset: 20,
                                        span: 16,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}