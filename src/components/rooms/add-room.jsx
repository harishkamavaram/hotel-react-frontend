import {
    Button,
    Form,
    InputNumber,
    Select,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createRoom, getAllRooms, getRoomTypes } from '../../actionCreators/rooms';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function AddRoom() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const rooms = useSelector((state) => state.rooms.roomTypes)
    console.log("rooms0>>>>>>", rooms);
    useEffect(() => {

        setTimeout(() => {
            if (loading) {
                dispatch(getRoomTypes());
                setLoading(false);
            }
        }, 100);
    }, [
        loading,
        dispatch,
        setLoading,
    ]);

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
    const onFinish = (e) => {
        //    console.log("formmm   >",e)
        dispatch(createRoom(e))
        navigate("/admin/rooms/room")
    }
    return (
        <div>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Add Rooms </h1>
                </div>
                <section className="section">
                    <Form
                        {...formItemLayout}
                        variant="filled"
                        style={{
                            maxWidth: 600,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Room number"
                            name="RoomNumber"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Room number!',
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
                            label="Room Type"
                            name="TypeID"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select a room type!',
                                },
                            ]}
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
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Select Status!',
                                },
                            ]}
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
