import React from 'react';
import { Card } from 'antd';
import '../css/Task.css'





export class Task extends React.Component{


    render() {



        return (
                <div class="Task_top">
                <Card title="任务名称" class="Task_Blower" extra={<a href="#">More</a>}>

                        任务内容

                </Card>
                </div>

        );
    }

}
