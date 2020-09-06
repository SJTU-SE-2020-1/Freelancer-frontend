import React from 'react'
import moment from 'moment'
import { Button, Form, Input, DatePicker, message } from 'antd'
import * as WorkSER from '../services/WorkService'
import { history } from '../util/history'
import ChooseSkill from './chooseSkill'
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

class ReleaseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      u_id: 0,
      skills: [],
      skill_ids: []
    }
    this.selectSkills = this.selectSkills.bind(this)
  }

  onSubmit = (values) => {
    console.log('Received values of form: ', values)
    // debugger
    let json = values
    json.uId = this.state.u_id

    if (this.state.skills != []) {
      let skills = ' 技能：' + this.state.skills.join(',')
      json.description += skills
      json['needskills'] = JSON.stringify(this.state.skill_ids)
    }
    console.log('Received values of form: ', values)
    const callback = (data) => {
      console.log('will: ReleaseForm -> callback -> data', data)
      if (data == true) {
        message.success('发布任务成功')
        history.push('/')
        window.location = '/'
      } else {
        message.error('网路连接出错，任务发布失败')
      }
    }
    WorkSER.PostWork(json, callback)
  }

  componentDidMount = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log('will: ReleaseForm -> componentDidMount -> user', user)
    this.setState({ u_id: user.u_id })
  }

  disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day')
  }

  selectSkills = (skills) => {
    console.log('will: ReleaseForm -> selectSkills -> skills', skills)
    let skillnames = [],
      selectskill_ids = []
    for (let i = 0; i < skills.length; i++) {
      let askill = skills[i].split('&')
      skillnames.push(askill[0])
      selectskill_ids.push({ s_id: askill[1] })
    }
    this.setState({ skills: skillnames, skill_ids: selectskill_ids })
  }

  render() {
    return (
      <Form {...formItemLayout} onFinish={this.onSubmit}>
        <Form.Item
          label='任务名'
          name='title'
          rules={[{ required: true, message: '请输入任务的标题!' }]}
        >
          <Input placeholder='任务的关键字' />
        </Form.Item>

        <Form.Item
          label='任务描述'
          name='description'
          rules={[{ required: true, message: '请输入任务的具体描述!' }]}
        >
          <TextArea placeholder='0~500' autoSize={{ minRows: 3, maxRows: 8 }} />
        </Form.Item>

        <Form.Item
          label='任务最低预算'
          name='paymentLower'
          rules={[
            { required: true, message: '请输入最低任务预算!' },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                let high = getFieldValue('higher_budget')
                if (!value || !high || value <= high) {
                  return Promise.resolve()
                }
                return Promise.reject('请输入小于最高预算的数字')
              }
            })
          ]}
        >
          <Input prefix='￥' suffix='RMB' type='number' />
        </Form.Item>

        <Form.Item
          label='任务最高预算'
          name='paymentHigher'
          rules={[
            { required: true, message: '请输入最高任务预算!' },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                let low = getFieldValue('lower_budget')
                if (!value || !low || value >= low) {
                  return Promise.resolve()
                }
                return Promise.reject('请输入大于最最低预算的数字')
              }
            })
          ]}
        >
          <Input prefix='￥' suffix='RMB' type='number' />
        </Form.Item>

        <Form.Item
          label='投标截止日期'
          name='biddingDdl'
          format='YYYY-MM-DD HH:mm:ss'
          rules={[{ required: true, message: '请输入任务的投标截止日期!' }]}
        >
          <DatePicker
            format='YYYY-MM-DD HH:mm:ss'
            disabledDate={this.disabledDate}
            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
          />
        </Form.Item>

        <Form.Item
          label='完成项目截止日期'
          name='finishDdl'
          rules={[{ required: true, message: '请输入任务的完成截止日期!' }]}
        >
          <DatePicker
            format='YYYY-MM-DD HH:mm:ss'
            disabledDate={this.disabledDate}
            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
          />
        </Form.Item>
        <Form.Item>
          <ChooseSkill selectSkills={this.selectSkills} />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit' className='form-button'>
            提交
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default ReleaseForm
