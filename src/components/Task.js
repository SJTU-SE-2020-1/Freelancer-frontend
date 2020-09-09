import React from 'react'
import { Card, Tag, Row, Button, Popconfirm, Col } from 'antd'
import '../css/Task.css'
import { Link } from 'react-router-dom'
import FinishForm from './FInishWorkForm'

export class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workinfo: {},
      if_author: false,
      is_post: false
    }
  }

  handleDelete = (w_id) => {
    console.log('will: Task -> handleDelete -> w_id', w_id)
    this.props.handleDelete(w_id)
  }
  handleCancle = (w_id) => {
    console.log('will: Task -> handleCancle -> w_id', w_id)
    this.props.handleCancle(w_id)
  }

  componentDidMount() {
    console.log(
      'will: Task -> componentDidMount -> this.props.info',
      this.props.info
    )
    let if_author = false,
      is_post = false
    if (this.props.if_author) if_author = true
    if (this.props.is_post) is_post = true
    this.setState({ workinfo: this.props.info, if_author, is_post })
  }

  GetDescription = () => {
    let s = this.state.workinfo.description
    // console.log('will: Task -> GetDescription -> s', s)
    if (s != null) {
      let s_list = s.split('技能：')
      if (s_list.length < 2) {
        return <div>{s_list[0]}</div>
      }
      // console.log('will: Task -> GetDescription -> s_list', s_list[0])
      let skill_list = s_list[1].split('查看更多：')[0].split(',')
      // console.log('will: Task -> GetDescription -> skill_list', skill_list)
      let skills = []
      for (let i = 0; i < skill_list.length; i++) {
        if (skill_list[i].indexOf('：') > 0) {
          break
        }
        skills.push(<Tag color='green'>{skill_list[i]}</Tag>)
      }
      return (
        <div>
          {s_list[0]}
          <br />
          <br />
          <Row justify='end'>{skills}</Row>
        </div>
      )
    }

    return '暂时无信息'
  }

  render() {
    return (
      <Card
        title={
          <div>
            <b>{this.state.workinfo.title}</b>
            {this.state.workinfo.paymentHigher ? (
              <div style={{ fontSize: '12px' }}>
                {'￥' +
                  this.state.workinfo.paymentLower.toFixed(2) +
                  '-' +
                  this.state.workinfo.paymentHigher.toFixed(2)}
              </div>
            ) : null}
          </div>
        }
        hoverable
        class='Task_Blower'
        extra={
          <Link to={{ pathname: '/taskdetail/' + this.state.workinfo.w_id }}>
            More
          </Link>
        }
      >
        {this.GetDescription()}

        {this.state.if_author ? (
          <Row justify={'end'}>
            <Popconfirm
              title='确认删除?'
              onConfirm={() => this.handleDelete(this.state.workinfo.w_id)}
            >
              <a>删除</a>
            </Popconfirm>
            <Col offset={2}></Col>
            {this.props.info.status > 0 ? (
              <FinishForm w_id={this.props.info.w_id} />
            ) : null}
          </Row>
        ) : this.state.is_post ? (
          <Popconfirm
            title='确认取消申请?'
            onConfirm={() => this.handleCancle(this.state.workinfo.w_id)}
          >
            <a>取消申请</a>
          </Popconfirm>
        ) : null}
      </Card>
    )
  }
}
