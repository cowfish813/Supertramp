import React from 'react';
import { withRouter } from 'react-router-dom'

class ListingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            cancellation_policy: "", 
            capacity: "",
            country: "",
            description: "",
            minimum_nights: "",
            on_arrival: "",
            price: "",
            checkin:  "" ,
            checkout:  "" ,
            lat:  "",
            lng:  "",

            photos: []

        }
        this.handleSubmit.bind(this)
        this.handleInput.bind(this)
        this.handlepost.bind(this)
        this.handleFile.bind(this)
    }


    handlepost(e) {
        this.setState({name: e.currentTarget.value})
    }
    handleInput(type) {
        return e => {
            this.setState({ [type]: e.currentTarget.value })
        };
    };

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
        this.props.createListing()
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

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            // replace lat and lng with this.props stuff
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }


    render () {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <div className="ListCreate" >

                    <form onSubmit={this.handleSubmit} className="listform">
                        <label>Name
                            <input type="text" value={this.state.name} onChange={this.handleInput('Name')}/>
                        </label>
                        <label>Cancellation Policy
                            <input type="text" />
                        </label>
                        <label>Capacity
                            <input type="number" name="" id="" value={this.state.capacity} onChange={this.handleInput('Capacity')}/>
                        </label>
                        <label>Description
                            <input type="text" value={this.state.description} onChange={this.handleInput('Description')}/>
                        </label>
                        <label>Min Nights
                            <input type="number" name="" id="" value={this.state.minimum_nights} onChange={this.handleInput('Min Nights')}/>
                        </label>
                        <label>On Arrival
                            <input type="text" value={this.state.on_arrival} onChange={this.handleInput('On Arrival')} />
                        </label>
                        <label>Price
                            <input type="number" min="0.01" step="0.01" value={this.state.price} onChange={this.handleInput('Price')}/>
                        </label>

{/* lat/lng? */}
                        <label htmlFor="post-body">Body of Post</label>
                        <input type="text"
                            id="post-body"
                            value={this.state.title}
                            onChange={this.handlepost} />
                        <input type="file"
                            onChange={this.handleFile} />
                        <h3>Image preview </h3>
                        {preview}
                        <button>Make a new Listing!</button>
{/* destructure it somehow for lat/lng */}
                    <div className="map" ref={map => this.mapNode = map}> </div>
                    </form>


            </div>
        )
    }

}

export default ListingForm
