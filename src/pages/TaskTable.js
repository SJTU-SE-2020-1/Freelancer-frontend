import React from 'react';
import {  Layout, } from 'antd';
import TaskEditableTable from "../components/TaskEditableTable";
import HeaderAdministrator from "../components/HeaderAdministrator";


const { Header, Footer, Content } = Layout


class TaskTable  extends React.Component{
    render() {
        return (
            <Layout>
                <Header style={{ margin: ' 0px', padding: ' 0px' }}>
                    <HeaderAdministrator/>
                </Header>
                <Content>
                <TaskEditableTable/>

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
export default TaskTable;