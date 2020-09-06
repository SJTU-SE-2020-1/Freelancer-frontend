import React from 'react'
import HeaderAdministrator from '../components/HeaderAdministrator'
import { withRouter, Link } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'

import EditTaskTable from '../components/EditTasktable'
const { Header, Footer, Content } = Layout
class ManageTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user: {} }
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
          <br />
          <Content>
            <Row justify='center'>
              <Col span={18}>
                <EditTaskTable u_id={this.state.user.u_id} />
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default withRouter(ManageTask)
