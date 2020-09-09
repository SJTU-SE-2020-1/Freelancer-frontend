import React from 'react'
import {
  Card,
  Row,
  Col,
  Rate,
  Tag,
  Tooltip,
  Button,
  Avatar,
  Typography
} from 'antd'

import {
  SnippetsOutlined,
  HighlightOutlined,
  HeartOutlined
} from '@ant-design/icons'
import UNknown from '../assets/unknown.png'
import PersonInfo from './EditPersonalInfo'
const user_t = {
  name: 'xiaoming',
  money: 9000.95,
  phone: 12354868255,
  email: '88888@edu.sjtu.cn',
  expect_payment: 0,
  avatar:
    'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1595389843&t=d4524c4d137755de6e12cbe12545d4f0'
}

class PostMan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maninfo: user_t,
      grade: 4.9, //评分
      views: 5
    }
  }
  componentDidMount() {
    this.props.info
    console.log(
      'will: Man -> componentDidMount -> this.props.info',
      this.props.info
    )

    let user = this.props.info
    //   if(user.avatar==null)user.avatar=user_t.avatar
    user.grade = (Math.random() * 5).toFixed(1)
    user.views = Math.ceil(Math.random() * 100)
    user.money = Math.random() * 10000

    this.setState({ maninfo: user })
  }

  render() {
    return (
      <Card title={this.state.maninfo.name} hoverable={true}>
        <Row align={'middle'}>
          <Col offset={1}>
            <Avatar
              size='large'
              icon={
                this.state.maninfo.avatar != '' ? (
                  <img
                    src={this.state.maninfo.avatar}
                    style={{ width: '100%', height: '100%' }}
                  />
                ) : (
                  <img
                    src={UNknown}
                    style={{ width: '100%', height: '100%' }}
                  />
                )
              }
            />
          </Col>
          <Col offset={2} span={8}>
            <Row>
              <b> {'信誉等级 '}</b>
              <Tag color='yellow'>{this.state.grade}</Tag>
              <br />
              <Tooltip
                placement='topLeft'
                title={'所有已完成项目的平均评分'}
                arrowPointAtCenter
              >
                <Rate
                  allowHalf={true}
                  value={this.state.grade}
                  disabled={true}
                  size='small'
                />
              </Tooltip>
            </Row>
          </Col>
          <Col>
            <b>
              期望薪酬:{this.state.maninfo.expect_payment.toFixed(2) + '￥'}
            </b>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <b style={{ color: 'green' }}>手机：</b>
            {this.state.maninfo.phone}
          </Col>
          <Col offset={2}>
            <b style={{ color: 'green' }}>邮箱：</b>
            {this.state.maninfo.e_mail}
          </Col>
        </Row>
        <br />
        <Row style={{ fontSize: '18px' }}></Row>

        <Row>
          <Typography ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
            {'  ' + this.state.maninfo.remark}
          </Typography>
        </Row>
      </Card>
    )
  }
}
export default PostMan
