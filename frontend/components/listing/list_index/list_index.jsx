import React from 'react';
import ListIndexItem from './list_index_item';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    // componentDidMount(){
    //     window.location.reload(false);
    // }

    render () {
        if (this.props.listings.length === 0) {
            return (
            <div className="list-index">
                <div className="no-result">Nothing matches this description...</div>
            </div>
            )
        }


        return (
            <div className= "list-index" >
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
