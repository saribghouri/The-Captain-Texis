"use client"
import { Form, Input, Button, Radio, Select, Row, Col } from "antd"

const { Option } = Select
const { TextArea } = Input

const TaxiForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log("Form values:", values)
  }

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-blue-50 rounded-lg shadow-md w-full xl:max-w-[74.5%]">
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center text-black mb-4 sm:mb-6 lg:mb-8 mt-6 sm:mt-8 lg:mt-12 leading-tight px-2">
            Join thousands of drivers across Australia using our smart, app-based platform to earn more.
          </h1>
        </div>

        <div className="px-4 sm:px-6 lg:px-12 pb-6 sm:pb-8 lg:pb-12">
          <Form
            form={form}
            name="taxiForm"
            onFinish={onFinish}
            layout="vertical"
            className="mt-4 sm:mt-6 lg:mt-8"
            size="large"
          >
            {/* Name Fields */}
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  name="firstName"
                  label={<span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium">First name</span>}
                  rules={[{ required: true, message: "Please enter your first name" }]}
                >
                  <Input
                    className="text-sm sm:text-base lg:text-lg"
                    placeholder="Enter Your First Name"
                    style={{ height: "48px", fontSize: "16px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  name="lastName"
                  label={<span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium">Last name</span>}
                  rules={[{ required: true, message: "Please enter your last name" }]}
                >
                  <Input
                    className="text-sm sm:text-base lg:text-lg"
                    placeholder="Enter Your Last Name"
                    style={{ height: "48px", fontSize: "16px" }}
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Email Field */}
            <Form.Item
              name="email"
              label={<span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium">Email</span>}
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                className="text-sm sm:text-base lg:text-lg"
                placeholder="Enter Your Email"
                style={{ height: "48px", fontSize: "16px" }}
              />
            </Form.Item>

            {/* Phone and City Fields */}
            <Row gutter={[16, 0]}>
              <Col xs={24} md={12}>
                <Form.Item
                  name="phone"
                  label={<span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium">Phone number</span>}
                  rules={[{ required: true, message: "Please enter your phone number" }]}
                >
                  <Input
                    className="text-sm sm:text-base lg:text-lg"
                    placeholder="Enter Your Phone Number"
                    style={{ height: "48px", fontSize: "16px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  name="city"
                  label={<span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium">City</span>}
                  rules={[{ required: true, message: "Please enter your city" }]}
                >
                  <Input
                    className="text-sm sm:text-base lg:text-lg"
                    placeholder="Enter Your City"
                    style={{ height: "48px", fontSize: "16px" }}
                  />
                </Form.Item>
              </Col>
            </Row>

            {/* Taxi License Question */}
            <Form.Item
              name="license"
              label={
                <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium">
                  Do you have a current Taxi Licence?
                </span>
              }
              rules={[{ required: true, message: "Please select an option" }]}
            >
              <Radio.Group className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Radio value="yes" className="text-sm sm:text-base lg:text-lg">
                  Yes
                </Radio>
                <Radio value="no" className="text-sm sm:text-base lg:text-lg">
                  No
                </Radio>
              </Radio.Group>
            </Form.Item>

            {/* Drive Location */}
            <Form.Item
              name="driveLocation"
              label={
                <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium">
                  Where in Australia do you intend to drive a taxi?
                </span>
              }
              rules={[{ required: true, message: "Please select a location" }]}
            >
              <Select
                placeholder="Please Select"
                style={{ height: "48px" }}
                className="text-sm sm:text-base lg:text-lg"
              >
                <Option value="sydney" className="text-sm sm:text-base lg:text-lg">
                  Sydney
                </Option>
                <Option value="melbourne" className="text-sm sm:text-base lg:text-lg">
                  Melbourne
                </Option>
                <Option value="brisbane" className="text-sm sm:text-base lg:text-lg">
                  Brisbane
                </Option>
                <Option value="perth" className="text-sm sm:text-base lg:text-lg">
                  Perth
                </Option>
                <Option value="adelaide" className="text-sm sm:text-base lg:text-lg">
                  Adelaide
                </Option>
                <Option value="darwin" className="text-sm sm:text-base lg:text-lg">
                  Darwin
                </Option>
                <Option value="hobart" className="text-sm sm:text-base lg:text-lg">
                  Hobart
                </Option>
                <Option value="canberra" className="text-sm sm:text-base lg:text-lg">
                  Canberra
                </Option>
              </Select>
            </Form.Item>

            {/* Referral Question */}
            <Form.Item
              name="referral"
              label={
                <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium">
                  Were you referred by a The Captain Taxi Driver?
                </span>
              }
              rules={[{ required: true, message: "Please select an option" }]}
            >
              <Radio.Group className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Radio value="yes" className="text-sm sm:text-base lg:text-lg">
                  Yes
                </Radio>
                <Radio value="no" className="text-sm sm:text-base lg:text-lg">
                  No
                </Radio>
              </Radio.Group>
            </Form.Item>

            {/* Additional Help */}
            <Form.Item
              name="help"
              label={
                <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium">
                  Can we help you with anything else?
                </span>
              }
            >
              <TextArea
                placeholder="Enter Here"
                rows={4}
                className="text-sm sm:text-base lg:text-lg"
                style={{ fontSize: "16px" }}
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item className="mb-0">
              <Button
                className="mt-4 sm:mt-6 lg:mt-8 rounded-lg"
                type="primary"
                htmlType="submit"
                block
                size="large"
                style={{
                  backgroundColor: "#4d2d7c",
                  borderColor: "#4b0082",
                  fontSize: "18px",
                  height: "56px",
                  fontWeight: "600",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default TaxiForm
