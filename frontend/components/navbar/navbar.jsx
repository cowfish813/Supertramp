import React, {component} from 'react';
import { Link } from 'react-router-dom';
import NavSearch from './nav_search'

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
        
        if (location.hash === "#/" || location.hash.includes("search")){ //|| location.pathname === "/search") {
            searchInput = null
        };

        let content =  (this.props.currentUser === undefined) ? 
            (
                <div className="super-nav">
                    <div className="nav-left">
                        <Link to="/" className="logo">
                          <img className="logo-pic" src="/assets/favicon.ico" alt=""/>
                        </Link>
                        {searchInput}
                    </div>
    
                    <div className="nav-right">
                        <div className="navItem"><a target="_blank" href="https://www.linkedin.com/in/nicholas-cheung-6a72999">Linkedin</a></div>
                        <div className="navItem"><a target="_blank" href="https://github.com/cowfish813">GitHub</a></div>
                        <div className="navItem"><a target="_blank" href="https://www.instagram.com/probablynotnick/">Instagram</a></div>
                        <div className="navItem"><a onClick={() => this.props.openModal('Login')}>Log In</a></div>
                        <button className="navItem signupButton" onClick={() => this.props.openModal('Signup')}>Sign Up</button>

                    </div>
                </div>
            )
         : 
             (
                <div className="super-nav">
                    <div className="nav-left">
                        <Link to="/" className="logo">
                            <img className="logo-pic" src="/assets/favicon.ico" alt="home"/>
                        </Link> 
                        {searchInput}
                    </div>

                    <div className="nav-right">
                        <div className="navItem"><a target="_blank" href="https://www.linkedin.com/in/nicholas-cheung-6a72999">Linkedin</a></div>
                        <div className="navItem"><a target="_blank" href="https://github.com/cowfish813">GitHub</a></div>
                        <div className="navItem"><a target="_blank" href="https://www.instagram.com/probablynotnick/">Instagram</a></div>
                        <div className="navItem"><Link to={`/users/${this.props.ID}`}>Self</Link></div>
                        <button className="navItem logoutButton" onClick={this.handleLogout}>Log Out</button>
                    </div>
                </div>
            )

            return content
        
    }
}

export default NavBar