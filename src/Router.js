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
import initialpage from './pages/initialpage'
import AdminRouter from './AdminRouter'
import manageUser from './pages/manageUser'
import manageTask from './pages/manageTask'
import ApplyWork from './pages/ApplyWork'

class BasicRoute extends React.Component {
  render() {
    return (
      <Router>
        {/* <ErrorBoundary> */}
        <Switch>
          <PersonRouter exact path='/' component={Home} />
          <LoginRouter exact path='/login' component={Login} />
          <PersonRouter exact path='/MyWork' component={MyWork} />
          <Route exact path='/unlogin' component={initialpage} />
          <Route exact path='/profile' component={profile} />
          <PersonRouter exact path='/release' component={ReleaseWork} />
          <Route exact path='/tasklist' component={TaskList} />
          <Route path='/taskdetail/:id' component={TaskDetail} />
          <Route path='/applywork/:id' component={ApplyWork} />
          <AdminRouter path='/manageUser' component={manageUser} />
          <AdminRouter path='/manageTask' component={manageTask} />
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
