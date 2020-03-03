import React from 'react'

class ListingIndex extends React.Component {
    componentDidMount() {
        this.props.fetchListings()
    }

    render () {
        return (
            <div>
                {/* {this.props.listings.map( listing => 
                    <li>{listing.name}</li>
                    )} */}
                    <li>{this.props.listings}</li>
            </div>
        )
    }
}

export default ListingIndex