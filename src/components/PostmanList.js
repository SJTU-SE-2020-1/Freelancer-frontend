import React from 'react'
import { Layout, Row, Col, Input, Card, Drawer, Button } from 'antd'

import * as UserSER from '../services/UserService'
import PostMan from './PostMan'

class PostmanList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      w_id: 0,
      postmanlist: [],
      visible: false
    }
  }
  callback = (data) => {
    console.log('will: PostmanList -> callback -> data', data)
    this.setState({ postmanist: [] })

    this.setState({ postmanlist: data })
  }
  showDrawer = () => {
    this.setState({ visible: true })
  }
  onClose = () => {
    this.setState({ visible: false })
  }

  getPostmans = (w_id) => {
    let json = {
      w_id
    }
    console.log('will: PostmanList -> getPostmans -> json', json)
    UserSER.getPostman(json, this.callback)
  }

  componentDidMount() {
    let w_id = this.props.w_id
    console.log('will: PostmanList -> componentDidMount -> w_id', w_id)
    this.getPostmans(w_id)
  }

  renderList = () => {
    let result = []
    for (let i = 0; i < this.state.postmanlist.length; i++) {
      result.push(<PostMan info={this.state.postmanlist[i]} />)
    }
    return result
  }
  render() {
    return (
      <div>
        <Button type='primary' onClick={this.showDrawer}>
          显示申请者信息
        </Button>
        <Drawer
          width={'60%'}
          title='申请者列表'
          placement='right'
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {this.renderList()}
        </Drawer>
      </div>
    )
  }
}

export default PostmanList
