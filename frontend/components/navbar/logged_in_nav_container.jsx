import React from 'react'
import { connect } from 'react-redux'
import { closeModal, openModal } from '../../actions/modal_actions/modal_actions'
import loggedInBar from './loggedin_nav'
import { logout } from '../../actions/session_actions'

const mSTP = state => ({
    formType: 'login',
    // currentUser: state.entities.user,
    currentUser: state.entities.users[state.session.id]
    //**enable this when ready but need logout button too
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(loggedInBar)