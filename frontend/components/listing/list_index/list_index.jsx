import React from 'react'
import ListIndexItem from './list_index_item'

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className= "list-index" >
                    {this.props.listings.map( listing => 
                        <ListIndexItem 
                        listing={listing}
                        key={listing.id}
                        />
                        )}

                    
            </div>
        )
    }
}

export default ListingIndex
