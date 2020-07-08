import React from 'react';
import { Form,  Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import '../css/login.css'


class LoginForm extends React.Component{

    render() {

        return (
            <Form className="login-form">
                <Form.Item
                    label="用户名"
                    name = "username"
                        rules={[{ required: true, message: '请输入你的用户名！' }]}
                    >
                        <Input />,

                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入你的密码!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"

                    >
                    <Checkbox>记住我(下次自动登录）</Checkbox>
                    <a className="login-form-forgot" href="">
                        忘记密码
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    Or <a href="">注册</a>
                </Form.Item>
            </Form>
        );
    }
}
export default LoginForm;