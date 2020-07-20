import React from 'react'
import { Row, Col, Menu, Button } from 'antd'
import logo from '../assets/whale.png'
import font from '../assets/font.png'
import { Link } from 'react-router-dom'
import {
  ContainerOutlined,
  DesktopOutlined,
  MessageOutlined,
  SearchOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons'
import Avatarlist from './Avatarlist'
class HeaderAfterLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Menu theme='dark' mode='horizontal'>
        <Row>
          <Col offset={1} span={3}>
            <Link to={'/'}>
              <img
                alt='logo'
                className='logo'
                src={logo}
                style={{ height: 45 }}
              />
              <img
                alt='Font'
                className='logo'
                src={font}
                style={{ height: 45 }}
              />
            </Link>
          </Col>
          <Col offset={1} span={2}>
            <Menu.Item key='1' className='Menu_item' icon={<SearchOutlined />}>
              <Link to={'howtowork'}>浏览</Link>
            </Menu.Item>
          </Col>
          <Col span={2}>
            <Menu.Item key='2' className='Menu_item' icon={<DesktopOutlined />}>
              <Link to={'tasklist'}>我的项目</Link>
            </Menu.Item>
          </Col>
          <Col span={1}>
            <Menu.Item key='3' className='Menu_item' icon={<MessageOutlined />}>
              <a href='#'>Messages</a>
            </Menu.Item>
          </Col>
          <Col span={3} offset={5}>
            <Menu.Item key='5' className='Menu_item'>
              <Button
                type='primary'
                style={{ background: 'orange' }}
                href='/release'
              >
                发布一个项目
              </Button>
            </Menu.Item>
          </Col>
          <Col span={6}>
            <Menu.Item key='6' className='Menu_item'>
              <Avatarlist
              // user={this.props.user}
              />
            </Menu.Item>
          </Col>
        </Row>
      </Menu>
    )
  }
}

export default HeaderAfterLogin
