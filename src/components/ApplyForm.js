import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { history } from '../util/history'
import * as WorkSER from '../services/WorkService'
const { TextArea } = Input
const formItemLayout = {
  labelCol: {
    xs: { span: 16 },
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

class Applyform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      u_id: 0
    }
  }
  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log('will: Applyform -> componentDidMount -> user', user)

    this.setState({ u_id: user.u_id })
  }

  onSubmit = (values) => {
    console.log('Received values of form: ', values)
    // debugger
    let json = values
    json.u_id = this.state.u_id
    json.w_id = this.props.w_id
    console.log('will: Applyform -> onSubmit -> json', json)
    const callback = (data) => {
      console.log('will: Applyform -> callback -> data', data)

      if (data == true) {
        message.success('申请任务成功')
        history.push('/taskdetail/' + this.props.w_id)
        window.location = '/taskdetail/' + this.props.w_id
      } else {
        message.error('网路连接出错，任务发布失败')
      }
    }
    WorkSER.ApplyWork(json, callback)
  }
  render() {
    //  debugger;
    return (
      <Form {...formItemLayout} name='normal_login' onFinish={this.onSubmit}>
        <Form.Item
          label='期望工资'
          name='expect_payment'
          rules={[
            {
              required: true,
              message:
                '请介绍您的个人信息以及擅长技能，或者以往的工作经历，会更有利于吸引到雇主的注意力哦'
            }
          ]}
        >
          <Input prefix='￥' suffix='RMB' type='number' />
        </Form.Item>
        <Form.Item
          label='对雇主说'
          name='remark'
          rules={[
            {
              required: true,
              message:
                '请介绍您的个人信息以及擅长技能，或者以往的工作经历，会更有利于吸引到雇主的注意力哦'
            }
          ]}
        >
          <TextArea placeholder='0~500' autoSize={{ minRows: 3, maxRows: 8 }} />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' className='form-button'>
            申请
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Applyform
