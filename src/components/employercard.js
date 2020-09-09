import React from 'react'
import { Card, Row, Col, Rate, Tag, Tooltip, Statistic, Button } from 'antd'
import {
  SnippetsOutlined,
  HighlightOutlined,
  HeartOutlined,
  EyeOutlined,
  UserOutlined
} from '@ant-design/icons'
import UNknown from '../assets/unknown.png'
import PersonInfo from './EditPersonalInfo'
const user_t = {
  name: 'xiaoming',
  money: 9000.95,
  phone: 12354868255,
  email: '88888@edu.sjtu.cn',
  avatar:
    'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1595389843&t=d4524c4d137755de6e12cbe12545d4f0'
}

class EmployerCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grade: 4.9, //评分
      views: 5,
      user: user_t,
      if_edit: false
    }
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    user.grade = (Math.random() * 5).toFixed(1)
    user.views = Math.ceil(Math.random() * 100)
    user.money = Math.random() * 10000
    this.setState({ user: user })
  }
  render() {
    return (
      <div>
        {this.state.if_edit ? (
          <PersonInfo user={this.state.user} />
        ) : (
          <Card
            hoverable={true}
            title={
              <div>
                <b>{this.state.user.name}</b>@{this.state.user.name}
                【雇主】
              </div>
            }
            extra={
              <Button
                onClick={() => {
                  let edit = !this.state.if_edit
                  this.setState({ if_edit: edit })
                }}
              >
                编辑
              </Button>
            }
            actions={<HeartOutlined key='recommond' />}
          >
            <Row>
              <Col offset={1} span={7}>
                <div>
                  {this.state.user.avatar != '' ? (
                    <img
                      src={this.state.user.avatar}
                      style={{ width: '100%', height: '100%' }}
                    />
                  ) : (
                    <img
                      src={UNknown}
                      style={{ width: '100%', height: '100%' }}
                    />
                  )}
                </div>
              </Col>
              <Col offset={1} span={15}>
                <Row>
                  <Col span={10}>
                    <b style={{ fontSize: '28px' }}> {'信誉等级 '}</b>

                    <br />
                    <Tag color='yellow'>{this.state.grade}</Tag>
                    <Tooltip
                      placement='topLeft'
                      title={'雇主评分'}
                      arrowPointAtCenter
                    >
                      <Rate
                        allowHalf={true}
                        value={this.state.grade}
                        disabled={true}
                      />
                      {' ( ' + this.state.views + ' views )'}
                    </Tooltip>
                  </Col>
                  <Col offset={1} span={8}>
                    <br />
                    <br />
                    <Tag color='green'>
                      {this.state.user.money.toFixed(2) + '￥'}
                    </Tag>
                    <Rate
                      allowHalf={true}
                      disabled={true}
                      count={5}
                      value={this.state.user.money / 2000}
                      character={(index) => {
                        return <b>{'| | '}</b>
                      }}
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <Statistic
                      title='已发布工作'
                      value={12}
                      valueStyle={{ color: '#3fa600' }}
                      prefix={<SnippetsOutlined />}
                      suffix='件'
                    />
                  </Col>
                  <Col offset={4}>
                    <Statistic
                      title='未接单工作'
                      value={2}
                      valueStyle={{ color: '#ba2016' }}
                      prefix={<EyeOutlined />}
                      suffix='件'
                    />
                  </Col>
                  <Col offset={4}>
                    <Statistic
                      title='工作进行中'
                      value={2}
                      valueStyle={{ color: '#22a6ef' }}
                      prefix={<HighlightOutlined />}
                      suffix='件'
                    />
                  </Col>
                </Row>
                <br />
                <br />
                <Row style={{ fontSize: '18px' }}>
                  <b style={{ color: 'green' }}>手机：</b>
                  {this.state.user.phone}
                </Row>
                <br />
                <Row style={{ fontSize: '18px' }}>
                  <b style={{ color: 'green' }}>邮箱：</b>
                  {this.state.user.e_mail}
                </Row>
              </Col>
            </Row>
          </Card>
        )}
      </div>
    )
  }
}
export default EmployerCard
