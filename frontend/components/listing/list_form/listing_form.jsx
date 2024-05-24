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
            lat:  0,
            lng:  0,
            country:"yes",
            photoFile: null
        
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        //this.handleInput = this.handleInput.bind(this)
        this.handlepost = this.handlepost.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }


    handlepost(e) {
        // event.preventDefault()
        this.setState({name: e.currentTarget.value})
    }

    handleInput(type) {
        event.preventDefault()
          return  event => {
                this.setState({ [type]: event.currentTarget.value })
            }
    }

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]})  

    }

    handleSubmit(e) {
        e.preventDefault()
        // this.props.createListing(this.state)
        const formData = new FormData()
        
        formData.append('listing[name]', this.state.name);
        formData.append('listing[cancellation_policy]', this.state.cancellation_policy);
        formData.append('listing[capacity]', this.state.capacity);
        formData.append('listing[description]', this.state.description);
        formData.append('listing[minimum_nights]', this.state.minimum_nights);
        formData.append('listing[on_arrival]', this.state.on_arrival);
        formData.append('listing[price]', this.state.price);
        formData.append('listing[checkin]', this.state.checkin);
        formData.append('listing[checkout]', this.state.checkout);
        formData.append('listing[lat]', this.state.lat);
        formData.append('listing[lng]', this.state.lng);
        formData.append('listing[country]', this.state.country);
        formData.append('listing[photo]', this.state.photoFile);
        // formData.append('listing[photos]', this.state.photoFile);
        $.ajax({
            url: '/api/listings',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false,
        })
    }

    componentDidMount() {
        let initialLocation = { lat: 37.7758, lng: -122.435 } // this is SF

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            });
        }

        const mapOptions = {
            // replace lat and lng with this.props stuff
            // center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }


    render () {
        // const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <div className="ListCreate" >

                    <form onSubmit={this.handleSubmit} className="listform">
                        <label>Name
                            <input type="text" value={this.state.name} onChange={this.handleInput('name')}/>
                        </label>
                        <label>Cancellation Policy
                            <input type="text" onChange={this.handleInput('cancellation_policy')} />
                        </label>
                        <label>Capacity
                            <input type="number"  value={this.state.capacity} onChange={ this.handleInput('capacity')}/>
                        </label>
                        <label>Description
                            <input type="text" value={this.state.description} onChange={this.handleInput('description')}/>
                        </label>
                        <label>Min Nights
                            <input type="number"  value={this.state.minimum_nights} onChange={this.handleInput('minimum_nights')}/>
                        </label>
                        <label>On Arrival
                            <input type="text" value={this.state.on_arrival} onChange={this.handleInput('on_arrival')} />
                        </label>
                        <label>Price
                            <input type="number" min="0.01" step="0.01" value={this.state.price} onChange={this.handleInput('price')}/>
                        </label>

                        <div className="map" ref={map => this.mapNode = map}> </div>
                            {/* lat/lng? */}
                        {/* <label htmlFor="post-body">Body of Post</label> */}
                        {/* <input type="text"
                            id="post-body"
                            value={this.state.name}
                            onChange={this.handlepost} /> */}
                        <input type="file"
                            onChange={this.handleFile.bind(this)} 
                            multiple
                            />
                        <button>Make a new Listing!</button>
                    </form>


            </div>
        )
    }

}

export default ListingForm
