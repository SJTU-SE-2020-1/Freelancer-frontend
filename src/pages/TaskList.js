import React from 'react';
import {List, Layout} from 'antd';
import {Task} from '../components/Task';
import {withRouter} from "react-router-dom";
import HeaderMenu from '../components/HeaderMenu';
const { Header, Footer,  Content } = Layout;

class TaskList extends React.Component {

    render() {
        return (
            <Layout>
                <Header style={{margin:" 0px",padding:" 0px"}} >
                        <HeaderMenu  style={{width:"100%"}}/>
                </Header>
                <Content>
                <List
                grid={{gutter: 10, column: 4}}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 16,
                }}

                renderItem={item => (
                    <List.Item>
                        <Task info={item} />
                    </List.Item>
                )}
            />
                </Content>
                <br/>
                    <br/>
                    <Footer style={{ textAlign: 'center' }}>
                                ©SJTU<br/>Freelancer
                    </Footer>
            </Layout>
            
        );
    }
}

export  default withRouter(TaskList);