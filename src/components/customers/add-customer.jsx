import React, { useEffect, useState } from "react";
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
} from 'antd';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  getAvailableRooms } from "../../actionCreators/rooms";
import { createGuest } from "../../actionCreators/guest";

export default function Addcustomer() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    // const rooms = useSelector((state) => state.rooms.availableRooms)
    // console.log("rooms0>>>>>>", rooms);  
   
    useEffect(() => {

        setTimeout(() => {
            if (loading) {
                dispatch(getAvailableRooms());
            
                setLoading(false);
            }
        }, 100);
    }, [
        loading,
        dispatch,
        setLoading,
    ]);
    // const { RangePicker } = DatePicker;
    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
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
                    <h1>Add Customer </h1>
                </div>
                <section className="section">
                <Form
                               {...formItemLayout}
                                // variant="filled"
                                style={{
                                    maxWidth: 600,
                                }}
                                onFinish={(event) => {
                                    // console.log(event);
                                    const e = {
                                        ...event,
                                        DOB: formatDate(event.DOB),

                                    };
                                    // console.log(e);
                                    dispatch(createGuest(e));
                                    setTimeout(() => {
                                        navigate("/admin/bookings/addbookings");
                                    }, 1000);

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
        </div >
    )
}