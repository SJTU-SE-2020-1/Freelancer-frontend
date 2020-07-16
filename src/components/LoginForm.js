import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import * as UserSER from '../services/UserService'

class Loginform extends React.Component {
  onSubmit = (values) => {
    console.log(values)
    debugger
    console.log('Received values of form: ', values)
    UserSER.login(values)
  }
  render() {
    //  debugger;
    return (
      <Form
        name='normal_login'
        initialValues={{ remember: true }}
        onFinish={this.onSubmit}
      >
        <Form.Item
          label='用户名'
          name='name'
          rules={[{ required: true, message: '请输入你的用户名！' }]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>
        <Form.Item
          label='密码'
          name='password'
          rules={[{ required: true, message: '请输入你的密码!' }]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item
            name='remember'
            valuePropName='checked'
            initialValue={true}
            noStyle
          >
            <Checkbox>记住我(下次自动登录）</Checkbox>
          </Form.Item>

          <a className='login-form-forgot' href=''>
            忘记密码
          </a>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' className='form-button'>
            登录
          </Button>
          Or <Link to='/register'>注册</Link>
        </Form.Item>
      </Form>
    )
  }
}

export default Loginform
