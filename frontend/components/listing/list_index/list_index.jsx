import React from 'react';
import ListIndexItem from './list_index_item';
import SearchBar from '../../search/search_container';
import mapIndex from './list_map_index_container';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    };


    componentDidMount() {
        this.props.fetchListings()
    }

    componentDidUpdate() {
        // this.props.fetchListings()
    }



    render () {

        if (!(this.props.listings.length)) {
            return (
            <div className="list-index">
                <div className="no-result">Nothing matches this description...</div>
            </div>
            )
        }


        return (
            <div className= "list-index" >
                {/* <SearchBar /> */}
                <div className="list_index_items">
                    {this.props.listings.map( listing => 
                        <ListIndexItem 
                        listing={listing}
                        key={listing.id}
                        />
                        )}
                </div>
            </div>
        )
    };
};

export default ListingIndex;
