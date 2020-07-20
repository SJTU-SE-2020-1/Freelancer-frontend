import React from 'react'
import {
  Menu,
  Dropdown,
  Avatar,
  // Typography,
  // Button,
  message,
  Row,
  Col,
  Badge
} from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import * as UserSER from '../services/UserService'

const user = {
  name: 'xiaoming',
  avatar:
    'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1068485212,3292662520&fm=111&gp=0.jpg'
}

class Avatarlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      user: user
    }
  }
  componentDidMount() {
    let auser = JSON.parse(localStorage.getItem('user'))
    this.setState({ user: auser })
  }

  handleButtonClick(e) {
    message.info('Click on left button.')
    console.log('click left button', e)
  }

  handleMenuClick(e) {
    message.info('Click on menu item.')
    console.log('click', e)
  }

  menu = (
    <Menu>
      <Menu.Item>
        <b>账户</b>
        <a style={{ float: 'right', color: '#3366FF' }} href=''>
          管理→
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to='/profile'>查看资料</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to=''>用户设置</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to=''>获取帮助</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to=''>退出</Link>
      </Menu.Item>
    </Menu>
  )

  render() {
    return (
      <Dropdown overlay={this.menu} placement='bottomRight'>
        <Row justify='center'>
          <Col>
            <Badge count={this.state.messages.length}>
              <Avatar
                shape='square'
                icon={
                  this.state.user.avatar ? (
                    <img
                      src={this.state.user.avatar}
                      //  width={'100%'} height={'100%'}
                    />
                  ) : (
                    <UserOutlined />
                  )
                  // this.props.user.avatar ? (
                  //   <img
                  //     src={this.props.user.avatar}
                  //     //  width={'100%'} height={'100%'}
                  //   />
                  // ) : (
                  //   <UserOutlined />
                  // )
                }
                size='large'
                style={{ margin: '2px' }}
              />
            </Badge>
          </Col>
          <Col offset={1}>
            <b style={{ color: 'white' }}>
              {this.state.user.name}
              {/* {this.props.user.name} */}
            </b>
          </Col>
          <Col offset={1}>
            <DownOutlined style={{ color: 'white' }} />
          </Col>
        </Row>
      </Dropdown>
    )
  }
}

export default Avatarlist
