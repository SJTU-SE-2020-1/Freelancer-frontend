import React from 'react';
import { Descriptions, Tag,Typography, Layout,Card,Row, Col } from 'antd';
import {withRouter} from "react-router-dom";
import '../css/TaskDetail.css';
import HeaderMenu from '../components/HeaderMenu';
const { Header, Footer,  Content } = Layout;

class TaskDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentWillMount() {
    
        let work_id=this.props.match.params.id ;
        console.log(work_id);
       
    }

    render() {

        return (
            <Layout>
                 <Header style={{margin:" 0px",padding:" 0px"}} >
                        <HeaderMenu  style={{width:"100%"}}/>
                </Header>
                <Content>
                    <Row justify={"center"} align={"middle"}style={{marginTop:"7%"}}>
                        <Col span={18}>
                        <Card bordered={true} hoverable={true} title="任务标题" >
                    <Descriptions>
                            <Descriptions.Item label={"任务类型"} span={3}>"" </Descriptions.Item>
                            <Descriptions.Item label={"浏览数量"} span={3}>""</Descriptions.Item>
                            <Descriptions.Item label={"任务状态"} span={3}>""</Descriptions.Item>
                            <Descriptions.Item label={"技能要求"} span={3}>""</Descriptions.Item>
                            <Descriptions.Item label={"任务描述"} span={3}>

                                <Typography className={"TaskDetail_des"} ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>

                                    任务内容
                                    任务内容
                                    任务内容
                                    任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容
                                </Typography>
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                        </Col>
                    </Row>
                </Content>
                <br/>
                        <br/>
                        <Footer style={{ textAlign: 'center' }}>
                                ©SJTU<br/>Freelancer
                        </Footer>
            </Layout>
            


        )

    }

}

export  default withRouter(TaskDetail);