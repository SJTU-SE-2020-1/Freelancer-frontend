import React from 'react';
import { Form,  Input, Button,  } from 'antd';
import 'antd/dist/antd.css';
import '../css/regist.css'

class RegistForm extends React.Component{

    render() {

        return (
            <Form className="regist-form">
                <Form.Item
                    label="Username"
                    name = "registname"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type ="text" />,

                </Form.Item>
                <Form.Item
                    label="Password"
                    name="r_password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input type = "password" />
                </Form.Item>
                <Form.Item
                    label="Confirm"
                    name="confirm"
                    rules={[{ required: true, message: 'Please input your password again!' }]}
                >
                    <Input type = "password" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input type = "email" />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone!' }]}
                >
                    <Input type = "phone" />
                </Form.Item>

                <Form.Item
                    label="Truename"
                    name="truename"
                    rules={[{ required: true, message: 'Please input your truename!' }]}
                >
                    <Input  />

                </Form.Item>

                <Form.Item
                    label="Credit_card"
                    name="credit_card"
                    rules={[{ required: true, message: 'Please input your credit card ID!' }]}
                >
                    <Input type = "credit" />
                </Form.Item>

                <Form.Item
                    name="submit"
                >

                    <Button type="primary" htmlType="submit" className="regist-form-button">
                        submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
export default RegistForm;