import React from 'react'
import ListIndexItem from './list_index_item'
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
                    {this.props.listings.map( listing => 
                        <ListIndexItem 
                        listing={listing}
                        key={listing.id}
                        />
                        )}

                </ul>
                    
            </div>
        )
    }
}

export default ListingIndex
