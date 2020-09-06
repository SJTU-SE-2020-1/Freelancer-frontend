import React from 'react'
import {
  Menu,
  Layout,
  Row,
  Col,
  Pagination,
  Input,
  Card,
  Dropdown,
  Slider,
  InputNumber
} from 'antd'

import { DownOutlined } from '@ant-design/icons'
import { Task } from '../components/Task'
import { withRouter } from 'react-router-dom'
import HeaderAfterLogin from '../components/HeaderAfterLogin'
import HeaderMenu from '../components/HeaderMenu'

import * as WorkSER from '../services/WorkService'
const { Header, Footer, Content } = Layout
const { Search } = Input
class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      islogin: true,
      pagenum: 1,
      size: 10,
      worklist: [],
      dropdownkey: 1,
      paymentLower: 0,
      paymentHigher: 10000,
      keyword: ''
    }
  }
  callback = (data) => {
    this.setState({ worklist: [] })
    console.log('will: TaskList -> callback -> data', data)
    this.setState({ worklist: data })
  }

  getWorks = () => {
    let sortby = this.state.dropdownkey == 1 ? 0 : 1
    let json = {
      keyword: this.state.keyword,
      pagenum: this.state.pagenum,
      size: this.state.size,
      paymentLower: this.state.paymentLower,
      paymentHigher: this.state.paymentHigher,
      sortby
    }
    WorkSER.getWorks(json, this.callback)
    console.log('will: TaskList -> getWorks -> json', json)
  }

  changePage = (current, pageSize) => {
    console.log(
      'will: TaskList -> changePage -> current, pageSize',
      current,
      pageSize
    )
    // debugger
    this.setState({
      pagenum: current,
      size: pageSize,
      worklist: []
    })
    let json = { pagenum: current, size: pageSize }
    WorkSER.getWorks(json, this.callback)
    console.log('will: TaskList -> changePage -> json', json)
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log('will: TaskList -> componentDidMount -> user', user)
    if (user == null) {
      this.setState({ islogin: false })
    } else {
      this.setState({ islogin: true })
    }
    this.getWorks()
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

  onSearch = (value) => {
    console.log('will: TaskList -> onKeyWordChange -> value', value)
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
  render() {
    return (
      <Layout>
        <Header style={{ margin: ' 0px', padding: ' 0px' }}>
          {this.state.islogin ? (
            <HeaderAfterLogin style={{ width: '100%' }} />
          ) : (
            <HeaderMenu />
          )}
        </Header>
        <Content>
          <br />
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
        </Content>
        <br />
        <br />
        <Footer style={{ textAlign: 'center' }}>
          ©SJTU
          <br />
          Freelancer
        </Footer>
      </Layout>
    )
  }
}

export default withRouter(TaskList)
