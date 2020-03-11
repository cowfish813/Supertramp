import { connect } from 'react-redux'
import { fetchListings, fetchListing, createListing, updateListing, deleteListing } from '../../actions/listing_actions/listing_actions'
import React from 'react'
import ListForm from './listing_form'


const mSTP = (state, ownProps) => {
    // debugger
    return ({
        currentUser: state.entities.users[state.session.currentUser],
        listing: state.entities.listings[ownProps.match.params.id]
    })
}

const mDTP = dispatch => ({
    fetchListing: (listing) => dispatch(fetchListing(listing)),

})

export default connect(mSTP, mDTP)(ListForm)