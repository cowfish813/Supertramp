import React from 'react';
import ListIndexItem from './list_index_item';
import SearchBar from '../../search/search_container';
import mapIndex from './list_map_index';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    render () {
        return (
            <div className= "list-index" >
                <SearchBar />
                <div>

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
