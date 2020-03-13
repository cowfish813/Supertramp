import { connect } from 'react-redux'
import { fetchListings, fetchListing, createListing, updateListing, deleteListing } from '../../actions/listing_actions/listing_actions'
import React from 'react'
import ListShow from './list_show'
import { withRouter } from 'react-router-dom'

const mSTP = (state, ownProps) => {
    debugger
    return ({
        currentUser: state.entities.users[state.session.currentUser],
        list: state.entities.listings[ownProps.match.params.listingsId]

    })
}

const mDTP = dispatch => ({
    fetchListing: (listing) => dispatch(fetchListing(listing)),

})

export default withRouter(connect(mSTP, mDTP)(ListShow))