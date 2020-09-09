import React from 'react'
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Button,
  Typography,
  Divider
} from 'antd'

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons'
import '../css/profile.css'
import { withRouter } from 'react-router-dom'
import HeaderMenu from '../components/HeaderMenu'
import HeaderAfterLogin from '../components/HeaderAfterLogin'
import EmployerCard from '../components/employercard'
import FreelancerCard from '../components/freelancercard'
import PostedWork from '../components/PostedWorkList'
import FinishedWork from '../components/FinishWork'
import MyReleaseWork from '../components/MyReleaseWork'
const { SubMenu } = Menu
const { Title } = Typography
const { Header, Content, Footer, Sider } = Layout

class MyWork extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      if_employer: false,
      E_current: '2',
      F_current: '5',
      user: {}
    }
  }

  handleE_Click = (e) => {
    console.log('will: MyWork -> handleE_Click -> e', e)
    this.setState({ E_current: e.key })
  }
  handleF_Click = (e) => {
    console.log('will: MyWork -> handleF_Click -> e', e)
    this.setState({ F_current: e.key })
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({ user: user })
  }
  render() {
    return (
      <Layout>
        <Header className='header' style={{ margin: ' 0px', padding: ' 0px' }}>
          <div>
            <HeaderAfterLogin
              style={{ width: '100%' }}
              user={this.state.user}
            />
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Row align='middle'>
            <Col offset={1}>
              <b style={{ fontSize: '32px' }}>项目</b>
            </Col>
            <Col offset={15}>
              <div
                style={{
                  borderRadius: '30px',
                  border: '1px solid '
                }}
              >
                <Button
                  type={this.state.if_employer ? 'primary' : 'text'}
                  shape='round'
                  onClick={() => {
                    this.setState({ if_employer: true })
                  }}
                >
                  雇主
                </Button>
                <Button
                  type={!this.state.if_employer ? 'primary' : 'text'}
                  shape='round'
                  onClick={() => {
                    this.setState({ if_employer: false })
                  }}
                >
                  Freelancer
                </Button>
              </div>
            </Col>
          </Row>

          <Layout
            className='site-layout-background'
            style={{ padding: '24px 0' }}
          >
            <Content style={{ padding: '0 12px', minHeight: 500 }}>
              {this.state.if_employer ? (
                <Menu
                  onClick={this.handleE_Click}
                  selectedKeys={[this.state.E_current]}
                  mode='horizontal'
                >
                  <Menu.Item key='1'>打开</Menu.Item>
                  <Menu.Item key='2'>进行中的工作</Menu.Item>
                  <Menu.Item key='3'>过去的项目</Menu.Item>
                </Menu>
              ) : (
                <Menu
                  onClick={this.handleF_Click}
                  selectedKeys={[this.state.F_current]}
                  mode='horizontal'
                >
                  <Menu.Item key={4}>活跃的项目</Menu.Item>
                  <Menu.Item key={5}>已申请的项目</Menu.Item>
                  <Menu.Item key={6}>进行中的项目</Menu.Item>
                  <Menu.Item key={7}>完成的项目</Menu.Item>
                </Menu>
              )}

              <div style={{ margin: '3%' }}>
                {this.state.if_employer ? (
                  <MyReleaseWork />
                ) : this.state.F_current == 5 ? (
                  <PostedWork />
                ) : (
                  <FinishedWork />
                )}
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©SJTU
          <br />
          Freelancer
        </Footer>
      </Layout>
    )
  }
}

export default withRouter(MyWork)
