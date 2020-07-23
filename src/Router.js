import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/register'
import ReleaseWork from './pages/release_work'
import TaskDetail from './pages/TaskDetail'
import TaskList from './pages/TaskList'
import LoginRouter from './loginRouter'
import PersonRouter from './PersonRouter'
import { history } from './util/history'
import profile from './pages/profile'
import MyWork from './pages/GetMyWork'

class BasicRoute extends React.Component {
  render() {
    return (
      <Router>
        {/* <ErrorBoundary> */}
        <Switch>
          <PersonRouter exact path='/' component={Home} />
          <LoginRouter exact path='/login' component={Login} />
          <PersonRouter exact path='/MyWork' component={MyWork} />
          <Route exact path='/profile' component={profile} />
          <Route exact path='/release' component={ReleaseWork} />
          <Route exact path='/tasklist' component={TaskList} />
          <Route path='/taskdetail/:id' component={TaskDetail} />
          {/* <LoginRouter exact path="/login" component={Login}/> */}
          <Route exact path='/register' component={Register} />
          <Redirect from='/*' to='/' />
        </Switch>
        {/* </ErrorBoundary> */}
      </Router>
    )
  }
}

export default BasicRoute
