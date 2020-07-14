import React from 'react'
import { Layout, Col, Card, Row, Button, Divider } from 'antd'
import { withRouter } from 'react-router-dom'
import '../css/home.css'
import HeaderMenu from '../components/HeaderMenu'
import HeaderAfterLogin from '../components/HeaderAfterLogin'
import ChooseSkill from '../components/chooseSkill'
import work from '../assets/work.png'
import vip from '../assets/vip.png'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from '@ant-design/icons'
const { Header, Footer, Content } = Layout

const user = {
  name: 'xiaoming',
  avatar: '',
  money: 0.0
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      islogin: true
    }
  }

  render() {
    return (
      <div>
        <Layout>
          <Header style={{ margin: ' 0px', padding: ' 0px' }}>
            {this.state.islogin ? (
              <HeaderAfterLogin style={{ width: '100%' }} />
            ) : (
              <HeaderMenu style={{ width: '100%' }} />
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
                    <Button type='primary' size={'large'}>
                      <b>浏览项目</b>
                    </Button>
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
                          {'    ' + user.name}
                        </b>
                        <br />
                        <span style={{ color: 'white', fontSize: '22px' }}>
                          {'    @' + user.name}
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
                        <p>{'￥ ' + user.money.toFixed(2) + ' 元'}</p>
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
      </div>
    )
  }
}

export default withRouter(Home)
