import React from 'react';
import {Row,Col, Menu, Button } from 'antd';
import logo from '../assets/whale.png';
import font from "../assets/font.png";
import {Link} from "react-router-dom";
import {ContainerOutlined,UserOutlined,ProfileOutlined,QuestionCircleOutlined } from '@ant-design/icons';
class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        
        }
    }

    render(){
        return(
                    <Menu theme="dark"   mode="horizontal" >
                        <Row>
                            <Col offset={1}  span={3}>
                                <Link to={"/"}>
                                    <img alt="logo"  className="logo" src={logo} style={{ height:45 }}/>
                                    <img alt="Font"  className="logo" src={font} style={{ height:45 }}/>
                                </Link>
                            </Col>
                            <Col  offset={1} span={2}>
                                <Menu.Item key="1" classname="Menu_item" 
                                // icon={<QuestionCircleOutlined />}
                                >
                                    <Link to={"howtowork"}>
                                        如何工作
                                    </Link>
                                </Menu.Item>
                            </Col>
                            <Col  span={2}>
                                <Menu.Item key="2" classname="Menu_item" 
                                // icon={<ContainerOutlined />}
                                >
                                    <Link to={"tasklist"}>
                                        浏览工作
                                    </Link>
                                </Menu.Item>
                            </Col>
                            <Col span={1} offset={8}>
                                <Menu.Item key="3" classname="Menu_item" 
                                //  icon={<UserOutlined />}
                                 >
                                    <a href="#">
                                        登录
                                    </a>
                                </Menu.Item>
                           </Col>
                           <Col span={1}>
                                <Menu.Item key="4" classname="Menu_item"  
                                // icon={<ProfileOutlined />}
                                >
                                    <a href="#">
                                        注册
                                    </a>
                                </Menu.Item>
                           </Col>
                           <Col span={3}>
                                <Menu.Item key="5" classname="Menu_item">
                                    <Link to="">
                                        <Button type="primary" shape="round">
                                            发布项目
                                        </Button>
                                    </Link>
                                </Menu.Item>
                           </Col>
                        </Row>
                    </Menu>


        );
    }
}

export  default HeaderMenu;