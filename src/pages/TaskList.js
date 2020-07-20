import React from 'react'
import { List, Layout, Row, Col, Pagination } from 'antd'
import { Task } from '../components/Task'
import { withRouter } from 'react-router-dom'
import HeaderAfterLogin from '../components/HeaderAfterLogin'
import HeaderMenu from '../components/HeaderMenu'

import * as WorkSER from '../services/WorkService'
const { Header, Footer, Content } = Layout

class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      islogin: true,
      pagenum: 1,
      size: 10,
      worklist: []
    }
  }
  callback = (data) => {
    console.log('will: TaskList -> callback -> data', data)
    this.setState({ worklist: data })
  }

  getWorks = () => {
    let json = { pagenum: this.state.pagenum, size: this.state.size }
    WorkSER.getWorks(json, this.callback)
    console.log('will: TaskList -> getWorks -> json', json)
  }

  changePage = (current, pageSize) => {
    console.log(
      'will: TaskList -> changePage -> current, pageSize',
      current,
      pageSize
    )
    // debugger
    this.setState({
      pagenum: current,
      size: pageSize,
      worklist: []
    })
    let json = { pagenum: current, size: pageSize }
    WorkSER.getWorks(json, this.callback)
    console.log('will: TaskList -> changePage -> json', json)

    // this.getWorks()
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log('will: TaskList -> componentDidMount -> user', user)
    if (user == null) {
      this.setState({ islogin: false })
    } else {
      this.setState({ islogin: true })
    }
    this.getWorks()
  }
  render() {
    return (
      <Layout>
        <Header style={{ margin: ' 0px', padding: ' 0px' }}>
          {this.state.islogin ? (
            <HeaderAfterLogin style={{ width: '100%' }} />
          ) : (
            <HeaderMenu />
          )}
        </Header>
        <Content>
          <br />
          <Row justify='center'>
            <Col span={18}>
              <List
                // grid={{ gutter: 10, column: 4 }}
                itemLayout='vertical'
                dataSource={this.state.worklist}
                renderItem={(item) => (
                  <List.Item>
                    <Task info={item} />
                  </List.Item>
                )}
              />
            </Col>
          </Row>
          <Footer>
            <Pagination
              showSizeChanger
              showQuickJumper
              total={500}
              current={this.state.pagenum}
              pageSize={this.state.size}
              onChange={this.changePage}
            />
          </Footer>
        </Content>
        <br />
        <br />
        <Footer style={{ textAlign: 'center' }}>
          ©SJTU
          <br />
          Freelancer
        </Footer>
      </Layout>
    )
  }
}

export default withRouter(TaskList)
