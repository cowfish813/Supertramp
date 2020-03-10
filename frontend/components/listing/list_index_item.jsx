import React from 'react'
import {withRouter} from 'react-router-dom'

class IndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick - this.handleClick.bind(this)
    }

    handleClick() {
        const listId = this.props.listing.id
        this.props.history.push(`/listings/${listingId}`);
    }

    render() {
        return (
            <div className="stuff">
                    <h2 className="ultraFont">this is the stuff</h2>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default withRouter(IndexItem)