import React from 'react'
import SessionForm from './session_form'
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions/modal_actions'

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Login"
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>Signup</button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm)