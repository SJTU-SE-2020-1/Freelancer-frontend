import React from 'react';
import RegisterFrom from "../components/RegisterFrom";
import {withRouter} from "react-router-dom";
import "../css/form.css";

class Register extends React.Component{

    render() {
        return (
            <div className="lg-page">
                <div className="lg-container">
                    <div className="lg-box">
                        <h1 className="lg-title">注册</h1>
                        <div className="lg-content">
                            <RegisterFrom/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);
