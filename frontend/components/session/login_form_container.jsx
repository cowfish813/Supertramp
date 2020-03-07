import React from 'react'
import SessionForm from './session_form'
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions/modal_actions'
import errors from '../../actions/session_actions'

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    user: state.entities.user,
    formType: "Login"
})

const demo = {
    username: "demo",
    password: "123456",

}

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>Signup</button>
    ),
    closeModal: () => dispatch(closeModal()),
    demoUser: (demo) => dispatch(login(demo)).then( () => closeModal())
    
    
})

export default connect(mSTP, mDTP)(SessionForm)