import React from 'react';
import {Row,Col, Menu } from 'antd';
import '../css/index.css'
import logo1 from '../assets/logo1.png'
import {ContainerOutlined,BankTwoTone,BookTwoTone } from '@ant-design/icons';
class HeaderMenu extends React.Component {

    render(){


        return(


                    <Menu theme="light" onClick={this.handleClick}  defaultSelectedKeys={['2']}  mode="horizontal">
                        <Row>
                         <Col span={4}>
                            <img alt="logo1"  className="logo" src={logo1} style={{ height:45 }}/>
                         </Col>
                           <Col span={4}>
                        <Menu.Item key="1" classname="Menu_item" icon={<ContainerOutlined />}>
                            <a href="#">
                                任务列表
                            </a>

                        </Menu.Item>
                           </Col>
                           <Col span={4} offset={8}>
                        <Menu.Item key="2" classname="Menu_item"  icon={<BankTwoTone />}>
                            <a href="#">
                                登录
                            </a>

                        </Menu.Item>
                           </Col>
                           <Col span={4}>
                        <Menu.Item key="3" classname="Menu_item"  icon={<BookTwoTone />}>
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