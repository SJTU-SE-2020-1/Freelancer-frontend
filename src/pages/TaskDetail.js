import React from 'react'
import {
  Descriptions,
  Tag,
  Typography,
  Layout,
  Card,
  Row,
  Col,
  Button,
  message,
  Tooltip,
  Rate
} from 'antd'
import { history } from '../util/history'
import { ClockCircleFilled } from '@ant-design/icons'
import { withRouter, Link } from 'react-router-dom'
import '../css/TaskDetail.css'
import HeaderMenu from '../components/HeaderMenu'
const { Header, Footer, Content } = Layout
import * as WorkSER from '../services/WorkService'
import HeaderAfterLogin from '../components/HeaderAfterLogin'
const { Paragraph } = Typography

Date.prototype.format = function (format) {
  var o = {
    'M+': this.getMonth() + 1, // month
    'd+': this.getDate(), // day
    'h+': this.getHours(), // hour
    'm+': this.getMinutes(), // minute
    's+': this.getSeconds(), // second
    'q+': Math.floor((this.getMonth() + 3) / 3), // quarter
    S: this.getMilliseconds()
    // millisecond
  }
  if (/(y+)/.test(format) || /(Y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return format
}
class TaskDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      work_id: 0
    }
  }

  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log('will: TaskList -> componentDidMount -> user', user)
    if (user == null) {
      this.setState({ islogin: false })
    } else {
      this.setState({ islogin: true, u_id: user.u_id })
    }
    let work_id = this.props.match.params.id
    console.log(work_id)
    this.setState({ work_id })
    this.getWorkDettail(work_id)
  }

  getWorkDettail = (work_id) => {
    let json = { w_id: work_id }
    const callback = (data) => {
      console.log('will: TaskDetail -> callback -> data', data)
      // debugger
      if (data.status == null) {
        let postman = data.postman
        postman.grade = (Math.random() * 5).toFixed(1)
        postman.view = Math.ceil(Math.random() * 100)
        this.setState({
          work: data.work,
          postman,
          necessarySkills: data.necessarySkills,
          unnecessarySkills: data.unnecessarySkills
        })
      } else {
        message.error('获取任务详细信息失败')
      }
    }
    console.log('will: TaskDetail -> getWorkDettail -> json', json)
    WorkSER.getWorkDetail(json, callback)
  }

  applyWork = () => {
    if (this.state.work) {
      let path = '/applywork/' + this.state.work.w_id
      history.push(path)
      window.location = path
    }
  }

  getSkills = () => {
    let result = []
    for (let i = 0; i < this.state.necessarySkills.length; i++) {
      result.push(
        <Tag color={'volcano'}>{this.state.necessarySkills[i].skillName}</Tag>
      )
    }
    for (let i = 0; i < this.state.unnecessarySkills.length; i++) {
      result.push(
        <Tag color={'lime'}>{this.state.unnecessarySkills[i].skillName}</Tag>
      )
    }
    return result
  }

  gettime = (t_stamp) => {
    let time = new Date(parseFloat(t_stamp.time)).format('yyyy-MM-dd hh:mm:ss')
    return time
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
          <Row justify={'center'} style={{ marginTop: '7%' }}>
            <Col span={15}>
              <Card
                bordered={true}
                hoverable={true}
                title={<b style={{ fontSize: '22px' }}>项目详情</b>}
                extra={
                  this.state.work ? (
                    <div>
                      <b>
                        {'￥' +
                          this.state.work.paymentLower.toFixed(2) +
                          '-' +
                          this.state.work.paymentHigher.toFixed(2)}
                      </b>
                      <br />
                      <b>
                        <ClockCircleFilled />
                        <span>
                          {'投标截止时间 ' +
                            this.gettime(this.state.work.biddingDdl)}
                        </span>
                      </b>
                    </div>
                  ) : null
                }
              >
                {this.state.work ? (
                  <Descriptions>
                    <Descriptions.Item label={'任务状态'} span={3}>
                      {this.state.work.status ? (
                        <Tag color='processing'>未完成</Tag>
                      ) : (
                        <Tag color='red'> 已结束竞标</Tag>
                      )}
                    </Descriptions.Item>

                    <Descriptions.Item label={'需要的技能'} span={3}>
                      {this.getSkills()}
                    </Descriptions.Item>
                    <Descriptions.Item label={'任务描述'} span={3}>
                      <Typography
                        className={'TaskDetail_des'}
                        ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
                      >
                        {this.state.work.description.split('查看更多：')[0]}
                      </Typography>
                    </Descriptions.Item>
                  </Descriptions>
                ) : null}
                <Button
                  type='primary'
                  onClick={this.applyWork}
                  style={{ float: 'right' }}
                  disabled={
                    this.state.work
                      ? this.state.work.status
                        ? false
                        : true
                      : true
                  }
                >
                  申请
                </Button>
              </Card>
            </Col>
            <Col offset={1} span={6}>
              <Card title={'关于雇主'}>
                {this.state.postman ? (
                  <div>
                    <b>{this.state.postman.name}</b>@{this.state.postman.name}
                    <Tooltip
                      placement='topLeft'
                      title={'雇主评分' + this.state.postman.grade}
                      arrowPointAtCenter
                    >
                      <Rate
                        allowHalf={true}
                        value={this.state.postman.grade}
                        disabled={true}
                      />
                      {' ( ' + Math.ceil(Math.random() * 100) + ' views )'}
                    </Tooltip>
                    <div style={{ fontSize: '18px' }}>
                      <b>电话</b>
                      <Paragraph copyable>{this.state.postman.phone}</Paragraph>
                    </div>
                    <div style={{ fontSize: '18px' }}>
                      <b>邮箱</b>
                      <Paragraph copyable>
                        {this.state.postman.e_mail}
                      </Paragraph>
                    </div>
                  </div>
                ) : (
                  '加载中'
                )}
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

export default withRouter(TaskDetail)
