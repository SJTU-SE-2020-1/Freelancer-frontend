import React from 'react';
import ReleaseForm from "../components/ReleaseForm"
import {withRouter} from "react-router-dom";
import "../css/form.css";

class ReleaseWork extends React.Component{

    render() {
        return (
            <div className="lg-page">
                <div className="lg-container">
                    <div className="lg-box">
                        <h1 className="lg-title">发布任务</h1>
                        <div className="lg-content">
                            <ReleaseForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ReleaseWork);