import React from 'react'
import {
  Descriptions,
  Tag,
  Typography,
  Layout,
  Card,
  Row,
  Col,
  Button
} from 'antd'
import { withRouter } from 'react-router-dom'
import '../css/TaskDetail.css'
import HeaderMenu from '../components/HeaderMenu'
const { Header, Footer, Content } = Layout
import * as WorkSER from '../services/WorkService'
class TaskDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      work_id: 0
    }
  }

  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log('will: TaskList -> componentDidMount -> user', user)
    if (user == null) {
      this.setState({ islogin: false })
    } else {
      this.setState({ islogin: true, u_id: user.u_id })
    }
    let work_id = this.props.match.params.id
    console.log(work_id)
    this.setState({ work_id })
    this.getWorkDettail(work_id)
  }

  getWorkDettail = (work_id) => {
    let json = { w_id: work_id }
    const callback = (data) => {
      console.log('will: TaskDetail -> callback -> data', data)
    }
    console.log('will: TaskDetail -> getWorkDettail -> json', json)
    // WorkSER.getWorkDetail(json, callback)
  }

  applyWork = () => {
    console.log('will: TaskDetail -> postWork ')
    const callback = (data) => {
      console.log('will: TaskDetail -> callback -> data', data)
    }

    let json = { u_id: this.state.u_id, w_id: this.state.work_id }
    console.log('will: TaskDetail -> postWork -> json', json)
    // WorkSER.ApplyWork(json,callback)
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
          <Row justify={'center'} align={'middle'} style={{ marginTop: '7%' }}>
            <Col span={18}>
              <Card bordered={true} hoverable={true} title='任务标题'>
                <Descriptions>
                  <Descriptions.Item label={'任务类型'} span={3}>
                    ""{' '}
                  </Descriptions.Item>
                  <Descriptions.Item label={'浏览数量'} span={3}>
                    ""
                  </Descriptions.Item>
                  <Descriptions.Item label={'任务状态'} span={3}>
                    ""
                  </Descriptions.Item>
                  <Descriptions.Item label={'技能要求'} span={3}>
                    ""
                  </Descriptions.Item>
                  <Descriptions.Item label={'任务描述'} span={3}>
                    <Typography
                      className={'TaskDetail_des'}
                      ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
                    >
                      任务内容 任务内容 任务内容
                      任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容
                    </Typography>
                  </Descriptions.Item>
                  <Button onClick={this.applyWork}>申请</Button>
                </Descriptions>
              </Card>
            </Col>
          </Row>
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

export default withRouter(TaskDetail)
