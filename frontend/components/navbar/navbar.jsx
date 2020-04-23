import React, {component} from 'react';
import { Link } from 'react-router-dom';

// import modal from '../modal/modal'
// import { openModal } from '../../actions/modal_actions/modal_actions'
// import user from '../users/user_container'



class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.currentUser
        this.handleLogout = this.handleLogout.bind(this)

        // this.handleClick= this.handleClick.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleRender = this.handleRender.bind(this)
    }

    // handleClick(e) {
    //     e.preventDefault()
    // }

    // handleSubmit(e) {
    //     e.preventDefault()

    // }


    handleLogout(e) {
        e.preventDefault()
        this.props.logout().then(()=> this.props.history.push("/"))
    }

    // handleRender() {
        
    // }

    render() {
      let content =  (this.props.currentUser === undefined) ? 
            
             (
                <div className="superNav">
                    <div className="nav-left">
                        <Link to="/" className="logo">
                          <img className="logo-pic" src="https://djqvcbmmgpti5.cloudfront.net/assets/favicon/hipcamp-apple-icon-77c3a7c86c7373902fa3b80081c977e7c66ea40c2e535b1918a8c6299aac1abe.png" alt=""/>
                        </Link>
                    </div>
    
                    <div className="nav-right">
                        <li className="navItem"><a href="https://www.linkedin.com/in/nicholas-cheung-6a72999">Linkedin</a></li>
                        <li className="navItem"><a href="https://github.com/cowfish813">GitHub</a></li>
                      <li className="navItem"><a href="https://www.instagram.com/probablynotnick/">Instagram</a></li>
                        <li className="navItem"><a onClick={() => this.props.openModal('Login')}>Log In</a></li> {/* another modal button*/}
                        <li className="navItem signupButton">
                            {/* <button onClick={() => this.props.openModal('Signup')}>Sign up</button> */}
                            <a onClick={() => this.props.openModal('Signup')}>Sign up</a>
                        </li>
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
                    </div>

                    <div className="nav-right">
                        <li className="navItem"><a>Trips</a></li>
                        <li className="navItem"><Link to={`users/${this.props.ID}`}>Self</Link></li>
                        <li className="navItem" onClick={this.handleLogout}><a>Log out</a></li> {/* link to my linked in or transfer to bottom of page? */}
                    </div>
                </div>
            )

            return content
        
    }
}

export default NavBar