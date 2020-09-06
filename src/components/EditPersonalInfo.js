import { Button, Card, Input, Form, Tooltip, Select, Col, Row } from 'antd'
import React from 'react'
import { FormInstance } from 'antd/lib/form'
import * as UserService from '../services/UserService'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import UpAvatar from './UpAvatar'
const { Option } = Select

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
    debugger
    console.log('Received values of form: ', values)
    this.props.handleInfo(values)
  }

  render() {
    return (
      <div>
        <Card title={'编辑个人信息'} hoverable={true}>
          <Row justify='center'>
            <Col offset={1} span={7}>
              <UpAvatar avatar={this.props.user.avatar} />
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
                  name='u_nickname'
                  label={
                    <span>
                      Nickname&nbsp;
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
                  <Input placeholder={this.props.user.u_nickname} />
                </Form.Item>

                <Form.Item
                  name='u_phone'
                  label='Phone Number'
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
                  name='u_email'
                  label='E-mail'
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!'
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!'
                    }
                  ]}
                >
                  <Input placeholder={this.props.user.u_email} />
                </Form.Item>
                <Form {...tailFormItemLayout}>
                  <Button
                    type={'primary'}
                    shape='circle'
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
