import React from 'react';
import { Layout} from "antd";
import {withRouter} from "react-router-dom";
import "../css/home.css";
import HeaderMenu from '../components/HeaderMenu';
const { Header, Footer,  Content } = Layout;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }


    render() {
        return (
            <div>
                <Layout>
                      <Header style={{margin:" 0px",padding:" 0px"}} >
                        <HeaderMenu  style={{width:"100%"}}/>
                      </Header>
                        <Content className={"homecontent"} style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 500,
                        }}>
                            
                            
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

export default withRouter(Home);
