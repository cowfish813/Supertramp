import React from 'react';
import { withRouter } from 'react-router-dom';
import Autocomplete from "react-google-autocomplete";

// import PlacesAudtocomplete from 'react-places-autocomplete';


class Search extends React.Component {
    constructor(props) {
        super(props)

    this.state = {
        mapLocation: "",
        lat: "",
        lng:""
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
        // console.log(this.state)
        this.props.receiveLocation(this.state);
        // if (this.state.lat == "" || this.state.lng == "") {
        //     this.setState({
        //         lat: 37.8651,
        //         lng: 119.5383
        //     })
        // }
        this.props.history.push({
            pathname: `/search/${this.state.lat},${this.state.lng}`,
            state: this.state
        });
    }

    componentDidMount() {
        let input = document.getElementById('splash_search');
        let autocomplete = new google.maps.places.Autocomplete(input);

        let mapLocation;
        let that = this;

        //
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

    render () {

        return (
            <form className="searchWrapper searchIndex" onSubmit={this.handleSubmit}>
                <div className="superSearch">

                    <div className="searchBar">
                        <input 
                        id="splash_search" 
                        className="search" 
                        type="search" 
                        placeholder="Start Tramping!" 
                        value={this.state.mapLocation}
                        onChange={this.handleInput}
                        />
                    </div>
                    {/* <div className="datebox"> */}
                        {/* <div className="filterButton"> */}
                            {/* future modal */}
                            {/* <input className="date" type="date" /> */}
                        {/* </div> */}
                    {/* </div> */}

                    {/* <div className="dropdownMenu"> */}
                        {/* <select className="menuSelect">
                            {house.map((tent, i) =>
                                <option className="menuSelected" key={i} value={i}>{tent}</option>
                            )}
                        </select> */}
                    {/* </div> */}
                    <button className="searchButton">Search</button>
                </div>
            </form>
        ) 
    }
};

export default withRouter(Search);