import React from 'react'
import { Layout, Menu, Breadcrumb, Row, Col, Button } from 'antd'
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
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      islogin: true,
      if_employer: false
    }
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
              <Row>
                <Col offset={18}>
                  <Button
                    style={{ background: 'lightblue' }}
                    onClick={() => {
                      let if_employer = !this.state.if_employer
                      this.setState({ if_employer: if_employer })
                    }}
                  >
                    {this.state.if_employer ? '查看威客' : '查看雇主'}
                  </Button>
                </Col>
              </Row>
              <div style={{ margin: '3%' }}>
                {/* <EmployerCard /> */}
                {/* <FreelancerCard /> */}
                {this.state.if_employer ? <EmployerCard /> : <FreelancerCard />}
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

export default withRouter(Profile)
