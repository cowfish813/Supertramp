import React from "react";
import { withRouter } from "react-router-dom";

class UserUpdate extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          first_name: this.props.first_name,
          last_name: this.props.last_name,
          username: this.props.username,
          email: this.props.email,
          photoFile: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('user[first_name]', this.state.first_name);
        formData.append('user[last_name]', this.state.last_name);
        formData.append('user[username]', this.state.username);
        formData.append('user[email]', this.state.email);
        formData.append('user[photo]', this.state.photo);

        $.ajax({
            url: 'api/users',
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        })
    }

    handleInput(type) {
        return event => {
            this.setState({ [type]: event.currentTarget.value })
        }
    }

    handlePost(e) {
        this.setState({ name: e.currentTarget.value})
    }

    handleFile(e) {
        this.setState({photofile: e.currentTarget.files[0]})
    }



    render() {
        return (
        <div className="userCreate">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="First Name" value={this.state.first_name} onChange={this.handleInput('first_name')}/>
            <input type="text" placeholder="Last Name" value={this.state.last_name} onChange={this.handleInput('last_name')} />
            <input type="text" placeholder="Email Name" value={this.state.email} onChange={this.handleInput('email')} />
            <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleInput('username')} />
            <input type="file" onChange={this.handleFile.bind(this)} />
            <button>Update</button>
          </form>
        </div>
        )
    }

};

export default UserUpdate;