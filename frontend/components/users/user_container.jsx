import React from 'react'
import { connect } from 'react-redux'
import { login, clearErrors, receiveErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions/modal_actions'
import User from './user'
import { fetchListing, fetchListings  } from '../../actions/listing_actions/listing_actions'
import { requestUser } from '../../actions/user_actions'
import { withRouter } from 'react-router-dom'

const mSTP = (state, ownProps) => {

    return ({
        errors: state.errors.session,
        user: state.entities.users
    }) 
}

const mdtp = dispatch => ({
    requestUser: (user) => dispatch(requestUser(user))
})

export default withRouter(connect(mSTP, mdtp)(User))