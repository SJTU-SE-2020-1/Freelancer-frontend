import React from 'react';
import {
    Form,
    Input,
    Tooltip,
    Select,
    Checkbox,
    Button,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import { FormInstance } from 'antd/lib/form';
// import * as UserService from "../services/UserService";

const { Option } = Select;
//const AutoCompleteOption = AutoComplete.Option;


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


class RegistForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            loading: false,
        }
    };
    formRef = React.createRef<FormInstance>(this);


    onFinish = values => {
        console.log('Received values of form: ', values);
      
        // UserService.register(values);
    };

    prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
            </Select>
        </Form.Item>
    );

    render() {
    return (
        <Form
            {...formItemLayout}
            ref={this.formRef}
            name="register"
            className="regist-form"
            onFinish={this.onFinish}
            initialValues={{
                prefix: '86',
            }}
            scrollToFirstError
        >
            

            <Form.Item
                name="name"
                label={
                    <span>
            用户名&nbsp;
                        <Tooltip title="登录时所需的用户名">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
                }
                rules={[{ required:true, message: '请输入用户名!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="密码"
                rules={[
                    {
                        required: true,
                        message: '请输入密码!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="确认密码"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: '请再次输入密码',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') == value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('两次密码不相等，请确认后再次输入');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="email"
                label="邮箱"
                rules={[
                    {
                        type: 'email',
                        message: '邮箱格式不正确',
                    },
                    {
                        required: true,
                        message: "请输入您的邮箱",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="phone"
                label="电话"
                rules={[{ required: true, message: '请输入你的电话!' }]}
            >
                <Input addonBefore={this.prefixSelector} style={{ width: '100%' }} />
            </Form.Item>

           

            <Form.Item
                name="truename"
                label={
                    <span>
            真名&nbsp;
                        <Tooltip title="您的真实姓名">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
                }
                rules={[{ required: false, message: '请输入你的真实姓名!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                    label="信用卡号"
                    name="credit_card"
                    rules={[{
                        type: 'number',
                        min:10000000000000,
                        max:9999999999999999999,
                        message: '信用卡号有误',
                    },
                        { required: true, message: '请输入你的信用卡号!' }
                    ]}
                >
                    <Input type = "credit"  style={{ width: '100%' }}/>
            </Form.Item>



            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    { validator:(_, value) => value ? Promise.resolve() : Promise.reject('请选择同意！') },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    我已经阅读 <a href="/null">协议书</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" className="regist-form-button">
                    Register
                </Button>

                已有账号,请点击 <Link to='/login'> 这里 </Link>  登录

            </Form.Item>
        </Form>
    );
}
};
export default RegistForm;
