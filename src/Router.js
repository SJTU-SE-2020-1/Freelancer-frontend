import React from 'react';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/register";
import ReleaseWork from "./pages/release_work";
import TaskDetail from "./pages/TaskDetail";
import TaskList from "./pages/TaskList";
import LoginRouter from "./loginRouter";
import PersonRouter from "./PersonRouter";
import {history} from "./util/history";



class BasicRoute extends React.Component{
    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/release" component={ReleaseWork}/>
                    <Route exact path="/tasklist" component={TaskList}/>
                    <Route  path="/taskdetail/:id" component={TaskDetail}/>
                    {/* <LoginRouter exact path="/login" component={Login}/> */}
                    <Route exact path="/register" component={Register}/>
                    <Redirect from="/*" to="/" />
                </Switch>
            </Router>)

    }
}


export default BasicRoute;
