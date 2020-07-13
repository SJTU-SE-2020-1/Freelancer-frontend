import React from 'react'
import { Layout, Col, Card, Row, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import '../css/home.css'
import HeaderMenu from '../components/HeaderMenu'
import HeaderAfterLogin from '../components/HeaderAfterLogin'
import ChooseSkill from '../components/chooseSkill'
import work from '../assets/work.png'
const { Header, Footer, Content } = Layout

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
            {/* <ChooseSkill /> */}
            <Col span={14}>
              <Card
                width='80%'
                title={<b>最近的项目</b>}
                extra={<a href='#'>View all →</a>}
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
