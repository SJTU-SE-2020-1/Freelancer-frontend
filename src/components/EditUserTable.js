import React from 'react'
import { Table, Popconfirm, Button, message, Card, Input } from 'antd'
import * as UserService from '../services/UserService'
const { Search } = Input
class EditUserTable extends React.Component {
  columns = [
    {
      title: '用户编号',
      dataIndex: 'u_id',
      width: '15%',
      editable: true,
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.u_id - b.u_id
    },
    {
      title: '用户名',
      dataIndex: 'name',
      width: '25%',
      editable: true
    },
    {
      title: '用户类别',
      dataIndex: 'type',
      width: '10%',
      editable: true,
      render: (_, record) => {
        if (record.type == 0) {
          return <p>普通用户</p>
        } else if (record.type == 1) {
          return <p>管理员</p>
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
          return <p>正在启用</p>
        } else if (record.is_banned == 1) {
          return <p>已封禁</p>
        }
      }
    },

    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        let user = JSON.parse(localStorage.getItem('user'))
        let u_id = user.u_id
        let u_name = user.name
        return (
          <span>
            <Popconfirm
              disabled={record.u_type > 0 || record.u_id === u_id}
              title={'确定要设置 ' + record.u_name + ' 权限为管理员？'}
              onConfirm={() => {
                // this.onChangeType(record.u_id, 1)
                this.handleChangeType(record.u_id, 1)
              }}
            >
              <Button
                disabled={record.u_type > 0 || record.u_id === u_id}
                style={{
                  float: 'right'
                }}
              >
                升级成管理员
              </Button>
            </Popconfirm>
            <Popconfirm
              disabled={record.u_type === 0 || record.u_id === u_id}
              title={'确定要设置 ' + record.u_name + ' 权限为普通用户？'}
              onConfirm={() => {
                // this.onChangeType(record.u_id, 0)
                this.handleChangeType(record.u_id, 0)
              }}
            >
              <Button
                disabled={record.u_type === 0 || record.u_id === u_id}
                style={{
                  float: 'right'
                }}
              >
                设置为普通用户
              </Button>
            </Popconfirm>
            <Popconfirm
              disabled={record.is_banned === 0 || record.u_id === u_id}
              title={'确定要启用 ' + u_name + ' ？'}
              onConfirm={() => {
                // this.onChangeBanned(record.u_id, 0)
                this.handleChangeBanned(record.u_id, 0)
              }}
            >
              <Button
                disabled={record.is_banned === 0 || record.u_id === u_id}
                style={{
                  float: 'right'
                }}
              >
                启用
              </Button>
            </Popconfirm>
            <Popconfirm
              disabled={record.is_banned > 0 || record.u_id === u_id}
              title='确定要封禁此用户?'
              onConfirm={() => {
                // this.onChangeBanned(record.u_id, 1)
                this.handleChangeBanned(record.u_id, 1)
              }}
            >
              <Button
                disabled={record.is_banned > 0 || record.u_id === u_id}
                style={{
                  float: 'right'
                }}
              >
                禁用
              </Button>
            </Popconfirm>
          </span>
        )
      }
    }
  ]

  state = { usersinfo: [], pagesize: 10, pagenum: 1, sortby: 0, keyword: '' }

  getUserlist = () => {
    const callback = (data) => {
      console.log('will: EditUserTable -> callback -> data', data)
      if (data.status != null) {
        message.error('获取用户信息失败')
      } else {
        message.success('获取用户信息成功')
        this.setState({ usersinfo: data })
      }
    }

    let json = {
      keyword: this.state.keyword,
      pagenum: this.state.pagenum,
      size: this.state.pagesize,
      paymentLower: this.state.paymentLower,
      paymentHigher: this.state.paymentHigher,
      sortby: this.state.sortby
    }

    UserService.getUsers(json, callback)
  }

  handleChangeType = (u_id, type) => {
    console.log(
      'will: EditUserTable -> handleChangeType -> u_id, type',
      u_id,
      type
    )
    const dataSource = [...this.state.usersinfo]
    const index = dataSource.findIndex((item) => u_id === item.u_id)
    const item = dataSource[index]

    const callback = (data) => {
      console.log('will: EditUserTable -> callback -> data', data)
      if (data.status == null) {
        if (!data) {
          message.error('无修改权限')
          return
        }
        message.success('修改成功')
        this.setState({ dataSource: (item.u_type = type) })
      }
    }
    UserService.changeType({ u_id, type }, callback)
  }

  handleChangeBanned = (u_id, banned) => {
    const dataSource = [...this.state.usersinfo]
    const index = dataSource.findIndex((item) => u_id === item.u_id)
    const item = dataSource[index]
    const callback = (data) => {
      console.log('will: EditUserTable -> callback -> data', data)
      if (data.status == null) {
        message.success('修改成功')
        this.setState({ dataSource: (item.is_banned = banned) })
      }
    }
    UserService.changeStatus({ u_id, status: banned }, callback)
  }

  changePage = (current, pageSize) => {
    this.setState(
      {
        pagenum: current,
        pagesize: pageSize
      },
      this.getUserlist
    )
  }

  componentDidMount() {
    // let user = JSON.parse(localStorage.getItem('user'))
    // this.setState({ user })
    this.getUserlist()
  }

  onChangeType = (u_id, type) => {
    const callback = (data) => {
      if (data.status) {
        message.error('修改用户权限失败')
      } else {
        message.success('修改用户权限成功')
        this.changePage(1, 20)
      }
    }
    let json = { u_id: u_id, u_type: type }
    UserService.changeType(json, callback)
  }
  onChangeBanned = (u_id, is_banned) => {
    const callback = (data) => {
      if (data.status) {
        message.error('修改用户权限失败')
      } else {
        message.success('修改用户权限成功')
        this.changePage(1, 20)
      }
    }
    let json = { u_id: u_id, u_banned: is_banned }
    UserService.changeType(json, callback)
  }

  onSearch = (value) => {
    console.log('will: TaskList -> onKeyWordChange -> value', value)
    let keyword = value
    this.setState({ keyword, size: 10, pagenum: 1 }, () => {
      this.getUserlist()
    })
  }
  render() {
    return (
      <Card
        title={
          <Search
            placeholder='通过用户名搜索'
            onSearch={this.onSearch}
            style={{ width: '60%' }}
            defaultValue={this.state.keyword}
            allowClear
          />
        }
      >
        <Table
          bordered
          components={this.components}
          columns={this.columns}
          dataSource={this.state.usersinfo}
          pagination={{
            onChange: this.changePage,
            current: this.state.pagenum,
            pageSize: this.state.pagesize,
            total: 200
          }}
        />
      </Card>
    )
  }
}

export default EditUserTable
