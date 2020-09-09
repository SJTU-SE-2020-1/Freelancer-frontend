import { Button, Card, Input, Form, Tooltip, Col, Row } from 'antd'
import React from 'react'
import { FormInstance } from 'antd/lib/form'
import * as UserService from '../services/UserService'
import { QuestionCircleOutlined } from '@ant-design/icons'

import UpAvatar from './UpAvatar'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}
class PersonInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  formRef = React.createRef < FormInstance > this

  onFinish = (values) => {
    console.log('Received values of form: ', values)
    if (values.name == null) values.name = this.props.user.name
    UserService.upLoadInfo(values)
  }

  render() {
    return (
      <div>
        <Card title={'编辑个人信息'} hoverable={true}>
          <Row justify='center'>
            <Col offset={1} span={7}>
              <UpAvatar
                avatar={this.props.user.avatar}
                u_id={this.props.user.u_id}
              />
            </Col>
            <Col offset={1} span={15}>
              <Form
                {...formItemLayout}
                ref={this.formRef}
                name='register'
                onFinish={this.onFinish}
                initialValues={{
                  prefix: '86'
                }}
                scrollToFirstError
              >
                <Form.Item
                  name='name'
                  label={
                    <span>
                      昵称&nbsp;
                      <Tooltip title='What do you want others to call you?'>
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </span>
                  }
                  rules={[
                    {
                      required: false,
                      message: 'Please input your nickname!',
                      whitespace: true
                    }
                  ]}
                >
                  <Input placeholder={this.props.user.name} />
                </Form.Item>

                <Form.Item
                  name='phone'
                  label='电话号码'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone number!'
                    }
                  ]}
                >
                  <Input
                    addonBefore={this.prefixSelector}
                    style={{ width: '100%' }}
                    placeholder={this.props.user.u_phone}
                  />
                </Form.Item>

                <Form.Item
                  name='email'
                  label='邮箱'
                  rules={[
                    {
                      type: 'email',
                      message: '邮箱格式不正确'
                    },
                    {
                      required: true,
                      message: '请输入您的邮箱'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form {...tailFormItemLayout}>
                  <Button
                    type={'primary'}
                    // shape='circle'
                    htmlType='submit'
                    // className={'Editbutton'}
                  >
                    提交
                  </Button>
                </Form>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}
export default PersonInfo
