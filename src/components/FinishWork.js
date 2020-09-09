import React from 'react'
import {
  Menu,
  Row,
  Col,
  Pagination,
  Input,
  Card,
  Dropdown,
  Slider,
  InputNumber,
  message
} from 'antd'

import { DownOutlined } from '@ant-design/icons'
import { Task } from '../components/Task'

import * as WorkSER from '../services/WorkService'

const { Search } = Input

class FinishedWork extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      pagenum: 1,
      size: 5,
      worklist: [],
      dropdownkey: 1,
      paymentLower: 0,
      paymentHigher: 10000,
      keyword: ''
    }
  }
  callback = (data) => {
    console.log('will: PostedWork -> callback -> data', data)
    if (data.status) {
      message.error('获取信息失败')
    } else {
      this.setState({ worklist: [] })

      this.setState({ worklist: data })
    }
  }

  getWorks = (u_id) => {
    let sortby = this.state.dropdownkey == 1 ? 0 : 1
    if (u_id == null) u_id = this.state.user.u_id
    let json = {
      u_id,
      keyword: this.state.keyword,
      pagenum: this.state.pagenum,
      size: this.state.size,
      paymentLower: this.state.paymentLower,
      paymentHigher: this.state.paymentHigher,
      sortby
    }
    debugger
    console.log('will: PostedWork -> getWorks -> json', json)
    WorkSER.getMyfinish(json, this.callback)
  }

  changePage = (current, pageSize) => {
    console.log(
      'will: TaskList -> changePage -> current, pageSize',
      current,
      pageSize
    )
    // debugger
    this.setState(
      {
        pagenum: current,
        size: pageSize,
        worklist: [],
        dropdownkey: 1,
        paymentLower: 0,
        paymentHigher: 10000,
        keyword: ''
      },
      this.getWorks
    )
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log('will: TaskList -> componentDidMount -> user', user)

    this.setState({ user }, this.getWorks(user.u_id))
  }

  onSearch = (value) => {
    console.log('will: TaskInProcess -> onSearch -> value', value)

    let keyword = value
    this.setState({ keyword: keyword, size: 10, pagenum: 1 }, () => {
      this.getWorks()
    })
  }

  renderList = () => {
    let result = []
    for (let i = 0; i < this.state.worklist.length; i++) {
      result.push(<Task info={this.state.worklist[i]} />)
    }
    return result
  }
  getLatest = () => {
    this.setState({ dropdownkey: 1 }, () => {
      this.getWorks()
    })
  }

  getEarliest = () => {
    this.setState({ dropdownkey: 2 }, () => {
      this.getWorks()
    })
  }
  onSliderChange = (value) => {
    console.log('will: TaskList -> onSliderChange -> value', value)
    let lower = value[0]
    let higher = value[1]
    this.setState(
      {
        paymentLower: lower,
        paymentHigher: higher,
        size: 10,
        pagenum: 1
      },
      () => {
        this.getWorks()
      }
    )
  }
  LowerChange = (value) => {
    this.setState({ paymentLower: value, size: 10, pagenum: 1 }, () => {
      this.getWorks()
    })
  }
  HigherChange = (value) => {
    this.setState({ paymentHigher: value, size: 10, pagenum: 1 }, () => {
      this.getWorks()
    })
  }
  menu = (
    <Menu style={{ width: '120px' }}>
      <Menu.Item onClick={this.getLatest}>最新的</Menu.Item>
      <Menu.Item onClick={this.getEarliest}>最早的</Menu.Item>
    </Menu>
  )
  render() {
    return (
      <Row justify='center'>
        <Col span={5}>
          <Card title='筛选项'>
            <b>预算</b>(￥ 0-10000 CNY)
            <Slider
              range
              max={10000}
              min={0}
              step={1}
              value={[this.state.paymentLower, this.state.paymentHigher]}
              onChange={this.onSliderChange}
            />
            <b>最低工资</b>
            <br /> ￥
            <InputNumber
              min={0}
              onChange={this.LowerChange}
              max={this.state.paymentHigher}
              value={this.state.paymentLower}
            />{' '}
            CNY
            <br />
            <b>最高工资</b>
            <br /> ￥
            <InputNumber
              min={this.state.paymentLower}
              max={10000}
              onChange={this.HigherChange}
              value={this.state.paymentHigher}
            />{' '}
            CNY
          </Card>
        </Col>
        <Col offset={1} span={14}>
          <Card
            title={
              <Search
                placeholder='搜索项目'
                onSearch={this.onSearch}
                style={{ width: '60%' }}
                defaultValue={this.state.keyword}
                allowClear
              />
            }
            extra={
              <div>
                排列方式：
                <Dropdown
                  overlay={this.menu}
                  placement='bottomRight'
                  style={{ color: 'blue' }}
                >
                  <span>
                    <span style={{ color: '#108ee9' }}>
                      {this.state.dropdownkey == 1 ? '最新的' : '最早的'}
                    </span>
                    <DownOutlined />
                  </span>
                </Dropdown>
              </div>
            }
          >
            {this.renderList()}
            <br />
            <Pagination
              showSizeChanger
              showQuickJumper
              total={500}
              current={this.state.pagenum}
              pageSize={this.state.size}
              onChange={this.changePage}
              style={{ float: 'right' }}
            />
          </Card>
        </Col>
      </Row>
    )
  }
}

export default FinishedWork
