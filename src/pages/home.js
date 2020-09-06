import React from 'react'
import { Layout, Col, Card, Row, Button, Divider, message } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import '../css/home.css'
import HeaderAfterLogin from '../components/HeaderAfterLogin'
// import ChooseSkill from '../components/chooseSkill'
import work from '../assets/work.png'
import vip from '../assets/vip.png'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons'
import * as UserSER from '../services/UserService'
import HeaderAdministrator from '../components/HeaderAdministrator'
const { Header, Footer, Content } = Layout

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentWillMount() {
    let u = JSON.parse(localStorage.getItem('user'))
    console.log('will: Home -> componentDidMount -> u', u)
    if (u == null) {
      let auser = {
        name: 'xiaoming',
        avatar: '',
        money: 0.0
      }
      this.setState({ user: auser })
    } else {
      console.log('will: Home -> componentDidMount -> user', u)
      let u_name = u.name
      console.log('will: Home -> componentDidMount -> u_name', u_name)
      if (u.phone == null) {
        const callback = (data) => {
          if (data.status == null) {
            //获取数据成功
            let user = data
            delete user.password
            console.log('will: Home -> callback -> user', user)
            if (user.avatar == null) {
              user['avatar'] =
                'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1595389843&t=d4524c4d137755de6e12cbe12545d4f0'
            }
            localStorage.removeItem('user')
            user['money'] = 20.0
            localStorage.setItem('user', JSON.stringify(user))
            console.log('will: Home -> callback -> user', user)
            this.setState({ user: user })
          }
        }
        let json = { name: u_name }

        console.log('will: Home -> componentDidMount -> json', json)
        UserSER.getuserInfo(json, callback)
      } else this.setState({ user: u })
    }
  }

  render() {
    return (
      <Layout>
        <Header style={{ margin: ' 0px', padding: ' 0px' }}>
          {this.state.user.type == null ? null : this.state.user.type == 0 ? (
            <HeaderAfterLogin
              style={{ width: '100%' }}
              user={this.state.user}
            />
          ) : (
            <HeaderAdministrator
              style={{ width: '100%' }}
              user={this.state.user}
            />
          )}
        </Header>
        <Content
          className={'homecontent'}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 500
          }}
        >
          <Row>
            <Col span={14}>
              <Card
                width='80%'
                title={<b>最近的项目</b>}
                extra={<a href='#'>View all →</a>}
                hoverable={true}
              >
                <Row justify='center'>
                  <img src={work} className='workimg' />
                </Row>
                <br />
                <Row justify='center'>开始在您适合的项目上竞标。</Row>
                <br />
                <Row justify='center'>
                  <Link to={'/tasklist'}>
                    <Button type='primary' size={'large'}>
                      <b>浏览项目</b>
                    </Button>
                  </Link>
                </Row>
              </Card>
            </Col>
            <Col span={8} offset={1}>
              <Card
                hoverable={true}
                actions={[
                  <SettingOutlined key='setting' />,
                  <EditOutlined key='edit' />,
                  <EllipsisOutlined key='ellipsis' />
                ]}
                cover={
                  <div>
                    <div
                      style={{
                        background: '#0055bb',
                        whiteSpace: 'pre-wrap'
                      }}
                    >
                      <span>{'            '}</span>
                      <br />
                      <span style={{ fontSize: '15px', color: 'white' }}>
                        {'    ' + '欢迎回来'}
                      </span>
                      <br />
                      <b style={{ color: 'white', fontSize: '22px' }}>
                        {'    ' + this.state.user.name}
                      </b>
                      <br />
                      <span style={{ color: 'white', fontSize: '22px' }}>
                        {'    @' + this.state.user.name}
                      </span>
                      <b
                        style={{
                          color: 'white',
                          fontSize: '12px',
                          float: 'right',
                          margin: '2px'
                        }}
                      >
                        {'FREELANCER     '}
                      </b>
                      <br />
                      <p>{'            '}</p>
                    </div>
                    <Row justify='center'>
                      <img
                        src={vip}
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '90%',
                          maxHeight: '100%'
                        }}
                      />
                    </Row>

                    <Divider />
                    <div
                      style={{
                        whiteSpace: 'pre-wrap',
                        margin: '5px'
                      }}
                    >
                      <b style={{ fontSize: '18px' }}>{'  ' + '账户余额'}</b>
                      <a href='#' style={{ float: 'right' }}>
                        View all →
                      </a>
                      <br />
                      <br />
                      <p>
                        {'￥ ' +
                          (this.state.user.money
                            ? this.state.user.money.toFixed(2)
                            : (0.0).toFixed(2)) +
                          ' 元'}
                      </p>
                    </div>
                  </div>
                }
              >
                <b
                  style={{
                    fontFamily: '华文行楷',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {'     沙漠之所以美丽 是因为它在某个地方隐藏着一口井。'}
                  <br />
                  <span style={{ float: 'right' }}>——《小王子》</span>
                </b>
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

export default withRouter(Home)
