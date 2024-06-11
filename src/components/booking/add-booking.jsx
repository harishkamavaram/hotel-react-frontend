import React, { useEffect, useState } from "react";
import {
    Button,
    DatePicker,
    Form,
    InputNumber,
    Select,
} from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { createBooking, masterBooking } from "../../actionCreators/booking";
import { useNavigate } from "react-router-dom";
import { getAvailableRooms } from "../../actionCreators/rooms";

export default function Addbooking() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const rooms = useSelector((state) => state.rooms.availableRooms);
    const guest = useSelector((state) => state.guest.data);

    useEffect(() => {
        if (loading) {
            dispatch(getAvailableRooms());
            setLoading(false);
        }
    }, [loading, dispatch]);

    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const onFinish = (e) => {
        const [roomNumber, typeID] = e.RoomNumber.split('|');
        const formattedData = {
            ...e,
            RoomNumber: roomNumber,
            TypeID: typeID,
            CheckinDate: formatDate(e.CheckinDate),
            CheckOutDate: formatDate(e.CheckOutDate),
        };
        // console.log(formattedData);
        dispatch(createBooking(formattedData));
        dispatch(masterBooking(formattedData));
        navigate("/admin/bookings/allbookings");
    };

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 6,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 14,
            },
        },
    };

    return (
        <div>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Add Booking </h1>
                </div>
                <section className="section">
                    <Form
                        {...formItemLayout}
                        style={{ maxWidth: 600 }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="GuestID"
                            name="GuestID"
                            initialValue={guest}
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item
                            label="RoomNumber"
                            name="RoomNumber"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <Select>
                                {rooms.map((room) => (
                                    <Select.Option key={room.RoomNumber} value={`${room.RoomNumber}|${room.TypeID}`}>
                                        {room.RoomNumber}{"   "}{room.TypeName}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="CheckinDate"
                            name="CheckinDate"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <DatePicker />
                        </Form.Item>

                        <Form.Item
                            label="CheckOutDate"
                            name="CheckOutDate"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <DatePicker />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{ offset: 6, span: 16 }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </main>
        </div>
    );
}
