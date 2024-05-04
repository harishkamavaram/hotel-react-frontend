import {
    Button,
    Form,
    Input,
    InputNumber,

} from 'antd';
import { createRoomType } from '../../actionCreators/rooms';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AddRoomType() {

   const dispatch = useDispatch();
   const navigate = useNavigate();
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
                    <h1>Add RoomType </h1>
                </div>
                <section className="section">
                    <Form
                        {...formItemLayout}
                        variant="filled"
                        style={{
                            maxWidth: 600,
                        }}
                        onFinish={(e)=>{
                            console.log(e);
                            dispatch(createRoomType(e));
                            navigate("/admin/rooms/roomtype") 
                        }}
                    >
                        <Form.Item
                            label="TypeID"
                            name="TypeID"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter TypeID!',
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
                            label="Name"
                            name="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>



                        <Form.Item
                            label="Description"
                            name="Description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Description!',
                                },
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>

                        <Form.Item
                            label="Price"
                            name="Price"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Price!',
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
                            label="Capacity"
                            name="Capacity"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Capacity!',
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
