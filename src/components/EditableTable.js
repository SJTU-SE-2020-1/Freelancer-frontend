import React from 'react';
import { Table,  Popconfirm, Button, } from 'antd';
import * as UserService from "../services/UserService";


class EditableTable extends React.Component {
    dataSource= [
        {
            u_id: '0',
            u_name: 'Edward King 0',
            u_type: '0',
            is_banned: '0',
        },
        {
            u_id: '1',
            u_name: 'Edward King 0',
            u_type: '0',
            is_banned: '1',
        },
        {
            u_id: '2',
            u_name: 'Edward King 0',
            u_type: '1',
            is_banned: '0',
        },
        {
            u_id: '3',
            u_name: 'Edward King 0',
            u_type: '1',
            is_banned: '0',
        },
        {
            u_id: '4',
            u_name: 'Edward King 0',
            u_type: '1',
            is_banned: '0',
        },
        {
            u_id: '5',
            u_name: 'Edward King 0',
            u_type: '1',
            is_banned: '0',
        },
        {
            u_id: '6',
            u_name: 'Edward King 0',
            u_type: '1',
            is_banned: '0',
        },   {
            u_id: '7',
            u_name: 'Edward King 0',
            u_type: '1',
            is_banned: '0',
        },
        {
            u_id: '8',
            u_name: 'Edward King 0',
            u_type: '1',
            is_banned: '0',
        },
        {
            u_id: '9',
            u_name: 'Edward King 0',
            u_type: '1',
            is_banned: '0',
        },
        {
            u_id: '10',
            u_name: 'Edward King 0',
            u_type: '1',
            is_banned: '0',
        },   {
            u_id: '11',
            u_name: 'Edward King 0',
            u_type: '1',
            is_banned: '0',
        },
        {
            u_id: '12',
            u_name: 'Edward King 0',
            u_type: '1',
            is_banned: '0',
        },

    ]

    columns= [
           {
               title: '用户编号',
               dataIndex: 'u_id',
               width: '15%',
               editable: true,
               defaultSortOrder: 'ascend',
               sorter: (a, b) => a.u_id - b.u_id,
           },
           {
               title: '用户名',
               dataIndex: 'u_name',
               width: '25%',
               editable: true,

           },
           {
               title: '用户类别',
               dataIndex: 'u_type',
               width: '10%',
               editable: true,
               render: (_, record) => {
                   if (record.u_type == 0) {
                       return (<p>普通用户</p>)
                   } else if (record.u_type == 1) {
                       return (<p>管理员</p>)
                   }
               }
           },

           {
               title: '是否封禁',
               dataIndex: 'is_banned',
               width: '10%',
               editable: true,
               render: (_, record) => {
                   if (record.is_banned == 0) {
                       return (<p>正在启用</p>)
                   } else if (record.is_banned == 1) {
                       return (<p>已封禁</p>)
                   }
               }
           },

           {
               title: '操作',
               dataIndex: 'operation',
               render: (_, record) => {
                   let user = JSON.parse(localStorage.getItem("user"));
                   let u_id = user.u_id;
                   let u_name = user.name;
                   return (
                       <span>
                            <Popconfirm
                                disabled={record.u_type > 0 || record.u_id === u_id}
                                title={"确定要设置 " + record.u_name + " 权限为管理员？"} onConfirm={() => {
                                // this.onChangeType(record.u_id, 1)
                                this.handleChangeType(record.u_id, 1)
                            }}>
                              <Button disabled={record.u_type > 0 || record.u_id === u_id} style={{
                                  float: "right"
                              }}>
                                  升级成管理员
                              </Button>
                        </Popconfirm>
                        <Popconfirm
                            disabled={record.u_type === 0 || record.u_id === u_id}
                            title={"确定要设置 " + record.u_name + " 权限为普通用户？"} onConfirm={() => {
                            // this.onChangeType(record.u_id, 0)
                            this.handleChangeType(record.u_id, 0)
                        }}>
                              <Button disabled={record.u_type === 0 || record.u_id === u_id} style={{
                                  float: "right"
                              }}>
                                  设置为普通用户
                              </Button>
                        </Popconfirm>
                            <Popconfirm
                                disabled={record.is_banned === 0 || record.u_id === u_id}
                                title={"确定要启用 " + u_name + " ？"} onConfirm={() => {
                                // this.onChangeBanned(record.u_id, 0)
                                this.handleChangeBanned(record.u_id, 0)
                            }}>
                              <Button disabled={record.is_banned === 0 || record.u_id === u_id} style={{
                                  float: "right"
                              }}>
                                  启用
                              </Button>
                        </Popconfirm>
                          <Popconfirm
                              disabled={record.is_banned > 0 || record.u_id === u_id}
                              title="确定要封禁此用户?" onConfirm={() => {
                              // this.onChangeBanned(record.u_id, 1)
                              this.handleChangeBanned(record.u_id, 1)
                          }}>
                              <Button disabled={record.is_banned > 0 || record.u_id === u_id} style={{
                                  float: "right"
                              }}>
                                  禁用
                              </Button>
                        </Popconfirm>


                    </span>
                   )
               }
           },
       ];
    state = { usersinfo: [],
        pagesize:10,
        pagenum:1,
    }

    handleChangeType=(u_id,type)=>
    {
        const dataSource = [...this.dataSource];
        const index = dataSource.findIndex(item=>u_id===item.u_id);
        const item = dataSource[index];
        this.setState({dataSource:item.u_type=type})
    }


    handleChangeBanned=(u_id,banned)=>
    {
        const dataSource = [...this.dataSource];
        const index = dataSource.findIndex(item=>u_id===item.u_id);
        const item = dataSource[index];
        this.setState({dataSource:item.is_banned=banned})
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

    onChangeType=(u_id,type)=>{
        const callback=(data)=>{
            if(data.status){
                message.error("修改用户权限失败")
            }
            else{
                message.success("修改用户权限成功")
                this.changePage(1,20);
            }
        }
        let json={u_id:u_id,u_type:type};
        UserService.changeType(json,callback);
    };
    onChangeBanned=(u_id,is_banned)=>{
        const callback=(data)=>{
            if(data.status){
                message.error("修改用户权限失败")
            }
            else{
                message.success("修改用户权限成功")
                this.changePage(1,20);
            }
        }
        let json={u_id:u_id,u_banned:is_banned};
        UserService.changeType(json,callback);
    };
   render(){
       return (<Table
           bordered
           components={this.components}
           columns={this.columns}
           dataSource={this.dataSource}
           pagination={{
               onChange: this.changePage,
               current:this.state.pagenum,
               pageSize:this.state.pagesize,
               total:200
           }}
       />);
   }
};

export default EditableTable;
