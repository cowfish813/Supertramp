import React from 'react'
import { connect } from 'react-redux'
import { openModal, closeModal  } from '../../actions/modal_actions/modal_actions'
import Homepage from './homepage'
import { fetchListings, fetchRandomListings, fetchNearbyListings } from '../../actions/listing_actions/listing_actions'

const mSTP = state => ({
    errors: state.errors.session,
    user: state.entities.user,
    randomListings: state.entities.randomListings,
    // nearbyListings: state.entities.nearbyListings
})

const mDTP = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchListings: () => dispatch(fetchListings()),
    fetchRandomListings: (count) => dispatch(fetchRandomListings(count)),
    // fetchNearbyListings: filter => dispatch(fetchNearbyListings(filter))
})  

export default connect(mSTP, mDTP)(Homepage)