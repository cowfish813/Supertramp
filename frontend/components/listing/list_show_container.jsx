import { connect } from 'react-redux'
import { fetchListings, fetchListing, createListing, updateListing, deleteListing } from '../../actions/listing_actions/listing_actions'
import React from 'react'
import ListShow from './list_show'


const mSTP = (state, ownProps) => {
    // debugger
    return ({
        currentUser: state.entities.users[state.session.currentUser],
        listing: state.entities.listings
    })
}

const mDTP = dispatch => ({
    fetchListing: (listing) => dispatch(fetchListing(listing)),

})

export default connect(mSTP, mDTP)(ListShow)