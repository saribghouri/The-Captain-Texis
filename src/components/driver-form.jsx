"use client"
import React from 'react';
import { Form, Input, Button, Radio, Select } from 'antd';

const { Option } = Select;

const TaxiForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    return (
        <div className="min-h-screen  flex items-center  justify-center mt-[50px]">
            <div className="bg-blue-50 px-18 rounded-lg  shadow-md w-[75%] ">
                <div className='flex items-center justify-center'>

                    <h1 className="text-[45px] font-semibold w-[86%] text-center text-black mb-4 mt-[30px]">
                        Join thousands of drivers across Australia using our smart, app-based platform to earn more.
                    </h1>
                </div>
                <Form
                    form={form}
                    name="taxiForm"
                    onFinish={onFinish}
                    layout="vertical"
                    className=" !mt-[70px]"
                >
                    <div className="flex gap-4">
                        <Form.Item className='!w-[50%] '
                            name="firstName"
                            label={<p className='text-[22px] texxxx'>First name</p>}

                            rules={[{ message: 'Please enter your first name' }]}
                        >
                            <Input className='!text-[16px]' placeholder="Enter Your First Name" />
                        </Form.Item>
                        <Form.Item className='!w-[50%]'
                            name="lastName"
                            label={<p className='text-[22px] texxxx'>Last name</p>}

                            rules={[{ message: 'Please enter your last name' }]}
                        >
                            <Input className='!text-[16px]' placeholder="Enter Your Last Name" />
                        </Form.Item>
                    </div>
                    <Form.Item
                        name="email"
                        label={<p className='text-[22px] texxxx'>Email</p>}

                        rules={[{ type: 'email', message: 'Please enter a valid email' }]}
                    >
                        <Input className='!text-[16px]' placeholder="Enter Your Email" />
                    </Form.Item>
                    <div className="flex gap-4">
                        <Form.Item className='!w-[50%]'
                            name="phone"
                            label={<p className='text-[22px] texxxx'>Phone number</p>}

                            rules={[{ message: 'Please enter your phone number' }]}
                        >
                            <Input className='!text-[16px]' placeholder="Enter Your Phone Number" />
                        </Form.Item>
                        <Form.Item className='!w-[50%]'
                            name="city"
                            label={<p className='text-[22px] texxxx'>City</p>}
                            rules={[{ message: 'Please enter your city' }]}
                        >
                            <Input className='!text-[16px]' placeholder="Enter Your City" />
                        </Form.Item>
                    </div>
                    <Form.Item className='!w-[50%]'
                        name="license"
                        label={<p className='text-[22px] texxxx'>Do you have a current Taxi Licence?</p>}


                        rules={[{ message: 'Please select an option' }]}
                    >
                        <Radio.Group>
                            <Radio value="yes">Yes</Radio>
                            <Radio value="no">No</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="driveLocation"
                        label={
                            <p className='text-[20px] texxxx'>
                                Where in Australia do you intend to drive a taxi?
                            </p>
                        }
                        rules={[{  message: 'Please select a location' }]}
                    >
                        <Select
                            placeholder="Please Select"
                        >
                            <Option  className='!text-[16px]' value="sydney">Sydney</Option>
                            <Option className='!text-[16px]' value="melbourne">Melbourne</Option>
                            <Option className='!text-[16px]' value="brisbane">Brisbane</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="referral"
                        label={<p className='text-[20px] texxxx'>Were you referred by a The Captain Taxi Driver?</p>}


                        rules={[{ message: 'Please select an option' }]}
                    >
                        <Radio.Group>
                            <Radio value="yes">Yes</Radio>
                            <Radio value="no">No</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="help"
                        label={<p className='text-[20px] texxxx'>Can we help you with anything else?</p>}

                    >
                        <Input.TextArea placeholder="Enter Here" />
                    </Form.Item>
                    <Form.Item>
                        <Button className='!py-5 !mt-[20px] !rounded-[8px]'
                            type="primary"
                            htmlType="submit"
                            block
                            style={{ backgroundColor: '#4d2d7c', borderColor: '#4b0082', fontSize:'22px' }}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default TaxiForm;