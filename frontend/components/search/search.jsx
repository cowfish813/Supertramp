import React from 'react';
import { withRouter } from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props)

    this.state = {

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        
    };

    handleSubmit(e) {
        e.preventDefault();

    };

    render () {

        return (
            <form className="searchWrapper searchIndex" onSubmit={this.handleSubmit}>
                <div className="superSearch">

                    <div className="searchBar">
                        <input className="search" type="search" placeholder="Search..." />
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
    }
};

export default Search;