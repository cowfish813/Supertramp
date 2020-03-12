import React from 'react'
import { Link } from 'react-router-dom'
import { clearErrors } from '../../actions/session_actions';


class Session extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            email: '',
            last_name: '',
            first_name: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoUser = this.handleDemoUser.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
        // this.handleDemoUser = this.handleDemoUser.bind(this)
    };

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
        .then(() => this.props.closeModal())
        
    };

    componentDidMount() {
        this.props.clearErrors()
    }

    
    handleDemoUser(e) {
        e.preventDefault()
            const demo = {
                username: "demo",
                password: "123456",
            }
        this.props.demoUser(demo).then(this.props.closeModal())
        this.props.history.push("/")
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
            
            return (
                <div className="feedback-indicator">
                    {this.props.errors.map( error => {
                    <li>{error}</li>
                })}
                </div>
                
            )
        } else {
            return null
        };
    }



    handleInput(type) {
        return e => {
            this.setState({ [type]: e.currentTarget.value })
        };
    };

    render () {        
        let route = "./login"
        let button = "Log In"
        if (this.props.formType === "Signup") {
            route = "./signup"
            button = "Sign Up"
            return (
                <div className="modal-superbody">
                    <div className="modal-signup">
                        <div className="modal-title">
                            <p>Become a SuperTramper</p>
                            <p className="modal-title-small">Discover the best camping near me</p>
                        </div>
                        <form onSubmit={this.handleSubmit} className="signup-body">
                            <div className="half_input">
                                <input
                                placeholder="First Name..."
                                type="text"
                                className="left_half_input"
                                value={this.state.first_name}
                                onChange={this.handleInput('first_name')}
                                />

                                <input
                                placeholder="Last Name..."
                                type="text"
                                className="right_half_input"
                                value={this.state.last_name}
                                onChange={this.handleInput('last_name')}
                                />
                            </div>
                                <input
                                placeholder="Username..." 
                                className="logging_input"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                                />

                                <input
                                className="logging_input"
                                placeholder="Email..."
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                />

                                <input 
                                placeholder="Password..."
                                className="logging_input"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                />

                                <input 
                                placeholder="Zip code..."
                                className="logging_input"
                                type="text"
                                // value={soon zipcode}
                                onChange={this.handleInput('zipcode')}
                                />



                            {/* <button className="loginButton" >{this.props.formType}</button> */}
                            <input type="submit" className="loginButton" value={this.props.formType}/>

                        </form>
                        <div className="login-body">
                            <button className="demoButton" type="button" onClick={this.handleDemoUser}>Demo User</button>

                        </div>
                        {/* <Link to= /> */}
                        
                        <div className="login-footer">
                            <div className="login-subfooter">
                            <p>By signing up, I agree to SuperTramps terms and privacy policy</p>
                            </div>
                            <p>Not a SuperTramper? <a className="modal_swap" onClick={() => this.props.openModal('Login')}>Log In</a></p>
                            {/* link to sign in */}
                        </div>
                    </div>
                </div>
            )




        } else if (this.props.formType === "Login") {
            return (   
                <div className="modal-superbody">
                    <div className="modal-login">
                        <div className="modal-title">
                            <p>Welcome back!</p>
                                <p className="modal-title-small">It's about time for another camping trip</p>
                        </div>
                        <form onSubmit={this.handleSubmit} className="login-body">
                            <div className="login-form">
                                    <input
                                    placeholder="Username..."
                                    className="logging_input Username"
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                                    />
                                    <input
                                    placeholder='Password...'
                                    className="logging_input"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                    />
                                {/* <button className="loginButton" >{this.props.formType}</button> */}
                                <input type="submit" className="loginButton" value={this.props.formType} />
                            </div>
                                {/* <div className="login-body"> */}

                                <button className="demoButton" type="button" onClick={this.handleDemoUser}>Demo User</button>
                                {/* </div> */}
                                
                        </form>
                        
                        <div className="login-footer">
                            <p>Not a SuperTramper? <a className="modal_swap" onClick={() => this.props.openModal('Signup')}>Sign up!</a></p>
                            {/* link to sign up. change formType? */}
                        </div>
                    </div>
                </div>
            )
        };
    };
};

export default Session