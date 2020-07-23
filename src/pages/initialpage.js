import React from 'react'
import { Layout, Col, Card, Row, Button, Divider,Avatar } from 'antd'
import { withRouter, Link } from 'react-router-dom'
const {Meta} = Card;
import HeaderMenu from "../components/HeaderMenu";
import * as UserSER from '../services/UserService'
import browse from '../assets/browse.svg';
import choose from '../assets/choose.svg';
import live from '../assets/live.svg';
import pay from '../assets/pay.svg';
import pay2 from '../assets/pay2.svg';
import post from '../assets/post.svg';
import support from '../assets/support.svg';
import track from '../assets/track.svg';
import view from '../assets/view.svg';
import graphic from '../assets/graphic.jpg';
import logo from '../assets/logo.jpg';
import marketing from '../assets/marketing.jpg';
import mobile from '../assets/mobile.jpg';
import writing from '../assets/writing.jpg';
import website from '../assets/website.jpg';



const { Header, Footer, Content } = Layout

class InitialPage  extends React.Component {


    render() {
        return (
            <Layout>
                <Header style={{ margin: ' 0px', padding: ' 0px' }}>
                    <HeaderMenu style={{ width: '100%' }}  />
                </Header>
                <Content

                    className={'initialcontent'}
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 500
                    }}
                >
                    <Row>

                            <b style={{fontFamily: '华文仿宋',fontSize:30}}>Need something done?</b>


