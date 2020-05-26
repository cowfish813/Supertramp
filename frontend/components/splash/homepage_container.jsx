import React from 'react'
import { connect } from 'react-redux'
import { openModal, closeModal  } from '../../actions/modal_actions/modal_actions'
import Homepage from './homepage'
import {fetchListings, fetchListing} from '../../actions/listing_actions/listing_actions'

const mSTP = state => ({
    errors: state.errors.session,
    user: state.entities.user
})

const mDTP = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchListings: () => dispatch(fetchListings())
})

export default connect(mSTP, mDTP)(Homepage)