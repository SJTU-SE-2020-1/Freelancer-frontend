import React from 'react';
import { Form,  Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../css/login.css'


class LoginForm extends React.Component{

    render() {

        return (
            <Form className="login-form">
                <Form.Item
                    label="Username"
                    name = "username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />,

                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"

                    >
                    <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        );
    }
}
export default LoginForm;