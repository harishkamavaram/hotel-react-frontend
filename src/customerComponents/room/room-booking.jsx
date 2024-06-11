import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "antd";
import {
    DatePicker,
    Form,
    InputNumber,
} from 'antd';
import {  createGuestBooking } from "../../actionCreators/booking";

export default function RoomBooking() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const rooms = useSelector((state) => state.rooms.customerSelectedRoom)
    console.log("rooms.......>>>>>>", rooms);
    const guest = useSelector((state) => state.guest.data)
    // console.log("guest...>", guest);
    // const roomsDetails = useSelector((state) => state.rooms.customerSelectedRoomDetails)
    // console.log("roomsDetails.......>>>>>>", roomsDetails);

    const onFinish = (e) => {
        // console.log(e);
        const booking = {e,rooms}
        console.log("booking",booking);
         dispatch(createGuestBooking(booking))
         
        setTimeout(() => {
        navigate("/invoice")
    }, 1000);
    }


    useEffect(() => {
        if (rooms.length !== 0) {
            // dispatch(getCustomerSelectedRooms(rooms));
        }
        else {
            // console.log("null >", rooms)
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
                        <Form
                            style={{
                                maxWidth: 600,
                            }}
                            onFinish={onFinish}
                        >
                            {/* <Form.Item
                                label="RoomNumber"
                                name="RoomNumber"
                                initialValue={rooms}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <InputNumber
                                    style={{
                                        width: '100%',
                                    }}
                                    disabled
                                />
                            </Form.Item> */}

                            <Form.Item
                                label="GuestID"
                                name="GuestID"
                                initialValue={guest}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <InputNumber
                                    style={{
                                        width: '100%',
                                    }}
                                    disabled
                                />
                            </Form.Item>
                            <Form.Item
                                label="CheckinDate"
                                name="CheckinDate"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>

                            <Form.Item
                                label="CheckOutDate"
                                name="CheckOutDate"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 6,
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
            </section>
        </>
    )
}