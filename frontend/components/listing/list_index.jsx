import React from 'react'

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchListings()
    }

    render () {
        return (
            <div>
                <ul>
                    {this.props.listings.map( listing => listing.name)}

                </ul>
                    
            </div>
        )
    }
}

export default ListingIndex
