import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import Tooltip from "antd/es/tooltip";
import * as UserService from "../services/UserService";
const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
                          title,
                          editable,
                          children,
                          dataIndex,
                          record,
                          handleSave,
                          ...restProps
                      }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async e => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

class TaskEditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '任务编号',
                dataIndex: 'w_id',
                width: '10%',
                editable: true,
                sorter: {
                    compare: (a, b) => a.w_id - b.w_id,
                    multiple: 2,
                },
            },
            {
                title: '用户编号',
                dataIndex: 'u_id',
                width: '10%',
                editable: true,
                sorter: {
                    compare: (a, b) => a.u_id - b.u_id,
                    multiple: 1,
                },
            },
            {
                title: '任务标题',
                dataIndex: 'title',
                width: '10%',
                editable: true,
            },
            {
                title: '投标截止时间',
                dataIndex: 'bidding_ddl',
                width: '10%',
                editable: true,
            },
            {
                title: '任务完成时间',
                dataIndex: 'finish_ddl',
                width: '10%',
                editable: true,
            },
            {
                title: '任务描述',
                dataIndex: 'description',
                width: '30%',
                ellipsis: {
                    showTitle: false,
                },
                render: description => (
                    <Tooltip placement="topLeft" title={description}>
                        {description}
                    </Tooltip>
                ),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a>删除</a>
                        </Popconfirm>
                    ) : null,
            },
        ];
        this.state = {
            dataSource: [
                {
                    key: '0',
                    w_id: '1',
                    u_id: '58',
                    title: '设计一个Powerpoint模板',
                    bidding_ddl:'2018-09-10 00:00:00',
                    finish_ddl:'2020-06-30 00:00:00',
                    description: '公司简介，包括：工厂设备，质检流程，产品线，实验设备的完整展现，要求设计有新意 技能： 平面设计 , Powerpoint , 演示文稿 查看更多： ppt母版设计 , ppt母版制作 , ppt版式设计 , 如何设计ppt模板 , ppt背景设计 , 如何保存ppt模板 , ppt应用母版 , ppt生成模板 , ppt模板设置 , ppt母版设置 , 旅行规划 , 英语教育机构宣传单页 , 我需要一个 , 平面设计 海报设计 折页 宣传栏 宣传单 x展架 活动物料 展板 主背景 , 机械设计 , 教育',
                },
                {
                    key: '1',
                    w_id: '2',
                    u_id: '62',
                    title: '网页开发',
                    bidding_ddl:'2018-09-10 00:00:00',
                    finish_ddl:'2020-06-30 00:00:00',
                    description: '我需要一个新网站 设计就可以了 网上商店 需要科技感与稳重感并存 技能： 平面设计 , PHP , 网站设计 查看更多： 问卷调查 , 一个仿微信小视频的音视频录制程序 , 英语教育机构宣传单页 , web后台开发 , web开发教程 , 什么是web开发 , web开发入门 , 前端学习路线图 , web前端开发 , web开发python , 网页开发工具 , web开发框架比较 , web开发语言 , php , css , html , javascript , codeigniter , Que',
                },
            ],
            count: 2,
            usersinfo: [],
            pagesize:20,
            pagenum:1,
        };
    }


    changePage=(current,pageSize)=>{
        this.setState({
            pagenum:current,pagesize:pageSize
        });
        const callback=(data)=>{
            if(data.status){
                message.error("获取用户信息失败")
            }
            else{
                message.success("获取用户信息成功")
                this.setState({usersinfo:data});
            }
        }
        UserService.getUsers({"pagenum":current,"size":pageSize},callback);
    }

    componentDidMount() {
        const callback=(data)=>{
            if(data.status){
                message.error("获取用户信息失败")
            }
            else{
                message.success("获取用户信息成功")
                this.setState({usersinfo:data});
            }
        }
        UserService.getUsers({"pagenum":this.state.pagenum,"size":this.state.pagesize},callback);
    }


    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter(item => item.key !== key),
        });
    };



    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                }),
            };
        });
        return (
            <div>

                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{
                        onChange: this.changePage,
                        current:this.state.pagenum,
                        pageSize:this.state.pagesize,
                        total:200
                    }}
                />
            </div>
        );
    }
}

export  default TaskEditableTable;