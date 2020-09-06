import React, { useContext, useState, useEffect, useRef } from 'react'
import { Table, Input, Popconfirm, Form, message, Card } from 'antd'
import Tooltip from 'antd/es/tooltip'
import * as WorkSER from '../services/WorkService'
const EditableContext = React.createContext()
const { Search } = Input
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef()
  const form = useContext(EditableContext)
  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
    }
  }, [editing])

  const toggleEdit = () => {
    setEditing(!editing)
    form.setFieldsValue({
      [dataIndex]: record[dataIndex]
    })
  }

  const save = async (e) => {
    try {
      const values = await form.validateFields()
      toggleEdit()
      handleSave({ ...record, ...values })
    } catch (errInfo) {
      console.log('Save failed:', errInfo)
    }
  }

  let childNode = children

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`
          }
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className='editable-cell-value-wrap'
        style={{
          paddingRight: 24
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    )
  }

  return <td {...restProps}>{childNode}</td>
}

Date.prototype.format = function (format) {
  var o = {
    'M+': this.getMonth() + 1, // month
    'd+': this.getDate(), // day
    'h+': this.getHours(), // hour
    'm+': this.getMinutes(), // minute
    's+': this.getSeconds(), // second
    'q+': Math.floor((this.getMonth() + 3) / 3), // quarter
    S: this.getMilliseconds()
    // millisecond
  }
  if (/(y+)/.test(format) || /(Y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return format
}

class EditTaskTable extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [
      {
        title: '任务编号',
        dataIndex: 'w_id',
        width: '10%',
        editable: true,
        sorter: {
          compare: (a, b) => a.w_id - b.w_id,
          multiple: 2
        }
      },
      {
        title: '用户编号',
        dataIndex: 'u_id',
        width: '10%',
        editable: true,
        sorter: {
          compare: (a, b) => a.u_id - b.u_id,
          multiple: 1
        }
      },
      {
        title: '任务标题',
        dataIndex: 'title',
        width: '10%',
        editable: true
      },
      {
        title: '投标截止时间',
        dataIndex: 'biddingDdl',
        width: '15%',
        editable: true
      },
      {
        title: '任务完成时间',
        dataIndex: 'finishDdl',
        width: '15%',
        editable: true
      },
      {
        title: '任务描述',
        dataIndex: 'description',
        width: '30%',
        ellipsis: {
          showTitle: false
        },
        render: (description) => (
          <Tooltip placement='topLeft' title={description}>
            {description}
          </Tooltip>
        )
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title='确认删除?'
              onConfirm={() => this.handleDelete(record.w_id)}
            >
              <a>删除</a>
            </Popconfirm>
          ) : null
      }
    ]
    this.state = {
      keyword: '',
      dataSource: [],
      usersinfo: [],
      pagesize: 20,
      pagenum: 1
    }
  }

  gettime = (t_stamp) => {
    let time = new Date(parseFloat(t_stamp.time)).format('yyyy-MM-dd hh:mm:ss')
    return time
  }
  callback = (data) => {
    if (data.status) {
      message.error('获取任务信息失败')
    } else {
      message.success('获取任务信息成功')
      console.log('will: TaskList -> callback -> data', data)
      this.setState({ dataSource: data })
    }
  }

  getWorks = () => {
    let json = {
      keyword: this.state.keyword,
      pagenum: this.state.pagenum,
      size: this.state.pagesize
    }
    console.log('will: EditTaskTable -> getWorks -> json', json)
    WorkSER.getWorks(json, this.callback)
  }

  changePage = (current, pageSize) => {
    this.setState(
      {
        pagenum: current,
        pagesize: pageSize
      },
      this.getWorks()
    )
  }

  componentDidMount() {
    this.getWorks()
  }

  handleDelete = (w_id) => {
    const dataSource = [...this.state.dataSource]
    let u_id = this.props.u_id
    console.log('will: EditTaskTable -> handleDelete -> u_id', u_id)
    let json = { w_id, status: -1, userId: u_id }
    const callback = (data) => {
      if (data.status) {
        message.error('删除失败')
      } else {
        message.success('删除成功')
        this.setState({
          dataSource: dataSource.filter((item) => item.w_id !== w_id)
        })
      }
    }
    WorkSER.changeStatus(json, callback)
  }

  onSearch = (value) => {
    console.log('will: TaskList -> onKeyWordChange -> value', value)
    let keyword = value
    this.setState({ keyword: keyword, size: 10, pagenum: 1 }, () => {
      this.getWorks()
    })
  }
  render() {
    const { dataSource } = this.state
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell
      }
    }
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title
        })
      }
    })
    return (
      <div>
        <Card
          title={
            <Search
              placeholder='搜索项目'
              onSearch={this.onSearch}
              style={{ width: '60%' }}
              defaultValue={this.state.keyword}
              allowClear
            />
          }
        >
          <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={columns}
            pagination={{
              onChange: this.changePage,
              current: this.state.pagenum,
              pageSize: this.state.pagesize,
              total: 200
            }}
          />
        </Card>
      </div>
    )
  }
}

export default EditTaskTable
