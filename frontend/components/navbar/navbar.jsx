import React from 'react'
import modal from '../modal/modal'
import { Link } from 'react-router-dom'
import { openModal } from '../../actions/modal_actions/modal_actions'


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.currentUser
        this.handleClick= this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
    }

    handleSubmit(e) {
        e.preventDefault()

    }


    handleLogout(e) {
        e.preventDefault()
        this.props.logout().then(()=> this.props.history.push("/"))
    }

    render() {
        if (!(this.props.currentUser)) {
            
            return (
                <div className="superNav">
                    <div className="nav-left">
                        <Link to="/" className="logo">SuperTramp logo goes here</Link> {/* use image AWS */}
                    </div>
    
                    <div className="nav-right">
                        <li className="navItem"><a href="https://www.linkedin.com/in/nicholas-cheung-6a72999">My Linkedin!</a></li>
                        <li className="navItem"><a href="https://github.com/cowfish813">GitHub</a></li>
                        <li className="navItem"><a>About</a></li> {/* link to my linked in or transfer to bottom of page? */}
                        <li className="navItem"><a onClick={() => this.props.openModal('Login')}>Log In</a></li> {/* another modal button*/}
                        <li className="navItem signupButton" onClick={this.handleClick}>
                            {/* <button onClick={() => this.props.openModal('Signup')}>Sign up</button> */}
                            <a onClick={() => this.props.openModal('Signup')}>Sign up</a>
                        </li>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="superNav">
                    <div className="nav-left">
                        <Link to="/" className="logo">SuperTramp logo goes here</Link> {/* use image AWS */}
                    </div>

                    <div className="nav-right">
                        <li className="navItem"><a>Trips</a></li>
                        <li className="navItem"><Link to=""></Link></li>
                        <li className="navItem"><Link to="/users/:usersId">self</Link></li> {/* link to my linked in or transfer to bottom of page? */}
                        <li className="navItem" onClick={this.handleLogout}><a>Log out</a></li> {/* link to my linked in or transfer to bottom of page? */}
                    </div>
                </div>
            )
        }
    }
}

export default NavBar