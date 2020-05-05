import React from 'react';
import {withRouter} from 'react-router-dom';

class IndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        // const listId = this.props.listing.id
        this.props.history.push(`/listings/${listingId}`);
    }

    render() {
        return (
            <div className="index_container">
                    
            </div>
        )
    };
};

export default withRouter(IndexItem);