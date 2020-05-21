import React from "react";
import { withRouter } from "react-router-dom";


class NoContent extends React.Component {

    render() {
        return (
            <div className="nonContent">
                <h1>404</h1>
                <h2>Whoops! This is a little embarassing. Looks like we got lost on the trail.</h2>
                <div>Take me back!</div>
            </div>
        )
    }
}

export default withRouter(NoContent)