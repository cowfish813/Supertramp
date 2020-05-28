import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { receiveLocation } from '../../actions/map_action';
import React from 'react';
import Autocomplete from "react-google-autocomplete";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class NavSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mapLocation: "",
            lat: "",
            lng: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            mapLocation: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveLocation(this.state);
        this.props.history.push({
            pathname: `/search/${this.state.lat},${this.state.lng}`,
            state: this.state
        });
    }

    componentDidMount() {
        let input = document.getElementById('nav-Search');
        let autocomplete = new google.maps.places.Autocomplete(input);

        let mapLocation;
        let that = this;
        autocomplete.addListener('place_changed', () => {
            let address = autocomplete.getPlace().formatted_address;
            let place = autocomplete.getPlace();

            let lat = place.geometry.location.lat();
            let lng = place.geometry.location.lng();
            mapLocation = address ? address : autocomplete.getPlace().name;
            that.setState({
                mapLocation: autocomplete.getPlace().name,
                lat: lat,
                lng: lng
            });
        });
    }

    render() {
        return (
            <form className="NavSearchContainer" onSubmit={this.handleSubmit}>
                {/* <div className=""> */}
                    <span className="nav-fa-search"><FontAwesomeIcon icon={faSearch} /></span>
                    <input type="search"
                    id="nav-Search"
                    className="navSearch"
                    value={this.state.mapLocation}
                    onChange={this.handleInput}
                    placeholder="Lets start with Yosemite Valley!"
                    />
                    <button type="submit" className="navSearchBtn"></button>
                {/* </div> */}
            </form>
        )
    }

}

const mDTP = dispatch => ({
    receiveLocation: (location) => dispatch(receiveLocation(location))
});

export default withRouter(connect(null, mDTP)(NavSearch));