import React from 'react';
import { withRouter } from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props)

    this.state = {
        location: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    };

    handleInput(e) {
        this.setState({
            location: e.target.value
        })
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveLocation(this.state);
        this.props.history.push('/listings');
    };

    componentDidMount() {
        let input = document.getElementById('splash_search');
        // let autocomplete = new google.maps.places.Autocomplete(input);

        // let location;
        // let that = this;

        // autocomplete.addListener('place_changed', () => {
        //     let address = autocomplete.getPlace().formatted_address;
        //     location = address ? address : autocomplete.getPlace().name
        //     that.setState({
        //         location: location
        //     })
        // });
    };

    render () {

        return (
            <form className="searchWrapper searchIndex" onSubmit={this.handleSubmit}>
                <div className="superSearch">

                    <div className="searchBar">
                        <input 
                        id="splash_search" 
                        className="search" 
                        type="search" 
                        placeholder="Search..." 
                        value={this.state.location}
                        onChange={this.handleInput}
                        />
                    </div>
                    <div className="datebox">
                        <div className="filterButton">
                            {/* future modal */}
                            {/* <input className="date" type="date" /> */}
                        </div>
                    </div>

                    <div className="dropdownMenu">
                        {/* <select className="menuSelect">
                            {house.map((tent, i) =>
                                <option className="menuSelected" key={i} value={i}>{tent}</option>
                            )}
                        </select> */}
                    </div>
                    <button className="searchButton">Search</button>
                </div>
            </form>
        ) 
    };
};

export default Search;