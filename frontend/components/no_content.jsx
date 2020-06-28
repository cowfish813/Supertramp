import React, {useState} from "react";
import { withRouter } from "react-router-dom";

const NoContent = (props) => {

    return (
        <div className="nonContent">
            <h1>404</h1>
            <h2>Whoops! This is a little embarassing.</h2>
            <h2>Looks like we got lost on the trail.</h2>
            <img className="noContentPic" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/70508342_403917306911081_545636708322902016_n.gif" alt="" />
            <button className="goBack" onClick={() => handleClick(props)}>Take me back!</button>
        </div>
    )
};

function handleClick(props) {
    props.history.goBack();
}

export default NoContent

// class NoContent extends React.Component {
//     constructor(props) {
//         super(props)

//         this.handleClick = this.handleClick.bind(this);
//     }

//     componentDidMount() {
//         window.scrollTo(0, 0);
//     }

    // handleClick() {
    //     this.props.history.goBack();
    // }

//     render() {
//         return (
//             <div className="nonContent">
//                 <h1>404</h1>
//                 <h2>Whoops! This is a little embarassing.</h2> 
//                 <h2>Looks like we got lost on the trail.</h2>
//                 <img className="noContentPic" src="https://supertramp-mast.s3-us-west-1.amazonaws.com/70508342_403917306911081_545636708322902016_n.gif" alt=""/>
//                 <button className="goBack" onClick={this.handleClick}>Take me back!</button>
//             </div>
//         )
//     }
// }

// export default withRouter(NoContent)

