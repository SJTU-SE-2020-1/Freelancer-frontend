import React from 'react';
import { Form,  Input, Button,  } from 'antd';
import 'antd/dist/antd.css';
import '../css/regist.css'

class RegistForm extends React.Component{

    render() {

        return (
            <Form className="regist-form">
                <Form.Item
                    label="用户名"
                    name = "registname"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input type ="text" />,

                </Form.Item>
                <Form.Item
                    label="密码"
                    name="r_password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input type = "password" />
                </Form.Item>
                <Form.Item
                    label="再次输入密码"
                    name="confirm"
                    rules={[{ required: true, message: '请再次输入密码!' }]}
                >
                    <Input type = "password" />
                </Form.Item>

                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{ required: true, message: '请输入你的邮箱!' }]}
                >
                    <Input type = "email" />
                </Form.Item>

                <Form.Item
                    label="电话"
                    name="phone"
                    rules={[{ required: true, message: '请输入你的电话!' }]}
                >
                    <Input type = "phone" />
                </Form.Item>

                <Form.Item
                    label="真实姓名"
                    name="truename"
                    rules={[{ required: true, message: '请输入你的真实姓名!' }]}
                >
                    <Input  />

                </Form.Item>

                <Form.Item
                    label="信用卡号"
                    name="credit_card"
                    rules={[{ required: true, message: '请输入你的信用卡号!' }]}
                >
                    <Input type = "credit" />
                </Form.Item>

                <Form.Item
                    name="submit"
                >

                    <Button type="primary" htmlType="submit" className="regist-form-button">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
export default RegistForm;