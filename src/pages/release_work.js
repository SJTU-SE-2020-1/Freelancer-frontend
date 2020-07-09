import React from 'react';
import ReleaseForm from "../components/ReleaseForm";
import { Layout} from "antd";
import {withRouter} from "react-router-dom";
import "../css/form.css";
import HeaderMenu from '../components/HeaderMenu';
const { Header, Footer,  Content } = Layout;

class ReleaseWork extends React.Component{

    render() {
        return (
            <div>
                <Layout>
                    <Header style={{margin:" 0px",padding:" 0px"}} >
                        <HeaderMenu  style={{width:"100%"}}/>
                    </Header>
                    <Content>
                        <div className="lg-page">
                            <div className="lg-container">
                                <div className="lg-box">
                                    <h1 className="lg-title">发布任务</h1>
                                    <div className="lg-content">
                                        <ReleaseForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                    <br/>
                    <br/>
                    <Footer style={{ textAlign: 'center' }}>
                                ©SJTU<br/>Freelancer
                    </Footer>
                   
                </Layout>
                
            </div>
         
        )
    }
}

export default withRouter(ReleaseWork);