import React from 'react';
import { Descriptions, Tag,Typography } from 'antd';
import '../css/TaskDetail.css'
class TaskDetail extends React.Component{


    render() {



        return (
            <div className={"TaskDetail_mainDiv"}>
                <div className={"TaskDetail_top"} >
                    <Tag color="#108ee9" className={"TaskDetail_tag"}>任务名称</Tag>
                </div>

                    <div className={"TaskDetail_state"}>
                        <Descriptions>
                            <Descriptions.Item label={"任务类型"} span={3}>"" </Descriptions.Item>
                            <Descriptions.Item label={"所需人数"} span={3}>""</Descriptions.Item>
                            <Descriptions.Item label={"浏览数量"} span={3}>""</Descriptions.Item>
                            <Descriptions.Item label={"任务状态"} span={3}>""</Descriptions.Item>
                            <Descriptions.Item label={"技能要求"} span={3}>""</Descriptions.Item>
                            <Descriptions.Item label={"任务描述"} span={3}>

                                <Typography className={"TaskDetail_des"} ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>

                                    任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容
                                </Typography>
                            </Descriptions.Item>
                        </Descriptions>
                    </div>

            </div>


        )

    }

}

export  default TaskDetail;