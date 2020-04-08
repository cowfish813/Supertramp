import React from 'react'
import { connect } from 'react-redux'
import { login, clearErrors, receiveErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions/modal_actions'
import User from './user'
import { requestUser } from '../../actions/user_actions'
import { withRouter } from 'react-router-dom'
import {fetchBooking, deleteBooking} from '../../actions/booking_actions/booking_action'

const mSTP = (state, ownProps) => {

    return ({
        errors: state.errors.session,
        user: state.entities.users,//[state.session.id]
        bookings: state.entities.bookings

    }) 
}

const mdtp = dispatch => ({
    requestUser: (user) => dispatch(requestUser(user)),
    fetchBooking: (userId) => dispatch(fetchBooking(userId)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
})

export default withRouter(connect(mSTP, mdtp)(User))