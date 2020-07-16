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
import * as UserSER from '../services/UserService'

const user = {
  name: 'xiaoming',
  avatar:
    'http://b-ssl.duitang.com/uploads/item/201901/17/20190117230425_eofqv.thumb.700_0.jpg'
}

class Avatarlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      user: user
    }
  }
  componentDidUpdate() {}
  // componentDidMount() {
  //   let auser = JSON.parse(localStorage.getItem('user'))
  //   console.log('will: Home -> componentDidMount -> auser', auser)
  //   let u_name = auser.name
  //   console.log('will: Home -> componentDidMount -> u_name', u_name)
  //   if (auser.phone == null) {
  //     const callback = (data) => {
  //       console.log('will: Home -> callback -> data', data)

  //       if (data.status == null) {
  //         //获取数据成功
  //         let user = data

  //         user['avatar'] =
  //           'http://b-ssl.duitang.com/uploads/item/201901/17/20190117230425_eofqv.thumb.700_0.jpg'
  //         localStorage.removeItem('user')
  //         user['money'] = 20.0

  //         localStorage.setItem('user', user)
  //         console.log('will: Home -> callback -> user', user)
  //         this.setState({ user: user })
  //       }
  //     }
  //     let json = { name: u_name }

  //     console.log('will: Home -> componentDidMount -> json', json)
  //     UserSER.getuserInfo(json, callback)
  //   } else this.setState({ user: auser })
  // }
  componentWillReceiveProps(nextprops) {
    let user = nextprops.user
    console.log('will: Avatarlist -> componentWillReceiveProps -> user', user)

    this.setState({ user: user })
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
                  user.avatar ? (
                    <img
                      src={user.avatar}
                      //  width={'100%'} height={'100%'}
                    />
                  ) : (
                    <UserOutlined />
                  )
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
