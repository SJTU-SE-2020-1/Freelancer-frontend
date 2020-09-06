import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import * as UserSER from './services/UserService'
import { message } from 'antd'

class AdminRouter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      haveAuth: false,
      appliedAuth: false
    }
  }

  checkAuth = (data) => {
    if (data.status == 0) {
      let userType = data.data.userType[0].authority
      if (userType == 'ROLE_ADMIN') {
        this.setState({ haveAuth: true, appliedAuth: true })
      } else {
        this.setState({ haveAuth: false, appliedAuth: true })
      }
    } else {
      console.log('will: PersonRouter -> checkAuth -> data.msg', data.msg)
      localStorage.removeItem('user')
      this.setState({ haveAuth: false, appliedAuth: true })
    }
  }

  componentDidMount() {
    UserSER.checkSession(this.checkAuth)
  }

  render() {
    const {
      component: Component,
      path = '/',
      exact = false,
      strict = false
    } = this.props
    console.log(this.state.haveAuth)

    if (!this.state.appliedAuth) {
      return null
    }
    return (
      <Route
        path={path}
        exact={exact}
        strict={strict}
        render={(props) =>
          this.state.haveAuth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )
  }
}

export default AdminRouter
