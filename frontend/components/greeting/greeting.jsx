import React from 'react'
import { Link } from 'react-router-dom'


export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.first_name}. change this out
             in greetings.jsx in components</p>
            <button onClick={() => logout()}>Log Out</button>
        </div>  
        // does logout need arg?
    ) : (
        <div className="greeting">
            <Link className="session_buttons" to="/signup">SignUp</Link>
            {/* <br/> */}
            <p> or </p>
            <Link className="session_buttons" to="/login">LogIn</Link>
        </div>
    );

    return (
        <header>
            <div>
                {display}
            </div>
        </header>
    )
}

