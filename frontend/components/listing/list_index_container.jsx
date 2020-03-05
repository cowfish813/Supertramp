import listIndex from './list_index'
import { connect } from 'react-redux'
import { fetchListings, fetchListing, createListing, updateListing, deleteListing } from '../../actions/listing_actions/listing_actions'
import React from 'react'


const mSTP = (state, ownProps) => ({
    listings: Object.values(state.entities.listings)
})

const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings())
})

export default connect(mSTP, mDTP)(listIndex)