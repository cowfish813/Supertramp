import React from 'react'
import SessionForm from './session_form'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../../actions/modal_actions/modal_actions'
import { signup, clearErrors, receiveErrors, login } from '../../actions/session_actions'
import { withRouter } from 'react-router-dom'







const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Signup",
    user: state.entities.user,
})


const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>Signup</button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    clearErrors: () => (dispatch(receiveErrors([]))),
    demoUser: (user) => dispatch(login(user)).then(() => closeModal()),
})

export default withRouter(connect(mSTP, mDTP)(SessionForm))