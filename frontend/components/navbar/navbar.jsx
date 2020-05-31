import React, {component} from 'react';
import { Link } from 'react-router-dom';
import NavSearch from './nav_search'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons';


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.currentUser
        this.handleLogout = this.handleLogout.bind(this)

    }

    handleLogout(e) {
        e.preventDefault()
        this.props.logout().then(()=> this.props.history.push("/"))
    }

    render() {
        let searchInput = < NavSearch />
        // debugger
            //remove on homepage AND search result index
        // if (location.pathname === "/"){ //|| location.pathname === "/search") {
        //     searchInput = null
        // };

        let content =  (this.props.currentUser === undefined) ? 
            (
                <div className="superNav">
                    <div className="nav-left">
                        <Link to="/" className="logo">
                          <img className="logo-pic" src="https://djqvcbmmgpti5.cloudfront.net/assets/favicon/hipcamp-apple-icon-77c3a7c86c7373902fa3b80081c977e7c66ea40c2e535b1918a8c6299aac1abe.png" alt=""/>
                        </Link>
                        {searchInput}
                    </div>
    
                    <div className="nav-right">
                        <li className="navItem"><a target="_blank" href="https://www.linkedin.com/in/nicholas-cheung-6a72999">Linkedin</a></li>
                        <li className="navItem"><a target="_blank" href="https://github.com/cowfish813">GitHub</a></li>
                        <li className="navItem"><a target="_blank" href="https://www.instagram.com/probablynotnick/">Instagram</a></li>
                        <li className="navItem"><a onClick={() => this.props.openModal('Login')}>Log In</a></li> 
                        <button className="navItem signupButton" onClick={() => this.props.openModal('Signup')}>Sign Up</button>

                        {/* <li className="navItem signupButton">
                        <a onClick={() => this.props.openModal('Signup')}>Sign up</a>
                        </li> */}
                    </div>
                </div>
            )
         : 
             (
                <div className="superNav">
                    <div className="nav-left">
                        <Link to="/" className="logo">
                        <img className="logo-pic" src="https://djqvcbmmgpti5.cloudfront.net/assets/favicon/hipcamp-apple-icon-77c3a7c86c7373902fa3b80081c977e7c66ea40c2e535b1918a8c6299aac1abe.png" alt="" />
                        </Link> {/* use image AWS */}
                        {searchInput}
                    </div>

                    <div className="nav-right">
                        <li className="navItem"><a target="_blank" href="https://www.linkedin.com/in/nicholas-cheung-6a72999">Linkedin</a></li>
                        <li className="navItem"><a target="_blank" href="https://github.com/cowfish813">GitHub</a></li>
                        <li className="navItem"><a target="_blank" href="https://www.instagram.com/probablynotnick/">Instagram</a></li>
                        <li className="navItem"><Link to={`/users/${this.props.ID}`}>Self</Link></li>
                        <button className="navItem logoutButton" onClick={this.handleLogout}>Log Out</button>
                        {/* <li className="navItem" onClick={this.handleLogout}><a>Log out</a></li>  */}
                    </div>
                </div>
            )

            return content
        
    }
}

export default NavBar