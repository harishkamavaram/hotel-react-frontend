import React from "react";
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
} from 'antd';
import { useDispatch } from "react-redux";
import { createBooking } from "../../actionCreators/booking";

export default function Addbooking() {

   const  dispatch = useDispatch();
    const { RangePicker } = DatePicker;
   
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
                        variant="filled"
                        style={{
                            maxWidth: 600,
                        }}
                        onFinish={(e) => {
                            console.log(e.CheckinDate);
                            dispatch(createBooking(e))
                        }}
                    >
                        <Form.Item
                            label="GuestID"
                            name="GuestID"
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
                            }}/>
                            
                        </Form.Item>

                        <Form.Item
                            label="RoomNumber"
                            name="RoomNumber"
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
                            />
                        </Form.Item>

                        <Form.Item
                            label="TextArea"
                            name="TextArea"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input!',
                                },
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>



                        {/* <Form.Item
                        label="Select"
                        name="Select"
                        rules={[
                            {
                                required: true,
                                message: 'Please input!',
                            },
                        ]}
                    >
                        <Select />
                    </Form.Item> */}

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
                <RangePicker
                    // showTime
                   
                />
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