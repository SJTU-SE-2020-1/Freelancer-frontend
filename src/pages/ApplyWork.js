import React from 'react'
import Applyform from '../components/ApplyForm'
import { withRouter } from 'react-router-dom'
import '../css/form.css'

class ApplyWork extends React.Component {
  componentWillMount() {
    console.log('will: ApplyWork -> componentWillMount -> componentWillMount')
  }

  render() {
    return (
      <div className='lg-page'>
        <div className='lg-container'>
          <div className='lg-box'>
            <h1 className='lg-title'>{'申请项目 '}</h1>
            <div className='lg-content'>
              <Applyform w_id={this.props.match.params.id} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ApplyWork)
