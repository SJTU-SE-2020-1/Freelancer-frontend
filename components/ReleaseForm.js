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
                    label="姓名/企业名称"
                    name = "username"
                    rules={[{ required: true, message: '请输入你的姓名或者企业名称!' }]}
                >
                    <Input  prefix={<UserOutlined />} />,

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
                    label="任务描述"
                    name="task description"
                    rules={[{ required: true, message: '请输入任务的具体描述!' }]}
                >
                    <Input

                        onChange={this.onChange}
                        placeholder="0/50~300"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />

                </Form.Item>

                <Form.Item
                    label="任务预算"
                    name="budget"
                    rules={[{ required: true, message: '请输入任务预算!' }]}
                >
                    <Input  />
                </Form.Item>

            <Form.Item
        name="submit"
            >

            <Button type="primary" htmlType="submit" className="regist-form-button">
            提交
            </Button>
            </Form.Item>
            </Form>
        );

    }
}

export default ReleaseForm;