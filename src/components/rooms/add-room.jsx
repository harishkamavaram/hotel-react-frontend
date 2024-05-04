import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
} from 'antd';

export default function AddRoom() {

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
    const onFinish = (e) =>{
           console.log("formmm   >",e)
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
                            name="TypeID"
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
                            label="Room Type"
                            name="roomType"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input!',
                                },
                            ]}
                           
                        >
                            <Select 
                             options={[
                                {
                                  value: '101',
                                  label: 'Premium',
                                },
                                {
                                  value: '102',
                                  label: 'Double',
                                },
                                {
                                  value: '103',
                                  label: 'Single',
                                }
                              ]}
                              />
                        </Form.Item>
                        <Form.Item
                            label="Status"
                            name="Status"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input!',
                                },
                            ]}
                        >
                            <Select 
                             options={[
                                {
                                  value: 'Open',
                                  label: 'Open',
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
