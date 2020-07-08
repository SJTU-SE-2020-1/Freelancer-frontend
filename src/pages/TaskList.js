import React from 'react';
import {List} from 'antd';
import {Task} from '../components/Task';
import {withRouter} from "react-router-dom";


class TaskList extends React.Component {

    render() {
        return (
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
        );
    }
}

export  default withRouter(TaskList);