import React from 'react';
import { withRouter } from 'react-router-dom'

class ListingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            cancellation_policy: "", 
            capacity:null,
            country: "",
            description: "",
            minimum_nights:null,
            on_arrival: "",
            price:null,
            checkin: null ,
            checkout: null ,
            lat: null,
            lng: null,

            photos: []

        }
        this.handleSubmit.bind(this)
        this.handleInput.bind(this)
        this.handleFile.bind(this)
    }

    handleInput(e) {
        this.setState({name: e.currentTarget.value})
    }

    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('listing[name]'), this.state.name;
        formData.append('listing[photos]'), this.state.photos;
        $.ajax({
            url: '/api/listings',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false,
        })
    }


    render () {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <div>
                <form onSubmit>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="post-body">Body of Post</label>
                        <input type="text"
                            id="post-body"
                            value={this.state.title}
                            onChange={this.handleInput} />
                        <input type="file"
                            onChange={this.handleFile} />
                        <h3>Image preview </h3>
                        {preview}
                        <button>Make a new Post!</button>
                    </form>
                </form>

            </div>
        )
    }

}

export default ListingForm
