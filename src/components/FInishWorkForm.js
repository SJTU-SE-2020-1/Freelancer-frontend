import React from 'react'
import moment from 'moment'
import { Button, Form, Input, DatePicker, message, Tooltip } from 'antd'
import * as WorkSER from '../services/WorkService'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { history } from '../util/history'
import ChooseSkill from './chooseSkill'
import Modal from 'antd/lib/modal/Modal'
const { TextArea } = Input

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 28 }
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

class FinishForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      u_id: 0,
      visible: false
    }
  }

  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  onSubmit = (values) => {
    console.log('Received values of form: ', values)
    // debugger
    let json = values
    console.log('will: FinishForm -> onSubmit -> json', json)
    values.w_id = this.props.w_id

    const callback = (data) => {
      console.log('will: ReleaseForm -> callback -> data', data)
      if (data.status) {
        message.error('网路连接出错，请稍后再试')
      } else if (data) {
        message.success('当前任务已经完成')
        this.setState({
          visible: false
        })
        history.push('/')
        window.location = '/'
      } else {
        message.error('用户名对应账户不存在，请确认后重新输入')
      }
    }
    WorkSER.finishWork(json, callback)
  }

  componentDidMount = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log('will: ReleaseForm -> componentDidMount -> user', user)
    this.setState({ u_id: user.u_id })
  }

  disabledDate = (current) => {
    // Can not select days before today and today
    return current > moment().endOf('day')
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }

  render() {
    return (
      <>
        <a type='primary' onClick={this.showModal}>
          结束工作
        </a>

        <Modal
          title='Basic Modal'
          visible={this.state.visible}
          onOk={this.onSubmit}
          onCancel={this.handleCancel}
          footer={[null]}
        >
          <Form {...formItemLayout} onFinish={this.onSubmit}>
            <Form.Item
              name='name'
              label={
                <span>
                  完成工作者&nbsp;
                  <Tooltip title='请输入对方的用户名'>
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: '请输入对方用户名!',
                  whitespace: true
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='评价'
              name='review'
              rules={[{ required: true, message: '请输入任务的具体描述!' }]}
            >
              <TextArea
                placeholder='0~500'
                autoSize={{ minRows: 3, maxRows: 8 }}
              />
            </Form.Item>

            <Form.Item
              label='薪酬'
              name='payment'
              rules={[{ required: true, message: '请输入薪酬!' }]}
            >
              <Input prefix='￥' suffix='RMB' type='number' />
            </Form.Item>

            <Form.Item
              label='开始项目日期'
              name='start_time'
              format='YYYY-MM-DD HH:mm:ss'
              rules={[{ required: true, message: '请输任务的开始日期!' }]}
            >
              <DatePicker
                format='YYYY-MM-DD HH:mm:ss'
                disabledDate={this.disabledDate}
                showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
              />
            </Form.Item>

            <Form.Item
              label='完成项目日期'
              name='end_time'
              rules={[{ required: true, message: '请输入任务的完成日期!' }]}
            >
              <DatePicker
                format='YYYY-MM-DD HH:mm:ss'
                disabledDate={this.disabledDate}
                showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
              />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type='primary' onClick={this.handleCancel}>
                取消
              </Button>
              <Button
                type='primary'
                htmlType='submit'
                style={{ float: 'right' }}
              >
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    )
  }
}

export default FinishForm
