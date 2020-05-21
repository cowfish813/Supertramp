import React from "react";
import { withRouter } from "react-router-dom";


class NoContent extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="nonContent">
                <h1>404</h1>
                <h2>Whoops! This is a little embarassing. Looks like we got lost on the trail.</h2>
                <button className="goBack" onClick={this.handleClick}>Take me back!</button>
            </div>
        )
    }
}

export default withRouter(NoContent)