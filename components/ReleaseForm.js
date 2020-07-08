import React from 'react';
import {Button, Form, Input,} from 'antd';
import 'antd/dist/antd.css';
import  '../css/release.css'
import { UserOutlined } from '@ant-design/icons';

class  ReleaseForm extends React.Component{
    render(){
        return(
            <Form className="release-form">
                <Form.Item
                    label="Name/Business name"
                    name = "username"
                    rules={[{ required: true, message: 'Please input your name or your business name!' }]}
                >
                    <Input  prefix={<UserOutlined />} />,

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
                    label="Task Description"
                    name="task description"
                    rules={[{ required: true, message: 'Please input task description!' }]}
                >
                    <Input

                        onChange={this.onChange}
                        placeholder="0/50~300"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />

                </Form.Item>

                <Form.Item
                    label="Budget"
                    name="budget"
                    rules={[{ required: true, message: 'Please input your task budget!' }]}
                >
                    <Input  />
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

export default ReleaseForm;