                    </Row>
                    <Row gutter={16} >
                       <Col span={8}>
                         <Card
                            hoverable
                            style={{width:'100%',height:'100%'}
                            }
                            cover={<img src={post}/>}
                         >
                             <Meta title={"Post a job"} description={"It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes."}/>
                         </Card>
                       </Col>
                          <Col span={8}>
                              <Card
                                  hoverable
                                  style={{width:'100%',height:'100%'}}
                                  cover={<img src={choose}/>}
                              >
                                  <Meta title={"Choose freelancers"} description={"Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development, virtual assistants, product manufacturing, and graphic design (and a whole lot more)."}/>
                              </Card>
                          </Col>
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{width:'100%',height:'100%'}}
                                cover={<img src={pay}/>}
                            >
                                <Meta title={"Pay safely"} description={"With secure payments and thousands of reviewed professionals to choose from, Freelancer.com is the simplest and safest way to get work done online."}/>
                            </Card>
                        </Col>
                    </Row>
                   <br/>

                    <Row>

                        <b style={{fontFamily: '华文仿宋',fontSize:30}}>What's great about it?</b>


                    </Row>
                    <Row style={{height:100}}>
                    <Col span={12}>
                        <Card
                            hoverable
                            style={{width:'100%',height:'100%'}}
                        >
                         <Meta
                         avatar={<Avatar src={browse}/>}
                         title={"Browse portfolios"}
                         description={"Find professionals you can trust by browsing their samples of previous work and reading their profile reviews."}
                         >
                         </Meta>
                        </Card>
                    </Col>
                        <Col span={12}>
                            <Card
                                hoverable
                                style={{width:'100%',height:'100%'}}
                            >
                                <Meta
                                    avatar={<Avatar src={view}/>}
                                    title={"View bids"}
                                    description={"Receive free bids from our talented freelancers within seconds."}
                                >
                                </Meta>
                            </Card>
                        </Col>

                    </Row>
                    <Row>
                        <Col span={12}>
                            <Card
                                hoverable
                                style={{width:'100%',height:'100%'}}
                            >
                                <Meta
                                    avatar={<Avatar src={live}/>}
                                    title={"Live chat"}
                                    description={"You can live chat with your freelancers to get constant updates on the progress of your work."}
                                >
                                </Meta>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                hoverable
                                style={{width:'100%',height:'100%'}}
                            >
                                <Meta
                                    avatar={<Avatar src={pay2}/>}
                                    title={"Pay for quality"}
                                    description={" Pay for work when it has been completed and you're 100% satisfied."}
                                >
                                </Meta>
                            </Card>
                        </Col>

                    </Row>
                    <Row>
                        <Col span={12}>
                            <Card
                                hoverable
                                style={{width:'100%',height:'100%'}}
                            >
                                <Meta
                                    avatar={<Avatar src={track}/>}
                                    title={"Track progress"}
                                    description={"Keep up-to-date and on-the-go with our time tracker, and mobile app."}
                                >
                                </Meta>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                hoverable
                                style={{width:'100%',height:'100%'}}
                            >
                                <Meta
                                    avatar={<Avatar src={support}/>}
                                    title={"24/7 support"}
                                    description={"We're always here to help. Our support consists of real people who are available 24/7."}
                                >
                                </Meta>
                            </Card>
                        </Col>

                    </Row>

                    <br/>

                    <Row>

                        <b style={{fontFamily: '华文仿宋',fontSize:30}}>Here are some of our most popular projects:</b>


                    </Row>

                    <Row gutter={16}>
                     <Col span={8}>
                         <Card
                             hoverable
                             style={{width:'100%',height:'100%'}}
                             cover={<img src={website}/>}
                             actions={
                             [
                                 <Link to={'/release'}>
                                     <Button type='primary' size={'large'}>
                                         <b>Post a project like this</b>
                                     </Button>
                                 </Link>
                                 ]
                             }

                         >
                         <Meta title={"Website Development"} description={"From 300 RMB"}>
                         </Meta>
                         </Card>
                     </Col>

                        <Col span={8}>
                            <Card
                                hoverable
                                style={{width:'100%',height:'100%'}}
                                cover={<img src={graphic}/>}
                                actions={
                                    [
                                        <Link to={'/release'}>
                                            <Button type='primary' size={'large'}>
                                                <b>Post a project like this</b>
                                            </Button>
                                        </Link>
                                    ]
                                }

                            >
                                <Meta title={"Graphic Design"} description={"From 100 RMB"}>
                                </Meta>
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card
                                hoverable
                                style={{width:'100%',height:'100%'}}
                                cover={<img src={logo}/>}
                                actions={
                                    [
                                        <Link to={'/release'}>
                                            <Button type='primary' size={'large'}>
                                                <b>Post a project like this</b>
                                            </Button>
                                        </Link>
                                    ]
                                }

                            >
                                <Meta title={"Logo Design"} description={"From 50 RMB"}>
                                </Meta>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{width:'100%',height:'100%'}}
                                cover={<img src={marketing}/>}
                                actions={
                                    [
                                        <Link to={'/release'}>
                                            <Button type='primary' size={'large'}>
                                                <b>Post a project like this</b>
                                            </Button>
                                        </Link>
                                    ]
                                }

                            >
                                <Meta title={"Marketing"} description={"From 150 RMB"}>
                                </Meta>
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card
                                hoverable
                                style={{width:'100%',height:'100%'}}
                                cover={<img src={writing}/>}
                                actions={
                                    [
                                        <Link to={'/release'}>
                                            <Button type='primary' size={'large'}>
                                                <b>Post a project like this</b>
                                            </Button>
                                        </Link>
                                    ]
                                }

                            >
                                <Meta title={"Writing"} description={"From 50 RMB"}>
                                </Meta>
                            </Card>
                        </Col>

                        <Col span={8}>
                            <Card
                                hoverable
                                style={{width:'100%',height:'100%'}}
                                cover={<img src={mobile}/>}
                                actions={
                                    [
                                        <Link to={'/release'}>
                                            <Button type='primary' size={'large'}>
                                                <b>Post a project like this</b>
                                            </Button>
                                        </Link>
                                    ]
                                }

                            >
                                <Meta title={"Mobile App"} description={"From 50 RMB/hour"}>
                                </Meta>
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

export default withRouter(InitialPage);