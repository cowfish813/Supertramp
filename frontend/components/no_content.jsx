import React from "react";
import { withRouter } from "react-router-dom";
import { browserHistory } from 'react-router';


class NoContent extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

    }

    render() {
        return (
            <div className="nonContent">
                <h1>404</h1>
                <h2>Whoops! This is a little embarassing. Looks like we got lost on the trail.</h2>
                <div onClick={this.handleClick}>Take me back!</div>
            </div>
        )
    }
}

export default withRouter(NoContent)