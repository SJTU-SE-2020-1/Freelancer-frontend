import React from 'react'
import HeaderAfterLogin from '../components/HeaderAfterLogin'
import HeaderAdministrator from '../components/HeaderAdministrator'
import { withRouter, Link } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'
import EditUserTable from '../components/EditUserTable'
const { Header, Footer, Content } = Layout
class ManageUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    let u = JSON.parse(localStorage.getItem('user'))
    console.log('will: ManageUser -> componentDidMount -> u', u)
    this.setState({ user: u })
  }
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <HeaderAdministrator
              style={{ width: '100%' }}
              user={this.state.user}
            />
          </Header>

          <Content
            style={{
              backgroundImage: 'url(' + '../assets/profile.gif' + ')'
            }}
          >
            <br />
            <Row justify='center'>
              <Col span={18}>
                <EditUserTable />
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©SJTU
            <br />
            Freelancer
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default withRouter(ManageUser)
