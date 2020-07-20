import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import * as UserSER from './services/UserService'

class LoginRouter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      haveAuth: false,
      appliedAuth: false
    }
  }

  checkAuth = (data) => {
    // debugger;
    console.log(data)
    if (data.status >= 0) {
      this.setState({ haveAuth: true, appliedAuth: true })
    } else {
      localStorage.removeItem('user')
      this.setState({ haveAuth: false, appliedAuth: true })
    }
  }

  componentDidMount() {
    // debugger;
    UserSER.checkSession(this.checkAuth)
  }

  render() {
    const {
      component: Component,
      path = '/',
      exact = false,
      strict = false
    } = this.props

    console.log(
      'will: LoginRouter -> render -> this.state.haveAuth',
      this.state.haveAuth
    )
    // debugger;
    console.log(
      'will: LoginRouter -> render -> this.state.appliedAuth',
      this.state.appliedAuth
    )
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
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          ) : (
            <Component {...props} />
          )
        }
      />
    )
  }
}

export default LoginRouter
