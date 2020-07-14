import React from 'react'
import { Layout, Menu, Breadcrumb, Row } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons'
import '../css/profile.css'
import { withRouter } from 'react-router-dom'
import HeaderMenu from '../components/HeaderMenu'
import HeaderAfterLogin from '../components/HeaderAfterLogin'
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      islogin: true
    }
  }
  render() {
    return (
      <Layout>
        <Header className='header' style={{ margin: ' 0px', padding: ' 0px' }}>
          <div>
            {this.state.islogin ? (
              <HeaderAfterLogin style={{ width: '100%' }} />
            ) : (
              <HeaderMenu style={{ width: '100%' }} />
            )}
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <b style={{ fontSize: '16px' }}>我的个人资料</b>
            </Breadcrumb.Item>
            <Breadcrumb.Item>完善个人资料</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className='site-layout-background'
            style={{ padding: '24px 0' }}
          >
            <Content style={{ padding: '0 12px', minHeight: 500 }}>
              Content
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

export default withRouter(Profile)
