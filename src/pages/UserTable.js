import React from 'react';
import {  Layout, } from 'antd';
import EditableTable from "../components/EditableTable";
import HeaderAdministrator from "../components/HeaderAdministrator";

const { Header, Footer, Content } = Layout


class UserTable  extends React.Component{
    render() {
        return (
            <Layout>
                <Header style={{ margin: ' 0px', padding: ' 0px' }}>
                    <HeaderAdministrator/>
                </Header>
                <Content>
                <EditableTable/>

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
export default UserTable;