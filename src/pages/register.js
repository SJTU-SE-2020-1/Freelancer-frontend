import React from 'react';
import RegistFrom from "../components/RegistFrom";
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
                            <RegistFrom/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);
