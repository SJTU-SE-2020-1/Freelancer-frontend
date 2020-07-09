import React from 'react';
import {Row,Col, Menu } from 'antd';
import logo from '../assets/whale.png';
import font from "../assets/font.png";
import {Link} from "react-router-dom";
import {ContainerOutlined,UserOutlined,ProfileOutlined } from '@ant-design/icons';
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
                         <Col offset={1} span={4}>
                             <Link to={"/"}>
                                <img alt="logo"  className="logo" src={logo} style={{ height:45 }}/>
                                <img alt="Font"  className="logo" src={font} style={{ height:45 }}/>
                             </Link>
                         </Col>
                           <Col  span={4}>
                        <Menu.Item key="1" classname="Menu_item" icon={<ContainerOutlined />}>
                            <a href="#">
                                任务列表
                            </a>

                        </Menu.Item>
                           </Col>
                           <Col span={2} offset={10}>
                        <Menu.Item key="2" classname="Menu_item"  icon={<UserOutlined />}>
                            <a href="#">
                                登录
                            </a>

                        </Menu.Item>
                           </Col>
                           <Col span={2}>
                        <Menu.Item key="3" classname="Menu_item"  icon={<ProfileOutlined />}>
                            <a href="#">
                                注册
                            </a>
                        </Menu.Item>
                           </Col>
                        </Row>
                    </Menu>


        );
    }
}

export  default HeaderMenu;