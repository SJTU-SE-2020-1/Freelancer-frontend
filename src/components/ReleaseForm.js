import React from 'react';
import {Button, Form, Input,} from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { TextArea } = Input;

class  ReleaseForm extends React.Component{

    onSubmit = values => {
        console.log(values);
        debugger;
        console.log('Received values of form: ', values);
       //  UserSER.login(values);
   };
    render(){
        return(
            <Form className="regist-form">
                <Form.Item
                    label="姓名/企业名称"
                    name = "username"
                    rules={[{ required: true, message: '请输入你的姓名或者企业名称!' }]}
                >
                    <Input  prefix={<UserOutlined />} />,

                </Form.Item>

                <Form.Item
                    label="联系邮箱"
                    name="email"
                    rules={[{
                        type: 'email',
                        message: '邮箱格式不正确',
                    },{ required: true, message: '请输入你的邮箱!' }]}
                >
                    <Input type = "email" />
                </Form.Item>


                <Form.Item
                    label="联系电话"
                    name="phone"
                    rules={[{ required: true, message: '请输入你的电话!' }]}
                >
                    <Input type = "phone" />
                </Form.Item>


                <Form.Item
                    label="任务描述"
                    name="description"
                    rules={[{ required: true, message: '请输入任务的具体描述!' }]}
                >
                    <TextArea
                        placeholder="0/50~300"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />

                </Form.Item>

                <Form.Item
                    label="任务预算"
                    name="budget"
                    rules={[
                        {type:Number,message:"请输入数字！"},
                        { required: true, message: '请输入任务预算!' }]}
                >
                    <Input prefix="￥" suffix="RMB" />
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