import React from 'react'
import SessionForm from './session_form'
import { connect } from 'react-redux'
import { login, clearErrors, receiveErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions/modal_actions'

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    user: state.entities.user,
    formType: "Login",
})



const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('Signup'))}>Signup</button>
    ),
    closeModal: () => dispatch(closeModal()),
    demoUser: (user) => dispatch(login(user)).then( () => closeModal()),
    clearErrors: ()=> (dispatch(receiveErrors([]))),
    openModal: (modal) => dispatch(openModal(modal)),
    // handleDemoUser: () => dispatch(login(demo)).then( () => dispatch(closeModal()))
    
})

export default connect(mSTP, mDTP)(SessionForm)