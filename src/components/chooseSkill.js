import React from 'react'
import { Modal, Button, Input, Row, Col } from 'antd'
import {
  DesktopOutlined,
  EllipsisOutlined,
  HighlightOutlined,
  RightOutlined
} from '@ant-design/icons'
import { List } from 'antd/lib/form/Form'
import Title from 'antd/lib/skeleton/Title'
const { Search } = Input

const category_t = [
  { name: 'Websites, IT & Software', key: '1', icon: <DesktopOutlined /> },
  { name: 'Writing & Content', key: '2', icon: <HighlightOutlined /> },
  { name: 'Design, Media & Architecture', key: '3', icon: <DesktopOutlined /> },
  { name: 'Data Entry & Admin', key: '4', icon: <DesktopOutlined /> },
  { name: 'Engineering & Science', key: '5', icon: <DesktopOutlined /> },
  { name: 'Sales & Marketing', key: '6', icon: <DesktopOutlined /> },
  {
    name: 'Business, Accounting, Human Resources & Legal',
    key: '7',
    icon: <DesktopOutlined />
  },
  {
    name: 'Product Sourcing & Manufacturing',
    key: '8',
    icon: <DesktopOutlined />
  },
  { name: 'Mobile Phones & Computing', key: '9', icon: <DesktopOutlined /> },
  { name: 'Translation & Languages', key: '10', icon: <DesktopOutlined /> },
  { name: 'Local Jobs & Services', key: '11', icon: <DesktopOutlined /> },
  {
    name: 'Freight, Shipping & Transportation',
    key: '12',
    icon: <DesktopOutlined />
  },
  { name: 'Others', key: '13', icon: <EllipsisOutlined /> }
]

class ChooseSkill extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: category_t,
      selectedkey: -1,
      skillnum: 0, //已选skill数
      selectedskills: [], //存skill_id
      skills: [], //包含skill_id以及skill name
      visible: false
    }
  }
  componentDidMount() {
    debugger
  }

  showModal = () => {
    debugger
    console.log('will: ChooseSkill -> constructor -> category_t', category_t)
    this.setState({
      visible: true
    })
  }

  onSearch = (value) => {
    console.log('will: ChooseSkill -> onSearch -> value', value)
  }

  onOK = () => {
    console.log('will: chooseSkill -> onOK')
    this.setState({ visible: false })
  }
  onClickCategory = (key) => {
    console.log('will: ChooseSkill -> onClickCategory -> key', key)
    this.setState({ selectedkey: key })
    //后端取数据显示
  }

  categoryList = () => {
    let result = []
    for (let i = 0; i < this.state.category.length; i++) {
      result.push(
        <div
          onClick={() => {
            this.onClickCategory(this.state.category[i].key)
          }}
        >
          {this.state.category[i].icon}
          <span>{this.state.category[i].name}</span>
          <RightOutlined style={{ float: 'right', margin: '2px' }} />
        </div>
      )
    }
    return result
  }

  modalcontent = () => {
    return {
      title: '选择您的专业和技能',
      content: (
        <div>
          <Row justify='center'>
            <Col span={15}>
              <Search
                placeholder='搜索技能'
                onSearch={this.onSearch}
                enterButton
              />
            </Col>
            <Col offset={5}>
              <Button onClick={this.onOK}>确认</Button>
            </Col>
          </Row>
        </div>
      )
    }
  }
  showskills = () => {
    for (let i = 0; i < this.state.skills.length; i++) {}
  }

  skilltags() {}

  render() {
    return (
      <div>
        <Button onClick={this.showModal} width={'80%'}>
          选择技能
        </Button>
        <Modal
          title='选择您的专业和技能'
          visible={this.state.visible}
          footer={null}
          centered={true}
          width={'80%'}
          onCancel={() => {
            this.setState({ visible: false })
          }}
        >
          <Row justify='center'>
            <Col span={15}>
              <Search
                placeholder='搜索技能'
                onSearch={this.onSearch}
                enterButton
              />
            </Col>
            <Col offset={5}>
              <Button onClick={this.onOK} style={{ background: 'orange' }}>
                确认
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={5}>
              <b>分类</b>
              {this.categoryList()}
            </Col>
            <Col span={11}>
              <b>
                {this.state.selectedkey > 0
                  ? this.state.category[this.state.selectedkey - 1].name
                  : '未选择分类'}
              </b>
              {}
            </Col>
            <Col span={8}>
              <b>{this.state.skillnum + '已选技能'}</b>
              {this.state.skillnum == 0 ? (
                <p>至少选择一项技能帮助我们向您推荐定制的工作。</p>
              ) : (
                this.skilltags()
              )}
            </Col>
          </Row>
        </Modal>
      </div>
    )
  }
}

export default ChooseSkill
