import React from 'react'
import SessionForm from './session_form'
import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'



const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Signup"

})


const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm)