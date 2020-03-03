import React from 'react'
import { Link } from 'react-router-dom'


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

    };

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    };


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
                <div className="session-form">
                    <li>{this.props.errors}</li>
                    <form onSubmit={this.handleSubmit}>
                        <Link className="button" to="route">{button}</Link>
                        <h2>{this.props.formType}</h2>
                        <label>Username:
                            <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            />
                        </label>
                        <label>Email:
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            />
                        </label>
                        <label>Password:
                            <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            />
                        </label>

                        <label>First Name:
                            <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.handleInput('first_name')}
                            />
                        </label>
                        <label>Last Name:
                            <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.handleInput('last_name')}
                            />
                        </label>

                        <button>{this.props.formType}</button>
                    </form>
                </div>
            )




        } else if (this.props.formType === "Login") {
            return (       
                <div className="session-form">
                    <li>{this.props.errors}</li>
                    <form onSubmit={this.handleSubmit}>
                        <Link className="button" to="route">{button}</Link>
                        <h2>{this.props.formType}</h2>
                        <label>Username:
                                <input
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                        </label>
                        {/* <label>Email:
                                <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label> */}
                        <label>Password:
                                <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        </label>
                        <button>{this.props.formType}</button>
                    </form>
                </div>
            )
        };
    };
};

export default Session