import React from 'react'
import {
  Menu,
  Dropdown,
  Avatar,
  Typography,
  Button,
  message,
  Row,
  Col,
  Badge
} from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const user = {
  name: 'xiaoming',
  avatar: ''
}

class Avatarlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
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
        <Link to=''>查看资料</Link>
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
                  user.avatar ? <img src={user.avatar} /> : <UserOutlined />
                }
                size='large'
                style={{ margin: '2px' }}
              />
            </Badge>
          </Col>
          <Col offset={1}>
            <b style={{ color: 'white' }}>{user.name}</b>
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
